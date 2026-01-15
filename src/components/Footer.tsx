import { Phone, MapPin, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-footer.png";

const services = [
  { name: "Roof Repairs", link: null },
  { name: "Re-roofing", link: null },
  { name: "Roof Restoration", link: null },
  { name: "Colorbond Roofing", link: null },
  { name: "Tile Replacement", link: null },
  { name: "Roof Inspections", link: null },
];

const serviceAreas = [
  { name: "Moe Roof Repairs", link: "/moe-roof-repairs" },
];

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pb-20 md:pb-0" role="contentinfo">
      <div className="container-custom section-padding">
        <div className="grid gap-8 md:gap-12 lg:gap-16 md:grid-cols-3">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <img 
              src={logo} 
              alt="James Mills Roof Restoration - Latrobe Valley roofing specialists" 
              className="h-16 md:h-20 w-auto mx-auto md:mx-0 mb-3 md:mb-4"
            />
            <p className="text-primary-foreground/80 mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
              Latrobe Valley's trusted roofing specialists. Professional roof restoration and re-roofing in Yinnar, Moe, Morwell, Traralgon and Gippsland.
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
          <nav className="text-center md:text-left" aria-label="Roofing services">
            <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6 font-sans">Our Services</h3>
            <ul className="grid grid-cols-2 md:grid-cols-1 gap-2 md:gap-3 mb-4">
              {services.map((service) => (
                <li key={service.name} className="flex items-center gap-2 md:gap-3 text-primary-foreground/80 text-sm">
                  <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0" />
                  <span>{service.name}</span>
                </li>
              ))}
            </ul>
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4 font-sans">Service Areas</h3>
            <ul className="space-y-2">
              {serviceAreas.map((area) => (
                <li key={area.name}>
                  <Link 
                    to={area.link} 
                    className="flex items-center gap-2 md:gap-3 text-primary-foreground/80 text-sm hover:text-accent transition-colors"
                  >
                    <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0" />
                    <span>{area.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="font-bold text-base md:text-lg mb-4 md:mb-6 font-sans">Contact Us</h3>
            <div className="space-y-3 md:space-y-4 mb-5 md:mb-6">
              <a href="tel:+61421771237" className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-primary-foreground/80 text-sm hover:text-accent transition-colors">
                <Phone className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0" />
                <span>0421 771 237</span>
              </a>
              <div className="flex items-center justify-center md:justify-start gap-2 md:gap-3 text-primary-foreground/80 text-sm">
                <MapPin className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent flex-shrink-0" />
                <span>2 Jumbuck Road, Yinnar VIC 3869</span>
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
