#!/usr/bin/env python3
"""Build the outlined Corenation wordmark concepts.

The output SVGs contain paths only: no live fonts, hexagons, or coin marks.
Source fonts are fetched from Google Fonts and used under the SIL OFL.
"""

from __future__ import annotations

import io
import tempfile
import urllib.request
from dataclasses import dataclass
from functools import lru_cache
from pathlib import Path

import pymupdf
import uharfbuzz as hb
from fontTools.pens.svgPathPen import SVGPathPen
from fontTools.pens.transformPen import TransformPen
from fontTools.ttLib import TTFont
from fontTools.varLib.instancer import instantiateVariableFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "logo" / "readable"
FONT_CACHE = Path(tempfile.gettempdir()) / "corenation-wordmark-fonts"

CREAM = "#D6CFB5"
WHITE = "#FFFFFF"
BLACK = "#0A0A0A"

FONT_SOURCES = {
    "syne": (
        "https://raw.githubusercontent.com/google/fonts/main/ofl/syne/"
        "Syne%5Bwght%5D.ttf",
        "https://raw.githubusercontent.com/google/fonts/main/ofl/syne/OFL.txt",
    ),
    "league-spartan": (
        "https://raw.githubusercontent.com/google/fonts/main/ofl/leaguespartan/"
        "LeagueSpartan%5Bwght%5D.ttf",
        "https://raw.githubusercontent.com/google/fonts/main/ofl/leaguespartan/OFL.txt",
    ),
    "archivo-black": (
        "https://raw.githubusercontent.com/google/fonts/main/ofl/archivoblack/"
        "ArchivoBlack-Regular.ttf",
        "https://raw.githubusercontent.com/google/fonts/main/ofl/archivoblack/OFL.txt",
    ),
    "barlow-condensed": (
        "https://raw.githubusercontent.com/google/fonts/main/ofl/barlowcondensed/"
        "BarlowCondensed-Black.ttf",
        "https://raw.githubusercontent.com/google/fonts/main/ofl/barlowcondensed/OFL.txt",
    ),
    "manrope": (
        "https://raw.githubusercontent.com/google/fonts/main/ofl/manrope/"
        "Manrope%5Bwght%5D.ttf",
        "https://raw.githubusercontent.com/google/fonts/main/ofl/manrope/OFL.txt",
    ),
    "space-grotesk": (
        "https://raw.githubusercontent.com/google/fonts/main/ofl/spacegrotesk/"
        "SpaceGrotesk%5Bwght%5D.ttf",
        "https://raw.githubusercontent.com/google/fonts/main/ofl/spacegrotesk/OFL.txt",
    ),
}

REJECTED_V1 = (
    "01-slash-track",
    "02-slash-active",
    "03-slash-stack",
    "04-slash-stack-active",
    "05-core-lead",
    "06-core-block",
    "slash-c",
)


@dataclass
class OutlinedFont:
    tt: TTFont
    hb_font: hb.Font
    cap_height: float
    x_height: float
    units_per_em: float


@dataclass
class Artwork:
    slug: str
    title: str
    body: str
    width: float
    height: float


def download(url: str, destination: Path) -> None:
    destination.parent.mkdir(parents=True, exist_ok=True)
    if not destination.exists():
        print("fetch", destination.name)
        urllib.request.urlretrieve(url, destination)


def ensure_sources() -> None:
    FONT_CACHE.mkdir(parents=True, exist_ok=True)
    license_dir = OUT / "licenses"
    license_dir.mkdir(parents=True, exist_ok=True)
    for family, (font_url, license_url) in FONT_SOURCES.items():
        download(font_url, FONT_CACHE / f"{family}.ttf")
        download(license_url, license_dir / f"{family}-OFL.txt")


@lru_cache(maxsize=None)
def outlined_font(family: str, axes: tuple[tuple[str, float], ...] = ()) -> OutlinedFont:
    tt = TTFont(FONT_CACHE / f"{family}.ttf")
    if "fvar" in tt and axes:
        tt = instantiateVariableFont(tt, dict(axes), inplace=False, optimize=True)

    data = io.BytesIO()
    tt.save(data)
    face = hb.Face(data.getvalue())
    hb_font = hb.Font(face)
    hb.ot_font_set_funcs(hb_font)

    upm = float(tt["head"].unitsPerEm)
    hb_font.scale = (int(upm), int(upm))
    os2 = tt["OS/2"]
    cap = float(getattr(os2, "sCapHeight", 0) or upm * 0.72)
    x_height = float(getattr(os2, "sxHeight", 0) or cap * 0.72)
    return OutlinedFont(tt, hb_font, cap, x_height, upm)


