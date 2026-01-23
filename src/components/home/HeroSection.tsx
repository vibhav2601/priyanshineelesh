import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Mail } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16 text-center">
      {/* Decorative top line */}
      <div className="mb-8 h-px w-16 bg-primary/40" />

      {/* Welcome text */}
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
        We're getting married
      </p>

      {/* Couple Names */}
      <h1 className="font-serif text-5xl font-medium tracking-wide text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
        Aanya <span className="font-light italic text-primary">&</span> Sahil
      </h1>

      {/* Date */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="h-px w-8 bg-border" />
        <p className="font-serif text-xl text-foreground sm:text-2xl">
          January 15, 2025
        </p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="text-sm font-medium">Lucknow, India</span>
        </div>
      </div>

      {/* Welcome Message */}
      <p className="mx-auto mt-10 max-w-md text-base text-muted-foreground">
        We joyfully invite you to celebrate our wedding. Join us for a 
        celebration of love, laughter, and new beginnings.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <Button asChild variant="default" size="lg" className="gap-2">
          <Link to="/explore">
            <MapPin className="h-4 w-4" />
            Explore Lucknow
          </Link>
        </Button>
        <Button asChild variant="outline" size="lg" className="gap-2">
          <Link to="/photos">
            <Camera className="h-4 w-4" />
            Share Photos
          </Link>
        </Button>
        <Button asChild variant="ghost" size="lg" className="gap-2">
          <Link to="/contact">
            <Mail className="h-4 w-4" />
            Contact Us
          </Link>
        </Button>
      </div>

      {/* Decorative bottom line */}
      <div className="mt-12 h-px w-16 bg-primary/40" />
    </section>
  );
};

export default HeroSection;
