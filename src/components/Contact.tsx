import { Phone, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import roofRepairImage from "@/assets/roof-repair.jpg";

const Contact = () => {
  return (
    <section className="section-padding bg-background pb-24 md:pb-16">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Content */}
          <div className="animate-fade-in-up text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2 md:mb-3 font-display">
              Ready to Get Your Roof Sorted?
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground mb-5 md:mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Whether you need a quick repair, a full restoration, or just honest advice—we're here to help.
            </p>

            {/* Contact Cards */}
            <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
              {/* Phone */}
              <a
                href="tel:+61421771237"
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card rounded-xl border border-border hover:border-accent/50 transition-colors"
              >
                <div className="icon-badge-gold w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl">
                  <Phone className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs md:text-sm text-muted-foreground">Call Us Now</p>
                  <p className="font-bold text-foreground text-base md:text-lg">0421 771 237</p>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card rounded-xl border border-border">
                <div className="icon-badge-gold w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs md:text-sm text-muted-foreground">Our Location</p>
                  <p className="font-bold text-foreground text-sm md:text-base">2 Jumbuck Road, Yinnar VIC 3869</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-3 md:gap-4 p-3 md:p-4 bg-card rounded-xl border border-border">
                <div className="icon-badge-gold w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl">
                  <Star className="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div className="text-left">
                  <p className="text-xs md:text-sm text-muted-foreground">Customer Rating</p>
                  <div className="flex items-center gap-1.5 md:gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="font-bold text-foreground text-sm md:text-base">5.0</span>
                    <span className="text-muted-foreground text-xs md:text-sm">(29 Reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button - Hidden on mobile (we have sticky) */}
            <a href="tel:+61421771237">
              <Button variant="gold" size="lg" className="gap-3 hidden md:inline-flex">
                <Phone className="w-5 h-5" />
                Call 0421 771 237 Now
              </Button>
            </a>
          </div>

          {/* Right - Images & Map */}
          <div className="space-y-4 md:space-y-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            {/* Roof Work Image */}
            <div className="rounded-xl md:rounded-2xl overflow-hidden shadow-lg">
              <img
                src={roofRepairImage}
                alt="Professional roof repair work"
                className="w-full h-48 md:h-64 object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
