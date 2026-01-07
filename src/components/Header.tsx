import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-sm border-b border-primary-foreground/10">
      <div className="container-custom flex items-center justify-between h-14 md:h-20 px-4 md:px-8">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img 
            src={logo} 
            alt="J.I.M Roofing & Restoration" 
            className="h-10 md:h-14 w-auto brightness-0 invert"
          />
        </a>

        {/* Right side - Phone + CTA */}
        <div className="flex items-center gap-2 md:gap-6">
          {/* Phone number - hidden on mobile */}
          <div className="hidden md:flex flex-col items-end text-primary-foreground">
            <span className="text-xs opacity-80">Call Us Now</span>
            <span className="font-semibold">0421 771 237</span>
          </div>

          {/* CTA Button - Desktop */}
          <Button variant="nav" size="default" className="hidden md:flex">
            Free Inspection
          </Button>
          
          {/* Mobile call button - larger touch target */}
          <a href="tel:+61421771237" className="md:hidden">
            <Button variant="nav" size="default" className="gap-2 min-h-[44px] px-4">
              <Phone className="h-4 w-4" />
              <span className="font-semibold">Call Now</span>
            </Button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
