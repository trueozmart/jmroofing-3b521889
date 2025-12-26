import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "Our coastal roof was starting to rust, so we got it restored properly. The team were organised, professional, and used quality materials suited for salty conditions. It's been perfect ever since, no leaks or corrosion. Great blokes and great work.",
    author: "Jon Darnell",
    location: "Cronulla",
  },
  {
    text: "We had the roof inspected and cleaned, and it's come up looking like new. The team were friendly, respectful, and worked fast without rushing. Highly recommend them to anyone needing roof work.",
    author: "Rose Luis",
    location: "Parramatta",
  },
  {
    text: "Had a few tiles replaced in Penrith where they'd cracked from heat. They were on time, tidy, and clearly take pride in doing the job right. The repair blends perfectly with the existing tiles.",
    author: "Mackenzie Tori",
    location: "Penrith",
  },
  {
    text: "Our gutters were overflowing so they checked it while doing the roof, fixed the issue, and didn't even charge extra. Real old-school service with pride in the details.",
    author: "Braedon Lennon",
    location: "Blacktown",
  },
  {
    text: "Had our roof cleaned and painted, and it's made a huge difference. The crew worked hard and made sure we were happy before finishing. The finish looks beautiful.",
    author: "Haven Rylan",
    location: "Campbelltown",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3 md:mb-4 font-display">
            What Sydney Homeowners Say
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            Real reviews from real customers across Sydney. See why families trust us with their homes.
          </p>
        </div>

        {/* Testimonials - Horizontal scroll on mobile */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.author}
              className="bg-card rounded-xl md:rounded-2xl p-5 md:p-6 border border-border card-hover animate-fade-in-up flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-auto snap-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-6 h-6 md:w-8 md:h-8 text-accent/30 mb-3 md:mb-4" />
              
              {/* Stars */}
              <div className="flex mb-3 md:mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 md:w-4 md:h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-foreground leading-relaxed mb-4 md:mb-6 text-sm line-clamp-4 md:line-clamp-none">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div className="border-t border-border pt-3 md:pt-4">
                <p className="font-semibold text-foreground text-sm md:text-base">
                  {testimonial.author}
                </p>
                <p className="text-xs md:text-sm text-muted-foreground">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
