#!/usr/bin/env python3
"""Build the split CORENATION wordmark variations.

The one-line name feels long, so this series splits it the way the original
A-E sample PDFs do -- CORE over NATION, and CO / RE / NATION -- but drawn with
the current readable wordmark type (Syne, outlined) instead of the rejected
slash-cut letters. Layout ideas only; no hexagon, coin, box around CORE, or
new emblem.

Reuses the outline machinery from build_readable_wordmarks.py.
Requires: pymupdf, uharfbuzz, fonttools, skia-pathops.
"""

from __future__ import annotations

import shutil
import sys
from pathlib import Path

import pathops
import pymupdf
import uharfbuzz as hb
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen

sys.path.insert(0, str(Path(__file__).resolve().parent))

import build_readable_wordmarks as base
from build_readable_wordmarks import Artwork, group, outline_text, path, svg_document

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "logo" / "split"

FAMILY = "syne"
WEIGHT = 800
TRACKING = 5.5  # Open Set letterspace

PREVIEW_HEIGHTS = {
    "01-flag": 380,
    "02-lead": 360,
    "03-totem": 430,
    "04-interval": 220,
    "05-cascade": 420,
    "06-banner": 380,
}


def word(text: str, target_height: float = 100, tracking: float = TRACKING):
    return outline_text(
        text, FAMILY, weight=WEIGHT, target_height=target_height, tracking=tracking
    )


def justified(text: str, target_height: float, target_width: float):
    """Outline text letterspaced so it fills target_width exactly."""
    _, natural = word(text, target_height, tracking=0)
    gaps = len(text) - 1
    tracking = (target_width - natural) / gaps if gaps else 0
    return word(text, target_height, tracking=tracking)


def rect_commands(x0: float, y0: float, x1: float, y1: float) -> str:
    return f"M{x0:.3f} {y0:.3f}H{x1:.3f}V{y1:.3f}H{x0:.3f}Z"


def text_skia_path(text: str, target_height: float, tracking: float) -> pathops.Path:
    """Shape text into one skia path (same layout math as base.outline_text)."""
    font = base.outlined_font(FAMILY, (("wght", float(WEIGHT)),))
    scale = target_height / font.cap_height

    buffer = hb.Buffer()
    buffer.add_str(text)
    buffer.guess_segment_properties()
    hb.shape(font.hb_font, buffer, {"kern": True})

    glyph_set = font.tt.getGlyphSet()
    glyph_order = font.tt.getGlyphOrder()
    skia = pathops.Path()
    pen = skia.getPen()
    cursor = 0.0
    for info, position in zip(buffer.glyph_infos, buffer.glyph_positions):
        glyph_name = glyph_order[info.codepoint]
        dx = cursor + position.x_offset * scale
        dy = target_height - position.y_offset * scale
        transform = (scale, 0, 0, -scale, dx, dy)
        glyph_set[glyph_name].draw(TransformPen(pen, transform))
        cursor += position.x_advance * scale + tracking
    return skia


def knockout(rect: tuple[float, float, float, float], text_path: pathops.Path) -> str:
    """Subtract letter outlines from a solid bar; returns clean path commands."""
    x0, y0, x1, y1 = rect
    bar = pathops.Path()
    bar_pen = bar.getPen()
    bar_pen.moveTo((x0, y0))
    bar_pen.lineTo((x1, y0))
    bar_pen.lineTo((x1, y1))
    bar_pen.lineTo((x0, y1))
    bar_pen.closePath()

    result = pathops.Path()
    pathops.difference([bar], [text_path], result.getPen())
    svg_pen = SVGPathPen({})
    result.draw(svg_pen)
    return svg_pen.getCommands()


def flag() -> Artwork:
    """CORE / NATION on two lines; the Open Set core line becomes the divider."""
    core, core_width = word("CORE")
    nation, nation_width = word("NATION")
    width = max(core_width, nation_width)
    divider_y = 122
    divider = (
        f'<path d="M0 {divider_y + 8} H{width - 12:.3f} '
        f'L{width:.3f} {divider_y} H0Z"/>'
    )
    body = path(core) + divider + group(path(nation), 0, 148)
    return Artwork("01-flag", "Corenation Split Flag", body, width, 248)


