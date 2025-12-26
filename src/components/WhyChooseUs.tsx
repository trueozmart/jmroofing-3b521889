import { CheckCircle2, Wrench, MessageCircle } from "lucide-react";

const features = [
  {
    icon: CheckCircle2,
    title: "Experienced Local Specialists",
    description: "We understand Sydney's unique weather conditions—from coastal salt spray to western heat. Our team has the expertise to handle it all.",
    colorClass: "icon-badge-blue",
  },
  {
    icon: Wrench,
    title: "Quality Materials for Aussie Conditions",
    description: "We use premium materials specifically selected for Australian conditions, ensuring your roof stands the test of time.",
    colorClass: "icon-badge-green",
  },
  {
    icon: MessageCircle,
    title: "Honest, No-Pressure Service",
    description: "Clear explanations, honest recommendations, no unnecessary upselling. Just straightforward advice you can trust.",
    colorClass: "icon-badge-purple",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3 md:mb-4 font-display">
            Why Sydney Homeowners Choose Us
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            From Cronulla to Parramatta, we're the roofing team Sydney trusts for quality, reliability, and honest service.
          </p>
        </div>

        {/* Features Grid - Stack on mobile */}
        <div className="grid gap-4 md:gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-xl md:rounded-2xl p-5 md:p-8 border border-border card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.colorClass} mb-4 md:mb-6 w-12 h-12 md:w-14 md:h-14`}>
                <feature.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-foreground mb-2 md:mb-3 font-sans">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
