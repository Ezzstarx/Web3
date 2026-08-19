from PIL import Image

img_path = r"d:\Ezzstar\Presale\public\assets\images\hero\char-11.png"
img = Image.open(img_path).convert("RGBA")
pixels = img.load()

width, height = img.size

cleared = 0
for y in range(0, 100):
    for x in range(850, width):
        if pixels[x, y][3] > 0:
            pixels[x, y] = (0, 0, 0, 0)
            cleared += 1

print(f"Cleared {cleared} pixels in the top right artifact region.")
img.save(img_path)
