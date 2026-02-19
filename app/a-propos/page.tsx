import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { ConvictionGrid } from "@/components/blocks/ConvictionGrid";
import { StepList } from "@/components/blocks/StepList";
import { CTASection } from "@/components/blocks/CTASection";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "À propos",
  description: "Parcours, convictions et méthode de travail.",
  path: "/a-propos",
});

export default function AboutPage() {
  return (
    <>
      <Section variant="white" className="pt-32">
        <h1 className="gradient-text font-serif text-4xl leading-tight tracking-display">
          Vincent Dolez
        </h1>
        <p className="mt-2 text-xl text-stone-500">AI Operating Partner</p>

        <div className="mt-8 max-w-[var(--width-content)] space-y-4 leading-normal text-text">
          <p>
            Plus de 15 ans d&apos;expérience en pilotage de projets, delivery et
            transformation opérationnelle. J&apos;ai travaillé avec des PME, des
            scale-ups et des directions métier sur des sujets où la tech doit
            produire des résultats, pas des slides.
          </p>
          <p>
            Un constat m&apos;a conduit ici : la plupart des entreprises n&apos;ont
            pas un problème d&apos;IA. Elles ont un problème d&apos;exécution.
            Des outils qui ne suivent plus, des process manuels qui freinent,
            des équipes qui attendent un plan clair. L&apos;IA est un levier
            puissant — mais seulement quand les fondations sont posées.
          </p>
          <p>
            Je travaille comme un pair, pas comme un prestataire. Je
            m&apos;implique dans vos décisions, je livre avec vos équipes, et je
            pars quand vous êtes autonomes.
          </p>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      <ConvictionGrid
        title="Mes convictions"
        convictions={[
          {
            title: "Automatiser d'abord, IA ensuite",
            description:
              "La majorité des gains se trouvent dans l'automation simple. L'IA intervient quand le socle est fiable.",
          },
          {
            title: "Mesurer, pas promettre",
            description:
              "Chaque intervention produit des chiffres. Avant/après. Pas d'adjectifs, des résultats.",
          },
          {
            title: "Le client reste aux commandes",
            description:
              "Je pilote avec vous, jamais à votre place. Chaque décision vous appartient.",
          },
          {
            title: "Chaque intervention laisse des actifs",
            description:
              "Documentation, process, compétences transférées. Quand je pars, vous gardez tout.",
          },
        ]}
      />

      <hr className="hairline-fade mx-auto max-w-xs" />

      <StepList
        title="Comment je travaille"
        steps={[
          {
            label: "Diagnostic",
            description:
              "J'identifie vos freins réels — techniques, organisationnels, culturels.",
            deliverable:
              "Cartographie des blocages + opportunités priorisées.",
          },
          {
            label: "Plan",
            description:
              "Je construis un plan d'action concret avec des jalons à 90 jours.",
            deliverable:
              "Feuille de route actionnable, priorisée par ROI.",
          },
          {
            label: "Exécution",
            description:
              "Je livre avec vos équipes. Résultats mesurables, documentation incluse.",
            deliverable:
              "Implémentations concrètes + transfert de compétences.",
          },
        ]}
      />

      <CTASection
        text="Envie d'en discuter ?"
        primaryCTA={{ label: "Prendre rendez-vous", href: "/contact" }}
        secondaryCTA={{ label: "Voir les offres", href: "/offres" }}
      />
    </>
  );
}
