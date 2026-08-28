# Corenation Men's Kanji — Design Board

Internal design preview for the Corenation men's kanji apparel and gym accessories line.

## Quick start

```bash
cd design-board
npm install
npm run dev
```

Open **http://localhost:5177** (port 5177 — intentionally uncommon to avoid conflicts).

## What's included

- **Kanji collection** — 16 characters across 4 themes (Strength, Discipline, Victory, Elements)
- **Generated mockups** — 6 product concepts (belts, shorts, tee, gloves, knee support)
- **Reference samples** — Original 龍 (dragon) shorts and belt designs
- **Palette** — Olive, cream, gold, red accent system

## Related docs (repo root)

| File | Purpose |
|------|---------|
| `../docs/kanji-design-collection.md` | Full kanji specs, pairings, production notes |
| `../docs/branding-checklist.md` | Staff checklist for design, social, Shopee, VM |

## Assets

Mockup images: `../assets/designs/`  
Reference photos: `../assets/`

The dev server serves assets via symlink at `public/assets`.

## Build for static preview

```bash
npm run build
npm run preview -- --port 5177
```
