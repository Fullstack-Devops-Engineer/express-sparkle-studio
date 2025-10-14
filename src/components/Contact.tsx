import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary to-secondary text-white" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 font-['Poppins']">
            Book Our Services Today
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto">
            Get in touch with us for a free consultation and quote
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <a 
            href="tel:9176561900"
            className="group"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up border border-white/20">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6 group-hover:bg-white/30 transition-colors">
                <Phone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-['Poppins']">Call Us</h3>
              <p className="text-white/90 text-lg font-semibold">9176561900</p>
            </div>
          </a>

          <a 
            href="mailto:expressfacilityservice2000@gmail.com"
            className="group"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up border border-white/20" style={{ animationDelay: '0.1s' }}>
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6 group-hover:bg-white/30 transition-colors">
                <Mail className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2 font-['Poppins']">Email Us</h3>
              <p className="text-white/90 text-sm break-all">expressfacilityservice2000@gmail.com</p>
            </div>
          </a>

          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl text-center hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl animate-fade-in-up border border-white/20" style={{ animationDelay: '0.2s' }}>
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 mb-6">
              <MapPin className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold mb-2 font-['Poppins']">Service Areas</h3>
            <p className="text-white/90">Residential | Commercial | Hospitality</p>
          </div>
        </div>

        <div className="text-center mt-12 animate-fade-in">
          <a href="tel:9176561900">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground text-xl px-10 py-7 rounded-full shadow-2xl hover:scale-105 transition-transform font-bold">
              <Phone className="mr-2 h-6 w-6" />
              Book Now: 9176561900
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
