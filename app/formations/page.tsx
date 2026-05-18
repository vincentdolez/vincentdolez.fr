import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Accordion } from "@/components/ui/Accordion";
import { CTASection } from "@/components/blocks/CTASection";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Formations — Claude Code & génération spec-driven",
  description:
    "Formez vos équipes dev à Claude Code et à la génération de code pilotée par les specs. Finançable OPCO.",
  path: "/formations",
});

const faqItems = [
  {
    question: "On n'a jamais utilisé d'IA pour coder.",
    answer:
      "C'est précisément le bon moment. La formation part de zéro et construit les réflexes progressivement. Pas de prérequis IA.",
  },
  {
    question: "Ça marche avec notre stack ?",
    answer:
      "Claude Code fonctionne avec toutes les stacks. La formation s'adapte à votre environnement réel — on travaille sur votre code, pas sur des exercices abstraits.",
  },
  {
    question: "Combien de temps pour voir des résultats ?",
    answer:
      "Dès le premier jour. Les devs repartent avec des prompts, des workflows, et des réflexes qu'ils peuvent appliquer immédiatement.",
  },
  {
    question: "C'est finançable ?",
    answer:
      "Oui. Organisme de formation déclaré. Toutes les formations sont finançables via votre budget OPCO.",
  },
];

export default function FormationsPage() {
  return (
    <>
      {/* Hero */}
      <Section variant="white" className="pt-32 pb-12">
        <Reveal>
          <h1 className="max-w-3xl font-heading text-4xl leading-tight tracking-display md:text-5xl">
            Vos devs livrent{" "}
            <span className="accent-italic gold-glow">10× plus vite.</span>
            <br />
            Vous gardez le contrôle.
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-8 max-w-[var(--width-content)] text-xl leading-relaxed text-muted">
            L&apos;IA ne remplace pas vos développeurs. Elle les rend redoutables.
            Formation pratique, sur votre code, résultats dès le premier jour.
          </p>
        </Reveal>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Formation 1 — Claude Code */}
      <Section variant="surface">
        <div className="grid gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <Reveal>
              <div className="flex items-baseline gap-4">
                <span className="font-heading text-sm font-bold uppercase tracking-wider text-muted">01</span>
                <h2 className="font-heading text-2xl font-bold tracking-display text-text">
                  Claude Code pour équipes dev
                </h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-text">
                Votre équipe apprend à utiliser l&apos;IA pour maintenir et faire
                évoluer son propre code. Pas de la théorie — du terrain, sur
                votre codebase.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-6 space-y-3 text-text">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">→</span>
                  <span>Setup et configuration Claude Code sur votre environnement</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">→</span>
                  <span>Workflows quotidiens : debug, refactor, test generation, code review</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">→</span>
                  <span>Rédaction de specs qui génèrent du code production-ready</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">→</span>
                  <span>Bonnes pratiques et pièges à éviter</span>
                </li>
              </ul>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-accent/30 bg-accent/5 px-8 py-6 text-center">
              <span className="text-sm font-medium text-muted">Durée</span>
              <span className="font-heading text-2xl font-bold text-accent">1–2 jours</span>
              <span className="mt-2 rounded-full border border-accent/30 px-3 py-1 text-xs font-medium text-accent">
                Finançable OPCO
              </span>
            </div>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Formation 2 — Spec-driven */}
      <Section variant="white">
        <div className="grid gap-12 md:grid-cols-[1fr_auto]">
          <div>
            <Reveal>
              <div className="flex items-baseline gap-4">
                <span className="font-heading text-sm font-bold uppercase tracking-wider text-muted">02</span>
                <h2 className="font-heading text-2xl font-bold tracking-display text-text">
                  Génération de code spec-driven
                </h2>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-text">
                Écrire des spécifications qui deviennent du code. Le modèle
                métier pilote la génération — pas l&apos;inverse.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-6 space-y-3 text-text">
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">→</span>
                  <span>Structurer des specs pour maximiser la qualité du code généré</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">→</span>
                  <span>Architecture DDD × IA : bounded contexts, agrégats, domain events</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">→</span>
                  <span>Pipeline de génération : spec → code → test → review → merge</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-1 text-accent">→</span>
                  <span>La doc c&apos;est le code — maintenir la congruence dans le temps</span>
                </li>
              </ul>
            </Reveal>
          </div>
          <Reveal delay={300}>
            <div className="flex flex-col items-center gap-2 rounded-lg border border-border bg-surface-elevated px-8 py-6 text-center">
              <span className="text-sm font-medium text-muted">Durée</span>
              <span className="font-heading text-2xl font-bold text-text">1 jour</span>
              <span className="mt-2 rounded-full border border-accent/30 px-3 py-1 text-xs font-medium text-accent">
                Finançable OPCO
              </span>
            </div>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* CTA intermédiaire */}
      <Section variant="surface">
        <Reveal>
          <div className="text-center">
            <p className="font-heading text-xl tracking-display text-text">
              Formation sur mesure ? On en parle.
            </p>
            <div className="mt-6">
              <Button href="/contact">Prendre rendez-vous</Button>
            </div>
          </div>
        </Reveal>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* FAQ */}
      <Section variant="white">
        <Reveal>
          <h2 className="gradient-text mb-8 font-heading text-3xl leading-tight tracking-display">
            Questions fréquentes
          </h2>
        </Reveal>
        <div className="mx-auto max-w-2xl">
          <Accordion items={faqItems} />
        </div>
      </Section>

      {/* Final CTA */}
      <CTASection
        text="Le plus simple : un échange de 30 minutes."
        primaryCTA={{ label: "Prendre rendez-vous", href: "/contact" }}
        secondaryCTA={{ label: "Voir Legacy Rescue", href: "/legacy-rescue" }}
      />
    </>
  );
}
