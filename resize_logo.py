from PIL import Image
from pathlib import Path

src = Path('public/logo.png')
out = Path('public/logo.png')
img = Image.open(src).convert('RGBA')
w, h = img.size
new_w = 1000
new_h = max(1, int(h * new_w / w))
img = img.resize((new_w, new_h), Image.LANCZOS)
img.save(out)
print(f'RESIZED {new_w}x{new_h}')
