#!/usr/bin/env bash
# Build a complete static site in ./site so the domain can point at that folder.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SITE="$ROOT/site"

echo "→ Building design board…"
cd "$ROOT/design-board"
npm install
npm run build

echo "→ Assembling $SITE …"
rm -rf "$SITE"
mkdir -p "$SITE"

cp -a "$ROOT/design-board/dist" "$SITE/design-board"
cp -a "$ROOT/assets" "$SITE/assets"
mkdir -p "$SITE/browser" "$SITE/docs"
cp -a "$ROOT/browser/." "$SITE/browser/"
cp -a "$ROOT/docs/." "$SITE/docs/"
cp "$ROOT/README.md" "$SITE/README.md"

# Hub at the site root. Design board lives next to it, not under /site/.
sed 's|site/design-board/index.html|design-board/index.html|g' "$ROOT/index.html" > "$SITE/index.html"

# Old bookmarked URLs from the first hub version.
mkdir -p "$SITE/assets/designs" "$SITE/design-board/assets/designs"
for src_dst in \
  "men-kanji/belts/belt-kanji-chikara-power.png:belt-kanji-chikara-power.png" \
  "men-kanji/belts/belt-kanji-do-path.png:belt-kanji-do-path.png" \
  "men-kanji/accessories/gloves-kanji-rai-thunder.png:gloves-kanji-rai-thunder.png" \
  "men-kanji/accessories/knee-support-kanji-fu-wind.png:knee-support-kanji-fu-wind.png" \
  "men-kanji/apparel/shorts-kanji-sho-victory.png:shorts-kanji-sho-victory.png" \
  "men-kanji/apparel/tee-kanji-bu-warrior.png:tee-kanji-bu-warrior.png"
do
  src="${src_dst%%:*}"
  dst="${src_dst##*:}"
  cp "$ROOT/assets/$src" "$SITE/assets/designs/$dst"
  cp "$ROOT/assets/$src" "$SITE/design-board/assets/designs/$dst"
done

echo "→ Generating file manifest…"
ROOT="$ROOT" OUT="$ROOT/browser/manifest.json" bash "$ROOT/scripts/generate-manifest.sh"
cp "$ROOT/browser/manifest.json" "$SITE/browser/manifest.json"

cat > "$SITE/.nojekyll" <<'EOF'
EOF

echo "Done. Point your domain at the site/ folder (contains index.html)."
