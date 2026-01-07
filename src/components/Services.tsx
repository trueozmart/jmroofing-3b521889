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
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3 md:mb-4 font-display">
            Our Roofing Services
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            From inspections to full restorations, we offer a complete range of professional roofing services for Latrobe Valley homes.
          </p>
        </div>

        {/* Services Grid - 2 cols on mobile, 4 on desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-4 md:p-6 border border-border hover:border-accent/50 card-hover text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="icon-badge-gold mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300 w-10 h-10 md:w-14 md:h-14 rounded-xl md:rounded-2xl">
                <service.icon className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <h3 className="font-semibold text-foreground mb-1 md:mb-2 font-sans text-sm md:text-base">
                {service.title}
              </h3>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed hidden sm:block">
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
