import qrcode

def generate_qr_code(url, filename="qrcode.png"):
    """
    Generates a QR code for the given URL and saves it as an image file.

    Args:
        url (str): The URL to embed in the QR code.
        filename (str): The name of the output image file (e.g., "my_qr_code.png").
    """
    qr = qrcode.QRCode(
        version=1,
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=10,
        border=4,
    )
    qr.add_data(url)
    qr.make(fit=True)

    img = qr.make_image(fill_color="black", back_color="white")
    img.save(filename)
    print(f"QR code generated and saved as {filename}")

if __name__ == "__main__":
    website_url = "https://vibhav2601.github.io/priyanshineelesh/"
    generate_qr_code(website_url)