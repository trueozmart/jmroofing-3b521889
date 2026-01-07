import { Phone, MapPin, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

const services = [
  "Roof Repairs",
  "Roof Replacements",
  "Roof Restoration",
  "Gutter Installation",
  "Emergency Repairs",
  "Roof Inspections",
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pb-20 md:pb-0">
      <div className="container-custom section-padding">
        <div className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-3">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <img 
              src={logo} 
              alt="J.I.M Roofing & Restoration" 
              className="h-16 md:h-20 w-auto mx-auto md:mx-0 mb-3 md:mb-4"
            />
            <p className="text-primary-foreground/80 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Latrobe Valley's trusted roofing specialists. Professional service, quality workmanship, and peace of mind guaranteed.
            </p>
            <div className="flex items-center justify-center md:justify-start gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-primary-foreground/80 text-xs md:text-sm">5.0 (29 Reviews)</span>
            </div>
          </div>

          {/* Services - 2 columns on mobile */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6 font-sans">Our Services</h4>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-2 md:gap-3 text-primary-foreground/80 text-sm">
                  <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h4 className="font-bold text-base md:text-lg mb-4 md:mb-6 font-sans">Contact Us</h4>
            <div className="space-y-3 md:space-y-4 mb-5 md:mb-6">
              <a href="tel:+61421771237" className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-primary-foreground/80 text-sm hover:text-accent transition-colors">
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0" />
                <span>0421 771 237</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-primary-foreground/80 text-sm">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0" />
                <span>6 Sliedell Ct, Yinnar VIC 3869</span>
              </div>
            </div>
            <a href="tel:+61421771237">
              <Button variant="footer" size="default" className="hidden md:inline-flex">
                Get Free Inspection
              </Button>
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-8 md:mt-12 pt-6 md:pt-8">
          <p className="text-center text-primary-foreground/60 text-xs md:text-sm">
            © {new Date().getFullYear()} J.I.M Roofing & Restoration. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
