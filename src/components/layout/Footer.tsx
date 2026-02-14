import { Heart } from "lucide-react";

const logoUrl =
  "https://raw.githubusercontent.com/vibhav2601/priyanshineelesh/main/src/resources/logo.png";

const Footer = () => {
  return <footer className="border-t border-border/40 bg-secondary/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <img src={logoUrl} alt="Logo" className="h-24" />
          <p className="text-sm text-muted-foreground">
            February 2026 • Lucknow
          </p>
          <div className="flex items-center gap-1 text-xs text-muted-foreground">
            <span>Made with</span>
            <Heart className="h-3 w-3 fill-primary text-primary" />
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;