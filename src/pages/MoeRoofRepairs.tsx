import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Phone, Shield, MapPin, Clock, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";
import roofRepairImage from "@/assets/roof-repair.jpg";

const services = [
  "Emergency Roof Repairs",
  "Roof Restoration & Painting",
  "Gutter Cleaning & Repairs",
  "Roof Inspections & Maintenance",
  "New Roof Installations (Colorbond & Tiles)",
];

const trustSignals = [
  { icon: Shield, text: "Fully licensed and insured" },
  { icon: MapPin, text: "Serving Moe, Newborough, Morwell, Traralgon, and surrounding suburbs" },
  { icon: Clock, text: "10+ years experience in roofing in the Latrobe Valley" },
];

const MoeRoofRepairs = () => {
  return (
    <>
      <Helmet>
        <title>Roof Repairs Moe | Local Roofing Experts</title>
        <meta 
          name="description" 
          content="Professional roof repairs in Moe. Fast, reliable, and affordable roofing services for homes and businesses. Call now for a free quote." 
        />
        <meta name="keywords" content="roof repairs Moe, roofing Moe, Moe roofer, roof restoration Moe, Latrobe Valley roofing" />
        <link rel="canonical" href="https://jmroofing.lovable.app/moe-roof-repairs" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        
        <main className="section-padding bg-section-light">
          <div className="container-custom">
            {/* Back Link */}
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Home</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Content Column */}
              <div>
                <h1 className="heading-section text-primary mb-6">
                  Roof Repairs in Moe – Fast, Reliable & Local
                </h1>
                
                <p className="text-body text-muted-foreground mb-8 leading-relaxed">
                  James Mills Roof Restoration provides expert roof repairs, restorations, gutter services, and inspections in Moe and surrounding areas. Whether you need emergency repairs or a complete roof restoration, our experienced Latrobe Valley team delivers quality workmanship you can trust.
                </p>

                {/* Services List */}
                <div className="mb-8">
                  <h2 className="text-lg font-semibold text-foreground mb-4">Our Roofing Services in Moe</h2>
                  <ul className="space-y-3">
                    {services.map((service) => (
                      <li key={service} className="flex items-center gap-3">
                        <Check className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-muted-foreground">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Section */}
                <div className="bg-card rounded-xl p-6 border border-border mb-8">
                  <p className="text-foreground font-medium mb-4">
                    Don't wait for a small leak to become a big problem. Contact us today for a free quote!
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/#contact">
                      <Button variant="default" size="lg">
                        Request a Free Quote
                      </Button>
                    </Link>
                    <a href="tel:+61421771237">
                      <Button variant="outline" size="lg" className="gap-2">
                        <Phone className="w-4 h-4" />
                        0421 771 237
                      </Button>
                    </a>
                  </div>
                </div>

                {/* Trust Signals */}
                <div className="space-y-4">
                  {trustSignals.map((signal, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <signal.icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{signal.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Image Column */}
              <div className="lg:sticky lg:top-24">
                <img
                  src={roofRepairImage}
                  alt="Roof repair in Moe Victoria"
                  className="w-full rounded-xl shadow-lg"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Bottom CTA */}
            <div className="text-center mt-12 pt-8 border-t border-border">
              <Link to="/">
                <Button variant="outline" size="lg" className="gap-2">
                  <ArrowLeft className="w-4 h-4" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </div>
        </main>

        <Footer />
        <MobileCallBar />
      </div>
    </>
  );
};

export default MoeRoofRepairs;
