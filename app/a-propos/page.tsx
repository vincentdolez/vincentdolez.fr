import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { TrackRecord } from "@/components/blocks/TrackRecord";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata, personJsonLd } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "À propos",
  description:
    "20 ans à construire des systèmes complets pour des dirigeants. Tech leader, partenaire IA, expert par la pratique. D'un besoin, je fais une ambition.",
  path: "/a-propos",
});

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
      />
      {/* Header section */}
      <Section variant="white" className="pt-32 pb-12">
        <Reveal>
          <span className="eyebrow mb-6">À propos</span>
          <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.0] tracking-[-0.04em] text-[color:var(--color-text-strong)] [font-variation-settings:'opsz'_96]">
            Vincent Dolez
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-[1.6] text-[color:var(--color-text)]">
            Tech leader · Partenaire IA · 20 ans de systèmes complets
          </p>
        </Reveal>
      </Section>

      {/* Personal story */}
      <Section variant="white" className="py-12" maxWidth="content">
        <div className="mx-auto max-w-[var(--width-content)] space-y-6 text-lg leading-[1.7] text-[color:var(--color-text)]">
          <Reveal>
            <p>
              Mon premier ordinateur, c&apos;était un 8088 avec un écran Hercules.
              J&apos;avais DOS, BASIC, Pascal. J&apos;y passais des journées entières,
              sans trop savoir quoi en faire, mais en devinant la puissance de l&apos;outil.
              Quarante ans plus tard, l&apos;IA m&apos;a redonné cette même intuition :
              quelque chose de puissant est là, et peu de gens savent quoi en faire.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Depuis 20 ans, je construis des systèmes complets pour des dirigeants.
              Le scénario se répète : un défi, un dirigeant qui porte une idée, et moi qui embarque.
            </p>
          </Reveal>
        </div>
      </Section>

      <hr className="divider-rule mx-auto max-w-2xl" />

      {/* Track record */}
      <TrackRecord
        eyebrow="Le pattern"
        title="4 systèmes, 4 dirigeants, 4 business qui durent."
        systems={[
          {
            client: "Arka",
            context: "D'une graine — animer des images 3D — un produit + ERP + portail client.",
            outcome: "Enrichissement du fondateur. Business durable.",
          },
          {
            client: "Manganelli",
            context: "Boîtier obsolète transformé en logiciel de pilotage d'écrans.",
            outcome: "Leader du marché.",
          },
          {
            client: "Jackpot.io",
            context: "Plateforme from scratch, circuit financier complet.",
            outcome: "5 ans d'exploitation, revente propre.",
          },
          {
            client: "Acteur fintech européen",
            context: "Migration bloquée 3 ans. Extraction DDD + réécriture IA.",
            outcome: "Terminé. Talk Let It Ship.",
          },
        ]}
        footnote="Le client arrive avec un problème technique. Il repart avec quelque chose de plus grand."
      />

      <hr className="divider-rule mx-auto max-w-2xl" />

      {/* Approche — Congruence */}
      <Section variant="surface" maxWidth="content">
        <Reveal>
          <span className="eyebrow mb-4">Approche</span>
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            Stratège + bâtisseur dans le même <em>geste</em>.
          </h2>
        </Reveal>
        <div className="mt-10 space-y-6 text-lg leading-[1.7] text-[color:var(--color-text)]">
          <Reveal delay={100}>
            <p>
              Mon interlocuteur, c&apos;est toujours le fondateur. Je ne peux pas
              construire sans comprendre le pourquoi stratégique. Je ne peux pas
              penser la stratégie sans la construire.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Le fondateur n&apos;a pas besoin de traduire entre consultant et équipe
              technique. Je parle les deux langues — 20 ans CTO, autant de terrain.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg)] px-8 py-6">
              <p className="font-heading text-xl font-semibold leading-snug tracking-tight text-[color:var(--color-text-strong)]">
                Je ne pars pas du prompt. <em>Je pars du modèle.</em>
              </p>
              <p className="mt-3 text-base leading-[1.6] text-[color:var(--color-text)]">
                L&apos;IA est la contrainte — fixée, opaque. Le framework est la
                variable — contrôlable, documentable. On aligne le framework sur
                les capacités du modèle.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <hr className="divider-rule mx-auto max-w-2xl" />

      {/* Conviction */}
      <Section variant="white" maxWidth="content">
        <Reveal>
          <span className="eyebrow mb-4">Conviction</span>
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            Anti-rentier de la <em>connaissance</em>.
          </h2>
        </Reveal>
        <div className="mt-10 space-y-6 text-lg leading-[1.7] text-[color:var(--color-text)]">
          <Reveal delay={100}>
            <p>
              Le tissu économique français croule sous la dette informatique. Des
              logiciels que personne ne comprend, des données enfermées dans des silos,
              des éditeurs dont on ne peut pas sortir. Des dirigeants qui pilotent
              à l&apos;aveugle et qui le savent.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Dès l&apos;arrivée de ChatGPT, j&apos;ai vu l&apos;opportunité de changer ça.
              L&apos;IA et le code font corps. Le modèle métier est dans le code,
              l&apos;IA raisonne à travers le code — plus de dérive entre ce qu&apos;on
              croit que le système fait et ce qu&apos;il fait vraiment.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="font-heading text-2xl font-medium italic leading-tight tracking-tight text-[color:var(--color-vd-moss)]">
              Ce n&apos;est pas un changement d&apos;outil. C&apos;est un changement de nature.
            </p>
          </Reveal>
        </div>
      </Section>
    </>
  );
}
