import qrcode
from PIL import Image

# 🔗 The link you want the QR to point to
URL = "https://vibhav2601.github.io/priyanshineelesh/"

# 🖼 Path to center image (PNG/JPG with transparent bg works best)
LOGO_PATH = "src/resources/logo.png"

# 📏 Output file
OUTPUT_PATH = "qr_with_logo.png"

# Create QR with high error correction (important for logo!)
qr = qrcode.QRCode(
    version=1,
    error_correction=qrcode.constants.ERROR_CORRECT_H,  # HIGH
    box_size=10,
    border=4,
)

qr.add_data(URL)
qr.make(fit=True)

qr_img = qr.make_image(fill_color="black", back_color="white").convert("RGB")

# Load logo
logo = Image.open(LOGO_PATH)

# Resize logo (about 20–25% of QR size)
qr_width, qr_height = qr_img.size
logo_size = qr_width // 3
logo = logo.resize((logo_size, logo_size), Image.LANCZOS)

# Calculate position
pos = (
    (qr_width - logo_size) // 2,
    (qr_height - logo_size) // 2
)

# Paste logo into QR
qr_img.paste(logo, pos, mask=logo if logo.mode == "RGBA" else None)

# Save
qr_img.save(OUTPUT_PATH)

print("QR code generated:", OUTPUT_PATH)
