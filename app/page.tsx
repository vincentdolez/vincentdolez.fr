import type { Metadata } from "next";
import { Hero } from "@/components/blocks/Hero";
import { ValueList } from "@/components/blocks/ValueList";
import { CaseStudy } from "@/components/blocks/CaseStudy";
import { TrackRecord } from "@/components/blocks/TrackRecord";
import { LaunchOffer } from "@/components/blocks/LaunchOffer";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata, organizationJsonLd } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Vincent Dolez — Tech leader détaché · Code, IA, business",
  description:
    "20 ans CTO engagé dans la croissance de PME et éditeurs logiciel. Legacy rescue (cycle long) · Quickscan PME (cycle court). Vannes, Bretagne, France.",
  path: "/",
});

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
        eyebrow="Tech leader détaché · Disponible Q3 2026"
        pulse
        title={
          <>
            Le code, l&apos;IA, votre business.
            <br />
            <em>Je croise les trois.</em>
          </>
        }
        subtitle="L'IA ne gagnera pas la bataille à votre place. Mais elle peut vous faire gagner du terrain."
        primaryCTA={{ label: "Échanger 30 minutes", href: "/contact" }}
      />

      {/* Section 2 — Triplet */}
      <ValueList
        heading="Trois choses ensemble. Pas une à la fois."
        values={[
          {
            title: "Le code.",
            description:
              "L'architecture, la donnée, ce qui supporte ou ce qui empêche. Lu, pas raconté.",
          },
          {
            title: "L'IA.",
            description:
              "L'outil. Ce qu'elle fait vraiment, pas ce qu'on en dit. Mise au service du métier, pas l'inverse.",
          },
          {
            title: "Le business.",
            description:
              "Comment vous gagnez de l'argent, où ça coince, ce qui freine la croissance.",
          },
        ]}
        closingLine="Le formateur voit l'IA. Le consultant voit le business. Le développeur voit le code. Je croise les trois."
      />

      {/* Section 3 — 2 axes */}
      <Section variant="white">
        <Reveal>
          <h2 className="mb-10 font-heading text-3xl leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            Deux façons d&apos;avancer. Selon votre situation.
          </h2>
        </Reveal>
        <div className="grid gap-6 md:grid-cols-2">
          <Reveal delay={100}>
            <article className="flex h-full flex-col rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-8">
              <h3 className="font-heading text-xl font-semibold tracking-tight text-[color:var(--color-text-strong)]">
                Pour les éditeurs logiciel.
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-[color:var(--color-text)]">
                Migration patine. Dev qui sait regarde ailleurs. Chaque feature est un calvaire. Je débloque, je restructure, je transfère. À la sortie, le système tient sans moi.
              </p>
              <p className="mt-4 border-t border-[color:var(--color-border)] pt-4 font-mono text-xs italic text-[color:var(--color-muted)]">
                Engagement long. Missions de plusieurs mois.
              </p>
              <div className="mt-6">
                <Button href="/legacy-rescue" variant="secondary">
                  Voir l&apos;approche →
                </Button>
              </div>
            </article>
          </Reveal>
          <Reveal delay={200}>
            <article className="flex h-full flex-col rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-bg)] p-8">
              <h3 className="font-heading text-xl font-semibold tracking-tight text-[color:var(--color-text-strong)]">
                Pour les dirigeants de PME.
              </h3>
              <p className="mt-4 text-[15px] leading-[1.7] text-[color:var(--color-text)]">
                ChatGPT essayé. Gains à la marge, rien sur le cœur du métier. Une journée chez vous — je pose ce qui manque, je vous laisse un plan prêt à exécuter.
              </p>
              <p className="mt-4 border-t border-[color:var(--color-border)] pt-4 font-mono text-xs italic text-[color:var(--color-muted)]">
                Engagement court. Démarrage rapide. Bretagne et 2 h autour.
              </p>
              <div className="mt-6">
                <Button href="/quickscan-pme" variant="secondary">
                  Réserver un Quickscan →
                </Button>
              </div>
            </article>
          </Reveal>
        </div>
      </Section>

      {/* Section 4 — CaseStudy Acteur fintech européen */}
      <CaseStudy
        title="Un éditeur logiciel. Migration bloquée depuis 3 ans."
        paragraphs={[
          "Le produit tournait. Mais le code avait 15 ans, personne ne maîtrisait l'ensemble, et chaque tentative de migration échouait. Trop gros, trop risqué, trop cher.",
          "J'ai reconstruit sur des fondations propres avec l'IA — en isolant l'ancien système pour que rien ne casse pendant la transition.",
        ]}
        result="Migration livrée. Le modèle est dans le code."
        footnote="Talk Let It Ship — retour de terrain sur cette mission."
      />

      {/* Section 5 — Signature méthode */}
      <Section variant="surface">
        <Reveal>
          <h2 className="mb-10 font-heading text-3xl leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            Deux choses qu&apos;on fait différemment.
          </h2>
        </Reveal>
        <div className="grid gap-10 md:grid-cols-2">
          <Reveal delay={100}>
            <div>
              <p className="font-heading text-lg font-semibold leading-snug tracking-tight text-[color:var(--color-text-strong)]">
                Ce qu&apos;on pose d&apos;abord : votre langue métier.
              </p>
              <p className="mt-3 text-[15px] leading-[1.7] text-[color:var(--color-text)]">
                ChatGPT ne sait pas comment vous appelez vos clients, vos produits, vos étapes. Sans ça, l&apos;IA reste générique. Une fois posée, elle devient pertinente sur votre activité.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div>
              <p className="font-heading text-lg font-semibold leading-snug tracking-tight text-[color:var(--color-text-strong)]">
                Pas un grand soir. Une brique à la fois.
              </p>
              <p className="mt-3 text-[15px] leading-[1.7] text-[color:var(--color-text)]">
                Chaque chantier produit un gain mesurable tout seul, et prépare le terrain pour le suivant. Vous pouvez vous arrêter à n&apos;importe quelle brique et garder la valeur acquise. Vous mesurez à chaque étape — le contraire du POC qui rate à 95 %.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Section 6 — Track record */}
      <TrackRecord
        title="20 ans de systèmes livrés."
        systems={[
          {
            client: "Arka",
            context:
              "D'une graine (animer des images 3D), un produit + ERP + portail client.",
            outcome: "Enrichissement du fondateur. Business durable.",
          },
          {
            client: "Manganelli",
            context: "Boîtier obsolète transformé en logiciel de pilotage d'écrans.",
            outcome: "Leader du marché.",
          },
          {
            client: "Jackpot.io",
            context: "Plateforme from scratch, circuit financier complet.",
            outcome: "5 ans d'exploitation, revente propre.",
          },
          {
            client: "Acteur fintech européen",
            context:
              "Migration bloquée 3 ans. Extraction DDD + réécriture model-driven IA.",
            outcome: "Terminée. Talk Let It Ship.",
          },
        ]}
        footnote="Le dirigeant arrive avec un problème technique. Il repart avec quelque chose de plus grand que ce qu'il avait demandé. Pas parce que je vends plus — parce que regarder une activité sérieusement révèle ce qu'elle n'osait plus se dire."
      />

      {/* Section 7 — LaunchOffer */}
      <LaunchOffer
        title="Vous voulez voir ce que ça donne chez vous ?"
        description="Pour ouvrir Q3 2026, les 10 premiers Quickscans PME sont offerts. Disponibilité limitée à 2-3 missions terrain par mois."
        cta={{ label: "Réserver mon Quickscan", href: "/quickscan-pme" }}
        secondaryCTA={{ label: "Échanger 30 minutes", href: "/contact" }}
      />
    </>
  );
}
