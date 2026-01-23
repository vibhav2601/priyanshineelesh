import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import PhotoUploadCTA from "@/components/photos/PhotoUploadCTA";

const Photos = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <section className="container mx-auto px-4 py-16 md:py-24">
          {/* Section Header */}
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h1 className="font-serif text-3xl font-medium text-foreground sm:text-4xl md:text-5xl">
              Upload Your Photos
            </h1>
            <p className="mt-4 text-muted-foreground">
              Help us capture every beautiful moment! Upload your photos and 
              videos from the celebration to our shared album.
            </p>
          </div>

          {/* Photo Upload CTA */}
          <PhotoUploadCTA />

          {/* Additional Info */}
          <div className="mx-auto mt-12 max-w-md text-center">
            <h3 className="font-serif text-lg font-medium text-foreground">
              Tips for Great Photos
            </h3>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>📸 Capture candid moments and celebrations</li>
              <li>🎥 Videos are welcome too!</li>
              <li>✨ No filters needed — we love authentic moments</li>
              <li>📱 Upload directly from your phone</li>
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Photos;
