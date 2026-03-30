import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { ProgressionBar } from "@/components/blocks/ProgressionBar";
import { OfferCard } from "@/components/blocks/OfferCard";
import { StepList } from "@/components/blocks/StepList";
import { Accordion } from "@/components/ui/Accordion";
import { CTASection } from "@/components/blocks/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Offres",
  description:
    "Deux réponses au même problème : construire le système qui manque ou restructurer celui qui existe. Quickscan, Sprint, Partnership.",
  path: "/offres",
});

const faqItems = [
  {
    question: "Par où commencer ?",
    answer:
      "Un échange de 30 minutes. On identifie vos freins, et je vous dis franchement si je peux aider.",
  },
  {
    question: "Combien ça coûte ?",
    answer:
      "Chaque situation est différente. Le cadrage se fait après un premier échange. Pas de grille standard.",
  },
  {
    question: "On n'a pas d'équipe tech.",
    answer:
      "C'est souvent le cas. Je travaille avec vos équipes existantes. Quand un renfort technique est nécessaire, je le cadre et le pilote.",
  },
  {
    question: "On a déjà essayé avec un prestataire.",
    answer:
      "La différence : je ne vends pas un projet puis je disparais. Je livre par itérations courtes, je mesure, et je forme vos équipes pour qu'elles continuent sans moi.",
  },
];

export default function OffersPage() {
  return (
    <>
      {/* Section 1 — Intro */}
      <Section variant="white" className="pt-32 pb-12">
        <h1 className="gradient-text font-heading text-4xl leading-tight tracking-display">
          Deux réponses au même problème.
        </h1>
        <p className="mt-3 max-w-xl text-xl text-muted text-balance">
          Votre boîte dépend d&apos;un type — ou d&apos;un fichier, ou
          d&apos;un logiciel que personne ne comprend. Je construis le système
          qui manque, ou je restructure celui qui existe. Dans les deux cas,
          vous repartez autonomes.
        </p>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 2 — Le triptyque */}
      <StepList
        title="Ce que je fais, concrètement"
        variant="surface"
        steps={[
          {
            label: "Diagnostic",
            description:
              "Je rentre dans votre système, j'ouvre les fichiers, je comprends comment l'info circule vraiment.",
          },
          {
            label: "Construction / Restructuration",
            description:
              "Je construis le logiciel métier qui manque — ou je restructure celui qui existe. L'IA est dans les fondations.",
          },
          {
            label: "Formation",
            description:
              "Je forme vos équipes pour qu'elles fassent évoluer le système elles-mêmes. L'outil qui a servi à construire devient l'outil du quotidien.",
          },
        ]}
      />

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 3 — Niveaux d'engagement */}
      <Section variant="white" className="pb-4">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Comment on travaille ensemble
          </h2>
        </Reveal>
        <div className="mt-12">
          <ProgressionBar />
        </div>
      </Section>

      <OfferCard
        id="quickscan"
        number="01"
        title="Quickscan"
        hook="Comprendre ce qui bloque — en quelques jours."
        itemsLabel="Ce que vous obtenez :"
        items={[
          "Je m'assieds avec vos équipes, j'écoute, j'ouvre les fichiers",
          "Cartographie du fonctionnement réel : outils, flux, dépendances",
          "Plan d'action priorisé avec estimation d'effort et gains attendus",
        ]}
        engagement="Jours"
        deliverable="Un plan clair, que vous pouvez exécuter avec ou sans moi."
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
          "Transfert de compétences aux équipes",
        ]}
        engagement="Semaines"
        deliverable="Des résultats démontrables et des équipes qui savent continuer."
        cta={{ label: "En savoir plus", href: "/contact" }}
        variant="white"
        highlighted
        badge="Éligible CII"
      />

      <OfferCard
        id="partnership"
        number="03"
        title="Partnership"
        hook="Récurrence — chaque mois, on avance."
        itemsLabel="Chaque mois :"
        items={[
          "Priorisation, livraisons, mesure",
          "Connecteurs progressifs — plus de double saisie",
          "Le système gagne en couverture à chaque cycle",
        ]}
        engagement="Mois"
        deliverable="Un système qui couvre de plus en plus votre métier."
        cta={{ label: "En savoir plus", href: "/contact" }}
        variant="surface"
        badge="Éligible CII"
      />

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 4 — Produit teaser */}
      <Section variant="surface">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Et si le logiciel suivait votre métier — sans dev, sans attente ?
          </h2>
        </Reveal>
        <div className="mt-6 max-w-[var(--width-content)] space-y-4 leading-normal text-text">
          <Reveal delay={100}>
            <p>
              Un logiciel métier sur mesure. Construit sur votre modèle. Hébergé
              chez vous. Vous demandez en français, le système propose, vous
              validez. Le code et la machine sont à vous.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-muted">
              Ce n&apos;est pas un projet. C&apos;est la direction dans laquelle
              tout converge. Chaque Quickscan, chaque Sprint vous en rapproche.
            </p>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 5 — Formation IA Act */}
      <Section variant="white">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Formation IA &amp; conformité
          </h2>
        </Reveal>
        <div className="mt-6 max-w-[var(--width-content)] space-y-4 leading-normal text-text">
          <Reveal delay={100}>
            <p>
              L&apos;IA Act est en vigueur depuis février 2025. Vos équipes
              doivent maîtriser l&apos;IA qu&apos;elles utilisent. Les
              sanctions sur les usages à risque arrivent en août 2026.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <ul className="mt-4 space-y-2 text-text">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                1 jour — maîtrise des outils IA + conformité réglementaire
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Cartographie de vos usages et de leur niveau de risque
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                Finançable OPCO
              </li>
            </ul>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 6 — Financement */}
      <Section variant="surface">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Leviers de financement
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal delay={100}>
            <div className="rounded-lg border border-border p-6">
              <h3 className="font-heading text-xl tracking-display text-text">
                CII
              </h3>
              <p className="mt-2 text-muted">
                Vincent est agréé CII. 20% de vos dépenses d&apos;innovation
                remboursées par l&apos;État.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-lg border border-border p-6">
              <h3 className="font-heading text-xl tracking-display text-text">
                OPCO
              </h3>
              <p className="mt-2 text-muted">
                Les formations sont finançables via votre budget formation.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 7 — FAQ */}
      <Section variant="white">
        <Reveal>
          <h2 className="gradient-text mb-8 font-heading text-3xl leading-tight tracking-display">
            Vous vous demandez peut-être...
          </h2>
        </Reveal>
        <div className="mx-auto max-w-2xl">
          <Accordion items={faqItems} />
        </div>
      </Section>

      {/* Section 8 — CTA */}
      <CTASection
        text="Le plus simple : un échange de 30 minutes."
        primaryCTA={{ label: "Prendre rendez-vous", href: "/contact" }}
      />
    </>
  );
}
