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
        title={`Automatiser d'abord.\nIA quand nécessaire.\nToujours pilotable.`}
        subtitle="J'aide les dirigeants de PME à débloquer l'exécution, rationaliser les outils et tirer parti de l'IA — sans perdre le contrôle."
        primaryCTA={{ label: "Découvrir l'approche", href: "/offres" }}
        secondaryCTA={{ label: "Prendre rendez-vous", href: "/contact" }}
      />

      <ProblemGrid
        intro="Votre entreprise tourne. Mais elle n'avance pas aussi vite qu'elle le devrait."
        problems={[
          {
            title: "Outils dépassés",
            description:
              "Le socle technique a suivi la croissance un temps. Aujourd'hui, il la freine.",
          },
          {
            title: "Process manuels",
            description:
              "Trop de tâches reposent sur des personnes. Pas assez sur des systèmes.",
          },
          {
            title: "IA sans plan",
            description:
              "Tout le monde en parle. Personne ne sait par où commencer concrètement.",
          },
        ]}
      />

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
