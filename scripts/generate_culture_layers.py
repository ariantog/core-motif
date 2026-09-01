#!/usr/bin/env python3
"""Transparent kanji + logo layers for compositing on Culture Run print-bg.png files."""

from __future__ import annotations

import math
from pathlib import Path

import cairosvg
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
LAYER_DIR = ROOT / "assets" / "culture-run" / "_layers"
CREAM = (214, 207, 181, 255)
INK = (10, 10, 10, 255)
WHITE = (255, 255, 255, 255)
GOLD = (212, 175, 55, 255)
ROSE = (196, 91, 120, 255)

FONT_CANDIDATES = [
    Path("/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc"),
    Path("/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc"),
    Path("/usr/share/fonts/truetype/noto/NotoSerifCJK-Bold.ttc"),
    Path("/usr/share/fonts/truetype/wqy/wqy-microhei.ttc"),
    Path("/usr/share/fonts/truetype/droid/DroidSansFallbackFull.ttf"),
]
FONT_SERIF = next((str(p) for p in FONT_CANDIDATES if p.exists()), "")
FONT_SANS = FONT_SERIF
if not FONT_SERIF:
    raise SystemExit("No CJK font found. Install fonts-noto-cjk.")

CONCEPTS = {
    "01-core-cut": [
        "M143 40 88 8 25 39 12 80l13 41 63 31 55-32-13-22-43 25-38-19-6-24 6-24 38-19 43 25Z",
        "M58 106V54h18l28 39V54h18v52h-18L76 67v39Z",
    ],
}


def save(im: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, "PNG", optimize=True)
    print(f"wrote {path.relative_to(ROOT)}")


def font(path: str, size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size, index=0)


def glyph(char: str, color: tuple[int, int, int, int], size: int = 920) -> Image.Image:
    canvas = 1400
    im = Image.new("RGBA", (canvas, canvas), (0, 0, 0, 0))
    draw = ImageDraw.Draw(im)
    f = font(FONT_SERIF, size)
    bbox = draw.textbbox((0, 0), char, font=f)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(((canvas - tw) / 2 - bbox[0], (canvas - th) / 2 - bbox[1]), char, font=f, fill=color)
    # Tight crop with padding so the layer is easy to place.
    alpha = im.getchannel("A")
    box = alpha.getbbox()
    if box is None:
        return im
    pad = 40
    left = max(0, box[0] - pad)
    top = max(0, box[1] - pad)
    right = min(canvas, box[2] + pad)
    bottom = min(canvas, box[3] + pad)
    return im.crop((left, top, right, bottom))


def hex_c(color: tuple[int, int, int, int], size: int = 720) -> Image.Image:
    im = Image.new("RGBA", (size, size), (0, 0, 0, 0))
    draw = ImageDraw.Draw(im)
    cx = cy = size / 2
    r = size * 0.38
    pts = []
    for i in range(6):
        a = math.radians(30 + i * 60)
        pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    width = max(6, int(size * 0.018))
    draw.polygon(pts, outline=color, width=width)
    inner = []
    for i in range(6):
        a = math.radians(30 + i * 60)
        inner.append((cx + (r - size * 0.035) * math.cos(a), cy + (r - size * 0.035) * math.sin(a)))
    draw.polygon(inner, outline=color, width=max(3, width - 2))
    f = font(FONT_SANS, int(size * 0.42))
    bbox = draw.textbbox((0, 0), "C", font=f)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text((cx - tw / 2 - bbox[0], cy - th / 2 - bbox[1] - size * 0.02), "C", font=f, fill=color)
    return im


def concept_png(paths: list[str], fill: str, dest: Path, px: int = 800) -> None:
    path_xml = "\n".join(f'    <path fill="{fill}" d="{d}"/>' for d in paths)
    svg = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 160 160" role="img">
{path_xml}
</svg>
"""
    dest.parent.mkdir(parents=True, exist_ok=True)
    cairosvg.svg2png(bytestring=svg.encode("utf-8"), write_to=str(dest), output_width=px, output_height=px)
    print(f"wrote {dest.relative_to(ROOT)}")


def main() -> None:
    LAYER_DIR.mkdir(parents=True, exist_ok=True)

    save(glyph("走", CREAM), LAYER_DIR / "so-run-cream.png")
    save(glyph("走", INK), LAYER_DIR / "so-run-ink.png")
    save(glyph("走", WHITE), LAYER_DIR / "so-run-white.png")
    save(glyph("走", GOLD), LAYER_DIR / "so-run-gold.png")
    save(glyph("走", ROSE), LAYER_DIR / "so-run-rose.png")

    save(glyph("山", CREAM), LAYER_DIR / "san-mountain-cream.png")
    save(glyph("山", INK), LAYER_DIR / "san-mountain-ink.png")
    save(glyph("山", WHITE), LAYER_DIR / "san-mountain-white.png")
    save(glyph("山", GOLD), LAYER_DIR / "san-mountain-gold.png")

    save(hex_c(CREAM), LAYER_DIR / "hex-c-cream.png")
    save(hex_c(INK), LAYER_DIR / "hex-c-ink.png")
    save(hex_c(WHITE), LAYER_DIR / "hex-c-white.png")
    save(hex_c(GOLD), LAYER_DIR / "hex-c-gold.png")

    hex_colors = {"cream": "#D6CFB5", "ink": "#0A0A0A", "white": "#FFFFFF", "gold": "#D4AF37"}
    for name, fill in hex_colors.items():
        concept_png(CONCEPTS["01-core-cut"], fill, LAYER_DIR / f"cn-core-cut-{name}.png")


if __name__ == "__main__":
    main()
