import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const MobileCallBar = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-primary/95 backdrop-blur-sm border-t border-accent/20 p-3 safe-area-bottom">
      <a href="tel:+61000000000" className="block">
        <Button variant="hero" size="lg" className="w-full gap-3 min-h-[52px] text-base font-semibold shadow-lg">
          <Phone className="w-5 h-5" />
          Call Now - Free Quote
        </Button>
      </a>
    </div>
  );
};

export default MobileCallBar;