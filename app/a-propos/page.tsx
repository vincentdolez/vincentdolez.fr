import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { ConvictionGrid } from "@/components/blocks/ConvictionGrid";
import { CTASection } from "@/components/blocks/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "À propos",
  description:
    "15 ans directeur technique. 4 systèmes métier livrés. Aujourd'hui, l'IA pour construire des logiciels qui n'ont plus besoin de moi.",
  path: "/a-propos",
});

export default function AboutPage() {
  return (
    <>
      {/* Section 1 — L'accroche */}
      <Section variant="white" className="pt-32">
        <h1 className="gradient-text font-heading text-4xl leading-tight tracking-display">
          Vincent Dolez
        </h1>
        <p className="mt-2 text-xl text-muted">
          Référent IA externalisé pour PME-PMI
        </p>

        <div className="mt-8 max-w-[var(--width-content)] space-y-4 leading-normal text-text">
          <p>
            15 ans directeur technique. 4 systèmes métier livrés from scratch.
            À chaque fois : un défi, un dirigeant, un système complet, un
            business qui dure. Aujourd&apos;hui, j&apos;utilise l&apos;IA pour
            construire des logiciels métier qui n&apos;ont plus besoin de moi.
          </p>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 2 — La thèse */}
      <Section variant="surface">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Le vrai problème, c&apos;est la dépendance.
          </h2>
        </Reveal>
        <div className="mt-8 max-w-[var(--width-content)] space-y-4 leading-normal text-text">
          <Reveal delay={100}>
            <p>
              Un patron de PME a une idée. Il embauche un dev. Le dev comprend
              à moitié, construit à moitié, part. La connaissance part avec. Le
              patron embauche un autre dev. Qui refait. Qui part. Trois ans plus
              tard, le patron a un logiciel qu&apos;il ne comprend pas, maintenu
              par quelqu&apos;un qu&apos;il ne peut pas perdre.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Ce n&apos;est pas un problème de personnes. C&apos;est un
              problème de structure. La connaissance est dans les têtes, pas
              dans les systèmes.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p>
              L&apos;IA change ça. On peut maintenant livrer un logiciel qui
              suit votre métier sans dépendre d&apos;une personne. Vous demandez
              en français, le système propose, vous validez. Le code et la
              machine sont à vous.
            </p>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 3 — Track record */}
      <Section variant="white">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Ce que j&apos;ai construit
          </h2>
        </Reveal>
        <div className="mt-8 max-w-[var(--width-content)] space-y-6 leading-normal text-text">
          <Reveal delay={100}>
            <p>
              <strong>Arkea</strong> — D&apos;une graine (animer des images
              3D), un produit complet + ERP + portail client. Le client voulait
              un outil. Il a eu un business.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              <strong>Manganelli</strong> — Un boîtier matériel obsolète.
              J&apos;ai construit le logiciel de pilotage qui l&apos;a remplacé.
              Le client est devenu leader du marché.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p>
              <strong>Jackpot.io</strong> — Plateforme from scratch, circuit
              financier complet, 5 ans d&apos;exploitation, revente propre.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p>
              <strong>iRaiser</strong> — Migration bloquée depuis 3 ans.
              J&apos;ai extrait le modèle métier du code, régénéré avec
              l&apos;IA. Terminé.
            </p>
          </Reveal>
          <Reveal delay={500}>
            <p className="mt-4 text-muted italic">
              Le pattern : le client arrive avec un problème. Il repart avec
              quelque chose de plus grand que ce qu&apos;il demandait.
            </p>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 4 — Différenciation */}
      <ConvictionGrid
        title="Pourquoi moi et pas un autre"
        convictions={[
          {
            title: "Pas un CTO externalisé",
            description:
              "Le CTO externalisé remplace une dépendance par une autre. Moi, je construis pour ne plus être nécessaire. Le code est à vous. La machine est à vous.",
          },
          {
            title: "Pas un consultant",
            description:
              "Je ne livre pas un rapport. Je livre le truc qui tourne.",
          },
          {
            title: "Deux axes, même vision",
            description:
              "Je construis le logiciel métier qui manque. Ou je répare et restructure celui qui existe. Même principe : la connaissance dans le système, pas dans une tête.",
          },
        ]}
      />

      {/* Section 5 — Signature */}
      <Section variant="white">
        <Reveal>
          <p className="text-center font-heading text-2xl leading-snug tracking-display text-text">
            Je ne reste pas. Je construis pour ne plus être nécessaire.
          </p>
          <p className="mt-3 text-center text-muted">
            Du terrain, pas du PowerPoint.
          </p>
        </Reveal>
      </Section>

      {/* Section 6 — CTA */}
      <CTASection
        text="Envie d'en discuter ?"
        primaryCTA={{ label: "Prendre rendez-vous", href: "/contact" }}
        secondaryCTA={{ label: "Voir les offres", href: "/offres" }}
      />
    </>
  );
}
