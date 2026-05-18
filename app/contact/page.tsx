import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/blocks/ContactForm";
import { EmailLink } from "@/components/ui/EmailLink";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Échangeons sur votre situation. 30 minutes, sans engagement.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Section variant="white" className="pt-32 pb-12">
        <span className="eyebrow mb-6">Contact</span>
        <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.0] tracking-[-0.04em] text-[color:var(--color-text-strong)] [font-variation-settings:'opsz'_96]">
          Le plus simple : un échange de <em>30 minutes</em>.
        </h1>
        <p className="mt-6 max-w-2xl text-xl leading-[1.6] text-[color:var(--color-text)]">
          Pour comprendre vos freins et voir si je peux aider. Pas de pitch
          commercial. Si je ne suis pas la bonne personne, je vous le dirai.
        </p>
      </Section>

      <Section variant="white" className="pt-0">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8">
            <ContactForm />
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-[0.12em] text-[color:var(--color-vd-moss)]">
              Ou si vous préférez
            </p>
            <ul className="mt-5 space-y-4 text-[15px] leading-[1.6] text-[color:var(--color-text)]">
              <li>
                <span className="font-medium text-[color:var(--color-text-strong)]">Email :</span>{" "}
                <EmailLink
                  showAddress
                  className="link-underline text-[color:var(--color-vd-moss)]"
                />
              </li>
              <li>
                <span className="font-medium text-[color:var(--color-text-strong)]">LinkedIn :</span>{" "}
                <a
                  href="https://www.linkedin.com/in/vincentdolez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[color:var(--color-vd-moss)]"
                >
                  linkedin.com/in/vincentdolez
                </a>
              </li>
              <li>
                <span className="font-medium text-[color:var(--color-text-strong)]">Rendez-vous :</span>{" "}
                <a
                  href="https://calendar.app.google/7oruDED4KzKBwUUv7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-[color:var(--color-vd-moss)]"
                >
                  Réserver un créneau directement
                </a>
              </li>
              <li>
                <span className="font-medium text-[color:var(--color-text-strong)]">Basé à :</span>{" "}
                Vannes, Morbihan
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
