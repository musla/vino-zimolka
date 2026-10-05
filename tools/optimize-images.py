#!/usr/bin/env python3
"""Optimalizace obrázků v assets/ (vyžaduje Pillow: pip3 install Pillow).

- Fotky větší než MAX_SIDE zmenší, těžké JPG překomprimuje (kvalita 78, progresivní).
  Už optimalizované soubory pozná (progresivní JPG / nízký poměr bajtů na pixel) a nechá je být,
  takže skript lze spouštět opakovaně bez ztráty kvality.
- Pro fotky v assets/gallery a assets/images/fotky vytvoří náhledy do podsložky thumbs/
  (šířka 480 px). Build je použije v mřížkách, plná fotka se načte až v lightboxu.

Spuštění: python3 tools/optimize-images.py
"""
from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent / "assets"
MAX_SIDE = 1200          # delší strana plných fotek
THUMB_W = 480            # šířka náhledů
QUALITY = 78
THUMB_QUALITY = 74
BYTES_PER_PX = 0.45      # nad touto hodnotou se JPG považuje za neoptimalizovaný
THUMB_DIRS = [ROOT / "gallery", ROOT / "images" / "fotky"]


def save_jpg(im, path, quality):
    im.convert("RGB").save(path, "JPEG", quality=quality, optimize=True, progressive=True)


def optimize(path: Path) -> int:
    before = path.stat().st_size
    with Image.open(path) as im:
        im.load()
        w, h = im.size
        too_big = max(w, h) > MAX_SIDE
        # progresivní JPG = už prošel tímto skriptem (originály z původního webu jsou baseline)
        done = im.info.get("progressive") or im.info.get("progression")
        heavy = not done and before / (w * h) > BYTES_PER_PX
        if not (too_big or heavy):
            return 0
        if too_big:
            im.thumbnail((MAX_SIDE, MAX_SIDE), Image.LANCZOS)
        save_jpg(im, path, QUALITY)
    return before - path.stat().st_size


def thumbnail(path: Path) -> bool:
    out = path.parent / "thumbs" / path.name
    if out.exists() and out.stat().st_mtime >= path.stat().st_mtime:
        return False
    out.parent.mkdir(exist_ok=True)
    with Image.open(path) as im:
        im.thumbnail((THUMB_W, THUMB_W * 2), Image.LANCZOS)
        save_jpg(im, out, THUMB_QUALITY)
    return True


def main():
    saved = 0
    count = 0
    for path in sorted(ROOT.rglob("*.jpg")):
        if "thumbs" in path.parts:
            continue
        s = optimize(path)
        if s:
            saved += s
            count += 1
    thumbs = sum(thumbnail(p) for d in THUMB_DIRS for p in sorted(d.glob("*.jpg")))
    print(f"Překomprimováno {count} souborů, ušetřeno {saved / 1e6:.1f} MB; nových náhledů: {thumbs}")


if __name__ == "__main__":
    main()
