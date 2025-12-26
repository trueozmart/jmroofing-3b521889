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
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-section text-foreground mb-4">
            Why Sydney Homeowners Choose Us
          </h2>
          <p className="text-body text-muted-foreground">
            From Cronulla to Parramatta, we're the roofing team Sydney trusts for quality, reliability, and honest service.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-card rounded-2xl p-8 border border-border card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`${feature.colorClass} mb-6`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3 font-sans">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
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
