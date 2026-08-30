#!/usr/bin/env python3
"""Production marks for Corenation lines — kanji cards, floral motifs, culture-run prints."""

from __future__ import annotations

import math
from pathlib import Path

from PIL import Image, ImageDraw, ImageFont

ROOT = Path("/workspace")
MARKS = ROOT / "assets" / "marks"
KANJI_DIR = MARKS / "kanji"
FLORAL_DIR = MARKS / "floral"
CULTURE_DIR = MARKS / "culture"

OLIVE = (74, 82, 64)
BLACK = (10, 10, 10)
CHARCOAL = (42, 42, 42)
CREAM = (214, 207, 181)
GOLD = (212, 175, 55)
RED = (196, 30, 58)
WHITE = (255, 255, 255)
SAKURA = (232, 164, 180)
ROSE = (196, 91, 120)
SAKURA_CREAM = (246, 237, 232)
LILAC = (197, 180, 216)
LAVENDER = (139, 111, 168)
DUSK = (92, 74, 114)
INK = (22, 26, 36)

FONT_SANS = "/usr/share/fonts/opentype/noto/NotoSansCJK-Bold.ttc"
FONT_SERIF = "/usr/share/fonts/opentype/noto/NotoSerifCJK-Bold.ttc"
FONT_REG = "/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc"


def font(path: str, size: int, index: int = 0) -> ImageFont.FreeTypeFont:
    return ImageFont.truetype(path, size=size, index=index)


