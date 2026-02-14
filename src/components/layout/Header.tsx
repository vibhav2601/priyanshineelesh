import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const logoUrl =
  "https://raw.githubusercontent.com/vibhav2601/priyanshineelesh/main/src/resources/logo.png";

const navLinks = [{
  name: "Home",
  path: "/"
}, {
  name: "Explore Lucknow",
  path: "/explore"
}, {
  name: "Photos",
  path: "/photos"
}, {
  name: "Contact",
  path: "/contact"
}];
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo / Couple Names */}
        <Link to="/"><img src={logoUrl} alt="Logo" className="h-8" /></Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map(link => <Link key={link.path} to={link.path} className={`text-sm font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary" : "text-muted-foreground"}`}>
              {link.name}
            </Link>)}
        </nav>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[280px] bg-background">
            <div className="flex flex-col gap-6 pt-8">
              <span className="font-serif text-xl font-medium text-foreground">
                A & S
              </span>
              <nav className="flex flex-col gap-4">
                {navLinks.map(link => <Link key={link.path} to={link.path} onClick={() => setIsOpen(false)} className={`text-base font-medium transition-colors hover:text-primary ${isActive(link.path) ? "text-primary" : "text-muted-foreground"}`}>
                    {link.name}
                  </Link>)}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>;
};
export default Header;