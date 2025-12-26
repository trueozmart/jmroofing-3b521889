import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Services from "@/components/Services";
import HowWeWork from "@/components/HowWeWork";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import MobileCallBar from "@/components/MobileCallBar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <HowWeWork />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <MobileCallBar />
    </div>
  );
};

export default Index;
