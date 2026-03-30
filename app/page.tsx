import { Hero } from "@/components/blocks/Hero";
import { ProblemGrid } from "@/components/blocks/ProblemGrid";
import { StepList } from "@/components/blocks/StepList";
import { ConvictionGrid } from "@/components/blocks/ConvictionGrid";
import { CTASection } from "@/components/blocks/CTASection";
import { Section } from "@/components/layout/Section";
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

      <Hero
        title={`Votre boîte dépend d'un type.\nC'est réparable.`}
        subtitle="Les doubles saisies, le logiciel que personne ne comprend, le fichier Excel qui fait tourner la prod — tout ça, c'est de la dépendance. L'IA change la donne."
        primaryCTA={{ label: "Ce que je fais", href: "/offres" }}
        secondaryCTA={{ label: "Prendre rendez-vous", href: "/contact" }}
      />

      <hr className="hairline-fade mx-auto max-w-xs" />

      <ProblemGrid
        intro="Vous le sentez tous les jours."
        problems={[
          {
            title: "Le gars qui sait",
            description:
              "Marc est le seul à maintenir le logiciel maison. Le jour où il s'en va, la prod s'arrête.",
          },
          {
            title: "Le fichier Excel",
            description:
              "Il fait tourner la compta, le planning ou le suivi client. Personne n'ose y toucher.",
          },
          {
            title: "L'IA, gadget ou levier",
            description:
              "ChatGPT ne remplacera pas Marc. Mais l'IA peut livrer un système qui ne dépend plus de personne.",
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
              "Je rentre dans votre système, j'ouvre les fichiers, je comprends comment l'info circule vraiment.",
          },
          {
            label: "Construction",
            description:
              "Je construis le logiciel métier qui manque — ou je restructure celui qui existe.",
          },
          {
            label: "Transfert",
            description:
              "Je forme vos équipes pour qu'elles fassent évoluer le système elles-mêmes.",
          },
        ]}
        cta={{ label: "Voir les offres", href: "/offres" }}
      />

      <hr className="hairline-fade mx-auto max-w-xs" />

      <ConvictionGrid
        title="4 systèmes. 4 business qui durent."
        convictions={[
          {
            title: "Arkea",
            description:
              "D'une graine (animer des images 3D), un produit + ERP + portail client.",
          },
          {
            title: "Manganelli",
            description:
              "Boîtier obsolète → logiciel de pilotage d'écrans. Leader du marché.",
          },
          {
            title: "Jackpot.io",
            description:
              "Plateforme from scratch, circuit financier complet. 5 ans, revente propre.",
          },
          {
            title: "iRaiser",
            description:
              "Migration bloquée depuis 3 ans. Extraction DDD + IA. Terminé.",
          },
        ]}
      />

      <Section variant="white">
        <Reveal>
          <p className="mx-auto max-w-xl text-center text-muted">
            Le pattern : le client arrive avec un problème. Il repart avec
            quelque chose de plus grand que ce qu&apos;il demandait.
          </p>
        </Reveal>
      </Section>

      <CTASection
        text="Je ne reste pas. Je construis pour ne plus être nécessaire."
        primaryCTA={{ label: "Prendre rendez-vous", href: "/contact" }}
      />
    </>
  );
}
