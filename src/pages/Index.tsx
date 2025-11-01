import Hero from "@/components/Hero";
import ManagingDirector from "@/components/ManagingDirector";
import Services from "@/components/Services";
import WhyChooseUs from "@/components/WhyChooseUs";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      <ManagingDirector />
      <Services />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