def lead() -> Artwork:
    """Big CORE; NATION scaled down (undistorted) to the same width."""
    core, core_width = word("CORE")
    _, nation_natural = word("NATION")
    nation_height = 100 * core_width / nation_natural
    nation, nation_width = word(
        "NATION", target_height=nation_height, tracking=TRACKING * nation_height / 100
    )
    body = path(core) + group(path(nation), 0, 124)
    return Artwork("02-lead", "Corenation Split Lead", body, core_width, 124 + nation_height)


def totem() -> Artwork:
    """CO / RE / NATION square totem, every line justified to one column."""
    co, column = word("CO")
    re_line, _ = justified("RE", 100, column)
    nation, _ = justified("NATION", 30, column)
    body = path(co) + group(path(re_line), 0, 124) + group(path(nation), 0, 252)
    return Artwork("03-totem", "Corenation Split Totem", body, column, 282)


def interval() -> Artwork:
    """One line, syllables marked with small square intervals. Belt-safe."""
    gap = 26
    square = 12
    square_top = 44
    pieces = [word("CO"), word("RE"), word("NATION")]
    body_parts: list[str] = []
    cursor = 0.0
    for index, (commands, piece_width) in enumerate(pieces):
        body_parts.append(group(path(commands), cursor))
        cursor += piece_width
        if index < len(pieces) - 1:
            cursor += gap
            body_parts.append(
                path(rect_commands(cursor, square_top, cursor + square, square_top + square))
            )
            cursor += square + gap
    return Artwork("04-interval", "Corenation Split Interval", "".join(body_parts), cursor, 100)


def cascade() -> Artwork:
    """CO / RE / NATION stepping down and right -- forward motion."""
    step = 52
    line_gap = 16
    rows = [word("CO"), word("RE"), word("NATION")]
    body_parts = []
    width = 0.0
    for index, (commands, row_width) in enumerate(rows):
        x = step * index
        y = (100 + line_gap) * index
        body_parts.append(group(path(commands), x, y))
        width = max(width, x + row_width)
    return Artwork("05-cascade", "Corenation Split Cascade", "".join(body_parts), width, 332)


def banner() -> Artwork:
    """CORE on top; NATION knocked out of a solid bar below."""
    core, core_width = word("CORE")
    inset = 22
    nation_height = 34
    target_width = core_width - 2 * inset
    _, natural = word("NATION", nation_height, tracking=0)
    nation_path = text_skia_path("NATION", nation_height, (target_width - natural) / 5)
    bar_pad = 17
    bar_commands = knockout(
        (-inset, -bar_pad, target_width + inset, nation_height + bar_pad), nation_path
    )
    body = path(core) + group(path(bar_commands), inset, 122 + bar_pad)
    return Artwork(
        "06-banner",
        "Corenation Split Banner",
        body,
        core_width,
        122 + nation_height + 2 * bar_pad,
    )


def concepts() -> tuple[Artwork, ...]:
    return (flag(), lead(), totem(), interval(), cascade(), banner())


def render_preview(art: Artwork, destination: Path) -> None:
    source = base.preview_document(art).encode("utf-8")
    doc = pymupdf.open(stream=source, filetype="svg")
    page = doc[0]
    scale = PREVIEW_HEIGHTS[art.slug] / page.rect.height
    pixmap = page.get_pixmap(matrix=pymupdf.Matrix(scale, scale), alpha=False)
    pixmap.save(destination)
    doc.close()


def write_artwork(art: Artwork) -> None:
    variants = {
        "": "currentColor",
        "-cream": base.CREAM,
        "-white": base.WHITE,
        "-black": base.BLACK,
    }
    for suffix, color in variants.items():
        (OUT / f"{art.slug}{suffix}.svg").write_text(
            svg_document(art, color), encoding="utf-8"
        )
    render_preview(art, OUT / f"{art.slug}.png")
    print("wrote", art.slug)


def copy_license() -> None:
    license_dir = OUT / "licenses"
    license_dir.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(
        base.OUT / "licenses" / "syne-OFL.txt", license_dir / "syne-OFL.txt"
    )


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    base.ensure_sources()
    copy_license()
    for art in concepts():
        write_artwork(art)


if __name__ == "__main__":
    main()
