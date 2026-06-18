import type { Metadata } from "next";
import { Section } from "@/components/layout/Section";
import { Button } from "@/components/ui/Button";
import { CTASection } from "@/components/blocks/CTASection";
import { TrackRecord } from "@/components/blocks/TrackRecord";
import { Accordion } from "@/components/ui/Accordion";
import { Reveal } from "@/components/ui/Reveal";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  title:
    "Quickscan PME — Vous avez essayé l'IA, rien n'a changé sur votre métier",
  description:
    "Une journée terrain dans votre entreprise. Je vous montre où l'IA fait gagner du temps réel — pas un POC. Plan d'action écrit pour votre activité. Bretagne et 2 h autour. Offert pour le lancement.",
  path: "/quickscan-pme",
});

const quickscanJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Quickscan PME — Vous avez essayé l'IA, rien n'a changé sur votre métier",
  description:
    "Quickscan terrain pour dirigeants de PME : une journée chez vous, un plan d'action IA écrit pour votre activité. Offert pour le lancement Q3 2026.",
  url: "https://vincentdolez.fr/quickscan-pme",
  author: {
    "@type": "Person",
    name: "Vincent Dolez",
    url: "https://vincentdolez.fr",
  },
};

const faqItems = [
  {
    question: "Combien de temps ça prend ?",
    answer:
      "Une journée sur place. Deux à trois jours d'analyse après. Vous recevez le plan d'action dans la semaine qui suit.",
  },
  {
    question: "On n'a pas d'équipe tech. Ça marche quand même ?",
    answer:
      "Surtout dans ce cas. Le Quickscan ne demande aucune compétence tech préalable. Je parle métier avec vous, je traduis. Si une suite technique est nécessaire, je la cadre — vous décidez ensuite.",
  },
  {
    question: "Combien ça coûte ?",
    answer:
      "1 800 € HT pour une journée terrain + plan d'action écrit. Si une mission suit, le Quickscan est déduit. Et pour le lancement, je l'offre.",
  },
  {
    question: "On a déjà fait un audit l'an dernier.",
    answer:
      "Probablement par un consultant qui n'est pas entré dans vos outils. Le Quickscan n'est pas un audit conformité ou un état des lieux flou. C'est un plan d'action terrain avec des chantiers prêts à démarrer.",
  },
  {
    question: "Et après le Quickscan, vous faites quoi ?",
    answer:
      "Deux cas naturels. (1) Vous exécutez avec votre équipe — le plan est écrit pour ça. Je reste en appui ponctuel si une question bloque. (2) Vous me confiez la suite. Et là, le Quickscan n'était que la porte d'entrée : industrialiser un process, solder une dette technique ou d'organisation, faire évoluer votre système d'information. Je ne pousse aucun produit — je résous le problème. Souvent celui que vous n'osiez plus regarder. Sprint court, livraison terrain, équipe formée pour reprendre seule.",
  },
  {
    question: "Vous travaillez chez nous ou à distance ?",
    answer:
      "Présentiel Bretagne et 2 h autour (Vannes, Rennes, Nantes, Brest, Lorient, Saint-Brieuc). Au-delà, on regarde au cas par cas.",
  },
];

