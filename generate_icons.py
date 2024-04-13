from PIL import Image


def resize_icon(input_path, output_size):
    original_image = Image.open(input_path)
    resized_image = original_image.resize((output_size, output_size), Image.LANCZOS)
    resized_image.save(f"icon{output_size}.png")


sizes = [
    16,
    48,
]

input_image_path = "icon512.png"

for size in sizes:
    resize_icon(input_image_path, size)
