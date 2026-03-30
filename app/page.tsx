import { Hero } from "@/components/blocks/Hero";
import { ProblemGrid } from "@/components/blocks/ProblemGrid";
import { StepList } from "@/components/blocks/StepList";
import { MetricRow } from "@/components/blocks/MetricRow";
import { CTASection } from "@/components/blocks/CTASection";
import { organizationJsonLd } from "@/lib/metadata";

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />

      <Hero
        title={`Je vois où vous voulez aller.\nEt je sais le construire.`}
        subtitle="Co-fondateur temporaire pour dirigeants qui ont une ambition concrète, un projet bloqué ou une idée dormante — et qui cherchent quelqu'un qui s'y engage autant qu'eux."
        primaryCTA={{ label: "Voir comment ça marche", href: "/offres" }}
        secondaryCTA={{ label: "Prendre rendez-vous", href: "/contact" }}
      />

      <hr className="hairline-fade mx-auto max-w-xs" />

      <ProblemGrid
        intro="Vous avez l'ambition. Il vous manque quelqu'un pour la construire."
        problems={[
          {
            title: "Une idée qui attend",
            description:
              "Vous avez un projet depuis des mois. Personne en interne pour le concrétiser, aucun prestataire qui y croit vraiment.",
          },
          {
            title: "Marre des slides",
            description:
              "Le dernier consultant a livré un rapport. Vous cherchez quelqu'un qui livre un système qui tourne.",
          },
          {
            title: "L'IA, levier ou mirage",
            description:
              "L'IA pourrait rendre faisable ce qui ne l'était pas. Encore faut-il quelqu'un qui sache la mettre au service de votre vision.",
          },
        ]}
      />

      <hr className="hairline-fade mx-auto max-w-xs" />

      <StepList
        title="Ce que je fais"
        steps={[
          {
            label: "Diagnostic",
            description:
              "Identifier les freins réels — tech, orga, culture.",
          },
          {
            label: "Plan actionnable",
            description:
              "Prioriser ce qui a un ROI clair, en 90 jours.",
          },
          {
            label: "Livraison",
            description:
              "Implémenter, mesurer, documenter. Résultats concrets.",
          },
          {
            label: "Capitalisation",
            description:
              "Chaque intervention laisse des actifs. Vous gardez tout.",
          },
        ]}
        cta={{ label: "Voir les offres", href: "/offres" }}
      />

      <hr className="hairline-fade mx-auto max-w-xs" />

      <MetricRow
        title="Résultats observés"
        metrics={[
          { value: "-40%", label: "de délai sur les cycles de livraison" },
          { value: "x3", label: "de débit sur les process automatisés" },
          { value: "< 90 jours", label: "pour un ROI mesurable" },
        ]}
        note="Estimations basées sur des missions passées auprès de PME de services (50 à 200 personnes). Chaque contexte produit des résultats différents — ces ordres de grandeur illustrent le potentiel, pas une promesse."
      />

      <CTASection
        text="Un échange de 30 minutes pour voir si ça matche."
        primaryCTA={{ label: "Prendre rendez-vous", href: "/contact" }}
      />
    </>
  );
}