def outline_text(
    text: str,
    family: str,
    *,
    weight: float | None = None,
    target_height: float = 100,
    tracking: float = 0,
    x_scale: float = 1,
    shear: float = 0,
    height_basis: str = "cap",
) -> tuple[str, float]:
    axes: tuple[tuple[str, float], ...] = ()
    if weight is not None:
        axes = (("wght", weight),)
    font = outlined_font(family, axes)

    basis = font.x_height if height_basis == "x" else font.cap_height
    scale = target_height / basis
    sx = scale * x_scale

    buffer = hb.Buffer()
    buffer.add_str(text)
    buffer.guess_segment_properties()
    hb.shape(font.hb_font, buffer, {"kern": True})

    glyph_set = font.tt.getGlyphSet()
    glyph_order = font.tt.getGlyphOrder()
    cursor = 0.0
    commands: list[str] = []

    for info, position in zip(buffer.glyph_infos, buffer.glyph_positions):
        glyph_name = glyph_order[info.codepoint]
        pen = SVGPathPen(glyph_set)
        dx = cursor + position.x_offset * sx
        dy = target_height - position.y_offset * scale
        transform = (sx, 0, shear * scale, -scale, dx, dy)
        glyph_set[glyph_name].draw(TransformPen(pen, transform))
        command = pen.getCommands()
        if command:
            commands.append(command)
        cursor += position.x_advance * sx + tracking

    if text:
        cursor -= tracking
    # Positive shear pushes the top of letters to the right.
    width = cursor + max(0.0, shear * target_height)
    return "".join(commands), width


def path(commands: str) -> str:
    return f'<path d="{commands}"/>'


def group(body: str, x: float = 0, y: float = 0) -> str:
    return f'<g transform="translate({x:.3f} {y:.3f})">{body}</g>'


def core_nation(
    family: str,
    *,
    weight: float,
    tracking: float,
    semantic_gap: float,
    target_height: float = 100,
    x_scale: float = 1,
    shear: float = 0,
) -> tuple[str, float, float]:
    core, core_width = outline_text(
        "CORE",
        family,
        weight=weight,
        target_height=target_height,
        tracking=tracking,
        x_scale=x_scale,
        shear=shear,
    )
    nation, nation_width = outline_text(
        "NATION",
        family,
        weight=weight,
        target_height=target_height,
        tracking=tracking,
        x_scale=x_scale,
        shear=shear,
    )
    body = path(core) + group(path(nation), core_width + semantic_gap)
    return body, core_width + semantic_gap + nation_width, core_width


def open_set() -> Artwork:
    body, width, core_width = core_nation(
        "syne", weight=800, tracking=5.5, semantic_gap=10
    )
    # The core line is the only custom device: it names the idea without
    # cutting or distorting a letter.
    line_y = 112
    line = (
        f'<path d="M0 {line_y} H{core_width - 10:.3f} '
        f'L{core_width:.3f} {line_y - 6} H0Z"/>'
    )
    return Artwork("01-open-set", "Corenation Open Set", body + line, width, 118)


def open_set_active() -> Artwork:
    primary = open_set()
    descriptor, descriptor_width = outline_text(
        "ACTIVEWEAR / SURABAYA",
        "space-grotesk",
        weight=500,
        target_height=13,
        tracking=3.3,
    )
    descriptor_x = primary.width - descriptor_width
    body = primary.body + group(path(descriptor), descriptor_x, 132)
    return Artwork(
        "01-open-set-active",
        "Corenation Open Set with descriptor",
        body,
        primary.width,
        145,
    )


def open_set_stack() -> Artwork:
    core, core_width = outline_text(
        "CORE", "syne", weight=800, target_height=100, tracking=5.5
    )
    nation_raw, nation_width = outline_text(
        "NATION", "syne", weight=800, target_height=100, tracking=5.5
    )
    scale = core_width / nation_width
    nation = f'<g transform="translate(0 118) scale({scale:.6f} 1)">{path(nation_raw)}</g>'
    return Artwork(
        "01-open-set-stack",
        "Corenation Open Set stacked",
        path(core) + nation,
        core_width,
        218,
    )


