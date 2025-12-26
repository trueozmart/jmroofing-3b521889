import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container-custom flex items-center justify-between h-16 md:h-20 px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="text-accent font-display text-xl md:text-2xl font-bold">
          [Your Logo]
        </a>

        {/* Right side - Phone + CTA */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* Phone number - hidden on small screens */}
          <div className="hidden md:flex flex-col items-end text-primary-foreground">
            <span className="text-xs opacity-80">Call Us Now</span>
            <span className="font-semibold">[Your Phone]</span>
          </div>

          {/* CTA Button */}
          <Button variant="nav" size="default" className="hidden sm:flex">
            Free Inspection
          </Button>
          
          {/* Mobile phone button */}
          <Button variant="nav" size="icon" className="sm:hidden rounded-full">
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
