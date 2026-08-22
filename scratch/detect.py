from PIL import Image

img_path = r"d:\Ezzstar\Presale\public\assets\images\hero\char-11.png"
img = Image.open(img_path).convert("RGBA")

width, height = img.size
print(f"Image size: {width}x{height}")

# Find bounds of all non-transparent pixels in the right half (x > width/2)
# We will look for disconnected blobs if possible, or just print the coordinates of non-transparent pixels in the top right.

for y in range(0, int(height * 0.5), 10):
    row_pixels = []
    for x in range(int(width * 0.5), width, 10):
        if img.getpixel((x, y))[3] > 10: # alpha > 10
            row_pixels.append(x)
    if row_pixels:
        print(f"y={y}: x from {min(row_pixels)} to {max(row_pixels)}")
