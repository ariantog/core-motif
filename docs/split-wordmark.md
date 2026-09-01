# Corenation Split Wordmark

**Brand:** Corenation Active
**Status:** Six split lockups — exploration, selection pending
**Base:** the current readable wordmark type (Open Set / Syne, outlined)
**Related:** [`readable-wordmark.md`](readable-wordmark.md) · [`logo-transition.md`](logo-transition.md) (Method I)

---

## Why this series exists

`CORENATION` on one line is long. The original A–E sample PDFs already answered
that by splitting the name — **CORE over NATION**, and even **CO / RE /
NATION** — but they did it with the slash-cut block letters that were rejected
in the readable reset.

This series keeps those split *layouts* and redraws them with the current
wordmark type. Same letters as Open Set, new arrangements. One idea per
variation, and the word must still read as **CORENATION** on first glance.

What does not change:

- same wide sans (Syne, outlined paths — no font install needed)
- monochrome: cream, white, or black
- no hexagon, coin, monogram, or invented emblem
- no box around CORE

## Variations

| # | Variation | Idea | Best use |
|---|-----------|------|----------|
| 01 | **Flag** | CORE over NATION; the Open Set core line grows into a full-width divider | Chest prints, hangtags, square-ish spaces |
| 02 | **Lead** | Big CORE; NATION scaled (not squeezed) to match its width | Strength-first surfaces, store cards |
| 03 | **Totem** | CO / RE / NATION justified to one column — the sample-E layout, redrawn | Avatars, bag panels, neck prints |
| 04 | **Interval** | One line, syllables marked by small square intervals | Belts, waistbands, sleeves — the only single-line split |
| 05 | **Cascade** | CO / RE / NATION stepping down and right | Back prints, campaign graphics |
| 06 | **Banner** | CORE on top; NATION knocked out of a solid bar | The boldest lockup; labels, patch-free badges |

Notes per variation:

- **01 Flag** — both lines share one cap height; nothing is distorted. The
  divider is the same device as the line under CORE in Open Set, so the flag
  reads as Open Set folded in half.
- **02 Lead** — NATION is scaled uniformly, unlike the Open Set stack which
  compresses NATION horizontally. Use Lead when the stack must look calm.
- **03 Totem** — closest to sample E. CO and RE sit large; NATION runs
  letterspaced along the base. C and N stay the first and last letters you
  read, which sets up the later CN mark (Method I).
- **04 Interval** — it does not shorten the line; it makes the long name scan
  as three beats. The squares are separators, not a new emblem.
- **05 Cascade** — the wild one. Three steps, forward motion, no added device.
  Reject it if anyone reads the steps before the name.
- **06 Banner** — the bar contains NATION, never CORE. The knockout is a real
  cut (transparent), safe for print and emboss. Below 30mm wide the knocked-out
  letters close up; do not embroider this one small.

## Files

All working assets are in `assets/logo/split/`.

Each variation includes:

- `.svg` — `currentColor`, outlined paths
- `-cream.svg` — `#D6CFB5`
- `-white.svg` — white
- `-black.svg` — black
- `.png` — cream-on-black preview

Rebuild with:

```bash
pip install pymupdf uharfbuzz fonttools skia-pathops
python3 scripts/build_split_wordmarks.py
```

Syne is used under the SIL OFL; the license ships in
`assets/logo/split/licenses/`.

## How to choose

These are lockups of the readable word, not new identities. The one-line face
from [`readable-wordmark.md`](readable-wordmark.md) stays the brand face; pick
**at most one** split lockup to cover the spaces where one line does not fit.

Run the same selection test as the readable family:

1. at 320px wide (Shopee store and mobile header)
2. at 40mm wide on a belt (Interval is the only belt candidate)
3. cream on black, black on cream, charcoal on pink, charcoal on lilac
4. embroidered at actual size (skip Banner below 30mm)
5. from three metres away on a shirt

Reject a variation if a person reads anything other than **CORENATION** on the
first glance.

## Transition rule

Unchanged: hex and coin are off new work, the readable word is the face, a new
mark comes later on new items only. A split lockup counts as the readable word
— it is not the "new mark" and does not start Phase 2.

---

*Split wordmark exploration — Corenation Active.*
