import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { ProcessTimeline } from "@/components/blocks/ProcessTimeline";
import { TrackRecord } from "@/components/blocks/TrackRecord";
import { CaseStudy } from "@/components/blocks/CaseStudy";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title: "Legacy Rescue — Transformation de logiciels vieillissants",
  description:
    "Migration bloquée depuis 3 ans ? Dev clé qui part ? Je transforme votre logiciel legacy en capital avec l'IA. Quickscan offert.",
  path: "/legacy-rescue",
});

const faqItems = [
  {
    question: "C'est quoi un Quickscan ?",
    answer:
      "Je lis votre code pendant quelques jours. Je vous dis ce qu'il y a vraiment dedans : le modèle métier implicite, les dépendances, la dette, les risques. Vous repartez avec un plan d'action chiffré et priorisé.",
  },
  {
    question: "On n'a pas 6 mois devant nous.",
    answer:
      "Le Sprint de déverrouillage dure quelques semaines, pas des mois. Les premiers résultats sont mesurables dès les premières livraisons. On ne refait pas tout — on restructure chirurgicalement.",
  },
  {
    question: "Notre CTO dit que la migration avance.",
    answer:
      "Il le pense peut-être sincèrement. Un regard extérieur peut voir ce que l'équipe interne ne voit plus. Le Quickscan est là pour ça — un diagnostic sans engagement.",
  },
  {
    question: "C'est quoi la différence avec une ESN ?",
    answer:
      "Une ESN livre du temps de développement. Je livre un système. J'extrais le modèle métier avant de toucher au code. Je forme l'équipe à le maintenir avec l'IA. À la sortie, vous n'avez plus besoin de moi.",
  },
  {
    question: "On peut financer ça ?",
    answer:
      "Oui. Je suis agréé CII (20% de remboursement sur les dépenses d'innovation). Les formations sont finançables OPCO.",
  },
];

