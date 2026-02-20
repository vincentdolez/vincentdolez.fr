"use client";

import { useState, useRef } from "react";
import { Turnstile } from "@marsidev/react-turnstile";
import { Button } from "@/components/ui/Button";

type FormState = "idle" | "sending" | "success" | "error";

const inputClasses =
  "w-full rounded-md border border-border bg-bg px-4 pt-5 pb-2 text-sm text-text outline-none transition-all duration-[var(--duration-default)] placeholder:text-transparent focus:border-accent focus:ring-1 focus:ring-accent/20";

export function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [errorMessage, setErrorMessage] = useState("");
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
      <div className="rounded-lg border border-success/30 bg-success/5 p-6 text-center">
        <p className="font-medium text-success">Message envoyé.</p>
        <p className="mt-2 text-sm text-muted">
          Je vous réponds sous 48 heures.
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
          placeholder="Message"
          className={inputClasses}
        />
        <label htmlFor="message">Message</label>
      </div>

      <Turnstile
        siteKey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY ?? "1x00000000000000000000AA"}
        onSuccess={(token) => {
          turnstileToken.current = token;
        }}
        options={{ theme: "light" }}
      />

      {state === "error" && (
        <p className="text-sm text-error">{errorMessage}</p>
      )}

      <Button
        type="submit"
        disabled={state === "sending"}
        className="w-full sm:w-auto"
      >
        {state === "sending" ? "Envoi..." : "Envoyer"}
      </Button>
    </form>
  );
}
