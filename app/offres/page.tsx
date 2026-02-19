import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { ProgressionBar } from "@/components/blocks/ProgressionBar";
import { OfferCard } from "@/components/blocks/OfferCard";
import { Accordion } from "@/components/ui/Accordion";
import { CTASection } from "@/components/blocks/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Offres",
  description:
    "Quickscan, Sprint, AI Operating Partner. Trois niveaux d'intervention.",
  path: "/offres",
});

const faqItems = [
  {
    question: "Par où commencer ?",
    answer:
      "Par un échange de 30 minutes. On identifie vos freins principaux, et je vous dis franchement si je peux aider. Pas de diagnostic payant en guise de porte d'entrée — le Quickscan ne démarre que si le problème est clair pour nous deux.",
  },
  {
    question: "Combien ça coûte ?",
    answer:
      "Chaque situation est différente. Le périmètre, la durée et le budget se définissent après un premier échange. Pas de grille tarifaire standard — un cadrage honnête, adapté à votre contexte.",
  },
  {
    question: "On n'a pas d'équipe tech interne.",
    answer:
      "C'est souvent le cas dans les PME de services. Je travaille avec vos équipes existantes — ops, direction, métier. Quand un renfort technique est nécessaire, je le cadre et le pilote. Vous n'avez pas besoin de recruter un CTO pour avancer.",
  },
  {
    question: "On a déjà essayé avec un prestataire, ça n'a pas marché.",
    answer:
      "La différence : je ne vends pas un projet puis je disparais. Je m'engage sur des résultats mesurables, je livre par itérations courtes, et je documente tout. Si les premiers résultats ne sont pas là, on ajuste ou on arrête.",
  },
];

export default function OffersPage() {
  return (
    <>
      {/* Hero + Progression intégrée */}
      <Section variant="white" className="pt-32 pb-12">
        <h1 className="gradient-text font-serif text-4xl leading-tight tracking-display">
          Trois façons de travailler ensemble
        </h1>
        <p className="mt-3 max-w-xl text-xl text-muted text-balance">
          Du diagnostic rapide au partenariat récurrent. Chaque étape construit
          sur la précédente.
        </p>
        <div className="mt-12">
          <ProgressionBar />
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Offer details */}

      <OfferCard
        id="quickscan"
        number="01"
        title="Quickscan"
        hook="Comprendre vos freins en quelques jours."
        itemsLabel="Ce que vous obtenez :"
        items={[
          "Audit des freins — techniques, organisationnels, culturels",
          "Cartographie des opportunités d'automation",
          "Plan 90 jours priorisé par ROI",
        ]}
        engagement="Jours"
        deliverable="Un plan d'action clair, que vous pouvez exécuter avec ou sans moi."
        cta={{ label: "En savoir plus", href: "/contact" }}
        variant="surface"
      />

      <OfferCard
        id="sprint"
        number="02"
        title="Sprint de déverrouillage"
        hook="2 à 3 livraisons mesurables en quelques semaines."
        itemsLabel="Ce que vous obtenez :"
        items={[
          "Implémentations concrètes sur vos priorités",
          "Résultats mesurables — avant/après documenté",
          "Documentation + transfert de compétences",
        ]}
        engagement="Semaines"
        deliverable="Des résultats démontrables et des équipes qui savent continuer."
        cta={{ label: "En savoir plus", href: "/contact" }}
        variant="white"
        highlighted
      />

      <OfferCard
        id="partner"
        number="03"
        title="AI Operating Partner"
        hook="Votre partenaire permanent d'accélération."
        itemsLabel="Chaque mois :"
        items={[
          "Priorisation — on décide ensemble quoi faire ensuite",
          "Livraisons concrètes — pas de conseil flottant",
          "Mesure des résultats — chiffres factuels, pas d'impressions",
          "Gouvernance + pilotage — cadrage continu",
        ]}
        engagement="Mois ou trimestres"
        deliverable="Une capitalisation continue — chaque mois construit sur le précédent."
        cta={{ label: "En savoir plus", href: "/contact" }}
        variant="surface"
      />

      <Section variant="white">
        <Reveal>
          <h2 className="gradient-text mb-8 font-serif text-3xl leading-tight tracking-display">
            Vous vous demandez peut-être...
          </h2>
        </Reveal>
        <div className="mx-auto max-w-2xl">
          <Accordion items={faqItems} />
        </div>
      </Section>

      <CTASection
        text="Le plus simple : un échange de 30 minutes."
        primaryCTA={{ label: "Prendre rendez-vous", href: "/contact" }}
      />
    </>
  );
}
