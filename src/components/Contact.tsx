import { Phone, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import roofRepairImage from "@/assets/roof-repair.jpg";

const Contact = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Content */}
          <div className="animate-fade-in-up text-center lg:text-left">
            <h2 className="heading-section text-foreground mb-3">
              Ready to Get Your Roof Sorted?
            </h2>
            <p className="text-body text-muted-foreground mb-6 max-w-lg mx-auto lg:mx-0">
              Whether you need a quick repair, a full restoration, or just honest advice about your roof's condition—we're here to help. Call us now or book your free inspection and we'll take care of the rest.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {/* Phone */}
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="icon-badge-gold">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Call Us Now</p>
                  <p className="font-bold text-foreground text-lg">[Your Phone]</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="icon-badge-gold">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Our Location</p>
                  <p className="font-bold text-foreground">100 George Street, Sydney CBD, NSW</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-4 p-4 bg-card rounded-xl border border-border">
                <div className="icon-badge-gold">
                  <Star className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Customer Rating</p>
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <span className="font-bold text-foreground">5.0</span>
                    <span className="text-muted-foreground text-sm">(300 Reviews)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button variant="gold" size="lg" className="gap-3">
              <Phone className="w-5 h-5" />
              Call [Your Phone] Now
            </Button>
          </div>

          {/* Right - Images & Map */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {/* Roof Work Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={roofRepairImage}
                alt="Professional roof repair work"
                className="w-full h-64 object-cover"
              />
            </div>

            {/* Map Placeholder */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-border">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.8374081999044!2d151.2069902!3d-33.8688197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632ccc0!2sGeorge%20St%2C%20Sydney%20NSW!5e0!3m2!1sen!2sau!4v1703000000000!5m2!1sen!2sau"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Office Location Map"
                className="grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
