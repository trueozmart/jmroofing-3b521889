import { Phone, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-roofer.jpg";
import heroImageMobile from "@/assets/hero-roofer-mobile.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-[100svh] flex items-center pt-16 md:pt-20">
      {/* Background Image - Mobile */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: `url(${heroImageMobile})` }}
      />
      {/* Background Image - Desktop */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 gradient-hero-overlay" />
      
      {/* Content */}
      <div className="relative z-10 container-custom px-5 md:px-8 py-8 md:py-24">
        <div className="max-w-2xl text-center mx-auto lg:text-left lg:mx-0">
          {/* Rating Badge */}
          <div className="inline-flex items-center gap-2 bg-card/95 backdrop-blur-sm rounded-full px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 animate-fade-in-up">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-accent text-accent" />
              ))}
            </div>
            <span className="font-semibold text-foreground text-sm md:text-base">5.0 (29 Reviews)</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground mb-3 md:mb-4 animate-fade-in-up text-shadow-hero font-display" style={{ animationDelay: '0.1s' }}>
            Latrobe Valley's Most Trusted{" "}
            <span className="text-accent drop-shadow-lg">Roofing Specialist</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-primary-foreground mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0 animate-fade-in-up text-shadow-subtle font-medium leading-relaxed" style={{ animationDelay: '0.2s' }}>
            Premium roof repairs, replacements & restorations. Trusted workmanship with modern warranty protection.
          </p>

          {/* CTA Button - Large touch target for mobile */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6 md:mb-8 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <a href="tel:+61421771237">
              <Button variant="hero" size="xl" className="gap-3 w-full sm:w-auto min-h-[56px] text-base">
                <Phone className="w-5 h-5" />
                Call 0421 771 237
              </Button>
            </a>
          </div>

          {/* Trust Indicators - Stack on mobile */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2 text-primary-foreground text-xs md:text-sm animate-fade-in-up text-shadow-subtle font-medium" style={{ animationDelay: '0.4s' }}>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 md:w-4 md:h-4 text-accent drop-shadow-md" />
              <span>No obligation</span>
            </div>
            <span className="opacity-60 hidden sm:inline">•</span>
            <span>Licensed & Insured</span>
            <span className="opacity-60 hidden sm:inline">•</span>
            <span>Free quotes</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
