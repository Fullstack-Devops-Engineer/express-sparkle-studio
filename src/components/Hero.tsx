import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional floor polishing services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/85 to-secondary/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 font-['Poppins']">
            Express Facility Services
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-medium">
            Professional Floor Polishing & Cleaning Solutions
          </p>
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-10 max-w-2xl mx-auto">
            We take pride in working with residential, commercial, and hospitality sectors, offering customized service packages
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="tel:9176561900">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6 hover:scale-105 transition-transform shadow-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call: 9176561900
              </Button>
            </a>
            <Button 
              size="lg" 
              variant="outline" 
              className="text-lg px-8 py-6 hover:scale-105 transition-transform bg-white/10 border-white text-white hover:bg-white hover:text-primary shadow-lg backdrop-blur-sm"
              onClick={() => window.location.href = 'mailto:expressfacilityservice2000@gmail.com'}
            >
              <Mail className="mr-2 h-5 w-5" />
              Email Us
            </Button>
          </div>

          <div className="inline-block animate-float">
            <div className="bg-accent text-accent-foreground px-6 py-3 rounded-full font-semibold text-lg shadow-xl">
              Book Now & Get Premium Service!
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent z-10"></div>
    </section>
  );
};

export default Hero;
