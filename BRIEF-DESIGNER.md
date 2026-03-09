# Brief designer front — vincentdolez.fr v1

> Finition et retouches du site existant. Le scaffold est fonctionnel (5 pages, build OK, contenu intégré). L'objectif : passer de "template propre" à "luxe discret intentionnel".

---

## Contexte

**Qui** : Vincent Dolez — freelance senior, "AI Operating Partner". Pas dev, pas prompt engineer.
**Cibles** : CEO de PME services/conseil (Marc, 40 ans, pragmatique, impatient) et directrice ops (Sophie, structurée, valide en interne).
**Sensation visée** : "Enfin quelqu'un qui comprend." / "Il a l'air structuré, on va pouvoir bosser ensemble."
**Positionnement visuel** : consultant senior, rassurant, minimal corporate. Le site *est* la preuve d'expertise.

---

## Ce qu'on EST / Ce qu'on n'est PAS

| OUI | NON |
|---|---|
| Minimal corporate, blanc dominant | Dark hacker (terminal vert sur noir) |
| Typographie forte et lisible | Tech brutaliste (glitch, grilles cassées) |
| Espaces généreux (le vide = séniorité) | Startup flashy (dégradés, cartoon) |
| Sobriété stratégique | "IA futuriste" (néon, neural networks) |
| Zéro illustration décorative | Stock photos, illustrations |

**Référence d'esprit** : luxe silencieux (Bottega Veneta, Celine, Aesop). L'expertise se lit dans les détails qu'on ne remarque pas consciemment.

---

## Stack technique

- **Framework** : Next.js (App Router)
- **Style** : Tailwind CSS + design tokens custom
- **Contenu** : MDX
- **Hébergement** : Vercel
- **Polices** : DM Serif Display (titres), DM Sans (corps), JetBrains Mono (code)
- **Animations** : CSS pur + Intersection Observer. Zéro librairie d'animation.

---

## Design tokens (extraits clés)

### Palette

```
Fond principal :  #FFFFFF (blanc)
Texte :           #1A1A1A (noir chaud)
Texte secondaire: #6B7280 (gris muted)
Accent (CTA) :    #2563EB (bleu sobre)
Surface :         #F9FAFB (gris très léger)
Bordures :        #E5E7EB (séparateurs subtils)
```

### Typo

| Usage | Police | Poids | Signal |
|---|---|---|---|
| Titres | DM Serif Display | 400 | Autorité, séniorité, élégance |
| Corps | DM Sans | 400, 500, 700 | Moderne, lisible |
| Code | JetBrains Mono | 400 | Technique |

### Échelle

```
text-base:  16px   — corps
text-lg:    18px   — corps large
text-xl:    20px   — h3, sous-titres
text-2xl:   24px   — h2 sections
text-3xl:   30px   — h2 important
text-4xl:   36px   — h1 pages
text-5xl:   48px   — hero, formule centrale
```

### Espacements

Base unit 4px. Tout est un multiple de 4.
Inter-sections : 96px minimum (128px pour les sections principales).
Hero : plein écran (`min-h-screen`).

### Radius / Shadows

```
radius-md: 6px (boutons), radius-lg: 8px (cards)
shadow-sm: repos, shadow-md: hover (transition 400ms)
```

---

## Architecture des pages (5 pages v1)

| Page | Rôle | Sections |
|---|---|---|
| `/` Accueil | Première impression + CTA | Hero, Problème (3 cards), Approche (4 étapes), Preuves (métriques), CTA final |
| `/a-propos` | Crédibilité | Intro, Convictions (grid 2x2), Méthode (3 étapes), CTA |
| `/offres` | Comprendre les 3 niveaux | Intro, Progression, 3 cards offre empilées, FAQ accordéon, CTA |
| `/blog` | Acquisition SEO | Titre, Filtres par pilier, Liste articles verticale |
| `/contact` | Conversion | Titre, 2 colonnes (formulaire + alternatives), Réassurance |

---

## Composants existants

```
components/
├── blocks/
│   ├── Hero.tsx, HeroCanvas.tsx, HeroCanvasLazy.tsx
│   ├── ProblemGrid.tsx, StepList.tsx, MetricRow.tsx
│   ├── ConvictionGrid.tsx, OfferCard.tsx, ProgressionBar.tsx
│   ├── CTASection.tsx, ContactForm.tsx
│   ├── BlogIndex.tsx, BlogList.tsx, BlogFilters.tsx
├── layout/
│   ├── Header.tsx, Footer.tsx, Section.tsx
├── mdx/
│   └── MDXComponents.tsx
├── ui/
│   ├── Accordion.tsx, Button.tsx, Card.tsx, Reveal.tsx, Tag.tsx
```

---

## Roadmap des retouches (par priorité)

### Sprint 1 — Quick wins visuels (le site passe de "template" à "intentionnel")

#### P0 — Bugs fonctionnels

1. **Mobile nav burger** — le header overflow sur mobile, les liens se chevauchent. Menu hamburger + animation slide-down. CTA sticky en bas sur mobile.
2. **Blog metadata SSR** — `/blog` est un client component, pas de metadata export. Extraire les filtres client, rendre la page serveur (SEO).
3. **Scroll reveal non câblé** — la classe `.reveal` existe dans `globals.css` mais rien ne l'utilise. Brancher `<Reveal>` (Intersection Observer).
4. **Button secondary trop léger** — ajouter `font-medium`.
5. **Article de démo** — ajouter 1 article MDX pour valider le pipeline complet.
6. **Mentions légales** — le footer pointe vers une route inexistante.

#### P1 — Proportions & espacement

