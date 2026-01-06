import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    text: "James was great to deal with, and has a non nonsense approach which I appreciate. He promptly quoted the job and re-did the whole removal, new battens, re-tiling, ridge capping, flashing, and removed a disused chimney for me too. All done with no fuss and finished before Xmas. Highly recommend",
    author: "Stuart Gillies",
    location: "Yinnar VIC",
  },
  {
    text: "James and his crew did an amazing job restoring the roof on our house. They replaced the valley iron, chimney flashing, and recapped the roof ridges. They pressure washed and treated the roof. They were very easy to deal with, honest, and hard working. Highly recommended to anyone looking to restore their roof, don't hesitate to book!",
    author: "Owen Notting",
    location: "Yinnar VIC",
  },
  {
    text: "I knew my roof needed repair, and the recent gale force winds and heavy rain made for some sleepless nights.",
    author: "Helen Ryan",
    location: "Churchill VIC",
  },
  {
    text: "Absolutely fantastic job! James was so quick to inspect the roof for me then give me a quote for the job. I didn't even get a chance to ask when they would do the job after accepting the quote on Friday, as they started work on the Tuesday. From start to finish James & his crew worked quickly & efficiently repointing the roof, replacing tiles, pressure cleaning the roof & the solar panels, then topped it off by cleaning out the gutters. Roof looks great & we are very satisfied. Thanks James.",
    author: "fastcorty",
    location: "Yinnar VIC",
  },
  {
    text: "A really great local business to deal with. Honest and reliable communication and completely understood our need and provided sound advice on what would be best for our corrugated Colourbond roof restoration. Really pleased with the outcome. Highly recommended",
    author: "Mark Allen",
    location: "Morwell VIC",
  },
  {
    text: "We had the roof repointed and flashing and gutters replaced. Millsy and his crew did a fabulous job and we will be getting them back to paint the roof.",
    author: "Janet Kootstra",
    location: "Yinnar VIC",
  },
  {
    text: "James and his crew recently restored my 70 year old terracotta tiled roof. They worked quickly and did an amazing job. I am thrilled by the results! I have received many compliments on how it looks. Who knew it was that colour? It's as good as the day it was originally tiled. Thanks so much James for all your hard work. I no longer worry about a rainy day 😁",
    author: "Deirdre Finnegan",
    location: "Boolarra VIC",
  },
  {
    text: "James and his apprentice recently completed my concrete tiled roof re-bed and point, changed out the valleys, cleaned, sealed and painted a brand new colour. It looks great, the wait timeframe was minimal and his work seems worth every penny. These guys work hard all day long, they don't drag anything out. Having recently experienced terrible situations with fraudulent tradies, it was great to find someone qualified honest and upfront like James. Cant wait for the painter to complete my house trims to match! Thanks very much James and team.",
    author: "Rachel Stewart",
    location: "Yinnar VIC",
  },
  {
    text: "James was on time everyday. 100% honest, reliable and worked his backside off to make my roof look gorgeous. My roof wasn't an easy task, over the years it had many quick fixes done to it and it had a saggy hip, that needed to be fixed before he could repoint and seal it all again. But he got stuck into it and made it look brand new! He is worth every dollar. Knows the town and it's people, top bloke.",
    author: "Suzanne Van Duren",
    location: "Traralgon South VIC",
  },
  {
    text: "James rebed and point all ridge capping, removed old valley irons and install new valley irons. Including works associated with the mentioned. He was very responsive and happy to answer questions about the job. The job was done to a high standard. I am happy with the outcome and highly recommend James.",
    author: "Matt Lee",
    location: "Yinnar VIC",
  },
  {
    text: "Just had my house Roof Restored and sealed. James and the boys did an amazing job. Very reasonable pricing too.",
    author: "Tyler Cordner",
    location: "Hazelwood North VIC",
  },
  {
    text: "James did a great job cleaning, repairing, rebedding, sealing and painting my mother-in-laws roof. The job was done efficiently and looks terrific.",
    author: "Geoff Spowart",
    location: "Yinnar VIC",
  },
  {
    text: "What a fantastic job James work has made such a change to the look of our home his work ethic and attention to detail is exceptional. thanks James",
    author: "Rob Lee",
    location: "Mirboo North VIC",
  },
  {
    text: "Thankyou for a lovely job on our old tired roof. Hassle free 😊",
    author: "Karen Angove",
    location: "Yinnar South VIC",
  },
  {
    text: "James. Honest as the day is long. It is rare to find in a these days. Highly recommended",
    author: "Jennifer Wanless",
    location: "Yinnar VIC",
  },
  {
    text: "This guy is an absolute gun tradesman. Unstoppable, just gets on with it. Many thanks James.",
    author: "Chris Gerrish",
    location: "Hazelwood North VIC",
  },
  {
    text: "Connected with James Mills Roof Restoration and would recommend them",
    author: "Alistair T",
    location: "Traralgon VIC",
  },
  {
    text: "James provided a quick quote and undertook the work promptly and satisfactorily. The tiled roof was fully repointed and he also re-attached guttering at a few points in addition to replacing all valleys with new colorbond. I would recommend him highly.",
    author: "Patrick",
    location: "Boolarra VIC",
  },
  {
    text: "James came and quoted my job very promptly and we arranged a suitable time to both of us to have the work done. The work was completed very satisfactorily and James is a pleasure to deal with. I can highly recommend him for roofing work",
    author: "Rosie",
    location: "Blackwarry VIC",
  },
  {
    text: "James Mills was prompt, courteous, and totally professional. He kept in touch from first inspection and quote and always arrived to undertake the next phase of work when he said he would. He repaired our tile roof at several required sites - every section of ridge-capping on the roof has been removed, cleaned, re-bedded and re-pointed, and the entire roof has been pressure washed and protectively spray coated. I have no hesitation in recommending James as a highly professional roofing tradesman. It is refreshing to find someone like James who is prompt, courteous and totally professional in approach to his business dealings.",
    author: "John S",
    location: "Warragul VIC",
  },
  {
    text: "Due to it leaking badly I wanted an unused chimney removed. James removed the chimney sealed and re-tiled the roof. He even stacked the bricks in a shed. James also cleaned my gutters. Three days later heavy rain, no leaks in the chimney but a leak sprang up at the other end of the house, James came out within 20 minutes, replaced a tile and refused to charge me for the work. James is a friendly, professional man who I will be recommending to all of my friends and family. Thank you James.",
    author: "Sam A",
    location: "Jeeralang Junction VIC",
  },
  {
    text: "I would like to say how amazing James was. He was jovial, thorough and I would recommend him to anyone. Well done James",
    author: "Von C",
    location: "Traralgon VIC",
  },
  {
    text: "James was fantastic. Job was done quickly & top quality. Top bloke and really approachable",
    author: "Jodie",
    location: "Churchill VIC",
  },
  {
    text: "Great communications, Prompt service, Excellent Trade Skills Work completed as requested and more I am very Satisfied with the work done by James and will recommend James Mills Roof Restoration",
    author: "Noel R",
    location: "Boolarra VIC",
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-3 md:mb-4 font-display">
            What Our Customers Say
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground leading-relaxed">
            Real reviews from real customers across Gippsland. See why locals trust us with their roofs.
          </p>
        </div>

        {/* Testimonials - Horizontal scroll on mobile */}
        <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-6 md:overflow-visible md:pb-0 -mx-4 px-4 md:mx-0 md:px-0">
          {testimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.author}-${index}`}
              className="bg-card rounded-xl md:rounded-2xl p-5 md:p-6 border border-border card-hover animate-fade-in-up flex-shrink-0 w-[85vw] sm:w-[70vw] md:w-auto snap-center"
              style={{ animationDelay: `${(index % 6) * 0.1}s` }}
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
