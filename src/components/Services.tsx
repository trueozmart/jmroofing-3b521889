import { 
  Search, 
  Sparkles, 
  RotateCcw, 
  Wrench, 
  Paintbrush, 
  Grid3X3, 
  Mountain, 
  Droplets 
} from "lucide-react";

const services = [
  { icon: Search, title: "Roof Inspection", description: "Comprehensive roof assessments to identify issues early" },
  { icon: Sparkles, title: "Roof Cleaning", description: "High-pressure cleaning to remove moss, lichen and debris" },
  { icon: RotateCcw, title: "Roof Restoration", description: "Complete restoration to extend your roof's lifespan" },
  { icon: Wrench, title: "Roof Repair", description: "Expert repairs for leaks, damage, and wear" },
  { icon: Paintbrush, title: "Roof Painting", description: "Professional painting with quality coatings" },
  { icon: Grid3X3, title: "Tile Replacement", description: "Matching and replacing cracked or broken tiles" },
  { icon: Mountain, title: "Ridge Capping", description: "Repointing and replacement of ridge caps" },
  { icon: Droplets, title: "Leak Prevention", description: "Waterproofing and preventive maintenance" },
];

const Services = () => {
  return (
    <section className="section-padding bg-section-alt">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="heading-section text-foreground mb-4">
            Our Roofing Services
          </h2>
          <p className="text-body text-muted-foreground">
            From inspections to full restorations, we offer a complete range of professional roofing services for Sydney homes.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 border border-border hover:border-accent/50 card-hover text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="icon-badge-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-2 font-sans">
                {service.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
