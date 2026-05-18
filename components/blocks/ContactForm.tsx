"use client";

import { useState, useRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Button } from "@/components/ui/Button";

type FormState = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full rounded-lg border border-[color:var(--color-border)] bg-[color:var(--color-bg)] px-4 pt-5 pb-2 text-sm text-[color:var(--color-text)] outline-none transition-all duration-[var(--duration-default)] placeholder:text-transparent focus:border-[color:var(--color-vd-moss)] focus:ring-2 focus:ring-[color:var(--color-vd-acid-soft)]";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [captchaReady, setCaptchaReady] = useState(false);
  const turnstileToken = useRef<string>("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          email: data.get("email"),
          company: data.get("company"),
          message: data.get("message"),
          turnstileToken: turnstileToken.current,
        }),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || "Une erreur est survenue.");
      }

      setState("success");
      form.reset();
    } catch (err) {
      setErrorMessage(
        err instanceof Error ? err.message : "Une erreur est survenue."
      );
      setState("error");
    }
  }

  if (state === "success") {
    return (
      <div className="rounded-2xl border border-[color:var(--color-vd-moss)]/40 bg-[color:var(--color-vd-bone)] p-6 text-center">
        <p className="font-heading text-lg font-semibold text-[color:var(--color-text-strong)]">
          Message envoyé.
        </p>
        <p className="mt-2 text-sm text-[color:var(--color-muted)]">
          Je reviens vers vous sous 48 heures.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="floating-field">
        <input
          type="text"
          id="name"
          name="name"
          required
          placeholder="Nom"
          className={inputClasses}
        />
        <label htmlFor="name">Nom</label>
      </div>
      <div className="floating-field">
        <input
          type="email"
          id="email"
          name="email"
          required
          placeholder="Email"
          className={inputClasses}
        />
        <label htmlFor="email">Email</label>
      </div>
      <div className="floating-field">
        <input
          type="text"
          id="company"
          name="company"
          placeholder="Entreprise"
          className={inputClasses}
        />
        <label htmlFor="company">Entreprise</label>
      </div>
      <div className="floating-field">
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={4}
          placeholder="Votre besoin, en deux phrases"
          className={inputClasses}
        />
        <label htmlFor="message">Votre besoin, en deux phrases</label>
      </div>

      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "1x00000000000000000000AA"}
        onSuccess={(token) => {
          turnstileToken.current = token;
          setCaptchaReady(true);
        }}
        onExpire={() => setCaptchaReady(false)}
        onError={() => setCaptchaReady(false)}
        options={{ theme: "light" }}
      />

      {state === "error" && (
        <p className="text-sm text-[color:var(--color-error)]">{errorMessage}</p>
      )}

      <Button
        type="submit"
        disabled={!captchaReady || state === "sending"}
        className="w-full sm:w-auto"
      >
        {state === "sending" ? "Envoi..." : "Envoyer"}
      </Button>
    </form>
  );
}
