#!/usr/bin/env python3
"""Write concept SVGs (valid XML) and cream-on-black PNG previews."""
from pathlib import Path

import cairosvg

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "logo" / "concepts"
OUT.mkdir(parents=True, exist_ok=True)

CREAM = "#D6CFB5"
INK = "#0A0A0A"

CONCEPTS = {
    "01-core-cut": {
        "title": "Core Cut",
        "note": "Best all-rounder",
        "paths": [
            "M143 40 88 8 25 39 12 80l13 41 63 31 55-32-13-22-43 25-38-19-6-24 6-24 38-19 43 25Z",
            "M58 106V54h18l28 39V54h18v52h-18L76 67v39Z",
        ],
    },
    "02-interlock": {
        "title": "Interlock",
        "note": "Best for equipment",
        "paths": [
            "m20 42 56-32 69 28-13 22-55-23-35 21Zm0 0 22 16v44l-22 16Zm0 76 22-16 35 21 55-23 13 22-69 28Z",
            "M58 108V52h18l34 40V52h19v56h-19L77 68v40Z",
        ],
    },
    "03-velocity": {
        "title": "Velocity",
        "note": "Best for sportswear",
        "paths": [
            "M150 14H64L21 43 8 107l29 39h84l17-25H51l-16-20 9-43 29-19h62Z",
            "m58 112 12-62h19l22 39 8-39h22l-12 62h-20L87 72l-8 40Z",
        ],
    },
    "04-core-block": {
        "title": "Core Block",
        "note": "Best for production",
        "paths": [
            "M137 12H65L17 43v74l48 31h72l-14-26H75l-30-18V56l30-18h48Z",
            "M61 108V52h18l30 37V52h20v56h-18L81 71v37Z",
        ],
    },
    "05-seal": {
        "title": "Seal",
        "note": "Readable C ring",
        "paths": [
            "M118 44A56 56 0 1 0 118 116L100 104A36 36 0 1 1 100 56Z",
            "M56 50h16l22 36V50h16v60h-16L72 74v36H56Z",
        ],
    },
    "06-shield": {
        "title": "Shield",
        "note": "Badge / patch",
        "paths": [
            "M128 46 80 16 32 46 20 100l60 44 28-20-12-16-16 12-40-28 8-40 32-18 36 20Z",
            "M58 56h16l20 30V56h16v56H94L74 82v30H58Z",
        ],
    },
    "07-lockbar": {
        "title": "Lockbar",
        "note": "Shared spine",
        "paths": [
            "M132 28H60L22 56v48l38 28h72l-14-22H70L48 92V68l22-16h50Z",
            "M72 50h16l26 36V50h16v60H98L72 74Z",
        ],
    },
    "08-stamp": {
        "title": "Stamp",
        "note": "Hanko / chop",
        "paths": [
            "M140 22H22v116h118V118H44V42h96Z",
            "M58 52h14l22 34V52h14v56H94L72 74v34H58Z",
        ],
    },
    "09-orbit": {
        "title": "Orbit",
        "note": "Ring + core",
        "paths": [
            "M128 38A64 48 0 1 0 128 122L110 110A44 32 0 1 1 110 50Z",
            "M62 48h14l24 40V48h16v64H96L72 72v40H62Z",
        ],
    },
    "10-wedge": {
        "title": "Wedge",
        "note": "Aggressive cut",
        "paths": [
            "M148 18 52 8 12 80l40 72 96-10-16-24-70 8-26-46 26-46 70 8Z",
            "M58 48h16l26 40V48h16v64H96L70 72v40H58Z",
        ],
    },
}


def concept_svg(paths: list[str], fill: str = "currentColor") -> str:
    path_xml = "\n".join(f'    <path d="{d}"/>' for d in paths)
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" role="img">
  <g fill="{fill}">
{path_xml}
  </g>
</svg>
"""


def preview_svg(paths: list[str]) -> str:
    path_xml = "\n".join(f'    <path fill="{CREAM}" d="{d}"/>' for d in paths)
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" role="img">
  <rect width="160" height="160" fill="{INK}"/>
{path_xml}
</svg>
"""


def main() -> None:
    for slug, spec in CONCEPTS.items():
        source = concept_svg(spec["paths"])
        (OUT / f"{slug}.svg").write_text(source, encoding="utf-8")
        cairosvg.svg2png(
            bytestring=preview_svg(spec["paths"]).encode("utf-8"),
            write_to=str(OUT / f"{slug}.png"),
            output_width=800,
            output_height=800,
        )
        print("wrote", slug)

    master = ROOT / "assets" / "logo" / "corenation-cn-logo-cream.svg"
    if master.exists():
        cairosvg.svg2png(
            bytestring=preview_svg(CONCEPTS["01-core-cut"]["paths"]).encode("utf-8"),
            write_to=str(ROOT / "assets" / "logo" / "corenation-cn-logo-cream.png"),
            output_width=800,
            output_height=800,
        )
        print("wrote master cream png")


if __name__ == "__main__":
    main()
