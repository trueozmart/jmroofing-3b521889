import { Phone, Calendar, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-roofer.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container-custom px-4 md:px-8 py-16 md:py-24">
        <div className="max-w-2xl text-center mx-auto lg:text-left lg:mx-0">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-card/95 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in-up mx-auto lg:mx-0">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-semibold text-foreground">5.0 (300 Reviews)</span>
          </div>

          {/* Headline */}
          <h1 className="heading-display text-primary-foreground mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Sydney's Most Trusted{" "}
            <span className="text-accent">Roofing Specialists</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Premium roof repairs, replacements & restorations. Old-school workmanship meets modern warranty protection.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <Button variant="hero" size="xl" className="gap-3">
              <Phone className="w-5 h-5" />
              Call [Your Phone]
            </Button>
            <Button variant="hero-secondary" size="icon-lg" className="rounded-lg">
              <Calendar className="w-5 h-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-primary-foreground/80 text-sm animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-accent" />
              <span>No obligation</span>
            </div>
            <span className="opacity-50">•</span>
            <span>Licensed & Insured</span>
            <span className="opacity-50">•</span>
            <span>Free quotes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
