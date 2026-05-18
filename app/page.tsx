import { Hero } from "@/components/blocks/Hero";
import { ValueList } from "@/components/blocks/ValueList";
import { CaseStudy } from "@/components/blocks/CaseStudy";
import { LaunchOffer } from "@/components/blocks/LaunchOffer";
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

      {/* Hero */}
      <Hero
        eyebrow="Disponible · Q3 2026"
        pulse
        title={
          <>
            Sortez du goulot.
            <br />
            <em>Reprenez le souffle.</em>
          </>
        }
        subtitle="L'IA libère ce qui était capturé : la connaissance dans les têtes, le code dans les silos, les décisions dans les goulots. Je construis l'autonomie qui rend votre boîte respirable."
        primaryCTA={{ label: "Échanger 30 minutes", href: "/contact" }}
        secondaryCTA={{ label: "Voir l'approche →", href: "/legacy-rescue" }}
      />

      {/* Pillars — signature 3 colonnes flèche */}
      <ValueList
        values={[
          {
            title: "Votre logiciel suit votre métier.",
            description:
              "Vous demandez en français, le système propose, vous validez. Le jour où le métier bouge, le logiciel suit, sans dev, sans attente.",
          },
          {
            title: "Vos données vous parlent.",
            description:
              "Plus de double saisie, plus de fichiers orphelins. Tout est connecté, interrogeable, à vous.",
          },
          {
            title: "Vos équipes sont autonomes.",
            description:
              "L'outil qui a servi à construire devient l'outil du quotidien. Pas de dépendance — ni à un prestataire, ni à un éditeur.",
          },
        ]}
      />

      {/* Proof — iRaiser case study */}
      <CaseStudy
        title="Un éditeur logiciel. Migration bloquée depuis 3 ans."
        paragraphs={[
          "Le produit tournait. Mais le code avait 15 ans, personne ne maîtrisait l'ensemble, et chaque tentative de migration échouait. Trop gros, trop risqué, trop cher.",
          "J'ai conçu des agents IA qui ont analysé le code, la documentation, les transcripts d'interviews. D'autres agents ont modélisé l'activité métier, mappé les écarts, affiné jusqu'à convergence.",
          "À partir de ce modèle, j'ai reconstruit sur des fondations propres, en isolant l'ancien système. Code généré par IA, structuré, vérifiable, aligné sur le métier.",
        ]}
        result="Migration livrée. Le modèle est dans le code."
        footnote="Talk Let It Ship — retour de terrain sur cette mission."
      />

      {/* Launch offer */}
      <LaunchOffer
        title="Offre de lancement"
        description="10 premiers Quickscans offerts — je lis votre code, je vous dis ce qu'il y a vraiment dedans."
        cta={{ label: "Réserver mon Quickscan", href: "/contact" }}
      />
    </>
  );
}
