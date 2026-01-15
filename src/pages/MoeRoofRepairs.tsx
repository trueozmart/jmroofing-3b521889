import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, Shield, Star, MapPin, Clock, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import heroImage from "@/assets/hero-roofer.jpg";
import heroImageMobile from "@/assets/hero-roofer-mobile.jpg";

const services = [
  "Emergency Roof Repairs",
  "Roof Restoration & Painting",
  "Gutter Cleaning & Repairs",
  "Roof Inspections & Maintenance",
  "New Roof Installations (Colorbond & Tiles)",
];

const trustSignals = [
  { icon: Shield, text: "Fully licensed and insured" },
  { icon: MapPin, text: "Serving Moe, Newborough, Morwell, Traralgon, and surrounding suburbs" },
  { icon: Clock, text: "10+ years experience in roofing in the Latrobe Valley" },
];

const MoeRoofRepairs = () => {
  return (
    <>
      <Helmet>
        <title>Roof Repairs Moe | Local Roofing Experts</title>
        <meta 
          name="description" 
          content="Professional roof repairs in Moe. Fast, reliable, and affordable roofing services for homes and businesses. Call now for a free quote." 
        />
        <meta name="keywords" content="roof repairs Moe, roofing Moe, Moe roofer, roof restoration Moe, Latrobe Valley roofing" />
        <link rel="canonical" href="https://jmroofing.lovable.app/moe-roof-repairs" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        {/* Hero Section */}
        <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center pt-16 md:pt-20" aria-label="Moe Roof Repairs Hero">
          {/* Background Image - Mobile */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
            style={{ backgroundImage: `url(${heroImageMobile})` }}
            role="img"
            aria-label="Professional roof repair work in Moe"
          />
          {/* Background Image - Desktop */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
            style={{ backgroundImage: `url(${heroImage})` }}
            role="img"
            aria-label="Roof repairs in Moe Victoria by James Mills Roofing"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 gradient-hero-overlay" />

          {/* Content */}
          <div className="relative z-10 container-custom px-5 md:px-8 py-8 md:py-16">
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
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-primary-foreground mb-4 md:mb-6 animate-fade-in-up text-shadow-hero font-display"
                style={{ animationDelay: "0.1s" }}
              >
                Roof Repairs in Moe – <span className="text-accent drop-shadow-lg">Fast, Reliable & Local</span>
              </h1>

              {/* CTA Button */}
              <div
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-6 animate-fade-in-up"
                style={{ animationDelay: "0.2s" }}
              >
                <a href="tel:+61421771237">
                  <Button variant="hero" size="xl" className="gap-3 w-full sm:w-auto min-h-[56px] text-base">
                    <Phone className="w-5 h-5" />
                    Call 0421 771 237
                  </Button>
                </a>
              </div>

              {/* Trust Indicators */}
              <div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-x-3 gap-y-2 text-primary-foreground text-xs md:text-sm animate-fade-in-up text-shadow-subtle font-medium"
                style={{ animationDelay: "0.3s" }}
              >
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
        
        {/* Main Content */}
        <main className="section-padding bg-section-light">
          <div className="container-custom">
            {/* Back Link */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Content Column */}
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Professional Roof Repairs in Moe
                </h2>
                
                <p className="text-body text-muted-foreground mb-8 leading-relaxed">
                  James Mills Roof Restoration provides expert roof repairs, restorations, gutter services, and inspections in Moe and surrounding areas. Whether you need emergency repairs or a complete roof restoration, our experienced Latrobe Valley team delivers quality workmanship you can trust.
                </p>

                {/* Services List */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Our Roofing Services in Moe</h3>
                  <ul className="space-y-3">
                    {services.map((service) => (
                      <li key={service} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Section */}
                <div className="bg-card rounded-xl p-6 border border-border mb-8">
                  <p className="text-foreground font-medium mb-4">
                    Don't wait for a small leak to become a big problem. Contact us today for a free quote!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/#contact">
                      <Button variant="default" size="lg">
                        Request a Free Quote
                      </Button>
                    </Link>
                    <a href="tel:+61421771237">
                      <Button variant="outline" size="lg" className="gap-2">
                        <Phone className="w-4 h-4" />
                        0421 771 237
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Trust Signals */}
                <div className="space-y-4">
                  {trustSignals.map((signal, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <signal.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{signal.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Column */}
              <div className="lg:sticky lg:top-24">
                <img
                  src={heroImage}
                  alt="Roof repair in Moe Victoria"
                  className="w-full rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12 pt-8 border-t border-border">
              <Link to="/">
                <Button variant="outline" size="lg" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
        <MobileCallBar />
      </div>
    </>
  );
};

export default MoeRoofRepairs;