export default function QuickscanPMEPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(quickscanJsonLd) }}
      />

      {/* Section 1 — Hero */}
      <section className="hero-dark relative px-6 pt-32 pb-20 md:pt-40">
        <div className="hero-leaf" aria-hidden="true" />
        <div className="hero-orbit" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-[var(--width-wide)]">
          <div className="max-w-3xl">
            <span className="eyebrow mb-6">Quickscan PME · Une journée</span>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.0] tracking-[-0.04em] text-[color:var(--color-text-strong)] [font-variation-settings:'opsz'_96]">
              Vous avez essayé l&apos;IA.
              <br />
              <em className="pain-text">
                Rien n&apos;a changé sur votre métier.
              </em>
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-[1.6] text-[color:var(--color-text)]">
              Je passe une journée dans votre activité. Pas pour vous vendre l&apos;IA — pour trouver les deux ou trois endroits où elle vous fait vraiment gagner du temps. Et vous laisser le plan pour y aller.
            </p>
            <div className="mt-10">
              <Button href="/contact">Réserver un Quickscan</Button>
            </div>
            <p className="mt-4 text-sm text-[color:var(--color-muted)]">
              Disponible Q3 2026 · Premiers cas offerts · Bretagne et 2 h autour
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 — Sous-titre étendu */}
      <div className="bg-[color:var(--color-bg)] px-6 pb-10">
        <div className="mx-auto max-w-[var(--width-wide)]">
          <Reveal>
            <p className="max-w-2xl text-xl leading-relaxed text-[color:var(--color-text)]">
              Une journée chez vous. Un plan d&apos;action écrit. 2-3 chantiers prêts à démarrer.
            </p>
          </Reveal>
        </div>
      </div>

      <hr className="divider-rule mx-auto max-w-2xl" />

      {/* Section 3 — Problème (PASS) */}
      <Section variant="surface">
        <Reveal>
          <span className="eyebrow mb-4">Le constat</span>
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            Vous avez essayé. Vos équipes aussi. <em>Ça n&apos;a pas pris.</em>
          </h2>
        </Reveal>
        <div className="mt-10 max-w-[var(--width-content)] space-y-6">
          <Reveal delay={100}>
            <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-elevated)] px-8 py-6">
              <p className="leading-relaxed text-[color:var(--color-text)]">
                Quelques prompts, un résumé de réunion, un mail mieux tourné. Du
                temps grappillé sur les marges — rien qui ait bougé une ligne qui
                compte. Un gain personnel n&apos;est pas un ROI d&apos;entreprise :
                l&apos;IA sans contexte produit du plausible, pas du juste.
              </p>
              <p className="mt-3 leading-relaxed text-[color:var(--color-text)]">
                <strong>Le vrai gisement est ailleurs.</strong> Dans les
                opérations que vous portez à bout de bras — celles qui touchent
                vos clients, qui ne tolèrent pas l&apos;erreur, et que personne
                n&apos;a jamais outillées.
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      <hr className="divider-rule mx-auto max-w-2xl" />

      {/* Section 4 — Solution */}
      <Section variant="white">
        <Reveal>
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            Je viens, je regarde,{" "}
            <em>je vous laisse un plan.</em>
          </h2>
        </Reveal>

        {/* Encart sémantique */}
        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-7 md:p-8">
            <span className="eyebrow mb-3">
              Ce qu&apos;on pose en premier
            </span>
            <p className="mt-2 leading-relaxed text-[color:var(--color-text)]">
              L&apos;IA générique parle français — pas votre français. Une partie du Quickscan consiste à poser votre <strong>langue métier</strong> : vos objets, vos règles, votre vocabulaire. Sans ça, aucune IA ne sera pertinente sur votre activité.
            </p>
          </div>
        </Reveal>

        <hr className="hairline-fade mx-auto my-12 max-w-xs" />

        {/* Trois étapes */}
        <div className="max-w-[var(--width-content)] space-y-8">
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed text-[color:var(--color-text)]">
              <span className="mr-2 font-heading font-bold text-[color:var(--color-vd-moss)]">
                01
              </span>
              <strong>Je passe une journée chez vous.</strong> En présentiel
              quand c&apos;est possible (Vannes, Rennes, Nantes, Brest). On
              parle vrai : qui fait quoi, avec quels outils, où ça coince, où
              sont les leviers. Je vois vos écrans, pas vos slides.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg leading-relaxed text-[color:var(--color-text)]">
              <span className="mr-2 font-heading font-bold text-[color:var(--color-vd-moss)]">
                02
              </span>
              <strong>
                Je radiographie ce qui marche et ce qui se perd.
              </strong>{" "}
              Où l&apos;info se recopie trois fois, où un devis attend deux
              jours, où tout tient sur une seule personne qui a la tête pleine.
              Et je regarde vos usages IA actuels — ce qu&apos;ils valent, ce
              qu&apos;ils risquent côté IA Act.
            </p>
          </Reveal>
          <Reveal delay={300}>
            <p className="text-lg leading-relaxed text-[color:var(--color-text)]">
              <span className="mr-2 font-heading font-bold text-[color:var(--color-vd-moss)]">
                03
              </span>
              <strong>Le plan vous appartient.</strong> Vous repartez avec un
              document écrit pour vous : 2-3 chantiers prêts à démarrer, gains
              attendus, coût et durée en ordre de grandeur, leviers de
              financement (CII, OPCO), ce que votre équipe peut prendre, ce
              sur quoi vous voudriez de la suite.
            </p>
          </Reveal>
        </div>

        <hr className="hairline-fade mx-auto my-12 max-w-xs" />

        {/* Encart compound */}
        <Reveal delay={100}>
          <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-7 md:p-8">
            <span className="eyebrow mb-3">
              Une brique à la fois
            </span>
            <p className="mt-2 leading-relaxed text-[color:var(--color-text)]">
              Chaque chantier produit un gain mesurable seul — et prépare le suivant. À la fin, vous n&apos;avez pas une démo. Vous avez <strong>un système</strong>.
            </p>
          </div>
        </Reveal>

        {/* Ligne forte */}
        <Reveal delay={200}>
          <p className="mt-12 whitespace-pre-line text-center font-heading text-xl font-semibold leading-snug tracking-tight text-[color:var(--color-text-strong)] md:text-2xl">
            Pas un POC.{"\n"}Pas un audit qui finit dans un tiroir.{"\n"}
            <span className="gradient-text">
              Du terrain gagné, par écrit, prêt à exécuter.
            </span>
          </p>
        </Reveal>
      </Section>

      {/* Mid-page CTA */}
      <Section variant="white" className="pt-0">
        <Reveal>
          <div className="text-center">
            <Button href="/contact">Réserver mon Quickscan</Button>
            <p className="mt-3 text-sm text-[color:var(--color-muted)]">
              30 minutes d&apos;échange pour qualifier. Pas de pitch.
            </p>
          </div>
        </Reveal>
      </Section>

      <hr className="divider-rule mx-auto max-w-2xl" />

      {/* Section 5 — Preuves */}
      <TrackRecord
        eyebrow="Preuves"
        title="20 ans à entrer dans des entreprises et à en sortir le système qui manquait."
        systems={[
          {
            client: "Acteur fintech européen",
            context: "Éditeur logiciel, migration bloquée depuis 3 ans.",
            outcome: "Livrée. Talk Let It Ship.",
          },
          {
            client: "Arka",
            context:
              "D'une idée (images 3D animées) à un produit + ERP + portail client.",
            outcome: "Business durable.",
          },
          {
            client: "Manganelli",
            context:
              "Boîtier obsolète transformé en logiciel de pilotage d'écrans.",
            outcome: "Leader du marché.",
          },
          {
            client: "Jackpot.io",
            context: "Plateforme from scratch, circuit financier complet.",
            outcome: "5 ans d'exploitation, revente propre.",
          },
        ]}
        footnote="Le dirigeant arrive avec un problème technique. Il repart avec quelque chose de plus grand que ce qu'il avait demandé. Pas parce que je vends plus — parce que regarder une activité sérieusement révèle ce qu'elle n'osait plus se dire."
      />

      {/* Encart posture sobre */}
      <Section variant="white" maxWidth="content" className="pt-0">
        <Reveal>
          <p className="mx-auto max-w-2xl text-center text-base leading-relaxed text-[color:var(--color-muted)]">
            20 ans CTO. Quatre maisons menées de la première ligne au produit
            qui dure. Pas de «&nbsp;transformation digitale&nbsp;» — je règle
            des problèmes précis avec des dirigeants qui ont une équipe et des
            clients.
          </p>
        </Reveal>
      </Section>

      <hr className="divider-rule mx-auto max-w-2xl" />

      {/* Section 6.1 — Bonus offre de lancement */}
      <Section variant="surface" maxWidth="content">
        <Reveal>
          <span className="eyebrow mb-4">Offre de lancement · Q3 2026</span>
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            Le Quickscan, <em>offert.</em>
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8 rounded-2xl border border-[color:var(--color-ink)] bg-[color:var(--color-surface-elevated)] p-7 shadow-md md:p-8">
            <ul className="space-y-4 leading-relaxed text-[color:var(--color-text)]">
              <li>
                <strong>Quickscan offert</strong> (valeur 1 800 €) — une journée
                terrain + plan d&apos;action écrit.
              </li>
              <li>
                <strong>Cartographie IA Act incluse</strong> — vos usages IA,
                leurs niveaux de risque, vos obligations (art. 4 en vigueur,
                art. 26/99 en août 2026).
              </li>
              <li>
                <strong>Un plan d&apos;action écrit, pas une slide</strong> —
                utilisable pour aller chercher du financement (OPCO, CII via
                partenaires agréés).
              </li>
            </ul>
          </div>
        </Reveal>
      </Section>

      <hr className="divider-rule mx-auto max-w-2xl" />

      {/* Section 6.2 — Anti-garantie */}
      <Section variant="white">
        <Reveal>
          <span className="eyebrow mb-4">Anti-garantie</span>
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            Pour vous. <em>Ou pas.</em>
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal delay={100}>
            <div className="h-full rounded-2xl border border-[color:var(--color-vd-moss)]/30 bg-[color:var(--color-surface)] p-7">
              <h3 className="font-heading text-xl font-semibold tracking-tight text-[color:var(--color-text-strong)]">
                Le Quickscan est pour vous si…
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] leading-[1.6] text-[color:var(--color-text)]">
                <li>
                  Vous avez déjà essayé l&apos;IA, et vous voulez voir ce que ça
                  donne quand quelqu&apos;un regarde votre métier vraiment.
                </li>
                <li>
                  Vous voulez un plan d&apos;action écrit pour vous, pas un
                  benchmark générique.
                </li>
                <li>
                  Vous avez un vrai chantier derrière — industrialiser un
                  process, solder une dette technique ou d&apos;organisation,
                  faire évoluer votre SI — et vous voulez quelqu&apos;un capable
                  de le mener, pas seulement de le diagnostiquer.
                </li>
              </ul>
            </div>
          </Reveal>
          <Reveal delay={200}>
            <div className="h-full rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-7">
              <h3 className="font-heading text-xl font-semibold tracking-tight text-[color:var(--color-text-strong)]">
                Le Quickscan n&apos;est pas pour vous si…
              </h3>
              <ul className="mt-4 space-y-3 text-[15px] leading-[1.6] text-[color:var(--color-muted)]">
                <li>
                  Vous cherchez à «&nbsp;faire de l&apos;IA&nbsp;» pour suivre
                  la mode.
                </li>
                <li>
                  Vous voulez un outil magique, sans rien changer à vos
                  opérations.
                </li>
                <li>
                  Vous cherchez un consultant qui livre un rapport et disparaît.
                </li>
              </ul>
            </div>
          </Reveal>
        </div>
      </Section>

      <hr className="divider-rule mx-auto max-w-2xl" />

      {/* Section 6.3 — FAQ */}
      <Section variant="surface">
        <Reveal>
          <span className="eyebrow mb-4">FAQ</span>
          <h2 className="mb-8 font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            Questions fréquentes
          </h2>
        </Reveal>
        <div className="mx-auto max-w-2xl">
          <Accordion items={faqItems} />
        </div>
      </Section>

      {/* Section 7 — CTA final */}
      <CTASection
        text={"Réservez votre Quickscan.\nPremiers cas offerts en Q3 2026."}
        primaryCTA={{ label: "Réserver mon Quickscan", href: "/contact" }}
        secondaryCTA={{
          label: "Voir aussi · IA Act",
          href: "/ia-act",
        }}
      />
    </>
  );
}
