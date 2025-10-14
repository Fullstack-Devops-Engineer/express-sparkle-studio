import { CheckCircle2, Users, Award, Clock } from "lucide-react";

const features = [
  {
    icon: Award,
    title: "Expert Professionals",
    description: "Trained and certified cleaning specialists with years of experience",
  },
  {
    icon: Users,
    title: "Residential & Commercial",
    description: "Serving homes, offices, and hospitality sectors with equal expertise",
  },
  {
    icon: CheckCircle2,
    title: "Customized Packages",
    description: "Tailored service plans to meet your specific requirements",
  },
  {
    icon: Clock,
    title: "Timely Service",
    description: "Punctual and efficient service delivery every time",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 font-['Poppins']">
            Why Choose Us?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We take pride in delivering exceptional quality and customer satisfaction
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center group animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/70 text-white mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Icon className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3 font-['Poppins']">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
