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
  title: "Legacy Rescue — Transformation de logiciels vieillissants avec l'IA",
  description:
    "Migration bloquée depuis 3 ans ? Dev clé qui part ? J'extrais votre modèle métier, je restructure avec l'IA, je forme votre équipe. Une brique à la fois. Quickscan offert pour les 10 premiers éditeurs Q3 2026.",
  path: "/legacy-rescue",
});

const faqItems = [
  {
    question: "C'est quoi un Quickscan ?",
    answer:
      "Je lis votre code pendant quelques jours. Je vous dis ce qu'il y a vraiment dedans : le modèle métier implicite, les dépendances, la dette, les risques. Vous repartez avec un plan d'action chiffré et priorisé. Offert pour les 10 premiers éditeurs Q3 2026.",
  },
  {
    question: "On n'a pas 6 mois devant nous.",
    answer:
      "Le Sprint de déverrouillage dure quelques semaines, pas des mois. Les premiers résultats sont mesurables dès les premières livraisons. On ne refait pas tout — on restructure chirurgicalement, une brique à la fois.",
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
      "Oui. Je suis agréé CII (20 % de remboursement sur les dépenses d'innovation). Les formations Claude Code sont finançables OPCO.",
  },
];

export default function LegacyRescuePage() {
  return (
    <>
      {/* Section 1 — Problem */}
      <section className="hero-dark relative px-6 pt-32 pb-20 md:pt-40">
        <div className="hero-leaf" aria-hidden="true" />
        <div className="hero-orbit" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-[var(--width-wide)]">
          <div className="max-w-3xl">
            <span className="eyebrow mb-6">Legacy Rescue · Cycle long</span>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.0] tracking-[-0.04em] text-[color:var(--color-text-strong)] [font-variation-settings:'opsz'_96]">
              Votre logiciel a de la valeur.
              <br />
              <em className="pain-text">Il est juste prisonnier de son propre code.</em>
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-[1.6] text-[color:var(--color-text)]">
              Le produit tourne. Les clients paient. Mais la migration patine
              depuis 3 ans, chaque nouvelle feature est un calvaire, et le dev qui
              sait commence à regarder ailleurs.
            </p>
            <div className="mt-10">
              <Button href="/contact">Démarrer par un Quickscan</Button>
            </div>
            <p className="mt-4 text-sm text-[color:var(--color-muted)]">
              Engagement long · Missions de plusieurs mois · Éditeurs logiciel
            </p>
          </div>
        </div>
      </section>

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
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-lg border border-border bg-surface-elevated px-8 py-6">
              <p className="font-heading text-lg leading-snug text-text">
                &ldquo;Mon dev senior part. Il est le seul à comprendre le code.&rdquo;
              </p>
            </div>
          </Reveal>
          <Reveal delay={300}>
            <div className="rounded-lg border border-border bg-surface-elevated px-8 py-6">
              <p className="font-heading text-lg leading-snug text-text">
                &ldquo;Le concurrent shippe. Nous, on est paralysé.&rdquo;
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

          {/* Encart — Couche sémantique */}
          <Reveal delay={50}>
            <div className="rounded-lg border border-accent/30 bg-surface-elevated px-8 py-6">
              <p className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-accent">
                Ce qu&apos;on pose en premier : votre modèle métier
              </p>
              <p className="text-base leading-relaxed text-text">
                Votre métier est dans votre code — enfoui sous 10 ou 15 ans d&apos;évolutions. La première chose qu&apos;on fait, c&apos;est le rendre explicite : votre vocabulaire, vos règles, vos objets. Sans ça, aucune IA ne sera utile sur votre legacy.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-text">
              <span className="mr-2 font-heading font-bold text-accent">01</span>
              <strong>J&apos;extrais le modèle métier enfoui dans votre code.</strong>{" "}
              Avant de toucher à une ligne, je lis — jusqu&apos;à connaître le métier mieux que le code.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg leading-relaxed text-text">
              <span className="mr-2 font-heading font-bold text-accent">02</span>
              <strong>Je reconstruis sur des fondations propres.</strong>{" "}
              Avec l&apos;IA, progressivement — ancien et nouveau cohabitent jusqu&apos;à bascule. Rien ne casse pendant la transition.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-lg leading-relaxed text-text">
              <span className="mr-2 font-heading font-bold text-accent">03</span>
              <strong>Je forme votre équipe à maintenir avec l&apos;IA.</strong>{" "}
              À la sortie, l&apos;équipe est autonome. Plus besoin de moi.
            </p>
          </Reveal>

          {/* Encart — Brique à la fois */}
          <Reveal delay={350}>
            <div className="rounded-lg border border-accent/30 bg-surface-elevated px-8 py-6">
              <p className="mb-4 font-heading text-sm font-bold uppercase tracking-widest text-accent">
                Une brique à la fois. Pas un rewrite.
              </p>
              <p className="text-base leading-relaxed text-text">
                80 % des rewrites from scratch échouent. Trop gros, trop long — on paye double avant de découvrir que le périmètre était mal compris. Ce qu&apos;on fait à la place : <strong>une brique à la fois</strong>. Chaque chantier produit un gain mesurable seul. Vous pouvez vous arrêter à n&apos;importe quelle brique et garder la valeur acquise.
              </p>
            </div>
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

      {/* Section 5 — Detailed Acteur fintech européen case */}
      <CaseStudy
        title="Acteur fintech européen — Migration bloquée depuis 3 ans. Livrée."
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

      {/* Section 7.2 — Anti-garantie */}
      <Section variant="white">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Pour vous, ou pas.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2 md:items-start">
          <Reveal delay={100}>
            <div className="rounded-lg border border-border bg-surface-elevated px-8 py-6">
              <p className="eyebrow mb-5">Pour vous si…</p>
              <ul className="space-y-3 text-sm leading-relaxed text-muted">
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-accent">—</span>
                  Vous avez un produit qui tourne, des clients qui paient, et un code qui vous empêche d&apos;avancer.
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-accent">—</span>
                  Vous voulez quelqu&apos;un qui entre dans votre code, pas un consultant qui rédige un rapport.
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-accent">—</span>
                  Vous voulez une approche progressive — brique à la fois — pas un rewrite from scratch.
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-accent">—</span>
                  Vous voulez que votre équipe puisse maintenir le système après mon départ.
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-lg border border-border bg-surface-elevated px-8 py-6">
              <p className="eyebrow mb-5">Pas pour vous si…</p>
              <ul className="space-y-3 text-sm leading-relaxed text-muted">
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-muted">—</span>
                  Vous cherchez à embaucher du temps de développement (rôle d&apos;ESN).
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-muted">—</span>
                  Vous voulez une refonte from scratch sans extraction préalable du modèle métier.
                </li>
                <li className="flex gap-2">
                  <span className="shrink-0 font-bold text-muted">—</span>
                  Vous attendez une solution sans regarder votre code de près.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 6 — Track record */}
      <TrackRecord
        title="20 ans de systèmes livrés"
        systems={[
          {
            client: "Arka",
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
            client: "Acteur fintech européen",
            context: "Migration bloquée 3 ans. Extraction DDD + réécriture IA.",
            outcome: "Terminé. Talk Let It Ship.",
          },
        ]}
        footnote="Le pattern : le client arrive avec un problème technique. Il repart avec quelque chose de plus grand que ce qu'il avait demandé."
      />

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 7.1 — Bonus */}
      <Section variant="white">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Offre de lancement Q3 2026
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-4 max-w-[var(--width-content)] text-base text-muted">
            Pour les <strong className="text-text">10 premiers éditeurs</strong> qui réservent un Quickscan d&apos;ici fin Q3 2026 :
          </p>
        </Reveal>
        <div className="mt-6 max-w-[var(--width-content)] space-y-4">
          <Reveal delay={150}>
            <div className="rounded-lg border border-accent/30 bg-surface-elevated px-8 py-5">
              <p className="font-heading font-bold text-text">
                Quickscan offert{" "}
                <span className="text-sm font-normal text-muted">(valeur 4 500 €)</span>
              </p>
              <p className="mt-1 text-sm text-muted">
                Lecture de code + extraction du modèle métier + plan d&apos;action chiffré priorisé sur 6-12 mois.
              </p>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="rounded-lg border border-border bg-surface-elevated px-8 py-5">
              <p className="font-heading font-bold text-text">Cartographie de la dette technique</p>
              <p className="mt-1 text-sm text-muted">
                Incluse, utilisable pour décision board / financement.
              </p>
            </div>
          </Reveal>
          <Reveal delay={250}>
            <div className="rounded-lg border border-border bg-surface-elevated px-8 py-5">
              <p className="font-heading font-bold text-text">Pré-cadrage du Sprint</p>
              <p className="mt-1 text-sm text-muted">
                Si vous décidez d&apos;enchaîner, on entre directement en exécution.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 7.3 — Financing */}
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

      {/* Section 7.4 — FAQ */}
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

      <hr className="hairline-fade mx-auto max-w-xs" />

      {/* Section 8 — Final CTA */}
      <Section variant="surface">
        <Reveal>
          <h2 className="gradient-text font-heading text-3xl leading-tight tracking-display">
            Réservez votre Quickscan.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <p className="mt-6 max-w-[var(--width-content)] text-base leading-relaxed text-muted">
            Je prends 1 à 2 missions long terme par mois. Les 10 premiers Quickscans Q3 2026 sont offerts.
          </p>
          <p className="mt-3 max-w-[var(--width-content)] text-base leading-relaxed text-muted">
            Prochain pas : un appel de 30 minutes. On voit si votre situation est un terrain qui en vaut la peine, et si je suis le bon pour intervenir.
          </p>
        </Reveal>
        <Reveal delay={200}>
          <div className="mt-8 flex flex-col items-start gap-4">
            <Button href="/contact">Réserver mon Quickscan</Button>
            <a
              href="/quickscan-pme"
              className="text-sm text-muted underline underline-offset-4 transition-colors hover:text-text"
            >
              Voir aussi — Quickscan PME (cycle court)
            </a>
          </div>
        </Reveal>
      </Section>
    </>
  );
}
