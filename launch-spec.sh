#!/usr/bin/env bash
# launch-spec.sh — Lance un agent Claude Code en background sur une spec KB
# Usage: ./launch-spec.sh <slug>
# Slugs: quickscan-pme | offres-removal | accueil | legacy-rescue | all-seq
#
# Ordre recommandé : quickscan-pme → offres-removal → accueil → legacy-rescue
# (accueil et legacy-rescue peuvent tourner en parallèle après quickscan-pme)

set -e

SITE_DIR="$HOME/Workspace/Development/Interne/vincentdolez.fr"
KB_SPECS="/Users/vincentdolez/AI/KB/KB vincentdolez/03-ecosysteme/vincentdolez-fr/specs"

SLUG="${1:-}"

launch() {
  local slug="$1"
  local prompt="$2"
  echo "→ Lancement agent : $slug"
  claude --bg \
    --cwd "$SITE_DIR" \
    --permission-mode auto \
    "$prompt"
}

case "$SLUG" in
  quickscan-pme)
    launch quickscan-pme "Read the spec at \"$KB_SPECS/quickscan-pme.md\" and create /quickscan-pme (app/quickscan-pme/page.tsx) following the spec. Pull copy from the KB copy file referenced in the spec — do not paraphrase. Reuse existing components (Hero, ValueList, CaseStudy, TrackRecord, LaunchOffer, ProcessTimeline, Section, Accordion). Run build + tsc + lint before committing."
    ;;
  offres-removal)
    launch offres-removal "Read the spec at \"$KB_SPECS/offres-removal.md\" and execute the route removal. Note: the redirect in next.config.ts is already set to /. Focus on: removing app/offres/ if it still exists, removing /offres from nav (Header.tsx), checking Footer.tsx, cleaning sitemap.ts. Grep for any remaining /offres references. Run build + tsc + lint before committing."
    ;;
  accueil)
    launch accueil "Read the spec at \"$KB_SPECS/accueil.md\" and refactor the home page (app/page.tsx) following the spec. Pull copy from the KB copy file referenced in the spec — do not paraphrase. Reuse existing components (Hero, ValueList, CaseStudy, TrackRecord, LaunchOffer, OfferCard, Section). Run build + tsc + lint before committing."
    ;;
  legacy-rescue)
    launch legacy-rescue "Read the spec at \"$KB_SPECS/legacy-rescue.md\" and enrich /legacy-rescue (app/legacy-rescue/page.tsx) following the spec. This is an enriching refactor — preserve everything marked 'Keep as-is'. Pull copy from the KB copy file referenced in the spec. Run build + tsc + lint before committing."
    ;;
  all)
    echo "=== Lancement des 4 specs en parallèle ==="
    echo "Supervise avec : claude agents"
    echo ""
    for s in quickscan-pme offres-removal accueil legacy-rescue; do
      "$0" "$s"
    done
    ;;
  *)
    echo "Usage: $0 <slug>"
    echo "Slugs disponibles : quickscan-pme | offres-removal | accueil | legacy-rescue | all-seq"
    exit 1
    ;;
esac
