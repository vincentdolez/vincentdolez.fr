import { NextResponse } from "next/server";
import { sendContactEmail } from "@/lib/send-email";

// Basic rate limiting: 1 request per minute per IP
const rateLimitMap = new Map<string, number>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const lastRequest = rateLimitMap.get(ip);

  if (lastRequest && now - lastRequest < 60_000) {
    return true;
  }

  rateLimitMap.set(ip, now);

  // Clean old entries every 100 requests
  if (rateLimitMap.size > 100) {
    const cutoff = now - 60_000;
    for (const [key, time] of rateLimitMap) {
      if (time < cutoff) rateLimitMap.delete(key);
    }
  }

  return false;
}

export async function POST(request: Request) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Trop de requêtes. Réessayez dans une minute." },
      { status: 429 }
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { error: "Corps de requête invalide." },
      { status: 400 }
    );
  }

  const { name, email, company, message, turnstileToken } = body as {
    name?: string;
    email?: string;
    company?: string;
    message?: string;
    turnstileToken?: string;
  };

  // Turnstile verification
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (secretKey) {
    if (!turnstileToken) {
      return NextResponse.json(
        { error: "Vérification de sécurité manquante." },
        { status: 400 }
      );
    }
    const verifyRes = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ secret: secretKey, response: turnstileToken }),
      }
    );
    const verifyData = (await verifyRes.json()) as { success: boolean };
    if (!verifyData.success) {
      return NextResponse.json(
        { error: "Vérification de sécurité échouée. Réessayez." },
        { status: 400 }
      );
    }
  }

  // Validation
  if (!name || typeof name !== "string" || name.trim().length === 0) {
    return NextResponse.json(
      { error: "Le nom est requis." },
      { status: 400 }
    );
  }

  if (!email || typeof email !== "string" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Email invalide." },
      { status: 400 }
    );
  }

  if (!message || typeof message !== "string" || message.trim().length < 10) {
    return NextResponse.json(
      { error: "Le message doit contenir au moins 10 caractères." },
      { status: 400 }
    );
  }

  try {
    await sendContactEmail({
      name: name.trim(),
      email: email.trim(),
      company: typeof company === "string" ? company.trim() : "",
      message: message.trim(),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact email error:", err);
    return NextResponse.json(
      { error: "Erreur lors de l'envoi. Réessayez ou contactez-moi directement." },
      { status: 500 }
    );
  }
}
