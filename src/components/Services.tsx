import { Search, Sparkles, RotateCcw, Wrench, Paintbrush, Grid3X3, Mountain, Droplets, Home, PanelTop } from "lucide-react";

const services = [
  { icon: Search, title: "Roof Inspection", description: "Comprehensive roof assessments across Latrobe Valley" },
  { icon: Sparkles, title: "Roof Cleaning", description: "High-pressure cleaning to remove moss, lichen and debris" },
  { icon: RotateCcw, title: "Roof Restoration", description: "Complete tile roof restoration to extend your roof's lifespan" },
  { icon: Wrench, title: "Roof Repair", description: "Expert roof repairs for leaks, damage, and wear" },
  { icon: Home, title: "Re-roofing", description: "Full re-roofing services for aging or damaged roofs" },
  { icon: PanelTop, title: "Gutter Restoration", description: "Cleaning, repair and restoration of guttering systems" },
  { icon: Paintbrush, title: "Roof Painting", description: "Professional roof painting with quality coatings" },
  { icon: Grid3X3, title: "Tile Replacement", description: "Matching and replacing cracked or broken roof tiles" },
  { icon: Mountain, title: "Ridge Capping", description: "Repointing and replacement of ridge caps" },
  { icon: Droplets, title: "Leak Prevention", description: "Waterproofing and preventive roof maintenance" },
];

const Services = () => {
  return (
    <section className="section-padding bg-section-alt" aria-labelledby="services-heading">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 id="services-heading" className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3 md:mb-4 font-display">
            Our Roofing Services
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            Specialising in re-roofing Gippsland and tile roof restoration, we offer professional roofing services in Yinnar, Moe, Morwell, Traralgon and across Latrobe Valley.
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
