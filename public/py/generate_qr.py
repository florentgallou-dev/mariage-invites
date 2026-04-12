#!/usr/bin/env python3
"""
generate_qr.py

Génère un QR code pour une URL et optionnellement y ajoute un logo/image au centre.

Dépendances :
  pip install qrcode[pil] pillow

Usage exemple :
  python3 generate_qr.py \
    --url "https://florentgallou-dev.github.io/mariage/" \
    --logo logo.png \
    --out qr_with_logo.png

Options importantes :
  --logo : chemin vers l'image à placer au centre (png/jpg). Si non fourni, QR sans logo.
  --logo-scale : fraction de la taille du QR utilisée pour le logo (défaut 0.20)
  --box-size : taille d'un carré en pixels (défaut 10)
  --border : bord en modules (défaut 4)

"""
import argparse
from pathlib import Path
import qrcode
from qrcode.constants import ERROR_CORRECT_H
from PIL import Image, ImageDraw


def make_qr(url: str, out_path: Path, logo_path: Path | None = None,
            box_size: int = 10, border: int = 4, logo_scale: float = 0.20):
    qr = qrcode.QRCode(
        error_correction=ERROR_CORRECT_H,
        box_size=box_size,
        border=border,
    )
    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white").convert("RGBA")

    if logo_path and logo_path.exists():
        logo = Image.open(logo_path).convert("RGBA")

        # compute max logo size
        qr_w, qr_h = img.size
        logo_max = int(min(qr_w, qr_h) * logo_scale)

        # preserve aspect ratio
        logo.thumbnail((logo_max, logo_max), Image.LANCZOS)

        # compute position
        lx, ly = logo.size
        pos = ((qr_w - lx) // 2, (qr_h - ly) // 2)

        # clear a white circular area behind the logo so the logo
        # doesn't hide QR modules (leave some padding)
        pad = max(4, int(logo_max * 0.01))
        cx, cy = qr_w // 2, qr_h // 2
        # radius: half of the larger logo dimension plus padding
        r = int(max(lx, ly) / 2 + pad)
        left = max(0, cx - r)
        top = max(0, cy - r)
        right = min(qr_w, cx + r)
        bottom = min(qr_h, cy + r)

        draw = ImageDraw.Draw(img)
        try:
          draw.ellipse([left, top, right, bottom], fill=(255, 255, 255, 255))
        except Exception:
          draw.rectangle([left, top, right, bottom], fill=(255, 255, 255, 255))

        # paste the logo on top of the cleared circular area
        if logo.mode in ("RGBA", "LA"):
          img.paste(logo, pos, mask=logo)
        else:
          img.paste(logo, pos)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    img.save(out_path)


def main():
    p = argparse.ArgumentParser(description="Génère un QR code avec logo central optionnel")
    p.add_argument("--url", required=True, help="URL à encoder")
    p.add_argument("--logo", help="Chemin vers l'image du logo à mettre au centre")
    p.add_argument("--out", default="qr.png", help="Fichier de sortie (png)")
    p.add_argument("--box-size", type=int, default=10, help="Taille d'un module en pixels")
    p.add_argument("--border", type=int, default=4, help="Largeur de la bordure en modules")
    p.add_argument("--logo-scale", type=float, default=0.20, help="Taille du logo en fraction du QR (0.10-0.30 recommandé)")

    args = p.parse_args()
    url = args.url
    logo = Path(args.logo) if args.logo else None
    out = Path(args.out)

    make_qr(url, out, logo_path=logo, box_size=args.box_size, border=args.border, logo_scale=args.logo_scale)
    print(f"QR généré -> {out}")


if __name__ == "__main__":
    main()
