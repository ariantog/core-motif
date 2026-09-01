#!/usr/bin/env python3
"""Build Corenation readable wordmarks from the A-E letter DNA.

Signature: slashed C, circular O, separated R, clipped A / T.
No hexagon. No coin.
"""
from __future__ import annotations

import math
from pathlib import Path

import pymupdf

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "logo" / "readable"
REF_OUT = OUT / "reference"
CREAM = "#D6CFB5"
INK = "#0A0A0A"

H = 100.0
W = 26.0


def _pt(cx: float, cy: float, r: float, deg: float) -> tuple[float, float]:
    a = math.radians(deg)
    return cx + r * math.cos(a), cy + r * math.sin(a)


def _ring_seg(cx: float, cy: float, r_out: float, r_in: float, start: float, end: float) -> str:
    """Filled ring sector, clockwise from start deg to end deg."""
    span = (end - start) % 360
    large = 1 if span > 180 else 0
    ox0, oy0 = _pt(cx, cy, r_out, start)
    ox1, oy1 = _pt(cx, cy, r_out, end)
    ix1, iy1 = _pt(cx, cy, r_in, end)
    ix0, iy0 = _pt(cx, cy, r_in, start)
    return (
        f"M{ox0:.3f},{oy0:.3f}"
        f"A{r_out:.3f},{r_out:.3f} 0 {large} 1 {ox1:.3f},{oy1:.3f}"
        f"L{ix1:.3f},{iy1:.3f}"
        f"A{r_in:.3f},{r_in:.3f} 0 {large} 0 {ix0:.3f},{iy0:.3f}Z"
    )


def letter_c() -> tuple[str, float]:
    """Circular C with two diagonal cuts through the upper left."""
    cx = cy = H / 2
    r_out, r_in = H / 2, H / 2 - W
    # Body of the C, then two gaps (the slashes) on the upper-left.
    segs = (
        _ring_seg(cx, cy, r_out, r_in, 32, 208),
        _ring_seg(cx, cy, r_out, r_in, 218, 236),
        _ring_seg(cx, cy, r_out, r_in, 246, 328),
    )
    return "".join(f'<path d="{d}"/>' for d in segs), H


def letter_o() -> tuple[str, float]:
    cx = cy = H / 2
    r_out, r_in = H / 2, H / 2 - W
    d = (
        f"M{cx + r_out:.3f},{cy:.3f}"
        f"A{r_out:.3f},{r_out:.3f} 0 1 1 {cx - r_out:.3f},{cy:.3f}"
        f"A{r_out:.3f},{r_out:.3f} 0 1 1 {cx + r_out:.3f},{cy:.3f}Z"
        f"M{cx + r_in:.3f},{cy:.3f}"
        f"A{r_in:.3f},{r_in:.3f} 0 1 0 {cx - r_in:.3f},{cy:.3f}"
        f"A{r_in:.3f},{r_in:.3f} 0 1 0 {cx + r_in:.3f},{cy:.3f}Z"
    )
    return f'<path fill-rule="evenodd" d="{d}"/>', H


def letter_r() -> tuple[str, float]:
    width = 76.0
    gap = 3.4
    stem = f'<rect x="0" y="0" width="{W}" height="{H}"/>'
    bx = W + gap
    # Closed D-bowl, separated from the stem.
    bowl = (
        f'<path d="M{bx:.2f},0 H{bx + 22:.2f}'
        f"A29,29 0 0 1 {bx + 22:.2f},58"
        f"H{bx:.2f} V{58 - W:.2f} H{bx + 18:.2f}"
        f"A{29 - W:.2f},{29 - W:.2f} 0 0 0 {bx + 18:.2f},{W:.2f}"
        f'H{bx:.2f}Z"/>'
    )
    leg = (
        f'<path d="M{bx + 8:.2f},54 L{width:.2f},{H} L{width - 24:.2f},{H} '
        f'L{bx + 2:.2f},68Z"/>'
    )
    return stem + bowl + leg, width


