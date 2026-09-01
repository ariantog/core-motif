#!/usr/bin/env python3
"""Render the hand-authored logo SVGs as cream-on-black PNG previews."""
from pathlib import Path

import cairosvg

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "logo" / "concepts"
HEX_OUT = ROOT / "assets" / "logo" / "hexagon"

CREAM = "#D6CFB5"
INK = "#0A0A0A"

CONCEPTS = [
    "01-continuum",
    "02-fold",
    "03-counterform",
    "04-linea",
    "05-oblique",
    "06-crossbrace",
]

HEXAGON_VARIATIONS = [
    "01-heritage",
    "02-emboss",
    "03-inline",
    "04-facet",
    "05-sideline",
]


def render(source: Path, destination: Path) -> None:
    svg = source.read_text(encoding="utf-8").replace("currentColor", CREAM)
    cairosvg.svg2png(
        bytestring=svg.encode("utf-8"),
        write_to=str(destination),
        output_width=800,
        output_height=800,
        background_color=INK,
    )
    print("wrote", destination.relative_to(ROOT))


def main() -> None:
    for slug in CONCEPTS:
        render(OUT / f"{slug}.svg", OUT / f"{slug}.png")

    for slug in HEXAGON_VARIATIONS:
        render(HEX_OUT / f"{slug}.svg", HEX_OUT / f"{slug}.png")

    logo_dir = ROOT / "assets" / "logo"
    render(logo_dir / "corenation-cn-logo-cream.svg", logo_dir / "corenation-cn-logo-cream.png")


if __name__ == "__main__":
    main()