export default function LegacyRescuePage() {
  return (
    <>
      {/* Section 1 — Problem */}
      <Section variant="white" className="pt-32 pb-12">
        <Reveal>
          <h1 className="max-w-3xl font-heading text-4xl leading-tight tracking-display md:text-5xl">
            Votre logiciel a de la valeur.
            <br />
            <span className="pain-text">Il est juste prisonnier de son propre code.</span>
          </h1>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-8 max-w-[var(--width-content)] text-xl leading-relaxed text-muted">
            Le produit tourne. Les clients paient. Mais la migration patine
            depuis 3 ans, chaque nouvelle feature est un calvaire, et le dev qui
            sait commence à regarder ailleurs.
          </p>
        </Reveal>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 2 — Agitation */}
      <Section variant="surface">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Ce que vous vivez
          </h2>
        </Reveal>
        <div className="mt-10 max-w-[var(--width-content)] space-y-8">
          <Reveal delay={100}>
            <div className="rounded-lg border border-border bg-surface-elevated px-8 py-6">
              <p className="font-heading text-lg leading-snug text-text">
                &ldquo;La migration dure depuis 3 ans et on ne voit pas le bout.&rdquo;
              </p>
              <p className="mt-2 text-sm text-muted">
                Le CTO dit &ldquo;bientôt fini&rdquo;. Les devs s&apos;enlisent dans le legacy.
                Chaque tentative de refonte crée plus de problèmes qu&apos;elle n&apos;en résout.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-lg border border-border bg-surface-elevated px-8 py-6">
              <p className="font-heading text-lg leading-snug text-text">
                &ldquo;Mon dev senior part. Il est le seul à comprendre le code.&rdquo;
              </p>
              <p className="mt-2 text-sm text-muted">
                La connaissance métier est dans les têtes — quand elles partent,
                le savoir part avec. Pas de doc, pas de modèle, juste du code que
                personne d&apos;autre n&apos;ose toucher.
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="rounded-lg border border-border bg-surface-elevated px-8 py-6">
              <p className="font-heading text-lg leading-snug text-text">
                &ldquo;Le concurrent shippe. Nous, on est paralysé.&rdquo;
              </p>
              <p className="mt-2 text-sm text-muted">
                L&apos;IA change la donne pour ceux qui peuvent en profiter. Mais votre
                legacy vous empêche d&apos;y toucher. Chaque mois perdu creuse l&apos;écart.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* CTA #1 */}
      <Section variant="white">
        <Reveal>
          <div className="text-center">
            <Button href="/contact">Prendre rendez-vous</Button>
            <p className="mt-3 text-sm text-muted">30 minutes. Pas de pitch. Un vrai diagnostic.</p>
          </div>
        </Reveal>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 3 — Solution */}
      <Section variant="white">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Ce que je fais
          </h2>
        </Reveal>
        <div className="mt-10 max-w-[var(--width-content)] space-y-8">
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-text">
              <span className="mr-2 font-heading font-bold text-accent">01</span>
              <strong>J&apos;extrais le modèle métier enfoui dans votre code.</strong>{" "}
              Avant de toucher à une ligne, je lis. DDD, cartographie des dépendances,
              identification des règles métier que seul le code connaît.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg leading-relaxed text-text">
              <span className="mr-2 font-heading font-bold text-accent">02</span>
              <strong>Je reconstruis sur des fondations propres.</strong>{" "}
              Réécriture model-driven avec l&apos;IA. Le code est généré, structuré,
              vérifiable, aligné sur le métier. Pas un rewrite from scratch — une
              restructuration progressive.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-lg leading-relaxed text-text">
              <span className="mr-2 font-heading font-bold text-accent">03</span>
              <strong>Je forme votre équipe à maintenir avec l&apos;IA.</strong>{" "}
              Formation Claude Code intégrée au transfert. L&apos;outil qui a servi à
              réparer devient l&apos;outil du quotidien de vos devs.
            </p>
          </Reveal>
          <Reveal delay={400}>
            <p className="mt-6 text-center font-heading text-lg font-bold tracking-display text-accent">
              À la sortie : un système maintenable. Une équipe autonome. Plus besoin de moi.
            </p>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 4 — Process timeline */}
      <ProcessTimeline
        title="Le parcours"
        steps={[
          {
            label: "Quickscan",
            duration: "Quelques jours",
            description:
              "Je lis votre code. J'extrais le modèle métier implicite, les dépendances, la dette. Vous repartez avec un plan d'action chiffré.",
            deliverable: "Diagnostic + plan d'action priorisé",
          },
          {
            label: "Sprint",
            duration: "Quelques semaines",
            description:
              "2-3 livraisons mesurables sur les priorités identifiées. Réécriture model-driven, résultats avant/après chiffrés.",
            deliverable: "Code restructuré + résultats mesurables",
            highlighted: true,
          },
          {
            label: "Partnership",
            duration: "Mois / trimestres",
            description:
              "Partenariat continu — chaque mois on avance, on mesure, on capitalise. Formation Claude Code pour l'équipe.",
            deliverable: "Système autonome + équipe formée",
          },
        ]}
      />

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 5 — Detailed iRaiser case */}
      <CaseStudy
        title="iRaiser — Migration bloquée depuis 3 ans. Livrée."
        paragraphs={[
          "Éditeur logiciel, secteur fundraising. Le produit avait 15 ans de code, personne ne maîtrisait l'ensemble, chaque tentative de migration échouait. Trop gros, trop risqué, trop cher.",
          "J'ai conçu des agents IA qui ont analysé le code, la documentation, les tutoriaux vidéo, les transcripts d'interviews utilisateurs. D'autres agents ont modélisé l'activité métier. D'autres encore ont mappé ce qu'ils avaient découvert dans le code sur le modèle métier — puis analysé les écarts et affiné le modèle jusqu'à convergence.",
          "À partir de ce modèle, j'ai reconstruit sur des fondations propres, en isolant l'ancien système pour que le nouveau fonctionne sans tout casser. Le code a été généré par IA, structuré, vérifiable, aligné sur le métier.",
        ]}
        result="Résultat : migration livrée. Le modèle est dans le code. L'équipe est autonome. Talk « Let It Ship » — retour de terrain sur cette mission."
      />

      {/* CTA #2 */}
      <Section variant="surface">
        <Reveal>
          <div className="text-center">
            <Button href="/contact">Prendre rendez-vous</Button>
            <p className="mt-3 text-sm text-muted">Quickscan offert pour les 10 premiers.</p>
          </div>
        </Reveal>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 6 — Track record */}
      <TrackRecord
        title="20 ans de systèmes livrés"
        systems={[
          {
            client: "Arkea",
            context: "D'une graine — animer des images 3D — un produit + ERP + portail client.",
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
            context: "Migration bloquée 3 ans. Extraction DDD + réécriture IA.",
            outcome: "Terminé. Talk Let It Ship.",
          },
        ]}
        footnote="Le pattern : le client arrive avec un problème technique. Il repart avec quelque chose de plus grand que ce qu'il avait demandé."
      />

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 7 — Financing */}
      <Section variant="surface">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Leviers de financement
          </h2>
        </Reveal>
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <Reveal delay={100}>
            <div className="rounded-lg border border-border bg-surface-elevated p-6">
              <h3 className="font-heading text-xl font-bold tracking-display text-accent">
                CII
              </h3>
              <p className="mt-2 text-text">
                Agréé Crédit Impôt Innovation. 20% de vos dépenses
                d&apos;innovation remboursées par l&apos;État.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-lg border border-border bg-surface-elevated p-6">
              <h3 className="font-heading text-xl font-bold tracking-display text-accent">
                OPCO
              </h3>
              <p className="mt-2 text-text">
                Les formations Claude Code sont finançables via votre budget formation.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 8 — FAQ */}
      <Section variant="white">
        <Reveal>
          <h2 className="gradient-text mb-8 font-heading text-3xl leading-tight tracking-display">
            Questions fréquentes
          </h2>
        </Reveal>
        <div className="mx-auto max-w-2xl">
          <Accordion items={faqItems} />
        </div>
      </Section>

    </>
  );
}