def letter_e() -> tuple[str, float]:
    width = 68.0
    mid = 44.0
    d = (
        f"M0,0 H{width:.1f} V{W:.1f} H{W:.1f} V{(H - W) / 2:.1f} "
        f"H{mid:.1f} V{(H + W) / 2:.1f} H{W:.1f} V{H - W:.1f} "
        f"H{width:.1f} V{H:.1f} H0Z"
    )
    return f'<path d="{d}"/>', width


def letter_n() -> tuple[str, float]:
    width = 76.0
    left = f'<rect x="0" y="0" width="{W}" height="{H}"/>'
    right = f'<rect x="{width - W}" y="0" width="{W}" height="{H}"/>'
    # Thick diagonal: top of left stem to bottom of right stem, weight ~W.
    diag = (
        f'<path d="M{W:.2f},0 L{width - W:.2f},{H - W:.2f} V{H:.2f} '
        f'L{W:.2f},{W:.2f}Z"/>'
    )
    return left + right + diag, width


def letter_a_clip() -> tuple[str, float]:
    """Flat-top A, clipped top-right, low bar."""
    width = 80.0
    # Outer silhouette + triangular counter above the bar.
    outer = (
        f"M6,{H:.1f} L34,0 H52 L74,24 V{H:.1f} H54 L48,70 H28 L20,{H:.1f}Z"
    )
    hole = "M32,50 L43,16 L54,50Z"
    bar = f'<rect x="22" y="66" width="40" height="16"/>'
    return f'<path fill-rule="evenodd" d="{outer}{hole}"/>' + bar, width


def letter_a_chevron() -> tuple[str, float]:
    """Bar-less A."""
    width = 80.0
    d = (
        f"M6,{H:.1f} L34,0 H54 L{width - 4:.1f},{H:.1f} H{width - 26:.1f} "
        f"L44,24 L24,{H:.1f}Z"
    )
    return f'<path d="{d}"/>', width


def letter_t() -> tuple[str, float]:
    width = 72.0
    stem_x = (width - W) / 2
    d = (
        f"M0,0 H{width - 12:.1f} L{width:.1f},{W:.1f} H{stem_x + W:.1f} "
        f"V{H:.1f} H{stem_x:.1f} V{W:.1f} H0Z"
    )
    return f'<path d="{d}"/>', width


def letter_i() -> tuple[str, float]:
    return f'<rect x="0" y="0" width="{W}" height="{H}"/>', W


LETTERS_TRACK = {
    "C": letter_c,
    "O": letter_o,
    "R": letter_r,
    "E": letter_e,
    "N": letter_n,
    "A": letter_a_clip,
    "T": letter_t,
    "I": letter_i,
}

LETTERS_STACK = {
    **LETTERS_TRACK,
    "A": letter_a_chevron,
}


def compose(text: str, letters: dict, gap: float = 12.0, scale: float = 1.0) -> tuple[str, float, float]:
    x = 0.0
    parts = []
    for ch in text:
        svg, width = letters[ch]()
        parts.append(f'<g transform="translate({x:.3f},0) scale({scale})">{svg}</g>')
        x += (width + gap) * scale
    return "".join(parts), x - gap * scale, H * scale


def svg_doc(body: str, width: float, height: float, pad: float = 16.0, fill: str = "currentColor") -> str:
    vb_w = width + pad * 2
    vb_h = height + pad * 2
    return (
        f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {vb_w:.2f} {vb_h:.2f}" '
        f'role="img" fill="{fill}">\n'
        f'  <title>Corenation</title>\n'
        f'  <g transform="translate({pad:.2f},{pad:.2f})">\n{body}\n  </g>\n'
        f"</svg>\n"
    )


