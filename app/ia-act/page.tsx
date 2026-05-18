import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
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
      <section className="hero-dark relative px-6 pt-32 pb-20 md:pt-40">
        <div className="hero-leaf" aria-hidden="true" />
        <div className="hero-orbit" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-[var(--width-wide)]">
          <div className="max-w-3xl">
            <span className="eyebrow mb-6">IA Act · 2025-2026</span>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.0] tracking-[-0.04em] text-[color:var(--color-text-strong)] [font-variation-settings:'opsz'_96]">
              L&apos;IA Act est en vigueur.
              <br />
              <em>Ce que ça change pour vous.</em>
            </h1>
            <p className="mt-8 max-w-xl text-xl leading-[1.6] text-[color:var(--color-text)]">
              Vos équipes utilisent ChatGPT, Copilot ou un outil IA ? Savez-vous si
              votre entreprise est concernée ? S&apos;il y a une législation,
              c&apos;est qu&apos;il y a un risque, et une veille à assurer.
            </p>
            <div className="mt-10">
              <Button href="/contact">Demander un diagnostic gratuit</Button>
            </div>
          </div>
        </div>
      </section>

      <hr className="divider-rule mx-auto max-w-2xl" />

      {/* Section 1 — Le contexte */}
      <Section variant="surface" maxWidth="content">
        <Reveal>
          <span className="eyebrow mb-4">Contexte</span>
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            Ce qui a changé en <em>février 2025</em>.
          </h2>
        </Reveal>
        <div className="mt-8 space-y-4 leading-normal text-[color:var(--color-text)]">
          <Reveal delay={100}>
            <p>
              L&apos;article 4 de l&apos;IA Act impose une{" "}
              <strong>obligation de compétence IA</strong> (AI literacy) à toute
              entreprise qui déploie un système d&apos;IA. En clair : vos
              équipes doivent comprendre les outils IA qu&apos;elles utilisent —
              leurs capacités, leurs limites, leurs risques.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Ce n&apos;est pas un conseil. C&apos;est une obligation de moyens,
              en vigueur depuis le 2 février 2025. Largement ignorée par les PME.
            </p>
          </Reveal>
        </div>
      </Section>

      <hr className="divider-rule mx-auto max-w-2xl" />

      {/* Section 2 — Les 3 niveaux de risque */}
      <Section variant="white">
        <Reveal>
          <span className="eyebrow mb-4">Niveaux de risque</span>
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            Votre risque dépend de l&apos;<em>usage</em>, pas de l&apos;outil.
          </h2>
        </Reveal>
        <p className="mt-4 max-w-2xl text-[color:var(--color-muted)]">
          Un même outil (ChatGPT, un LLM interne) peut être anodin ou à haut
          risque selon comment vous l&apos;utilisez.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-7">
              <div className="flex items-center gap-2.5">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--color-vd-moss)]" />
                <h3 className="font-heading text-xl font-semibold tracking-tight text-[color:var(--color-text-strong)]">
                  Risque minimal
                </h3>
              </div>
              <p className="mt-3 text-[15px] leading-[1.6] text-[color:var(--color-text)]">
                Rédaction d&apos;emails, résumés de réunion, brainstorming.
                Obligation : AI literacy (art. 4).
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="h-full rounded-2xl border border-[color:var(--color-warning)]/40 bg-[color:var(--color-surface)] p-7">
              <div className="flex items-center gap-2.5">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--color-warning)]" />
                <h3 className="font-heading text-xl font-semibold tracking-tight text-[color:var(--color-text-strong)]">
                  Risque élevé
                </h3>
              </div>
              <p className="mt-3 text-[15px] leading-[1.6] text-[color:var(--color-text)]">
                Scoring de candidats, évaluation de solvabilité, triage de
                dossiers. Annexe III. Sanctions en août 2026.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="h-full rounded-2xl border border-[color:var(--color-error)]/40 bg-[color:var(--color-surface)] p-7">
              <div className="flex items-center gap-2.5">
                <span className="inline-block h-2.5 w-2.5 rounded-full bg-[color:var(--color-error)]" />
                <h3 className="font-heading text-xl font-semibold tracking-tight text-[color:var(--color-text-strong)]">
                  Interdit
                </h3>
              </div>
              <p className="mt-3 text-[15px] leading-[1.6] text-[color:var(--color-text)]">
                Manipulation comportementale, notation sociale, surveillance
                biométrique en temps réel. Interdit depuis février 2025.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <hr className="divider-rule mx-auto max-w-2xl" />

      {/* Section 3 — La deadline */}
      <Section variant="surface" maxWidth="content">
        <Reveal>
          <span className="eyebrow mb-4">Échéance</span>
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            Août 2026 : le cadre se <em>durcit</em>.
          </h2>
        </Reveal>
        <div className="mt-8 space-y-4 leading-normal text-[color:var(--color-text)]">
          <Reveal delay={100}>
            <p>
              Les obligations de conformité pour les usages à risque entrent en
              vigueur. Sanctions jusqu&apos;à{" "}
              <strong>15 millions d&apos;euros</strong> ou{" "}
              <strong>3 % du chiffre d&apos;affaires</strong> mondial. Le vrai
              sujet n&apos;est pas l&apos;amende.
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

      <hr className="divider-rule mx-auto max-w-2xl" />

      {/* Section 4 — Ce que je propose */}
      <Section variant="white">
        <Reveal>
          <span className="eyebrow mb-4">Solutions</span>
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            Trois étages pour être <em>en règle</em>.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            {
              n: "01",
              title: "Formation",
              desc: "1 jour : maîtrise des outils IA + conformité réglementaire. Finançable OPCO. Vos équipes comprennent ce qu'elles utilisent.",
            },
            {
              n: "02",
              title: "Diagnostic conformité",
              desc: "Cartographie de vos usages IA et de leur niveau de risque (Annexe III). Vous savez où vous en êtes.",
            },
            {
              n: "03",
              title: "Mise en conformité",
              desc: "Gouvernance IA, documentation, registre des usages. Vous êtes prêts pour un contrôle.",
            },
          ].map((item, i) => (
            <Reveal key={item.n} delay={(i + 1) * 100}>
              <div className="flex h-full flex-col gap-3 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-7">
                <div className="step-badge">{item.n}</div>
                <h3 className="font-heading text-xl font-semibold tracking-tight text-[color:var(--color-text-strong)]">
                  {item.title}
                </h3>
                <p className="text-[15px] leading-[1.6] text-[color:var(--color-text)]">
                  {item.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <CTASection
        text="Un échange de 30 minutes pour faire le point sur vos obligations."
        primaryCTA={{ label: "Prendre rendez-vous", href: "/contact" }}
        secondaryCTA={{ label: "Voir les formations", href: "/formations" }}
      />
    </>
  );
}
