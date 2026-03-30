import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/blocks/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "IA Act — Ce que ça change pour votre PME",
  description:
    "L'IA Act est en vigueur. Vos équipes utilisent l'IA ? Vous avez des obligations. Sanctions jusqu'à 15 M€ en août 2026. Comprendre et agir.",
  path: "/ia-act",
});

const iaActJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "IA Act — Ce que ça change pour votre PME",
  description:
    "Vulgarisation de l'IA Act pour dirigeants de PME. Obligations, risques, sanctions et solutions concrètes.",
  url: "https://vincentdolez.fr/ia-act",
  author: {
    "@type": "Person",
    name: "Vincent Dolez",
    url: "https://vincentdolez.fr",
  },
};

export default function IAActPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(iaActJsonLd) }}
      />

      {/* Hero */}
      <Section variant="white" className="pt-32">
        <h1 className="gradient-text max-w-3xl font-heading text-4xl leading-tight tracking-display">
          L&apos;IA Act est en vigueur.
          <br />
          Ce que ça change pour votre PME.
        </h1>
        <p className="mt-4 max-w-xl text-xl text-muted text-balance">
          Vos équipes utilisent ChatGPT, Copilot ou un outil IA ? Savez-vous si
          votre entreprise est concernée ? S&apos;il y a une législation,
          c&apos;est qu&apos;il y a un risque, et une veille à assurer.
        </p>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 1 — Le contexte */}
      <Section variant="surface">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Ce qui a changé en février 2025
          </h2>
        </Reveal>
        <div className="mt-8 max-w-[var(--width-content)] space-y-4 leading-normal text-text">
          <Reveal delay={100}>
            <p>
              L&apos;article 4 de l&apos;IA Act impose une{" "}
              <strong>obligation de compétence IA</strong> (AI literacy) à toute
              entreprise qui déploie un système d&apos;IA. En clair : vos
              équipes doivent comprendre les outils IA qu&apos;elles utilisent :
              leurs capacités, leurs limites, leurs risques.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Ce n&apos;est pas un conseil. C&apos;est une obligation de moyens,
              en vigueur depuis le 2 février 2025. Largement ignorée par les
              PME.
            </p>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 2 — Les 3 niveaux de risque */}
      <Section variant="white">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Votre risque dépend de l&apos;usage, pas de l&apos;outil.
          </h2>
        </Reveal>
        <p className="mt-4 max-w-[var(--width-content)] text-muted">
          Un même outil (ChatGPT, un LLM interne) peut être anodin ou à haut
          risque selon comment vous l&apos;utilisez.
        </p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Reveal delay={100}>
            <div className="rounded-lg border border-border p-6">
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-success" />
                <h3 className="font-heading text-xl tracking-display text-text">
                  Risque minimal
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted">
                Rédaction d&apos;emails, résumés de réunion, brainstorming.
                Obligation : AI literacy (art. 4).
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-lg border border-warning/40 p-6">
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-warning" />
                <h3 className="font-heading text-xl tracking-display text-text">
                  Risque élevé
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted">
                Scoring de candidats, évaluation de solvabilité, triage de
                dossiers. Annexe III de l&apos;IA Act. Sanctions en août 2026.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="rounded-lg border border-error/40 p-6">
              <div className="flex items-center gap-2">
                <span className="inline-block h-3 w-3 rounded-full bg-error" />
                <h3 className="font-heading text-xl tracking-display text-text">
                  Interdit
                </h3>
              </div>
              <p className="mt-3 text-sm text-muted">
                Manipulation comportementale, notation sociale, surveillance
                biométrique en temps réel. Interdit depuis février 2025.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 3 — La deadline */}
      <Section variant="surface">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Août 2026 : le cadre se durcit.
          </h2>
        </Reveal>
        <div className="mt-8 max-w-[var(--width-content)] space-y-4 leading-normal text-text">
          <Reveal delay={100}>
            <p>
              Les obligations de conformité pour les usages à risque entrent en
              vigueur. Sanctions jusqu&apos;à{" "}
              <strong>15 millions d&apos;euros</strong> ou{" "}
              <strong>3% du chiffre d&apos;affaires</strong> mondial. Mais le
              vrai sujet n&apos;est pas l&apos;amende.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Le vrai sujet, c&apos;est de savoir si vous êtes concerné. Et
              aujourd&apos;hui, la plupart des dirigeants ne le savent pas. Quels
              outils IA sont utilisés dans votre entreprise ? Comment ? Avec
              quelles données ? Si vous ne pouvez pas répondre, vous avez besoin
              de clarté.
            </p>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 4 — Ce que je propose */}
      <Section variant="white">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Trois étages pour être en règle.
          </h2>
        </Reveal>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          <Reveal delay={100}>
            <div className="rounded-lg border border-border p-6">
              <span className="font-mono text-xs text-muted">01</span>
              <h3 className="mt-2 font-heading text-xl tracking-display text-text">
                Formation
              </h3>
              <p className="mt-3 text-sm text-muted">
                1 jour : maîtrise des outils IA + conformité réglementaire.
                Finançable OPCO. Vos équipes comprennent ce qu&apos;elles
                utilisent.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-lg border border-border p-6">
              <span className="font-mono text-xs text-muted">02</span>
              <h3 className="mt-2 font-heading text-xl tracking-display text-text">
                Diagnostic conformité
              </h3>
              <p className="mt-3 text-sm text-muted">
                Cartographie de vos usages IA et de leur niveau de risque
                (Annexe III). Vous savez où vous en êtes.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="rounded-lg border border-border p-6">
              <span className="font-mono text-xs text-muted">03</span>
              <h3 className="mt-2 font-heading text-xl tracking-display text-text">
                Mise en conformité
              </h3>
              <p className="mt-3 text-sm text-muted">
                Gouvernance IA, documentation, registre des usages. Vous êtes
                prêts pour un contrôle.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        text="Un échange de 30 minutes pour faire le point sur vos obligations."
        primaryCTA={{ label: "Prendre rendez-vous", href: "/contact" }}
        secondaryCTA={{ label: "Voir toutes les offres", href: "/offres" }}
      />
    </>
  );
}