- **Hero** : `min-h-screen`, formule qui flotte dans l'espace. Padding top généreux (96-128px) pour dégager du header fixe.
- **Inter-sections** : passer de `py-16` (64px) à `py-24` (96px) voire `py-32` (128px).
- **Titres** : ajouter plus d'air au-dessus (le titre doit "planer" au-dessus du contenu).
- **StepList** : `space-y-8` → `space-y-12`, filets hairline entre chaque étape.
- **OfferCards** : `max-w-2xl` trop étroit, laisser respirer sur la largeur wide.
- **MetricRow** : chiffres en `text-5xl` ou `text-6xl` (actuellement `text-4xl`, pas assez de punch).
- **Footer** : espace plus généreux avant le footer (min 96px).

#### P2 — Micro-détails typographiques

- **Letter-spacing titres** : tracking négatif custom `-0.03em` sur DM Serif Display (hero + h2). `tracking-tight` standard est insuffisant.
- **Gradient titres** : `stone-700 → stone-500` trop visible/grisé. Subtiliser en `stone-800 → stone-600` (quasi-noir avec frémissement).
- **Sous-titres hero** : `text-lg text-muted` trop timide → `text-xl text-stone-500`.
- **Filets hairline** : insérer des `<hr>` en `hairline-fade` (opacité 0 → 0.3 → 0) entre les sections.
- **Font-feature-settings** : vérifier `"kern" 1, "liga" 1` sur les Google Fonts.
- **Largeur de ligne** : contraindre le corps à `max-w-[720px]` (< 75 caractères/ligne).

---

### Sprint 2 — Sophistication (la couche "luxe discret")

#### P3 — Composants

**Header :**
- Glass effect : `backdrop-blur-lg backdrop-saturate-150`, bordure inférieure qui apparaît au scroll.
- Logo hover : transition subtile (opacity shift ou micro letter-spacing).
- Nav active : filet fin sous le lien actif.

**Hero :**
- Canvas générative : augmenter opacité trails à 0.06-0.08. Corriger les artefacts (lignes verticales) → Simplex noise.
- Formule : casser en 3 lignes distinctes ("Comprendre d'abord." / "Structurer." / "Puis accélérer.") avec rythme propre par ligne.
- CTA hover : fond transparent → stone-100 (secondary), légère élévation shadow (primary). Transition 400ms `cubic-bezier(0.4, 0, 0.2, 1)`.

**Problem Grid :**
- Cards : `shadow-sm` au repos → `shadow-md` au hover (transition 400ms).
- Icônes minimalistes (trait fin, monochrome) par problème.

**Metrics :**
- Count-up animation au scroll reveal.
- Séparateurs hairline verticaux entre les 3 métriques.

**Offer Cards :**
- Élément distinctif par offre (numérotation, progression visuelle Quickscan → Sprint → Partner).
- Card Sprint : traitement "recommandé" (bordure accent, badge).

**FAQ Accordion :**
- Animation ease-out plus douce sur le contenu.
- Chevron animé au lieu du `+` / `×` basique.

**Contact Form :**
- Labels flottants au focus, bordure animée, focus ring accent subtil.
- Bouton pleine largeur sur mobile.
- Animation checkmark sur l'état succès.

**CTA Sections :**
- Fond surface subtil, filet au-dessus, plus d'espacement vertical.

#### P4 — Animations & transitions

- **Scroll reveal global** : fade-in 600ms + translateY(8px), Intersection Observer threshold 0.1 sur tous les blocs.
- **Staggered reveal** : grilles (ProblemGrid, ConvictionGrid, piliers blog) en séquence, stagger 100ms/item.
- **Page transitions** : fade cross-dissolve 200ms (View Transitions API).
- **Header scroll** : réduction padding + taille logo au scroll.
- **Link underline** : underline animé de gauche à droite au hover (clip-path).

---

### Sprint 3 — Mobile + contenu + deploy

#### P5 — Mobile

- **Burger menu** : overlay fullscreen, fond blur, liens empilés, CTA prominent.
- **CTA sticky** : bouton "Prendre rendez-vous" sticky bottom sur mobile.
- **Hero responsive** : `text-3xl` mobile / `text-4xl` tablet / `text-5xl` desktop.
- **Metrics** : stack en colonne sur mobile.
- **Contact** : stack vertical (form au-dessus, alternatives en-dessous).
- **Touch targets** : minimum 44x44px partout.
- **ProgressionBar** : passer en vertical sur mobile.

#### P6 — SEO & Performance

- OG image typographique (1200x630, formule hero).
- Favicon minimaliste (initiales VD en DM Serif).
- Google Analytics (GA4, `afterInteractive`).
- Canonical URLs.
- Core Web Vitals : LCP < 2.5s, CLS < 0.1.

---

## Principes de design (résumé pour le designer)

1. **Clarté avant esthétique** — chaque élément visuel sert la compréhension.
2. **Contraste par la typographie** — la hiérarchie vient des polices, pas des couleurs.
3. **Espacement généreux** — le calme visuel signale la séniorité.
4. **La couleur est un accident** — pas de palette d'accent. Un mot gradient, un hover qui révèle un stone plus chaud. Événement rare.
5. **Preuves, pas décorations** — graphiques, avant/après, métriques. Zéro stock photo.
6. **60fps, zéro librairie** — CSS transitions, Intersection Observer. Le code est aussi propre que le rendu.
7. **Le site est le message** — la qualité de fabrication *est* la preuve d'expertise.

---

## Livrables attendus

Le designer intervient sur le code existant (Next.js + Tailwind). Les retouches sont directement dans les composants. Pas de maquette Figma intermédiaire sauf si un choix de direction nécessite validation.

**Critère de done** : le site donne l'impression que chaque pixel est intentionnel. Un CEO qui arrive dessus pense "c'est sérieux" en 3 secondes.
