#!/usr/bin/env python3
"""Place Chalk print plates on blank gym tees for placement mockups."""

from __future__ import annotations

from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
PRINTS = ROOT / "assets" / "chalk" / "prints"
TEES = ROOT / "assets" / "chalk" / "tees"
ART = Path("/opt/cursor/artifacts/assets")

CHARCOAL_TEE = ART / "chalk-blank-gym-tee.png"
OLIVE_TEE = ART / "chalk-blank-gym-tee-olive.png"


def knock_out_background(im: Image.Image, tol: int = 22) -> Image.Image:
    rgba = im.convert("RGBA")
    arr = np.array(rgba)
    h, w = arr.shape[:2]
    bg = arr[2, 2, :3].astype(np.int16)
    vis = np.zeros((h, w), dtype=bool)
    q: deque[tuple[int, int]] = deque()
    for x in range(w):
        q.append((0, x))
        q.append((h - 1, x))
    for y in range(h):
        q.append((y, 0))
        q.append((y, w - 1))
    while q:
        y, x = q.popleft()
        if y < 0 or y >= h or x < 0 or x >= w or vis[y, x]:
            continue
        vis[y, x] = True
        pix = arr[y, x, :3].astype(np.int16)
        if np.max(np.abs(pix - bg)) <= tol:
            arr[y, x, 3] = 0
            q.append((y - 1, x))
            q.append((y + 1, x))
            q.append((y, x - 1))
            q.append((y, x + 1))
    out = Image.fromarray(arr)
    bbox = out.getbbox()
    if bbox:
        out = out.crop(bbox)
    return out


def place(tee: Image.Image, stamp: Image.Image, width: int, cy_ratio: float) -> Image.Image:
    stamp = stamp.copy()
    ratio = width / stamp.width
    stamp = stamp.resize((width, max(1, int(stamp.height * ratio))), Image.Resampling.LANCZOS)
    x = (tee.width - stamp.width) // 2
    y = int(tee.height * cy_ratio) - stamp.height // 2
    canvas = tee.copy().convert("RGBA")
    canvas.alpha_composite(stamp, (x, y))
    return canvas.convert("RGB")


def main() -> None:
    TEES.mkdir(parents=True, exist_ok=True)
    charcoal = Image.open(CHARCOAL_TEE).convert("RGBA")
    olive = Image.open(OLIVE_TEE).convert("RGBA")

    animals = [
        ("gorilla-pull.png", 340, 0.40),
        ("bear-squat.png", 320, 0.40),
        ("bull-press.png", 360, 0.41),
        ("wolf-load.png", 360, 0.41),
        ("tiger-chalk.png", 300, 0.39),
        ("rhino-lockout.png", 320, 0.40),
    ]
    quotes = [
        ("quote-lock-it-out.png", 300, 0.40),
        ("quote-bar-does-not-care.png", 380, 0.40),
        ("quote-stay-in-the-hole.png", 340, 0.40),
        ("quote-chalk-then-pull.png", 340, 0.40),
        ("quote-last-rep-is-the-set.png", 360, 0.40),
    ]

    for name, width, cy in animals:
        stamp = knock_out_background(Image.open(PRINTS / name))
        place(charcoal, stamp, width, cy).save(TEES / name, "PNG")
        print(f"tee charcoal {name}")

    place(olive, knock_out_background(Image.open(PRINTS / "gorilla-pull.png")), 340, 0.40).save(
        TEES / "gorilla-pull-olive.png", "PNG"
    )
    place(olive, knock_out_background(Image.open(PRINTS / "quote-lock-it-out.png")), 300, 0.40).save(
        TEES / "quote-lock-it-out-olive.png", "PNG"
    )
    print("tee olive extras")

    for name, width, cy in quotes:
        stamp = knock_out_background(Image.open(PRINTS / name))
        place(charcoal, stamp, width, cy).save(TEES / name, "PNG")
        print(f"tee charcoal {name}")


if __name__ == "__main__":
    main()
