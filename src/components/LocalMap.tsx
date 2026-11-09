import { MapPin, Phone } from "lucide-react";

// Name, location and phone, matching the Google Business Profile, plus a map.
const NAME = "James Mills Roof Restoration";
const LOCATION = "Yinnar VIC";
const SERVICE = "Servicing Traralgon, Moe, Morwell, Churchill and the Latrobe Valley";
const PHONE = "0421 771 237";
const TEL = "+61421771237";
const MAP_SRC = "https://www.google.com/maps?q=James+Mills+roofing%2C+Yinnar+VIC&output=embed";

const LocalMap = () => (
  <section id="location" className="py-12 md:py-16 bg-muted/40" aria-labelledby="location-heading">
    <div className="container mx-auto px-4 max-w-6xl grid gap-8 md:grid-cols-2 items-center">
      <div>
        <h2 id="location-heading" className="text-2xl md:text-3xl font-bold mb-4">Where we work</h2>
        <address className="not-italic space-y-3 text-base md:text-lg">
          <p className="font-semibold">{NAME}</p>
          <p className="flex items-start gap-2"><MapPin className="w-5 h-5 mt-1 shrink-0 text-primary" /><span>{LOCATION}<br /><span className="text-muted-foreground">{SERVICE}</span></span></p>
          <p className="flex items-center gap-2"><Phone className="w-5 h-5 shrink-0 text-primary" /><a href={`tel:${TEL}`} className="font-semibold hover:underline">{PHONE}</a></p>
        </address>
      </div>
      <div className="rounded-xl overflow-hidden border shadow-sm aspect-[4/3] w-full">
        <iframe
          title={`Map showing ${NAME}`}
          src={MAP_SRC}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  </section>
);

export default LocalMap;
