import { Heart } from "lucide-react";
const Footer = () => {
  return <footer className="border-t border-border/40 bg-secondary/30">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <span className="font-serif text-lg font-medium text-foreground">TODO: ADD LOGO</span>
          <p className="text-sm text-muted-foreground">
            January 2025 • Lucknow
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