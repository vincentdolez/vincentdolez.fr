import { Resend } from "resend";

function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured");
  }
  return new Resend(apiKey);
}

type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export async function sendContactEmail(payload: ContactPayload) {
  const resend = getResendClient();
  const { name, email, company, message } = payload;

  const to = process.env.CONTACT_EMAIL;
  if (!to) throw new Error("CONTACT_EMAIL is not configured");

  const [notification, confirmation] = await Promise.all([
    resend.emails.send({
      from: "Site vincentdolez.fr <noreply@vincentdolez.fr>",
      to,
      subject: `Contact site — ${name}${company ? ` (${company})` : ""}`,
      replyTo: email,
      text: [
        `Nom : ${name}`,
        `Email : ${email}`,
        company ? `Entreprise : ${company}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n"),
    }),
    resend.emails.send({
      from: "Vincent Dolez <noreply@vincentdolez.fr>",
      to: email,
      subject: "Votre message a bien été reçu",
      text: [
        `Bonjour ${name},`,
        "",
        "Merci pour votre message. Je l'ai bien reçu et vous répondrai sous 48 heures.",
        "",
        "En attendant, vous pouvez me retrouver sur :",
        "— LinkedIn : https://linkedin.com/in/vincentdolez",
        "— Site : https://vincentdolez.fr",
        "",
        "À très vite,",
        "Vincent Dolez",
        "AI Operating Partner",
      ].join("\n"),
    }),
  ]);

  if (notification.error) throw new Error(notification.error.message);
  // confirmation failure is non-blocking — log but don't throw
  if (confirmation.error) console.error("Confirmation email error:", confirmation.error.message);
}
