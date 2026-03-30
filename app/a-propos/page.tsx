import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { CTASection } from "@/components/blocks/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "À propos",
  description:
    "20 ans de systèmes complets pour des dirigeants. Aujourd'hui, l'IA pour construire des logiciels métier qui n'ont plus besoin de moi.",
  path: "/a-propos",
});

export default function AboutPage() {
  return (
    <>
      {/* Section 1 — Le récit */}
      <Section variant="white" className="pt-32">
        <h1 className="gradient-text font-heading text-4xl leading-tight tracking-display">
          Vincent Dolez
        </h1>

        <div className="mt-10 max-w-[var(--width-content)] space-y-6 text-lg leading-relaxed text-text">
          <Reveal>
            <p>
              Mon premier ordinateur, c&apos;était un 8088 avec un écran
              Hercules. J&apos;avais DOS, BASIC, Pascal. J&apos;y passais des
              journées entières, sans trop savoir quoi en faire, mais en
              devinant la puissance de l&apos;outil. Aujourd&apos;hui, je crée
              le même lien avec l&apos;IA.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p>
              Depuis 20 ans, je construis des systèmes complets pour des
              dirigeants. Le scénario se répète : un défi, un dirigeant qui
              porte une idée, et moi qui embarque. À peine les premiers mots, le
              cerveau va déjà à 200 à l&apos;heure. Chez Arka, c&apos;était une
              graine, animer des images 3D. J&apos;étais au chômage. J&apos;ai
              passé 3 jours à construire un prototype, sans contrat, et je suis
              revenu avec mon ordinateur sous le bras : &ldquo;Regarde, ça
              marche.&rdquo; Il a eu un produit, un ERP, un portail client. Un
              business.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Après : des plateformes financières, du pilotage industriel, des
              produits from scratch. À chaque fois, un système complet livré, un
              business qui dure. Mon interlocuteur, c&apos;est toujours le
              dirigeant. Je ne peux pas construire sans comprendre le pourquoi
              stratégique. Je ne peux pas penser la stratégie sans la construire.
            </p>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 2 — Ma conviction */}
      <Section variant="surface">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Ma conviction
          </h2>
        </Reveal>

        <div className="mt-10 max-w-[var(--width-content)] space-y-8">
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-text">
              Le tissu économique français croule sous la dette informatique. Des
              logiciels que personne ne comprend, des données enfermées dans des
              silos, des éditeurs dont on ne peut pas sortir. Des dirigeants qui
              pilotent à l&apos;aveugle et qui le savent.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-xl border-l-4 border-accent bg-bg px-8 py-6 shadow-sm">
              <p className="font-heading text-2xl leading-snug tracking-display text-text">
                Dès l&apos;arrivée de ChatGPT, j&apos;ai vu l&apos;opportunité
                de changer ça.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="text-lg leading-relaxed text-text">
              L&apos;IA et le code font corps. Le modèle métier est dans le
              code, l&apos;IA raisonne à travers le code ; plus de dérive entre
              ce qu&apos;on croit que le système fait et ce qu&apos;il fait
              vraiment. Plus de connaissance enfermée dans une tête. Un logiciel
              qui suit le métier sans dépendre d&apos;une personne.
            </p>
          </Reveal>

          <Reveal delay={400}>
            <div className="rounded-xl border-l-4 border-accent bg-bg px-8 py-6 shadow-sm">
              <p className="font-heading text-xl leading-snug tracking-display text-text">
                Ce n&apos;est pas un changement d&apos;outil. C&apos;est un
                changement de nature.
              </p>
            </div>
          </Reveal>

          <Reveal delay={500}>
            <p className="text-lg leading-relaxed text-accent">
              J&apos;y crois, je le construis, je le livre déjà. Chaque mission
              me rapproche d&apos;un logiciel métier sur mesure que
              n&apos;importe quel dirigeant pourrait piloter en français.
            </p>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 3 — Signature + CTA */}
      <Section variant="white">
        <Reveal>
          <div className="text-center">
            <p className="font-heading text-2xl leading-snug tracking-display text-text">
              D&apos;un besoin, je fais une ambition.
            </p>
            <p className="mt-2 font-heading text-2xl leading-snug tracking-display text-text">
              Je construis pour ne plus être nécessaire.
            </p>
            <p className="mt-4 text-muted">
              Vannes. Bretagne. France entière.
            </p>
          </div>
        </Reveal>
      </Section>

      {/* CTA */}
      <CTASection
        text="Envie d'en discuter ?"
        primaryCTA={{ label: "Prendre rendez-vous", href: "/contact" }}
        secondaryCTA={{ label: "Voir les offres", href: "/offres" }}
      />
    </>
  );
}
