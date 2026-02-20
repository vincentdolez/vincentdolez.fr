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

  return resend.emails.send({
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
  });
}
