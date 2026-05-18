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
        eyebrow="Disponible Q3 2026 · Tech leader détaché · 20 ans CTO"
        pulse
        title={
          <>
            Le code, l&apos;IA, votre business.
            <br />
            <em>Je croise les trois.</em>
          </>
        }
        subtitle={
          <>
            <p>
              L&apos;IA ne gagnera pas la bataille à votre place.
              <br />
              Mais elle peut vous faire gagner du terrain.
            </p>
            <p className="mt-3 text-base text-[color:var(--color-muted)]">
              20 ans CTO, engagé dans la croissance de PME et éditeurs logiciel. Vannes, Bretagne, France entière.
            </p>
          </>
        }
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
                Votre migration patine depuis 3 ans. Le dev qui sait commence à regarder ailleurs. Chaque nouvelle feature est un calvaire.
              </p>
              <p className="mt-3 text-[15px] leading-[1.7] text-[color:var(--color-text)]">
                J&apos;extrais le modèle métier enfoui dans votre code (DDD), je restructure sur des fondations propres avec l&apos;IA, je forme votre équipe à maintenir avec Claude Code. À la sortie, le système tient sans moi.
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
                Vous avez essayé ChatGPT. Vos équipes aussi. Quelques gains à la marge, rien qui touche le cœur du métier.
              </p>
              <p className="mt-3 text-[15px] leading-[1.7] text-[color:var(--color-text)]">
                Une journée chez vous. Je radiographie votre fonctionnement réel, je pose la couche sémantique métier, je vous laisse un plan d&apos;action écrit avec 2-3 chantiers prêts à démarrer.
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

      {/* Section 4 — CaseStudy iRaiser */}
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
                Vos mots, votre vocabulaire, vos objets et règles métier. ChatGPT ne sait pas comment vous appelez vos clients, vos produits, vos étapes. Sans cette couche posée, l&apos;IA reste générique. Une fois posée, n&apos;importe quelle IA (Claude, ChatGPT, votre propre LLM) devient pertinente sur votre activité.
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
            client: "Arkea",
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
            client: "iRaiser",
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
