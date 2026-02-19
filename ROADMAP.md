# Roadmap — vincentdolez.fr

> État : scaffold fonctionnel. 5 pages, build OK, contenu réel intégré.
> Verdict : propre mais générique. Le "luxe discret" manque. Insuffisant pour générer des contacts.

---

## P0 — Bugs & manquants fonctionnels

> Bloquants pour un déploiement.

- [ ] **Mobile nav burger** — le header overflow sur mobile, les liens se chevauchent. Implémenter un menu hamburger avec animation slide-down. Spec wireframes : "header avec burger, CTA sticky bottom"
- [ ] **Blog metadata** — `/blog` est un client component (`"use client"`), donc pas de metadata export. Extraire les filtres dans un sous-composant client, rendre la page serveur pour le SEO (`title: "Articles — Vincent Dolez"`)
- [ ] **Scroll reveal non câblé** — la classe `.reveal` existe dans globals.css mais aucun composant ne l'utilise. Créer un hook `useReveal()` ou un composant `<Reveal>` avec Intersection Observer
- [ ] **Button.tsx manque le style `font-medium`** — les boutons secondary n'ont pas assez de poids visuel comparé au primaire
- [ ] **`content/blog/` vide** — ajouter au moins 1 article MDX de démo pour valider le pipeline blog complet (rendu, slug, filtres)
- [ ] **`/mentions-legales`** — le footer pointe vers une route qui n'existe pas

---

## P1 — Proportions & espacement (le "vide = séniorité")

> Le site respire mal. Les sections sont trop tassées, les hiérarchies ne se lisent pas au premier regard.

- [ ] **Hero trop court** — `min-h-[80vh]` insuffisant. Passer à `min-h-screen` pour que la formule flotte dans l'espace. Le hero doit donner l'impression qu'il n'y a rien d'autre sur la page
- [ ] **Espacement inter-sections** — `py-16` (64px) est trop serré pour l'ambiance luxe. Passer à `py-24` (96px) voire `py-32` (128px) sur les sections principales. Le wireframe spécifie `space-24 (96px)` entre sections
- [ ] **Hero padding top** — le contenu est collé au header fixe. Ajouter du padding supérieur généreux (96-128px)
- [ ] **Titres de section manquent d'air** — le `mb-12` sous les titres h2 est correct, mais il manque un `mt-` en entrée de section. Les titres doivent "planer" au-dessus de leur contenu
- [ ] **StepList trop dense** — les étapes sont collées (`space-y-8`). Passer à `space-y-12` et ajouter un filet hairline entre chaque étape
- [ ] **OfferCards — centrage trop étroit** — `max-w-2xl` contraint trop le contenu. Les cards offre devraient respirer sur toute la largeur wide
- [ ] **Footer trop près du CTA** — ajouter un espace plus généreux avant le footer (au moins 96px)
- [ ] **MetricRow — chiffres trop petits** — `text-4xl` est insuffisant pour des métriques d'impact. Passer à `text-5xl` ou `text-6xl` pour le punch visuel

---

## P2 — Micro-détails typographiques (le "luxe" invisible)

> Les détails qui font la différence entre "propre" et "haut de gamme".

- [ ] **Letter-spacing titres** — DM Serif Display a besoin d'un tracking négatif custom (`-0.03em`) sur les titres hero et h2. Le `tracking-tight` standard de Tailwind n'est pas assez serré
- [ ] **Gradient titres trop fort** — le gradient `stone-700 → stone-500` est trop visible et donne un aspect grisé. Subtiliser : `stone-800 → stone-600` pour que ça reste quasi-noir avec un frémissement
- [ ] **Sous-titres manquent de hiérarchie** — le sous-titre hero en `text-lg text-muted` est trop timide. Passer à `text-xl` et un gris moins atténué (`text-stone-500` au lieu de `text-muted`)
- [ ] **Filets hairline absents** — aucun `<hr>` hairline n'est utilisé dans les pages. Insérer des séparateurs `hairline-fade` entre les sections pour créer du rythme
- [ ] **Font-feature-settings** — vérifier que `"kern" 1, "liga" 1` s'applique bien sur les polices Google chargées dynamiquement (et non localement)
- [ ] **Lignes de texte trop longues** — le corps de texte sur À propos dépasse 75 caractères par ligne. Constraindre à `max-w-[var(--width-content)]` (720px) pour les blocs de lecture

