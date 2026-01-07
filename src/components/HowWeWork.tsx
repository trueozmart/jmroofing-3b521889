import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const steps = [
  {
    number: 1,
    title: "Call or Book Your Free Inspection",
    description: "Get in touch and we'll arrange a time that suits you. No obligation, just honest advice.",
  },
  {
    number: 2,
    title: "Clear Explanation of Issues & Options",
    description:
      "We'll show you exactly what's going on and explain your options in plain English. No jargon, no upselling.",
  },
  {
    number: 3,
    title: "Fast, Professional Workmanship",
    description:
      "Our experienced crews work efficiently and respectfully, treating your home with care every step of the way.",
  },
  {
    number: 4,
    title: "Thorough Clean-Up & Final Walkthrough",
    description:
      "We leave your property spotless and walk you through the completed work. Your confidence is our priority.",
  },
];

const HowWeWork = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Content */}
          <div className="animate-fade-in-up text-center lg:text-left" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-2 md:mb-3 font-display">
              How We Work
            </h2>
            <p className="text-sm md:text-lg text-muted-foreground mb-5 md:mb-6 leading-relaxed">
              No surprises. No pressure. Just honest roofing service from start to finish.
            </p>

            {/* Steps */}
            <div className="space-y-4 md:space-y-5 mb-6">
              {steps.map((step) => (
                <div key={step.number} className="text-left">
                  <div className="flex items-center gap-2.5 md:gap-3 mb-1">
                    <div className="number-badge flex-shrink-0 w-8 h-8 md:w-10 md:h-10 text-xs md:text-sm">
                      {step.number}
                    </div>
                    <h3 className="font-bold text-foreground font-sans text-sm md:text-base">{step.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-xs md:text-sm leading-relaxed pl-10 md:pl-12">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a href="tel:+61421771237" className="block w-full sm:w-auto">
              <Button variant="gold" size="lg" className="gap-3 w-full min-h-[52px]">
                <Phone className="w-5 h-5" />
                Call 0421 771 237
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWork;
