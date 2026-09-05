#!/usr/bin/env python3
"""Render Corenation Chalk quote lockups as 2-color screen-print plates."""

from __future__ import annotations

from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "assets" / "chalk" / "prints"

SIZE = 1536
CHARCOAL = (26, 28, 30)
CREAM = (214, 207, 181)
RUST = (196, 92, 56)
BOLD = "/usr/share/fonts/truetype/macos/Inter-Bold.ttf"


def font(size: int) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(BOLD, size)


def new_plate() -> tuple[Image.Image, ImageDraw.ImageDraw]:
    im = Image.new("RGB", (SIZE, SIZE), CHARCOAL)
    return im, ImageDraw.Draw(im)


def measure(draw: ImageDraw.ImageDraw, text: str, fnt: ImageFont.FreeTypeFont) -> tuple[int, int, int, int]:
    return draw.textbbox((0, 0), text, font=fnt)


def fit_font(draw: ImageDraw.ImageDraw, text: str, max_w: int, start: int) -> ImageFont.FreeTypeFont:
    size = start
    while size > 28:
        fnt = font(size)
        l, _t, r, _b = measure(draw, text, fnt)
        if r - l <= max_w:
            return fnt
        size -= 4
    return font(28)


def draw_line(
    draw: ImageDraw.ImageDraw,
    text: str,
    fnt: ImageFont.FreeTypeFont,
    y: int,
    fill: tuple[int, int, int] = CREAM,
) -> int:
    """Draw centered text whose top is y. Return the pixel under the glyphs."""
    l, t, r, b = measure(draw, text, fnt)
    x = (SIZE - (r - l)) // 2 - l
    draw.text((x, y - t), text, font=fnt, fill=fill)
    return y + (b - t)


def rust_rule(draw: ImageDraw.ImageDraw, y: int, width: int, thick: int = 16) -> int:
    x0 = (SIZE - width) // 2
    draw.rectangle((x0, y, x0 + width, y + thick), fill=RUST)
    return y + thick


def barbell(draw: ImageDraw.ImageDraw, cy: int, width: int, plate: int) -> None:
    cx = SIZE // 2
    bar_h = 16
    inset = plate + 8
    draw.rectangle(
        (cx - width // 2 + inset, cy - bar_h // 2, cx + width // 2 - inset, cy + bar_h // 2),
        fill=CREAM,
    )
    for side in (-1, 1):
        x = cx + side * (width // 2 - plate)
        draw.ellipse((x - plate, cy - plate, x + plate, cy + plate), fill=RUST)
        draw.ellipse(
            (x - plate + 16, cy - plate + 16, x + plate - 16, cy + plate - 16),
            fill=CHARCOAL,
        )
        draw.ellipse(
            (x - 10, cy - 10, x + 10, cy + 10),
            fill=CREAM,
        )


def save(im: Image.Image, name: str) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    path = OUT / name
    im.save(path, "PNG")
    print(f"wrote {path.relative_to(ROOT)}")


def lock_it_out() -> None:
    im, draw = new_plate()
    fnt = fit_font(draw, "LOCK", 1080, 260)
    gap = 36
    lines = ["LOCK", "IT", "OUT"]
    heights = []
    for line in lines:
        _l, t, _r, b = measure(draw, line, fnt)
        heights.append(b - t)
    block = sum(heights) + gap * 2 + 28 + 16 + 36 + 88
    y = (SIZE - block) // 2
    y = draw_line(draw, "LOCK", fnt, y)
    y += gap
    y = draw_line(draw, "IT", fnt, y)
    y += 28
    y = rust_rule(draw, y, 240, 16)
    y += 36
    y = draw_line(draw, "OUT", fnt, y)
    barbell(draw, y + 70, 640, 40)
    save(im, "quote-lock-it-out.png")


def bar_does_not_care() -> None:
    im, draw = new_plate()
    top = fit_font(draw, "THE BAR", 1180, 200)
    bot = fit_font(draw, "DOES NOT CARE", 1240, 140)
    _l, t1, _r, b1 = measure(draw, "THE BAR", top)
    _l, t2, _r, b2 = measure(draw, "DOES NOT CARE", bot)
    block = (b1 - t1) + (b2 - t2) + 160
    y = (SIZE - block) // 2
    y = draw_line(draw, "THE BAR", top, y)
    barbell(draw, y + 62, 900, 48)
    draw_line(draw, "DOES NOT CARE", bot, y + 124)
    save(im, "quote-bar-does-not-care.png")


def stay_in_the_hole() -> None:
    im, draw = new_plate()
    top = fit_font(draw, "STAY IN", 1100, 190)
    hole = fit_font(draw, "THE HOLE", 900, 190)
    _l, t1, _r, b1 = measure(draw, "STAY IN", top)
    _l, t2, r2, b2 = measure(draw, "THE HOLE", hole)
    pad_x, pad_y = 64, 40
    box_w = (r2 - _l) + pad_x * 2
    box_h = (b2 - t2) + pad_y * 2
    block = (b1 - t1) + 56 + box_h
    y = (SIZE - block) // 2
    y = draw_line(draw, "STAY IN", top, y)
    box_x = (SIZE - box_w) // 2
    box_y = y + 56
    draw.rounded_rectangle((box_x, box_y, box_x + box_w, box_y + box_h), radius=10, fill=RUST)
    text_x = box_x + pad_x - _l
    text_y = box_y + pad_y - t2
    draw.text((text_x, text_y), "THE HOLE", font=hole, fill=CHARCOAL)
    save(im, "quote-stay-in-the-hole.png")


def chalk_then_pull() -> None:
    im, draw = new_plate()
    fnt = fit_font(draw, "THEN PULL.", 1180, 180)
    _l, t, _r, b = measure(draw, "THEN PULL.", fnt)
    h = b - t
    block = h * 2 + 96
    y = (SIZE - block) // 2
    y = draw_line(draw, "CHALK.", fnt, y)
    y += 32
    y = rust_rule(draw, y, 220, 16)
    y += 48
    draw_line(draw, "THEN PULL.", fnt, y)
    save(im, "quote-chalk-then-pull.png")


def last_rep() -> None:
    im, draw = new_plate()
    top = fit_font(draw, "LAST REP", 1180, 200)
    bot = fit_font(draw, "IS THE SET", 1180, 170)
    _l, t1, _r, b1 = measure(draw, "LAST REP", top)
    _l, t2, _r, b2 = measure(draw, "IS THE SET", bot)
    block = (b1 - t1) + (b2 - t2) + 96
    y = (SIZE - block) // 2
    y = draw_line(draw, "LAST REP", top, y)
    y += 32
    y = rust_rule(draw, y, 340, 14)
    y += 50
    draw_line(draw, "IS THE SET", bot, y)
    save(im, "quote-last-rep-is-the-set.png")


def main() -> None:
    lock_it_out()
    bar_does_not_care()
    stay_in_the_hole()
    chalk_then_pull()
    last_rep()


if __name__ == "__main__":
    main()
