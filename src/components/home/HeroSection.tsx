import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Camera, Mail, ChevronDown } from "lucide-react";

const HeroSection = () => {
  const [showSwipeHint, setShowSwipeHint] = useState(true);
  const sectionRef = useRef<HTMLElement | null>(null);

  const handleSwipeHintClick = () => {
    const nextSection = sectionRef.current?.nextElementSibling as HTMLElement | null;
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth", block: "start" });
      setShowSwipeHint(false);
      return;
    }

    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
    setShowSwipeHint(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setShowSwipeHint(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <section ref={sectionRef} className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-4 py-16 text-center bg-red-950">
      {/* Decorative top line */}
      <div className="mb-8 h-px w-16 bg-primary/40" />

      {/* Welcome text */}
      <p className="mb-4 text-sm font-medium uppercase tracking-[0.3em] text-primary-foreground">
        We're getting married
      </p>

      {/* Couple Names */}
      <h1 className="font-serif text-5xl font-medium tracking-wide sm:text-6xl md:text-7xl lg:text-8xl text-primary-foreground">Priyanshi <span className="font-light italic text-rose-300">&</span> Neelesh
      </h1>

      {/* Date */}
      <div className="mt-8 flex flex-col items-center gap-2">
        <div className="h-px w-8 bg-border" />
        <p className="font-serif text-xl sm:text-2xl text-primary-foreground">February 20, 2026</p>
        <div className="flex items-center gap-2 text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span className="text-sm font-medium">Lucknow, India</span>
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
        <Button asChild size="lg" className="gap-2 bg-white text-black hover:bg-[#fda4af] hover:text-black">
          <Link to="/explore">
            <MapPin className="h-4 w-4" />
            Explore Lucknow
          </Link>
        </Button>
        <Button asChild size="lg" className="gap-2 bg-white text-black hover:bg-[#fda4af] hover:text-black border border-input">
          <Link to="/photos">
            <Camera className="h-4 w-4" />
            Share Photos
          </Link>
        </Button>
        <Button asChild size="lg" className="gap-2 bg-white text-black hover:bg-[#fda4af] hover:text-black">
          <Link to="/contact">
            <Mail className="h-4 w-4" />
            Important Information
          </Link>
        </Button>
      </div>

      {/* Decorative bottom line */}
      <div className="mt-12 h-px w-16 bg-primary/40" />

      {/* Mobile swipe hint */}
      {showSwipeHint && (
        <button
          type="button"
          onClick={handleSwipeHintClick}
          aria-label="Swipe up to continue"
          className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:hidden"
        >
          <div className="flex flex-col items-center gap-1 text-primary-foreground/90">
            <span className="text-xs font-semibold uppercase tracking-[0.2em]">Swipe up</span>
            <ChevronDown className="h-7 w-7 animate-bounce" />
          </div>
        </button>
      )}
    </section>;
};
export default HeroSection;
