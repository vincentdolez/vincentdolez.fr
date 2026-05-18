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
    "Une journée terrain dans votre entreprise. Je vous montre où l'IA fait gagner du temps réel — pas un POC. Plan d'action écrit pour votre activité. Bretagne et 2 h autour. 10 premiers Quickscans offerts.",
  path: "/quickscan-pme",
});

const quickscanJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Quickscan PME — Vous avez essayé l'IA, rien n'a changé sur votre métier",
  description:
    "Quickscan terrain pour dirigeants de PME : une journée chez vous, un plan d'action IA écrit pour votre activité. 10 premiers offerts en Q3 2026.",
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
    question: "Combien ça coûte après les 10 premiers ?",
    answer:
      "1 800 € HT pour une journée terrain + plan d'action écrit. Si une mission suit, le Quickscan est déduit.",
  },
  {
    question: "On a déjà fait un audit l'an dernier.",
    answer:
      "Probablement par un consultant qui n'est pas entré dans vos outils. Le Quickscan n'est pas un audit conformité ou un état des lieux flou. C'est un plan d'action terrain avec des chantiers prêts à démarrer.",
  },
  {
    question: "Et après le Quickscan, vous faites quoi ?",
    answer:
      "Deux cas naturels. (1) Vous exécutez avec votre équipe — le plan est écrit pour ça. Je peux rester en appui ponctuel si une question bloque. (2) Vous me confiez la suite — on enchaîne sur le premier chantier. Sprint court, livraison terrain, équipe formée pour reprendre seule à la sortie.",
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
            <span className="eyebrow mb-6">Quickscan PME · Cycle court</span>
            <h1 className="font-heading text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[1.0] tracking-[-0.04em] text-[color:var(--color-text-strong)] [font-variation-settings:'opsz'_96]">
              Vous avez essayé l&apos;IA.
              <br />
              <em className="pain-text">
                Rien n&apos;a changé sur votre métier.
              </em>
            </h1>
            <p className="mt-8 max-w-2xl text-xl leading-[1.6] text-[color:var(--color-text)]">
              Pas par hasard. Sans méthode, sans contexte, sans système — même
              la meilleure IA produit du plausible, pas du juste. Vous avez
              passé plus de temps à reprendre les sorties qu&apos;à faire
              vous-même.
            </p>
            <p className="mt-5 max-w-2xl text-xl leading-[1.6] text-[color:var(--color-text)]">
              Je viens chez vous. Je regarde votre métier. Je vous montre où
              l&apos;IA fait gagner du temps réel, et comment l&apos;utiliser
              pour de vrai.
            </p>
            <div className="mt-10">
              <Button href="/contact">Réserver un Quickscan</Button>
            </div>
            <p className="mt-4 text-sm text-[color:var(--color-muted)]">
              {/* TODO copy annex Q2 : "il en reste 7" — caler le compteur réel avec Vincent avant publication */}
              Disponible Q3 2026 · 10 premiers offerts · Bretagne et 2 h autour
            </p>
          </div>
        </div>
      </section>

      <hr className="divider-rule mx-auto max-w-2xl" />

      {/* Section 2 — Sous-titre étendu */}
      <Section variant="white" maxWidth="content">
        <Reveal>
          <span className="eyebrow mb-4">À qui s&apos;adresse le Quickscan</span>
        </Reveal>
        <div className="mt-2 space-y-5 leading-normal text-[color:var(--color-text)]">
          <Reveal delay={100}>
            <p className="text-lg leading-relaxed">
              Pour les dirigeants de PME qui ont essayé — eux, leurs équipes,
              peut-être leurs devs — et qui ont fait le même constat : du
              contenu plausible, des gains à la marge, plus de temps à reprendre
              les sorties qu&apos;à faire soi-même. Rien qui touche le cœur du
              métier. Et pour ceux qui ont du code :{" "}
              <em>«&nbsp;l&apos;IA ne marche pas sur notre legacy.&nbsp;»</em>
            </p>
          </Reveal>
          <Reveal delay={200}>
            <p className="text-lg leading-relaxed">
              Une journée terrain. Je radiographie votre fonctionnement réel.
              Vous repartez avec un plan d&apos;action écrit pour votre
              activité, et 2-3 chantiers prêts à démarrer.
            </p>
          </Reveal>
        </div>
      </Section>

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
                Vous avez ouvert ChatGPT. Vous avez demandé. La réponse était à
                côté, trop générique, parfois inventée. Vous avez passé plus de
                temps à reprendre la sortie qu&apos;à faire vous-même.
              </p>
              <p className="mt-3 leading-relaxed text-[color:var(--color-text)]">
                Vos équipes ont essayé pour la rédaction, le résumé, le tri
                d&apos;emails. Quelques gains à la marge, rien qui ait bougé la
                ligne.
              </p>
              <p className="mt-3 leading-relaxed text-[color:var(--color-text)]">
                Vos devs, s&apos;il y en a, ont testé Copilot ou Cursor.
                Verdict : «&nbsp;Ça ne marche pas sur notre code.&nbsp;» Le
                legacy, l&apos;IA s&apos;y casse les dents — parce qu&apos;elle
                n&apos;a aucun moyen de remonter votre stack, vos conventions,
                votre histoire.
              </p>
            </div>
          </Reveal>

          <Reveal delay={200}>
            <div className="rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface-elevated)] px-8 py-6">
              <p className="leading-relaxed text-[color:var(--color-text)]">
                Et même quand ça marche un peu — vous, en personne, sur vos
                dossiers — le gain reste à votre échelle. Il ne traverse pas
                l&apos;équipe. Il ne survit pas à votre semaine de congé. Il
                n&apos;apparaît pas dans les comptes.{" "}
                <strong>Un gain personnel n&apos;est pas un ROI d&apos;entreprise.</strong>
              </p>
              <p className="mt-3 leading-relaxed text-[color:var(--color-text)]">
                Le problème n&apos;est pas l&apos;IA. C&apos;est qu&apos;elle a
                été utilisée comme un moteur de recherche : sans méthode, sans
                système, sans contexte. Et l&apos;IA sans contexte fournit du
                contenu plausible — pas du résultat juste.
              </p>
              <p className="mt-3 leading-relaxed text-[color:var(--color-text)]">
                Pendant ce temps, vos concurrents parlent IA, les articles
                promettent monts et merveilles, et vous savez qu&apos;il y a un
                gain à aller chercher sans voir par où.{" "}
                <strong>95 % des POC IA ne livrent rien</strong> (étude MIT,
                2025). Ils visent à remplacer ; ce qui marche, c&apos;est
                l&apos;inverse — amplifier vos équipes sur des tâches précises,
                avec contexte et méthode.
              </p>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <p className="mt-2 text-center font-heading text-lg leading-snug tracking-tight text-[color:var(--color-text-strong)] md:text-xl">
              Ce qu&apos;il vous manque, ce n&apos;est pas plus d&apos;outils.
              C&apos;est quelqu&apos;un qui regarde votre métier de
              l&apos;intérieur, et vous montre comment utiliser l&apos;IA, sur
              quoi, avec quels garde-fous.
            </p>
          </Reveal>
        </div>
      </Section>

      <hr className="divider-rule mx-auto max-w-2xl" />

      {/* Section 4 — Solution */}
      <Section variant="white">
        <Reveal>
          <span className="eyebrow mb-4">La méthode</span>
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            Le Quickscan : je viens, je regarde,{" "}
            <em>je vous laisse un plan.</em>
          </h2>
        </Reveal>

        {/* Encart sémantique */}
        <Reveal delay={100}>
          <div className="mt-10 rounded-2xl border border-[color:var(--color-border)] bg-[color:var(--color-surface)] p-7 md:p-8">
            <span className="eyebrow mb-3">
              Ce qu&apos;on pose en premier · Votre langue métier
            </span>
            <p className="mt-2 leading-relaxed text-[color:var(--color-text)]">
              ChatGPT ne sait pas comment vous appelez vos clients, vos
              produits, vos étapes. Copilot ne sait pas ce qui distingue un
              «&nbsp;dossier&nbsp;» d&apos;un «&nbsp;lot&nbsp;» dans votre
              activité. C&apos;est pour ça que les sorties sont à côté :
              l&apos;IA générique parle français — pas votre français.
            </p>
            <p className="mt-3 leading-relaxed text-[color:var(--color-text)]">
              Une partie du Quickscan consiste à poser cette{" "}
              <strong>couche sémantique</strong> : nommer ce que vous nommez,
              modéliser vos objets métier, structurer vos données pour
              qu&apos;elles parlent. Une fois posée, n&apos;importe quelle IA
              (Claude, ChatGPT, votre propre LLM) devient pertinente sur votre
              activité. Sans elle, aucune IA ne le sera jamais.
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
                Je radiographie ce qui marche, ce qui se perd.
              </strong>{" "}
              Je remonte la chaîne réelle : flux d&apos;information, points de
              friction, doublons de saisie, dépendance sur une ou deux
              personnes. Je cartographie vos usages IA actuels et leur niveau
              de risque (IA Act).
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
              Une brique à la fois · Pas un grand soir
            </span>
            <p className="mt-2 leading-relaxed text-[color:var(--color-text)]">
              <em>
                «&nbsp;ChatGPT m&apos;aide énormément sur mes dossiers — mais
                ça n&apos;a pas changé l&apos;entreprise.&nbsp;»
              </em>{" "}
              C&apos;est la phrase qu&apos;on entend le plus. Elle est juste :
              un gain personnel n&apos;est pas un ROI d&apos;entreprise.
            </p>
            <p className="mt-3 leading-relaxed text-[color:var(--color-text)]">
              Le ROI vient de la <strong>systématisation</strong>. Chaque
              chantier qu&apos;on lance produit un gain mesurable tout seul —
              et prépare le terrain pour le suivant. Mois après mois, vous ne
              payez pas un POC géant qui promet de tout changer : vous posez
              des briques qui se renforcent. À la fin, vous n&apos;avez pas une
              démo. Vous avez <strong>un système</strong>.
            </p>
            <p className="mt-3 leading-relaxed text-[color:var(--color-text)]">
              Chaque brique tient seule. Vous pouvez vous arrêter à
              n&apos;importe laquelle et garder la valeur acquise. Vous mesurez
              à chaque étape.
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
            client: "iRaiser",
            context: "Éditeur logiciel, migration bloquée depuis 3 ans.",
            outcome: "Livrée. Talk Let It Ship.",
          },
          {
            client: "Arkea",
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
            15 ans CTO. Quatre maisons menées de la première ligne au produit
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
            Les <em>10 premières PME</em> qui réservent un Quickscan.
          </h2>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-8 rounded-2xl border border-[color:var(--color-ink)] bg-[color:var(--color-surface-elevated)] p-7 shadow-md md:p-8">
            <ul className="space-y-4 leading-relaxed text-[color:var(--color-text)]">
              <li>
                <strong>Quickscan offert</strong>{" "}
                {/* TODO copy annex Q1 : confirmer affichage public du tarif 1 800 € HT */}
                (valeur 1 800 €) — une journée terrain + plan d&apos;action
                écrit.
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
            <p className="mt-6 border-t border-[color:var(--color-border)] pt-5 text-sm leading-relaxed text-[color:var(--color-muted)]">
              En contrepartie : j&apos;utilise vos résultats (anonymisés si
              vous le souhaitez) pour montrer ce que donne un Quickscan PME en
              pratique. Vous gagnez un diagnostic terrain ; je gagne des
              preuves.
            </p>
          </div>
        </Reveal>
      </Section>

      <hr className="divider-rule mx-auto max-w-2xl" />

      {/* Section 6.2 — Anti-garantie */}
      <Section variant="white">
        <Reveal>
          <span className="eyebrow mb-4">Anti-garantie</span>
          <h2 className="font-heading text-3xl font-semibold leading-tight tracking-[-0.04em] text-[color:var(--color-text-strong)] text-balance md:text-4xl">
            Pour qui · <em>pour qui pas.</em>
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
                  Vous voulez prendre de l&apos;avance sur vos concurrents avec
                  un partenaire capable de prendre la suite.
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
                  Vous attendez que l&apos;IA résolve un problème que vous
                  n&apos;avez pas encore formulé.
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
      {/* TODO copy annex Q2 : "il en reste 7" — caler le compteur réel avec Vincent avant publication */}
      <CTASection
        text={"Réservez votre Quickscan.\nIl en reste 7 sur Q3 2026."}
        primaryCTA={{ label: "Réserver mon Quickscan", href: "/contact" }}
        secondaryCTA={{
          label: "Voir aussi · IA Act",
          href: "/ia-act",
        }}
      />
    </>
  );
}