def small_activewear(target_width: float, x: float, y: float) -> str:
    """Simple tracked ACTIVEWEAR under a wordmark."""
    word = "ACTIVEWEAR"
    h, w = 14.0, 3.2
    gap = (target_width - len(word) * 10) / (len(word) - 1)
    # Use a compact built-in sans via paths that stay geometric.
    # Approximate with a system of tiny block letters at this scale.
    letters = {
        "A": f'<path d="M0,{h} L4,0 H7 L11,{h} H8 L7.2,{h*0.62} H3.8 L3,{h}Z M4.2,{h*0.42} H6.8 L6.2,{h*0.22} H4.8Z"/>',
        "C": f'<path d="M11,3 A5.5,5.5 0 1 0 11,{h-3} V{h-6} A2.6,2.6 0 1 1 11,6Z"/>',
        "T": f'<rect x="0" y="0" width="10" height="{w}"/><rect x="3.4" y="0" width="{w}" height="{h}"/>',
        "I": f'<rect x="3.4" y="0" width="{w}" height="{h}"/>',
        "V": f'<path d="M0,0 H3 L5.5,{h-1} L8,0 H11 L6.4,{h} H4.6Z"/>',
        "E": (
            f'<rect x="0" y="0" width="{w}" height="{h}"/>'
            f'<rect x="0" y="0" width="9" height="{w}"/>'
            f'<rect x="0" y="{(h-w)/2}" width="7" height="{w}"/>'
            f'<rect x="0" y="{h-w}" width="9" height="{w}"/>'
        ),
        "W": (
            f'<path d="M0,0 H3 L4.2,{h-2} L5.5,4 H7.5 L8.8,{h-2} L10,0 H13 '
            f'L10.8,{h} H8.6 L6.5,6 L4.4,{h} H2.2Z"/>'
        ),
        "R": (
            f'<rect x="0" y="0" width="{w}" height="{h}"/>'
            f'<path d="M{w},0 H8 A4,4 0 0 1 8,8 H{w}Z M4,8 L9,{h} H6 L{w},8Z"/>'
        ),
    }
    # widths of those glyphs
    widths = {"A": 11, "C": 12, "T": 10, "I": 10, "V": 11, "E": 9, "W": 13, "R": 10}
    total = sum(widths[ch] for ch in word)
    extra = max(0.0, target_width - total)
    g = extra / (len(word) - 1) if extra else 4.0
    parts = []
    cx = x
    for ch in word:
        parts.append(f'<g transform="translate({cx:.2f},{y:.2f})">{letters[ch]}</g>')
        cx += widths[ch] + g
    return "".join(parts)


def build_lockups() -> dict[str, tuple[str, float, float]]:
    track, tw, th = compose("CORENATION", LETTERS_TRACK, gap=11)
    stack_core, cw, ch = compose("CORE", LETTERS_STACK, gap=14)
    stack_nation, nw, nh = compose("NATION", LETTERS_STACK, gap=8)
    # Scale NATION to CORE width.
    nation_scale = cw / nw
    nation_body, nw2, nh2 = compose("NATION", LETTERS_STACK, gap=8, scale=nation_scale)

    track_active = track + small_activewear(tw * 0.62, tw * 0.38, th + 18)

    stack = stack_core + f'<g transform="translate(0,{ch + 14})">{nation_body}</g>'
    stack_h = ch + 14 + nh2

    stack_tag = stack + small_activewear(cw * 0.72, cw * 0.14, stack_h + 16)

    # Core-lead: CORE at full size, NATION slightly smaller, left aligned (ref D).
    nation_lead, lw, lh = compose("NATION", LETTERS_TRACK, gap=9, scale=0.72)
    core_lead = stack_core + f'<g transform="translate(0,{ch + 12})">{nation_lead}</g>'
    core_lead_h = ch + 12 + lh

    # Block CO / RE / NATION (ref E). NATION sets the width so it stays readable.
    co, cow, _ = compose("CO", LETTERS_TRACK, gap=10)
    re, rew, _ = compose("RE", LETTERS_TRACK, gap=10)
    nation_b, nbw, nbh = compose("NATION", LETTERS_STACK, gap=8, scale=0.55)
    block_w = max(cow, rew, nbw)
    block = (
        f'<g transform="translate({(block_w - cow) / 2:.2f},0)">{co}</g>'
        f'<g transform="translate({(block_w - rew) / 2:.2f},{H + 10:.2f})">{re}</g>'
        f'<g transform="translate({(block_w - nbw) / 2:.2f},{(H + 10) * 2:.2f})">{nation_b}</g>'
    )
    block_h = (H + 10) * 2 + nbh

    slash, sw = letter_c()
    sh = H

    return {
        "01-slash-track": (track, tw, th),
        "02-slash-active": (track_active, tw, th + 36),
        "03-slash-stack": (stack, cw, stack_h),
        "04-slash-stack-active": (stack_tag, cw, stack_h + 34),
        "05-core-lead": (core_lead, max(cw, lw), core_lead_h),
        "06-core-block": (block, block_w, block_h),
        "slash-c": (slash, sw, sh),
    }