def save(im: Image.Image, path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    im.save(path, "PNG", optimize=True)
    print(f"wrote {path.relative_to(ROOT)}")


def hex_c(draw: ImageDraw.ImageDraw, cx: int, cy: int, r: int, color: tuple[int, int, int]) -> None:
    pts = []
    for i in range(6):
        a = math.radians(30 + i * 60)
        pts.append((cx + r * math.cos(a), cy + r * math.sin(a)))
    draw.polygon(pts, outline=color)
    inner = []
    for i in range(6):
        a = math.radians(30 + i * 60)
        inner.append((cx + (r - 5) * math.cos(a), cy + (r - 5) * math.sin(a)))
    draw.polygon(inner, outline=color)
    f = font(FONT_SANS, int(r * 1.1))
    bbox = draw.textbbox((0, 0), "C", font=f)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text((cx - tw / 2, cy - th / 2 - 4), "C", font=f, fill=color)


KANJI = [
    ("力", "CHIKARA", "POWER", RED, "apparel"),
    ("剛", "GO", "STRENGTH", RED, "apparel"),
    ("武", "BU", "WARRIOR", RED, "apparel"),
    ("鉄", "TETSU", "IRON", GOLD, "belt"),
    ("道", "DO", "THE WAY", GOLD, "belt"),
    ("心", "KOKORO", "SPIRIT", CREAM, "apparel"),
    ("忍", "NIN", "ENDURANCE", GOLD, "belt"),
    ("静", "SEI", "STILLNESS", CREAM, "apparel"),
    ("勝", "SHO", "VICTORY", RED, "apparel"),
    ("疾", "SHITSU", "SWIFT", RED, "apparel"),
    ("流", "RYU", "FLOW", GOLD, "belt"),
    ("破", "HA", "BREAK THROUGH", RED, "apparel"),
    ("火", "KA", "FIRE", RED, "apparel"),
    ("風", "FU", "WIND", CREAM, "apparel"),
    ("雷", "RAI", "THUNDER", GOLD, "belt"),
    ("山", "SAN", "MOUNTAIN", CREAM, "apparel"),
    ("龍", "RYU", "DRAGON", RED, "apparel"),
    ("極", "KYOKU", "EXTREME", GOLD, "belt"),
    ("魂", "TAMASHII", "SOUL", GOLD, "belt"),
    ("鍛", "TAN", "FORGE", RED, "apparel"),
    ("闘", "TO", "FIGHT", RED, "apparel"),
    ("気", "KI", "ENERGY", CREAM, "apparel"),
    ("拳", "KEN", "FIST", GOLD, "belt"),
    ("鋼", "HAGANE", "STEEL", GOLD, "belt"),
    ("峰", "MINE", "PEAK", CREAM, "apparel"),
    ("走", "SO", "RUN", CREAM, "run"),
]


def kanji_card(char: str, romaji: str, meaning: str, accent: tuple[int, int, int], kind: str) -> None:
    w, h = 1200, 1500
    bg = INK if kind == "run" else BLACK
    im = Image.new("RGB", (w, h), bg)
    draw = ImageDraw.Draw(im)
    margin = 70
    draw.rectangle((margin, margin, w - margin, h - margin), outline=accent, width=3)
    hex_c(draw, 160, 160, 42, CREAM)
    draw.text((220, 128), "CORENATION", font=font(FONT_SANS, 36), fill=CREAM)
    kf = font(FONT_SERIF, 520)
    bbox = draw.textbbox((0, 0), char, font=kf)
    tw, th = bbox[2] - bbox[0], bbox[3] - bbox[1]
    draw.text(((w - tw) / 2, 320), char, font=kf, fill=accent)
    for i, line in enumerate((romaji, meaning)):
        f = font(FONT_SANS, 42 if i == 0 else 32)
        bb = draw.textbbox((0, 0), line, font=f)
        lw = bb[2] - bb[0]
        draw.text(((w - lw) / 2, 1080 + i * 56), line, font=f, fill=CREAM if i == 0 else (160, 155, 140))
    slug = f"{char}-{romaji.lower()}"
    save(im, KANJI_DIR / f"card-{slug}.png")

    # Patch (apparel) — black rectangle, hero character
    pw, ph = 900, 1200
    patch = Image.new("RGB", (pw, ph), BLACK)
    pd = ImageDraw.Draw(patch)
    pd.rectangle((24, 24, pw - 24, ph - 24), outline=accent, width=6)
    kf2 = font(FONT_SERIF, 620)
    bb = pd.textbbox((0, 0), char, font=kf2)
    pd.text(((pw - (bb[2] - bb[0])) / 2, 180), char, font=kf2, fill=accent)
    vf = font(FONT_SANS, 28)
    for i, ch in enumerate("CORE NATION"):
        if ch == " ":
            continue
        pd.text((70, 160 + i * 72), ch, font=vf, fill=CREAM)
    save(patch, KANJI_DIR / f"patch-{slug}.png")


def sakura_blossom(draw: ImageDraw.ImageDraw, cx: float, cy: float, r: float, fill=ROSE, line=ROSE) -> None:
    for i in range(5):
        a = math.radians(-90 + i * 72)
        px = cx + r * 0.55 * math.cos(a)
        py = cy + r * 0.55 * math.sin(a)
        draw.ellipse((px - r * 0.42, py - r * 0.42, px + r * 0.42, py + r * 0.42), fill=fill, outline=line)
    draw.ellipse((cx - r * 0.16, cy - r * 0.16, cx + r * 0.16, cy + r * 0.16), fill=ROSE)


def floral_sakura_sheet() -> None:
    w, h = 1600, 2000
    im = Image.new("RGB", (w, h), SAKURA_CREAM)
    d = ImageDraw.Draw(im)
    d.rectangle((50, 50, w - 50, h - 50), outline=ROSE, width=3)
    hex_c(d, 160, 150, 40, ROSE)
    d.text((220, 118), "CORENATION  ·  SAKURA", font=font(FONT_SANS, 34), fill=DUSK if False else ROSE)
    # Branch
    d.line((280, 1680, 980, 620), fill=(90, 60, 70), width=8)
    d.line((620, 1100, 420, 820), fill=(90, 60, 70), width=5)
    d.line((860, 780, 1100, 700), fill=(90, 60, 70), width=5)
    for cx, cy, r in (
        (980, 620, 70),
        (1100, 700, 48),
        (860, 780, 56),
        (620, 1100, 64),
        (420, 820, 44),
        (500, 1280, 52),
        (740, 980, 40),
        (300, 1600, 36),
    ):
        sakura_blossom(d, cx, cy, r, fill=SAKURA, line=ROSE)
    d.text((120, 1860), "PINK SKUS ONLY  ·  FIVE-PETAL  ·  ONE CLUSTER PER PANEL", font=font(FONT_REG, 24), fill=ROSE)
    save(im, FLORAL_DIR / "sakura-branch-sheet.png")

    # Isolated blossoms for embroidery
    tile = Image.new("RGBA", (800, 800), (0, 0, 0, 0))
    td = ImageDraw.Draw(tile)
    sakura_blossom(td, 400, 400, 180, fill=(*SAKURA, 255), line=(*ROSE, 255))
    save(tile, FLORAL_DIR / "sakura-blossom.png")


def floral_lavender_sheet() -> None:
    w, h = 1600, 2000
    im = Image.new("RGB", (w, h), (243, 238, 246))
    d = ImageDraw.Draw(im)
    d.rectangle((50, 50, w - 50, h - 50), outline=LAVENDER, width=3)
    hex_c(d, 160, 150, 40, DUSK)
    d.text((220, 118), "CORENATION  ·  LAVENDER", font=font(FONT_SANS, 34), fill=DUSK)

    def spike(x: int, base_y: int, height: int, lean: int = 0) -> None:
        d.line((x, base_y, x + lean, base_y - height), fill=(70, 90, 70), width=5)
        for i in range(18):
            t = i / 17
            yy = base_y - 40 - t * (height - 80)
            xx = x + lean * t
            rr = 16 - t * 8
            d.ellipse((xx - rr, yy - rr * 1.3, xx + rr, yy + rr * 1.3), fill=LAVENDER if i % 2 == 0 else LILAC)

    spike(520, 1700, 980, -30)
    spike(700, 1720, 1100, 10)
    spike(880, 1680, 920, 40)
    spike(1040, 1700, 780, 20)
    spike(380, 1680, 700, -50)
    d.text((120, 1860), "LILAC SKUS ONLY  ·  SPIKES NOT PETALS  ·  ONE SPRAY PER PANEL", font=font(FONT_REG, 24), fill=DUSK)
    save(im, FLORAL_DIR / "lavender-spray-sheet.png")


def culture_wave() -> None:
    w, h = 2400, 3000
    im = Image.new("RGB", (w, h), INK)
    d = ImageDraw.Draw(im)
    # Wave crests
    for i, y0 in enumerate((2100, 2300, 2500)):
        pts = []
        amp = 140 - i * 20
        for x in range(0, w + 20, 20):
            y = y0 - amp * math.sin(x / 180 + i) - (40 if 900 < x < 1600 and i == 0 else 0)
            pts.append((x, y))
        pts.append((w, h))
        pts.append((0, h))
        fill = (CREAM[0], CREAM[1], CREAM[2]) if i == 0 else (RED if i == 1 else CHARCOAL)
        if i == 1:
            fill = (120, 30, 45)
        elif i == 2:
            fill = (36, 40, 52)
        d.polygon(pts, fill=fill)
    kf = font(FONT_SERIF, 620)
    bb = d.textbbox((0, 0), "走", font=kf)
    d.text(((w - (bb[2] - bb[0])) / 2, 720), "走", font=kf, fill=CREAM)
    d.text((120, 160), "CULTURE RUN", font=font(FONT_SANS, 48), fill=GOLD)
    d.text((120, 220), "WAVE", font=font(FONT_SANS, 72), fill=CREAM)
    hex_c(d, w - 160, 180, 44, CREAM)
    d.text((120, 2860), "前へ走れ    BACK PRINT    MEN'S TEE / TANK", font=font(FONT_REG, 32), fill=(140, 135, 120))
    save(im, CULTURE_DIR / "print-wave-so-run.png")


def culture_summit() -> None:
    w, h = 2400, 3000
    im = Image.new("RGB", (w, h), INK)
    d = ImageDraw.Draw(im)
    ridge = [(0, 2200), (400, 1800), (780, 2000), (1200, 1100), (1580, 1680), (1900, 1500), (2400, 1900), (2400, 3000), (0, 3000)]
    d.polygon(ridge, fill=(36, 42, 52))
    line = [(0, 2200), (400, 1800), (780, 2000), (1200, 1100), (1580, 1680), (1900, 1500), (2400, 1900)]
    d.line(line, fill=CREAM, width=10)
    d.text((120, 160), "CULTURE RUN", font=font(FONT_SANS, 48), fill=GOLD)
    d.text((120, 220), "SUMMIT", font=font(FONT_SANS, 72), fill=CREAM)
    kf = font(FONT_SERIF, 180)
    d.text((2100, 2680), "山", font=kf, fill=CREAM)
    hex_c(d, w - 160, 180, 44, CREAM)
    d.text((120, 2860), "BACK PRINT    TEE / TANK    ONE RIDGE", font=font(FONT_REG, 32), fill=(140, 135, 120))
    save(im, CULTURE_DIR / "print-summit.png")


def culture_bloom() -> None:
    w, h = 2400, 3000
    im = Image.new("RGB", (w, h), (250, 236, 238))
    d = ImageDraw.Draw(im)
    d.text((120, 160), "CULTURE RUN", font=font(FONT_SANS, 48), fill=ROSE)
    d.text((120, 220), "BLOOM PATH", font=font(FONT_SANS, 72), fill=ROSE)
    hex_c(d, w - 160, 180, 44, ROSE)
    # Path of blossoms, larger at hem
    coords = [
        (400, 2600, 90),
        (700, 2400, 80),
        (980, 2150, 74),
        (1200, 1880, 68),
        (1380, 1600, 58),
        (1520, 1340, 50),
        (1640, 1100, 42),
        (1740, 880, 34),
        (1820, 680, 26),
    ]
    for i in range(len(coords) - 1):
        d.line((coords[i][0], coords[i][1], coords[i + 1][0], coords[i + 1][1]), fill=(90, 60, 70), width=6)
    for cx, cy, r in coords:
        sakura_blossom(d, cx, cy, r, fill=SAKURA, line=ROSE)
    d.text((120, 2860), "WOMEN'S RUN TANK    SAKURA PATH    NO KANJI", font=font(FONT_REG, 32), fill=ROSE)
    save(im, CULTURE_DIR / "print-bloom-path.png")


def culture_dusk() -> None:
    w, h = 2400, 3000
    im = Image.new("RGB", (w, h), (36, 28, 48))
    d = ImageDraw.Draw(im)
    # dusk wash
    for y in range(h):
        t = y / h
        col = (
            int(36 + (197 - 36) * t * 0.35),
            int(28 + (180 - 28) * t * 0.25),
            int(48 + (216 - 48) * t * 0.2),
        )
        d.line((0, y, w, y), fill=col)
    d.text((120, 160), "CULTURE RUN", font=font(FONT_SANS, 48), fill=LILAC)
    d.text((120, 220), "DUSK", font=font(FONT_SANS, 72), fill=CREAM)
    hex_c(d, w - 160, 180, 44, LILAC)

    def spike(x: int, base_y: int, height: int, lean: int = 0) -> None:
        d.line((x, base_y, x + lean, base_y - height), fill=(60, 80, 60), width=5)
        for i in range(16):
            t = i / 15
            yy = base_y - 30 - t * (height - 60)
            xx = x + lean * t
            rr = 14 - t * 7
            d.ellipse((xx - rr, yy - rr * 1.3, xx + rr, yy + rr * 1.3), fill=LAVENDER if i % 2 == 0 else LILAC)

    for x, ht, lean in (
        (280, 520, -20),
        (480, 680, 10),
        (700, 740, -8),
        (920, 600, 18),
        (1140, 700, 0),
        (1360, 560, 22),
        (1580, 640, -12),
        (1800, 500, 16),
        (2020, 580, -6),
    ):
        spike(x, 2920, ht, lean)
    d.text((120, 120), "WOMEN'S RUN TEE    LAVENDER FIELD    NO KANJI", font=font(FONT_REG, 28), fill=LILAC)
    save(im, CULTURE_DIR / "print-dusk.png")


def culture_home() -> None:
    w, h = 2400, 3000
    im = Image.new("RGB", (w, h), INK)
    d = ImageDraw.Draw(im)
    # Bromo-like cone + ridge
    cone = [(900, 2400), (1200, 980), (1500, 2400)]
    d.polygon(cone, fill=(48, 44, 40))
    d.line([(200, 2100), (700, 1800), (900, 2000), (1200, 980), (1500, 2000), (1900, 1760), (2300, 2050)], fill=CREAM, width=8)
    d.text((120, 160), "CULTURE RUN", font=font(FONT_SANS, 48), fill=GOLD)
    d.text((120, 220), "HOME SOIL", font=font(FONT_SANS, 72), fill=CREAM)
    d.text((120, 2680), "SURABAYA", font=font(FONT_SANS, 40), fill=(140, 135, 120))
    hex_c(d, w - 160, 180, 44, CREAM)
    d.text((120, 2860), "UNISEX    ABSTRACT RIDGE    NO FLAG    NO BATIK COSTUME", font=font(FONT_REG, 28), fill=(140, 135, 120))
    save(im, CULTURE_DIR / "print-home-soil.png")


def main() -> None:
    for char, romaji, meaning, accent, kind in KANJI:
        kanji_card(char, romaji, meaning, accent, kind)
    floral_sakura_sheet()
    floral_lavender_sheet()
    culture_wave()
    culture_summit()
    culture_bloom()
    culture_dusk()
    culture_home()
    print("done")


if __name__ == "__main__":
    main()
