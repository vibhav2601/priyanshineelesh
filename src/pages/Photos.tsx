import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { photo_qr_link } from "@/constants/links";

const photosQrCodeUrl =
  "https://raw.githubusercontent.com/vibhav2601/priyanshineelesh/main/src/resources/photos_qr.png";

const Photos = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
          <section className="container mx-auto px-4 py-16 md:py-24 bg-red-950">
          {/* Section Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h1 className="font-serif text-3xl font-medium text-white sm:text-4xl md:text-5xl">
              Tap on the QR
            </h1>
          </div>
          <div className="mx-auto mt-8 max-w-2xl text-center">
            <p className="mt-4 pb-6 text-md text-white">
              We know you’re only here for your pics. Main character energy only 💅
              So upload a selfie and let the site hunt down every photo that features your beautiful face.
            </p>
          </div>

          {/* Photo Upload CTA */}
          <div className="flex flex-col items-center justify-center gap-6">
            <a 
              href={photo_qr_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="block relative"
            >
              <img 
                src={photosQrCodeUrl} 
                alt="Photo Upload QR Code" 
                className="w-64 h-64 md:w-80 md:h-80 object-contain rounded-lg shadow-lg mx-auto"
              />
              <div className="absolute top-1/2 left-full -translate-y-1/2 flex items-center ml-4">
              </div>
            </a>
            <a 
              href={photo_qr_link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary hover:underline text-lg font-medium"
            >
            </a>
          </div>

          {/* Additional Info */}
          <div className="mx-auto mt-12 max-w-md text-center text-white">
            <div className="mt-8 text-left text-sm text-white max-w-md mx-auto">
              <h4 className="font-serif text-base font-medium text-white mb-2">Instructions:</h4>
              <ol className="list-decimal list-inside space-y-1">
                <li>To upload or download images, click "Join Album".</li>
                <li>Sign in with Google or email.</li>
                <li>Add your selfie for filtering by your own image.</li>
                <li>To upload, press the image icon on the bottom right corner.</li>
                <li>To download, click an image and then click the download button icon.</li>
                <li>To filter, go to your image icon.</li>
                <li>React on the photos you like!</li>
              </ol>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Photos;
