import { Hero } from "@/components/blocks/Hero";
import { ValueList } from "@/components/blocks/ValueList";
import { CaseStudy } from "@/components/blocks/CaseStudy";
import { CTASection } from "@/components/blocks/CTASection";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
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

      {/* Section 1 — Hero */}
      <Hero
        title={`L'IA ne remplace personne.\nElle rend votre boîte libre.`}
        subtitle={`Libre du logiciel que personne ne comprend.\nLibre des éditeurs. Libre de penser plus au business.\nJe construis le système qui vous émancipe.`}
        primaryCTA={{ label: "Ce que je fais", href: "/offres" }}
        secondaryCTA={{ label: "Prendre rendez-vous", href: "/contact" }}
      />

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 2 — Ce que l'IA rend possible */}
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
              "L'outil qui a servi à construire devient l'outil du quotidien. Pas de dépendance : ni à un prestataire, ni à un éditeur.",
          },
        ]}
      />

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 3 — Ce que je fais */}
      <Section variant="white">
        <Reveal>
          <h2 className="gradient-text mt-4 mb-16 text-center font-heading text-3xl leading-tight tracking-display">
            Ce que je fais
          </h2>
        </Reveal>
        <div className="mx-auto max-w-3xl space-y-8">
          <Reveal>
            <p className="leading-normal text-text">
              <span className="mr-1 font-heading text-text">&rarr;</span> Je
              construis le logiciel métier qui manque, taillé pour votre
              business, connecté à vos données, pilotable en français. Et je
              l&apos;aligne sur votre réalité dès le premier jour.
            </p>
          </Reveal>
          <Reveal delay={100}>
            <p className="leading-normal text-text">
              <span className="mr-1 font-heading text-text">&rarr;</span>{" "}
              J&apos;applique les mêmes technologies pour débloquer vos systèmes
              existants. Migration bloquée, code que personne ne comprend,
              logiciel legacy en bout de course : j&apos;extrais le modèle
              métier et je restructure.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="leading-normal text-text">
              <span className="mr-1 font-heading text-text">&rarr;</span> Je
              forme vos équipes à l&apos;IA : maîtrise des outils, conformité IA
              Act, autonomie. Le savoir reste chez vous.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-8 text-center">
              <Button href="/offres" variant="secondary">
                Voir les offres
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 4 — Preuve de méthode */}
      <CaseStudy
        title="Un éditeur logiciel. Migration bloquée depuis 3 ans."
        paragraphs={[
          "Le produit tournait. Mais le code avait 15 ans, personne ne maîtrisait l'ensemble, et chaque tentative de migration échouait. Trop gros, trop risqué, trop cher.",
          "Ce que j'ai fait : j'ai conçu des agents IA qui ont analysé le code, la documentation, les tutoriaux vidéo, les transcripts d'interviews utilisateurs. D'autres agents ont modélisé l'activité métier. D'autres encore ont mappé ce qu'ils avaient découvert dans le code sur le modèle métier. Puis analysé les écarts et affiné le modèle jusqu'à convergence.",
          "À partir de ce modèle, j'ai reconstruit sur des fondations propres, en isolant l'ancien système pour que le nouveau fonctionne sans tout casser. Le code a été généré par IA, structuré, vérifiable, aligné sur le métier.",
        ]}
        result="Résultat : migration livrée. Le modèle est dans le code. Et demain, c'est ce même type d'agents qui fera évoluer le logiciel, pas un prestataire."
        footnote="20 ans de systèmes complets : plateformes financières, pilotage industriel, produits from scratch. À chaque fois, un dirigeant, un défi, un business qui dure."
      />

      {/* Section 5 — Signature + CTA */}
      <Section variant="white">
        <Reveal>
          <div className="text-center">
            <hr className="hairline-fade mx-auto mb-14 max-w-xs" />
            <p className="mx-auto max-w-lg font-heading text-2xl leading-snug tracking-display text-text">
              D&apos;un besoin, je fais une ambition.
            </p>
            <p className="mx-auto mt-2 max-w-lg font-heading text-2xl leading-snug tracking-display text-text">
              Je construis pour ne plus être nécessaire.
            </p>
            <p className="mt-6 text-sm text-muted">
              Vannes. Bretagne. France entière.
            </p>
            <div className="mt-12 flex items-center justify-center gap-4">
              <Button href="/contact">Prendre rendez-vous</Button>
            </div>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
