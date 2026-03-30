import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { StepList } from "@/components/blocks/StepList";
import { OfferCard } from "@/components/blocks/OfferCard";
import { Accordion } from "@/components/ui/Accordion";
import { CTASection } from "@/components/blocks/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Offres",
  description:
    "L'IA rend votre boîte libre. Logiciel métier, connexion données, réécriture legacy, formation IA Act. Quickscan, Sprint.",
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
      "La différence : je livre par itérations courtes, je mesure, et je forme vos équipes pour qu'elles continuent sans moi. Et le code est construit pour être repris, par un humain ou par une IA.",
  },
];

export default function OffersPage() {
  return (
    <>
      {/* Section 1 — Intro */}
      <Section variant="white" className="pt-32 pb-12">
        <h1 className="gradient-text font-heading text-4xl leading-tight tracking-display">
          L&apos;IA rend votre boîte libre. Voici comment.
        </h1>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 2 — 4 offres */}
      <OfferCard
        id="logiciel-metier"
        number="01"
        title="Logiciel métier sur mesure"
        hook="Un process critique tracé dans des feuilles Excel éparses ? Un soft fait par un freelance il y a 10 ans ?"
        itemsLabel="Ce que je livre :"
        items={[
          "Un logiciel taillé pour votre activité, connecté à vos données, pilotable en français",
          "L'IA intégrée dans l'administration : vous pilotez l'évolution en français",
          "Alignement sur votre réalité dès le premier jour",
        ]}
        engagement="Semaines à mois"
        deliverable="Un logiciel métier souverain : le code, la machine et les données sont à vous."
        cta={{ label: "En parler", href: "/contact" }}
        variant="surface"
      />

      <OfferCard
        id="connexion-donnees"
        number="02"
        title="Connexion données et tableaux de bord"
        hook="Vous aimeriez consolider activité commerciale, production et cash flow dans une même vue ?"
        itemsLabel="Ce que je livre :"
        items={[
          "Connecteurs entre vos outils existants, plus de ressaisie",
          "Vue consolidée de votre activité, interrogeable",
          "Tableaux de bord en temps réel, plus d'angles morts",
        ]}
        engagement="Semaines"
        deliverable="Vos données connectées, visibles, exploitables."
        cta={{ label: "En parler", href: "/contact" }}
        variant="white"
        highlighted
      />

      <OfferCard
        id="reecriture-legacy"
        number="03"
        title="Réécriture legacy"
        hook="Une équipe dev enlisée dans un code daté ? Un logiciel que personne ne maîtrise ?"
        itemsLabel="Ce que je livre :"
        items={[
          "Extraction du modèle métier enfoui dans le code existant",
          "Restructuration sur des fondations solides, architecture aux meilleurs standards",
          "Formation de l'équipe à maintenir et faire évoluer avec l'IA",
        ]}
        engagement="Semaines à mois"
        deliverable="Un code restructuré, documenté, que votre équipe ou une IA peut reprendre."
        cta={{ label: "En parler", href: "/contact" }}
        variant="surface"
        badge="Éligible CII"
      />

      <OfferCard
        id="formation-ia"
        number="04"
        title="Formation & IA Act"
        hook="L'IA Act est en vigueur. Savez-vous si votre entreprise est concernée ?"
        itemsLabel="Ce que vous obtenez :"
        items={[
          "Comprendre le texte, ses obligations et ce qu'il implique pour votre activité",
          "Cartographie de vos usages IA et de leur niveau de risque",
          "S'il y a une législation, c'est qu'il y a un risque à ignorer, et une veille à assurer",
        ]}
        engagement="1 à 2 jours"
        deliverable="La clarté sur vos obligations, et une longueur d'avance."
        cta={{ label: "En parler", href: "/contact" }}
        variant="white"
        badges={["Qualiopi", "Finançable OPCO"]}
      />

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 3 — La méthode */}
      <StepList
        title="Une méthode, quel que soit le terrain."
        variant="surface"
        steps={[
          {
            label: "Diagnostic",
            description:
              "Je comprends comment votre boîte fonctionne vraiment. Quelques jours.",
          },
          {
            label: "Spécification de la cible",
            description:
              "On définit ensemble ce que le système doit faire.",
          },
          {
            label: "Réalisation",
            description: "Je construis, je livre, je mesure. Quelques semaines.",
          },
          {
            label: "Formation",
            description: "Vos équipes prennent la main.",
          },
        ]}
      />

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 4 — Le livrable */}
      <Section variant="white">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Ce que vous obtenez
          </h2>
        </Reveal>
        <div className="mt-8 max-w-[var(--width-content)] space-y-6 leading-normal text-text">
          <Reveal delay={100}>
            <p className="text-lg">
              Un code sur mesure, piloté par les spécifications de votre
              métier. Architecture aux meilleurs standards. Hébergé où vous
              voulez, chez vous ou dans le cloud.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p>
              Et surtout : les fichiers d&apos;instructions qui permettent à
              une IA de reprendre le code, le comprendre, le faire évoluer.
              Votre logiciel n&apos;est pas un livrable figé ; c&apos;est un
              système vivant que n&apos;importe quel développeur, ou une IA,
              peut reprendre demain.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p>
              Pour les logiciels métier neufs : l&apos;IA est directement
              intégrée dans l&apos;interface d&apos;administration. Vous
              pilotez l&apos;évolution en français.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p className="font-medium text-accent">
              Pas de dépendance. Ni à un prestataire, ni à un éditeur.
            </p>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 5 — Financement */}
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
                Vincent est agréé Crédit Impôt Innovation. 20% de vos
                dépenses d&apos;innovation remboursées par l&apos;État.
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

      {/* Section 6 — FAQ */}
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

      {/* Section 7 — CTA */}
      <CTASection
        text="Le plus simple : un échange de 30 minutes."
        primaryCTA={{ label: "Prendre rendez-vous", href: "/contact" }}
      />
    </>
  );
}
