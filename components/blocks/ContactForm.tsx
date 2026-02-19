"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type FormState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
      <div className="rounded-lg border border-success/30 bg-success/5 p-6 text-center">
        <p className="font-medium text-success">Message envoyé.</p>
        <p className="mt-2 text-sm text-muted">
          Je vous réponds sous 48 heures.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="name" className="mb-1 block text-sm font-medium">
          Nom
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full rounded-md border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none transition-colors duration-[var(--duration-default)] placeholder:text-muted/50 focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-1 block text-sm font-medium">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full rounded-md border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none transition-colors duration-[var(--duration-default)] placeholder:text-muted/50 focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="company" className="mb-1 block text-sm font-medium">
          Entreprise
        </label>
        <input
          type="text"
          id="company"
          name="company"
          className="w-full rounded-md border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none transition-colors duration-[var(--duration-default)] placeholder:text-muted/50 focus:border-accent"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={4}
          placeholder="Décrivez brièvement votre situation ou vos questions."
          className="w-full rounded-md border border-border bg-bg px-4 py-2.5 text-sm text-text outline-none transition-colors duration-[var(--duration-default)] placeholder:text-muted/50 focus:border-accent"
        />
      </div>

      {state === "error" && (
        <p className="text-sm text-error">{errorMessage}</p>
      )}

      <Button type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Envoi..." : "Envoyer"}
      </Button>
    </form>
  );
}
