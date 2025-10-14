import { Card, CardContent } from "@/components/ui/card";
import { Sparkles } from "lucide-react";
import marbleImage from "@/assets/marble-service.jpg";
import graniteImage from "@/assets/granite-service.jpg";
import kotaImage from "@/assets/kota-service.jpg";
import carpetImage from "@/assets/carpet-service.jpg";
import sofaImage from "@/assets/sofa-service.jpg";

const services = [
  {
    title: "Marble Floor Polishing",
    description: "Restore the natural shine and elegance of your marble floors with our expert polishing services.",
    image: marbleImage,
  },
  {
    title: "Granite Floor Polishing",
    description: "Professional granite polishing that brings out the stunning natural patterns and luster.",
    image: graniteImage,
  },
  {
    title: "Kota Stone Polishing",
    description: "Specialized treatment for kota stone floors, ensuring durability and a beautiful finish.",
    image: kotaImage,
  },
  {
    title: "Carpet Shampooing",
    description: "Deep cleaning carpet shampooing services that remove dirt, stains, and allergens effectively.",
    image: carpetImage,
  },
  {
    title: "Sofa Shampooing",
    description: "Revitalize your upholstery with our thorough sofa shampooing and fabric care services.",
    image: sofaImage,
  },
];

const Services = () => {
  return (
    <section className="py-20 px-4 bg-muted/30" id="services">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-6 py-2 rounded-full mb-4">
            <Sparkles className="h-5 w-5" />
            <span className="font-semibold">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Poppins']">
            Premium Cleaning Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional services tailored to meet your specific needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2 font-['Poppins']">
                    {service.title}
                  </h3>
                </div>
              </div>
              <CardContent className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
