import { Phone, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import rooferWorkImage from "@/assets/roofer-work.jpg";

const steps = [
  {
    number: 1,
    title: "Call or Book Your Free Inspection",
    description: "Get in touch and we'll arrange a time that suits you. No obligation, just honest advice.",
  },
  {
    number: 2,
    title: "Clear Explanation of Issues & Options",
    description: "We'll show you exactly what's going on and explain your options in plain English—no jargon, no upselling.",
  },
  {
    number: 3,
    title: "Fast, Professional Workmanship",
    description: "Our experienced crews work efficiently and respectfully, treating your home with care every step of the way.",
  },
  {
    number: 4,
    title: "Thorough Clean-Up & Final Walkthrough",
    description: "We leave your property spotless and walk you through the completed work. Your confidence is our priority.",
  },
];

const HowWeWork = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={rooferWorkImage}
                alt="Professional roofer working on slate tiles"
                className="w-full h-auto object-cover"
              />
              {/* Rating Badge */}
              <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-4 py-2 rounded-full flex items-center gap-2 font-semibold shadow-lg">
                <Star className="w-4 h-4 fill-current" />
                5.0 Rating
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h2 className="heading-section text-foreground mb-4">
              How We Work: Simple, Transparent, Professional
            </h2>
            <p className="text-body text-muted-foreground mb-10">
              No surprises. No pressure. Just honest roofing service from start to finish.
            </p>

            {/* Steps */}
            <div className="space-y-6 mb-10">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4">
                  <div className="number-badge flex-shrink-0">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 font-sans">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <Button variant="gold" size="lg" className="gap-3">
              <Phone className="w-5 h-5" />
              Call [Your Phone]
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