---

## P3 — Sophistication des composants

> Les composants actuels sont fonctionnels mais "flat". Il manque la profondeur et les transitions qui créent la sensation de qualité.

### Header
- [ ] **Header glass effect** — remplacer `bg-bg/95 backdrop-blur-sm` par un vrai glassmorphism : `backdrop-blur-lg backdrop-saturate-150` avec une bordure inférieure qui apparaît au scroll
- [ ] **Logo hover** — ajouter une transition subtile sur le logo (opacity shift ou letter-spacing micro-animation)
- [ ] **Active nav indicator** — un filet fin sous le lien actif au lieu du simple changement de couleur

### Hero
- [ ] **Canvas générative trop discrète** — les trails sont quasi-invisibles. Augmenter l'opacité à 0.06-0.08 et ajouter plus de contraste entre les trails et le fond
- [ ] **Canvas artefacts visuels** — les lignes verticales périodiques sont un artefact du pseudo-noise. Remplacer par un vrai Simplex noise (~ 80 lignes, toujours < 20KB)
- [ ] **Formule hero — présentation par lignes** — le titre est rendu en un bloc. Le casser en 3 lignes distinctes comme dans la maquette : "Automatiser d'abord." / "IA quand nécessaire." / "Toujours pilotable." avec chaque ligne qui a son propre rythme
- [ ] **CTA hover** — le hover actuel (`bg-accent/90`) est paresseux. Implémenter le vrai hover spec : fond transparent → stone-100 pour secondary, légère élévation shadow pour primary

### Problem Grid
- [ ] **Cards trop plates** — ajouter `shadow-sm` au repos et `shadow-md` au hover avec une transition 400ms
- [ ] **Icônes manquantes** — chaque problème devrait avoir une icône minimaliste (trait fin, monochrome) pour scanner plus vite

### Metrics
- [ ] **Chiffres sans âme** — les métriques ont besoin d'un effet de "compteur" (count-up animation au scroll) pour attirer l'attention
- [ ] **Séparateurs verticaux** — ajouter des hairlines verticales entre les 3 métriques

