import { Phone, MapPin, Star, Check } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {/* Company Info */}
          <div>
            <h3 className="text-accent font-display text-2xl font-bold mb-4">
              [Your Logo]
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Sydney's trusted roofing specialists. Professional service, quality workmanship, and peace of mind guaranteed.
            </p>
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <span className="text-primary-foreground/80 text-sm">5.0 (300 Reviews)</span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-sans">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service} className="flex items-center gap-3 text-primary-foreground/80">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-6 font-sans">Contact Us</h4>
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3 text-primary-foreground/80">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                <span>[Your Phone]</span>
              </div>
              <div className="flex items-start gap-3 text-primary-foreground/80">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                <span>100 George Street<br />Sydney CBD, NSW</span>
              </div>
            </div>
            <Button variant="footer" size="default">
              Get Free Inspection
            </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8">
          <p className="text-center text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} [Your Company Name]. All rights reserved. | Sydney's Trusted Roofing Specialists
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
