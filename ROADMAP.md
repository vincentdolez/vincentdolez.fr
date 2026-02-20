# Roadmap — vincentdolez.fr

> État : Sprint 2 terminé. Page transitions, link underline, OG images, favicon, canonical URLs en place.

---

## P0 — Bugs & manquants fonctionnels

> Bloquants pour un déploiement.

- [x] **Mobile nav burger** — menu hamburger avec animation slide-down
- [x] **Blog metadata** — page serveur pour le SEO
- [x] **Scroll reveal non câblé** — composant `<Reveal>` avec Intersection Observer
- [x] **Button.tsx `font-medium`** — poids visuel corrigé
- [x] **`content/blog/` vide** — article MDX de démo ajouté
- [x] **`/mentions-legales`** — page créée

---

## P1 — Proportions & espacement (le "vide = séniorité")

- [x] **Hero `min-h-screen`** — plein écran
- [x] **Espacement inter-sections** — `py-24` / `py-32`
- [x] **Hero padding top** — padding supérieur généreux
- [x] **Titres de section air** — marges ajustées
- [x] **StepList** — filets hairline entre étapes, espacement revu
- [x] **OfferCards** — centrage et respiration ajustés
- [x] **Footer espacement** — espace généreux avant footer
- [x] **MetricRow taille** — chiffres agrandis

---

## P2 — Micro-détails typographiques (le "luxe" invisible)

- [x] **Letter-spacing titres** — tracking négatif custom `-0.03em`
- [x] **Gradient titres** — `stone-800 → stone-600`, quasi-noir
- [x] **Sous-titres hiérarchie** — `text-xl text-stone-500` (→ `text-muted` via dark mode)
- [x] **Filets hairline** — séparateurs `hairline-fade` entre sections
- [x] **Font-feature-settings** — `kern` + `liga` appliqués
- [x] **Lignes de texte** — `max-w-[var(--width-content)]` sur les blocs lecture

---

## P3 — Sophistication des composants

### Header
- [x] **Header glass effect** — `backdrop-blur-lg backdrop-saturate-150` + bordure au scroll
- [x] **Logo hover** — transition opacity
- [x] **Active nav indicator** — filet fin sous lien actif

### Hero
- [x] **Canvas générative** — gradient mesh avec blobs animés
- [x] **Formule hero lignes** — titre en lignes distinctes
- [x] **CTA hover** — hover spec implémenté

### Problem Grid
- [x] **Cards shadow** — `shadow-sm` repos, `shadow-md` hover

### Metrics
- [x] **Chiffres count-up** — animation au scroll

### Offer Cards
- [x] **Numérotation** — numéro par offre
- [x] **Highlight Sprint** — bordure accent + badge "Recommandé"

### FAQ Accordion
- [x] **Animation douce** — ease-out sur déploiement
- [x] **Icône rotation** — chevron animé

### Contact Form
- [x] **Floating labels** — label qui float au focus
- [x] **État succès** — animation checkmark

### CTA Sections
- [x] **Fond surface** — fond subtil + filet + espacement

---

## P4 — Animations & transitions (le site "vit")

- [x] **Scroll reveal global** — `<Reveal>` sur tous les blocs
- [x] **Page transitions** — fade cross-dissolve via View Transitions API
- [x] **Hover CTA spec** — transition 400ms cubic-bezier
- [x] **Staggered reveal** — grilles en séquence (stagger 100ms)
- [x] **Header scroll behavior** — glassmorphism au scroll
- [x] **Link underline animation** — underline animé au hover

---

## P5 — Mobile experience

- [x] **Burger menu** — overlay fullscreen avec fond blur
- [x] **CTA sticky mobile** — bouton sticky en bas
- [x] **Hero responsive** — scale `text-3xl` → `text-5xl`
- [x] **Metrics stack** — colonne sur mobile
- [x] **Contact 2 colonnes** — stack vertical mobile
- [x] **Touch targets** — vérification 44x44px
- [x] **Progression bar** — layout adapté mobile

---

## P6 — SEO & Performance

- [x] **OG image** — image OpenGraph typographique dynamique
- [x] **Favicon** — initiales VD (icon + apple-icon)
- [x] **Vercel Analytics** — intégré
- [x] **Canonical URLs** — root layout + buildMetadata
- [x] **`<html lang="fr">`** — en place
- [x] **Core Web Vitals** — SpeedInsights branché (mesure post-déploiement)
- [x] **Font loading** — next/font optimisé
- [x] **HeroCanvas dynamic import** — lazy loading

---

## P7 — Contenu

- [x] **1er article pilier** — article MDX de démo
- [ ] **Article Automation** — article fondateur 800-1200 mots
- [ ] **Article Delivery** — retour de terrain
- [ ] **Article Démos** — walk-through technique
- [x] **Page Mentions légales** — créée
- [ ] **Lien Calendly réel** — remplacer placeholder

---

## Infra & CI

- [x] **CI GitHub Actions** — lint + build sur PR
- [x] **Déploiement Vercel** — preview + production
- [x] **Dark mode auto** — `prefers-color-scheme` avec tokens sémantiques

---

## Ordre de priorité

```
Sprint 1 (terminé ✅)                Sprint 2 (terminé ✅)                Sprint 3 (contenu + polish)
─────────────────────────────        ──────────────────────────           ─────────────────────────────
✅ P0 bugs fonctionnels              ✅ Page transitions                   ○ Articles piliers (×3)
✅ P1 proportions & espacement       ✅ Link underline animation           ○ CTA sticky mobile
✅ P2 micro-détails typo             ✅ OG image + Favicon                 ○ Touch targets audit
✅ P3 composants sophistiqués        ✅ Canonical URLs                     ○ Calendly réel
✅ P4 animations (partiel)           ○ Core Web Vitals (post-deploy)      ○ Deploy production final
✅ Dark mode auto
✅ Vercel Analytics
✅ CI GitHub
```