### Offer Cards
- [ ] **Card offre trop texte** — manque un élément visuel distinctif par offre (numérotation, icône, couleur d'accent subtle). La progression Quickscan → Sprint → Partner devrait se ressentir visuellement dans chaque card
- [ ] **Highlight card recommandée** — la card Sprint (milieu de gamme) devrait avoir un traitement visuel distinctif (bordure accent, badge "Recommandé")

### FAQ Accordion
- [ ] **Animation plus douce** — l'ouverture/fermeture est mécanique. Ajouter un ease-out sur le contenu qui se déploie
- [ ] **Icône rotation** — le `+` qui rotate à 45° pour devenir `×` est basique. Utiliser un chevron animé ou un trait qui se morphe

### Contact Form
- [ ] **Inputs trop génériques** — les champs manquent de raffinement. Ajouter : label qui float au focus, bordure qui s'anime de gauche à droite, focus ring accent subtle
- [ ] **Bouton Envoyer pleine largeur** — sur mobile le bouton devrait prendre toute la largeur. Sur desktop il est trop petit par rapport à la zone form
- [ ] **État succès plus élaboré** — le message "envoyé" est basique. Ajouter une animation de checkmark

### CTA Sections
- [ ] **CTA trop nu** — les sections CTA de fin de page sont du texte + bouton sur fond blanc. Ajouter un fond surface subtil, un filet au-dessus, et plus d'espacement vertical pour créer un "moment" visuel

---

## P4 — Animations & transitions (le site "vit")

> Un site statique ne convertit pas. Il faut du mouvement juste — subtil, jamais tape-à-l'oeil.

- [ ] **Scroll reveal global** — brancher le hook `useReveal` sur tous les blocs (Section, Card, Step, Metric). Animation : fade-in 600ms + translateY(8px), IntersectionObserver threshold 0.1
- [ ] **Page transitions** — implémenter un fade cross-dissolve 200ms entre les pages (via View Transitions API ou animation layout)
- [ ] **Hover CTA spec** — implémenter le hover exact de la recherche design : fond transparent → stone-100, bordure qui s'atténue, transition 400ms cubic-bezier(0.4, 0, 0.2, 1)
- [ ] **Staggered reveal** — les grilles (ProblemGrid, ConvictionGrid, piliers blog) devraient apparaître en séquence (stagger 100ms par item) plutôt que toutes d'un coup
- [ ] **Header scroll behavior** — le header devrait réduire sa taille au scroll (padding 20→12, font-size logo diminue légèrement)
- [ ] **Link underline animation** — les liens texte devraient avoir un underline qui s'anime de gauche à droite au hover (clip-path)

---

## P5 — Mobile experience

> Le wireframe spécifie "60%+ du trafic attendu". Mobile n'est pas un afterthought.

- [ ] **Burger menu** — menu overlay fullscreen, fond blur, liens empilés, CTA prominent
- [ ] **CTA sticky mobile** — bouton "Prendre rendez-vous" sticky en bas sur mobile (wireframe spec)
- [ ] **Hero responsive** — `text-5xl` trop gros sur mobile. Scale down à `text-3xl` mobile / `text-4xl` tablet / `text-5xl` desktop
- [ ] **Metrics stack** — les 3 métriques doivent s'empiler en colonne sur mobile (pas de side-scroll)
- [ ] **Contact 2 colonnes** — passe en stack vertical sur mobile (form au-dessus, alternatives en-dessous)
- [ ] **Touch targets** — vérifier que tous les boutons et liens ont au minimum 44x44px de zone tactile
- [ ] **Progression bar** — la timeline horizontale ne fonctionne pas sur mobile. Passer en layout vertical

---

## P6 — SEO & Performance

- [ ] **OG image** — créer une image OpenGraph (1200x630) typographique, reprenant la formule hero
- [ ] **Favicon** — créer un favicon minimaliste (initiales VD en DM Serif Display)
- [ ] **Google Analytics** — intégrer GA4 via next/script (defer, afterInteractive)
- [ ] **Canonical URLs** — vérifier que chaque page a un canonical correct
- [ ] **`<html lang="fr">`** — OK (déjà en place)
- [ ] **Core Web Vitals** — mesurer LCP, CLS, INP après déploiement. Cible : LCP < 2.5s, CLS < 0.1
- [ ] **Font subsetting** — vérifier que next/font ne charge que le subset latin (déjà configuré, à valider)
- [ ] **Preconnect Resend** — pas besoin côté client, uniquement server-side

---

## P7 — Contenu

> Un site sans contenu ne convertit pas, même beau.

- [ ] **1er article pilier Automation** — article fondateur, 800-1200 mots, démontrant l'expertise
- [ ] **1er article pilier Delivery** — retour de terrain concret
- [ ] **1er article pilier Démos** — walk-through technique avec code
- [ ] **Page Mentions légales** — obligatoire légalement (auto-entrepreneur / société)
- [ ] **Lien Calendly réel** — remplacer le `#` placeholder par le vrai lien

---

## Ordre de priorité recommandé

```
Sprint 1 (quick wins visuels)     Sprint 2 (sophistication)        Sprint 3 (contenu + mobile)
─────────────────────────────     ──────────────────────────       ─────────────────────────────
P0 bugs fonctionnels              P3 composants sophistiqués       P5 mobile experience
P1 proportions & espacement       P4 animations & transitions      P7 contenu (3 articles)
P2 micro-détails typo             P6 SEO & perf                    Deploy production
```

Sprint 1 transforme le site de "template" à "intentionnel".
Sprint 2 ajoute la couche "luxe discret" qui fait la différence.
Sprint 3 rend le site opérationnel et déployable.
