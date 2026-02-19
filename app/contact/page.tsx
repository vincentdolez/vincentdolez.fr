import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { ContactForm } from "@/components/blocks/ContactForm";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  description: "Échangeons sur votre situation. 30 minutes, sans engagement.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Section variant="white" className="pt-32">
        <h1 className="gradient-text font-serif text-4xl leading-tight tracking-display">
          Parlons de votre situation.
        </h1>
        <p className="mt-3 text-xl text-muted">
          30 minutes pour comprendre vos freins et voir si je peux aider.
        </p>
      </Section>

      <Section variant="white" className="pt-0">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <ContactForm />
          </div>

          <div>
            <p className="mb-4 text-sm font-medium text-text">
              Ou si vous préférez :
            </p>
            <ul className="space-y-3 text-sm text-muted">
              <li>
                <span className="font-medium text-text">Email :</span>{" "}
                <a
                  href="mailto:vincent@vincentdolez.fr"
                  className="text-accent transition-colors duration-[var(--duration-default)] hover:text-accent/80"
                >
                  vincent@vincentdolez.fr
                </a>
              </li>
              <li>
                <span className="font-medium text-text">LinkedIn :</span>{" "}
                <a
                  href="https://linkedin.com/in/vincentdolez"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent transition-colors duration-[var(--duration-default)] hover:text-accent/80"
                >
                  linkedin.com/in/vincentdolez
                </a>
              </li>
              <li>
                <span className="font-medium text-text">Calendly :</span>{" "}
                <a
                  href="#"
                  className="text-accent transition-colors duration-[var(--duration-default)] hover:text-accent/80"
                >
                  Réserver un créneau directement
                </a>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      <Section variant="surface">
        <p className="text-center text-muted">
          Pas de pitch commercial. Un vrai échange sur vos enjeux. Si je ne suis
          pas la bonne personne, je vous le dirai.
        </p>
      </Section>
    </>
  );
}
