#!/usr/bin/env bash
# Build static assets for domain deployment.
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"

echo "→ Building design board…"
cd "$ROOT/design-board"
npm install
npm run build

echo "→ Copying design board to site/design-board…"
rm -rf "$ROOT/site/design-board"
mkdir -p "$ROOT/site"
cp -a dist "$ROOT/site/design-board"

echo "→ Generating file manifest…"
ROOT="$ROOT" OUT="$ROOT/browser/manifest.json" bash "$ROOT/scripts/generate-manifest.sh"

echo "Done. Serve the repo root as your web root (index.html)."