def core_nation_weight() -> Artwork:
    core, core_width = outline_text(
        "CORE", "league-spartan", weight=850, target_height=100, tracking=2
    )
    nation, nation_width = outline_text(
        "NATION", "league-spartan", weight=500, target_height=100, tracking=3
    )
    gap = 18
    body = path(core) + group(path(nation), core_width + gap)
    return Artwork(
        "02-core-nation",
        "Corenation Core / Nation",
        body,
        core_width + gap + nation_width,
        100,
    )


def forward() -> Artwork:
    commands, width = outline_text(
        "CORENATION",
        "archivo-black",
        target_height=100,
        tracking=0.5,
        x_scale=0.98,
        shear=0.12,
    )
    rail_y = 112
    rail = (
        f'<path d="M8 {rail_y} H{width - 2:.3f} '
        f'L{width - 14:.3f} {rail_y + 6} H0Z"/>'
    )
    return Artwork("03-forward", "Corenation Forward", path(commands) + rail, width, 118)


def field() -> Artwork:
    commands, width = outline_text(
        "CORENATION",
        "barlow-condensed",
        target_height=100,
        tracking=6.5,
        x_scale=1.08,
    )
    descriptor, descriptor_width = outline_text(
        "BUILT TO MOVE / SURABAYA / 2014",
        "space-grotesk",
        weight=500,
        target_height=11,
        tracking=2.5,
    )
    body = path(commands) + group(path(descriptor), 1, 120)
    return Artwork(
        "04-field",
        "Corenation Field",
        body,
        max(width, descriptor_width),
        131,
    )


def everyday() -> Artwork:
    core, core_width = outline_text(
        "core",
        "manrope",
        weight=760,
        target_height=86,
        tracking=0.5,
        height_basis="x",
    )
    nation, nation_width = outline_text(
        "nation",
        "manrope",
        weight=540,
        target_height=86,
        tracking=0.5,
        height_basis="x",
    )
    gap = 2
    body = path(core) + group(path(nation), core_width + gap)
    return Artwork(
        "05-everyday",
        "corenation Everyday",
        body,
        core_width + gap + nation_width,
        86,
    )


def core_initial() -> Artwork:
    commands, width = outline_text(
        "C", "syne", weight=800, target_height=100, tracking=0
    )
    return Artwork("core-initial", "Corenation initial C", path(commands), width, 100)


def concepts() -> tuple[Artwork, ...]:
    return (
        open_set(),
        open_set_active(),
        open_set_stack(),
        core_nation_weight(),
        forward(),
        field(),
        everyday(),
        core_initial(),
    )


def svg_document(art: Artwork, color: str = "currentColor", pad: float = 12) -> str:
    width = art.width + pad * 2
    height = art.height + pad * 2
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" '
        f'viewBox="0 0 {width:.3f} {height:.3f}" role="img">\n'
        f"  <title>{art.title}</title>\n"
        f'  <g transform="translate({pad} {pad})" fill="{color}">\n'
        f"    {art.body}\n"
        "  </g>\n"
        "</svg>\n"
    )


def preview_document(art: Artwork, pad: float = 26) -> str:
    width = art.width + pad * 2
    height = art.height + pad * 2
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" '
        f'viewBox="0 0 {width:.3f} {height:.3f}">\n'
        f'<rect width="100%" height="100%" fill="{BLACK}"/>\n'
        f'<g transform="translate({pad} {pad})" fill="{CREAM}">{art.body}</g>\n'
        "</svg>\n"
    )


def render_preview(art: Artwork, destination: Path) -> None:
    source = preview_document(art).encode("utf-8")
    doc = pymupdf.open(stream=source, filetype="svg")
    page = doc[0]
    target_height = 380 if art.slug.endswith("stack") else 280
    scale = target_height / page.rect.height
    pixmap = page.get_pixmap(matrix=pymupdf.Matrix(scale, scale), alpha=False)
    pixmap.save(destination)
    doc.close()


def remove_rejected_v1() -> None:
    for slug in REJECTED_V1:
        for candidate in OUT.glob(f"{slug}*"):
            if candidate.is_file():
                candidate.unlink()


def write_artwork(art: Artwork) -> None:
    variants = {
        "": "currentColor",
        "-cream": CREAM,
        "-white": WHITE,
        "-black": BLACK,
    }
    for suffix, color in variants.items():
        (OUT / f"{art.slug}{suffix}.svg").write_text(
            svg_document(art, color), encoding="utf-8"
        )
    render_preview(art, OUT / f"{art.slug}.png")
    print("wrote", art.slug)


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    ensure_sources()
    remove_rejected_v1()
    for art in concepts():
        write_artwork(art)


if __name__ == "__main__":
    main()