def write_svg(path: Path, body: str, width: float, height: float, fill: str) -> None:
    path.write_text(svg_doc(body, width, height, fill=fill), encoding="utf-8")


def render_png(svg_path: Path, png_path: Path, height: int = 280) -> None:
    doc = pymupdf.open(svg_path)
    page = doc[0]
    zoom = height / page.rect.height
    pix = page.get_pixmap(matrix=pymupdf.Matrix(zoom, zoom), alpha=False)
    # Composite onto ink if the SVG used cream/currentColor on transparent.
    pix.save(png_path)
    doc.close()


def extract_references() -> None:
    REF_OUT.mkdir(parents=True, exist_ok=True)
    mapping = {
        "A": "a-track-active",
        "B": "b-track",
        "C": "c-stack-active",
        "D": "d-core-lead",
        "E": "e-core-block",
    }
    for letter, slug in mapping.items():
        src = ROOT / "assets" / f"LOGO CORENATION {letter}.pdf"
        doc = pymupdf.open(src)
        page = doc[0]
        drawings = page.get_drawings()
        rect = drawings[0]["rect"]
        for item in drawings[1:]:
            rect |= item["rect"]
        rect = rect + (-18, -18, 18, 18)
        svg = page.get_svg_image(matrix=pymupdf.Identity)
        # Re-wrap with a tight viewBox by rendering a crop.
        clip = pymupdf.Rect(rect)
        pix = page.get_pixmap(matrix=pymupdf.Matrix(3, 3), clip=clip, alpha=False)
        png_path = REF_OUT / f"{slug}.png"
        pix.save(png_path)
        # Also keep a cropped SVG via a translated group.
        x0, y0, x1, y1 = clip
        cropped = (
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {x1 - x0:.2f} {y1 - y0:.2f}" '
            f'role="img">\n<title>Corenation reference {letter}</title>\n'
            f'<g transform="translate({-x0:.2f},{-y0:.2f})">\n'
        )
        # Pull path elements from the page SVG.
        start = svg.find("<path")
        end = svg.rfind("</g>")
        if start != -1 and end != -1:
            cropped += svg[start:end]
        cropped += "</g>\n</svg>\n"
        (REF_OUT / f"{slug}.svg").write_text(cropped, encoding="utf-8")
        print("reference", slug)
        doc.close()


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    extract_references()
    lockups = build_lockups()
    for slug, (body, width, height) in lockups.items():
        write_svg(OUT / f"{slug}.svg", body, width, height, "currentColor")
        write_svg(OUT / f"{slug}-cream.svg", body, width, height, CREAM)
        write_svg(OUT / f"{slug}-white.svg", body, width, height, "#FFFFFF")
        write_svg(OUT / f"{slug}-black.svg", body, width, height, INK)
        # Preview: cream on ink, via a wrapper SVG.
        preview = svg_doc(
            f'<rect width="100%" height="100%" fill="{INK}"/>'
            f'<g fill="{CREAM}">{body}</g>',
            width,
            height,
            fill=CREAM,
        )
        # The wrapper above is wrong because svg_doc already wraps body.
        preview_svg = (
            f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {width + 32:.2f} {height + 32:.2f}">'
            f'<rect width="100%" height="100%" fill="{INK}"/>'
            f'<g transform="translate(16,16)" fill="{CREAM}">{body}</g></svg>'
        )
        tmp = OUT / f"_{slug}-preview.svg"
        tmp.write_text(preview_svg, encoding="utf-8")
        render_png(tmp, OUT / f"{slug}.png", height=320 if slug != "slash-c" else 400)
        tmp.unlink()
        print("wrote", slug)


if __name__ == "__main__":
    main()
