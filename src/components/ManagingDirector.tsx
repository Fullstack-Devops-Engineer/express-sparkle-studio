import mdImage from "@/assets/managing-director.jpeg";

const ManagingDirector = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Managing Director
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          
          <div className="bg-card rounded-2xl shadow-2xl overflow-hidden border border-border">
            <div className="grid md:grid-cols-2 gap-8 items-center p-8 md:p-12">
              <div className="flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-primary/20 rounded-lg blur-xl"></div>
                  <img 
                    src={mdImage} 
                    alt="Managing Director of Express Facility Services" 
                    className="relative rounded-lg shadow-xl w-full max-w-sm object-cover aspect-[3/4]"
                  />
                </div>
              </div>
              
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
                    Jegan
                  </h3>
                  <p className="text-lg text-muted-foreground mb-1">
                    Managing Director
                  </p>
                  <p className="text-xl text-primary font-semibold mb-4">
                    Express Facility Services
                  </p>
                </div>
                
                <div className="space-y-4 text-muted-foreground">
                  <p className="leading-relaxed">
                    Jegan brings years of expertise in facility management and customer service, ensuring the highest quality standards in every project. His commitment to excellence and attention to detail have made Express Facility Services a trusted name in the industry.
                  </p>
                  <p className="leading-relaxed">
                    Under his leadership, we deliver professional floor polishing and cleaning solutions across residential, commercial, and hospitality sectors with unmatched quality and reliability.
                  </p>
                </div>
                
                <div className="pt-4">
                  <div className="inline-block bg-primary/10 border border-primary/20 rounded-lg px-6 py-3">
                    <p className="text-sm font-semibold text-primary">
                      "Excellence in Every Service"
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManagingDirector;
