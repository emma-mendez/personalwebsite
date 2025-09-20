import { Mic, Code, Briefcase, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Mic,
      title: "Speaker",
      subtitle: "Inspiring through experience and expertise",
      description: "Emma delivers powerful keynotes and panel discussions on career reinvention, diversity in tech, and leadership. Her authentic storytelling and technical expertise make her a sought-after speaker for conferences, corporate events, and educational institutions.",
      features: [
        "Keynote presentations",
        "Panel discussions",
        "Workshop facilitation",
        "Mentoring sessions",
        "Corporate training",
        "Educational talks"
      ],
      cta: "Book Emma to Speak"
    },
    {
      icon: Code,
      title: "Full Stack Developer",
      subtitle: "Advanced development services and consulting",
      description: "Offering comprehensive software development services from architecture design to deployment. Emma combines her technical expertise with strategic thinking to deliver scalable, maintainable solutions that drive business value.",
      features: [
        "Web application development",
        "Cloud architecture design",
        "Legacy system modernization", 
        "Technical consultation",
        "Code review and optimization",
        "Team mentoring and training"
      ],
      cta: "Discuss Your Project"
    },
    {
      icon: Briefcase,
      title: "Entrepreneur",
      subtitle: "Building women-led tech and biotech ventures",
      description: "As a passionate entrepreneur, Emma is building the next generation of innovative companies. Through Sovereign Studios Birmingham and KLPS Ltd, she's creating inclusive spaces and developing cutting-edge solutions in technology and biotechnology.",
      features: [
        "Business strategy and planning",
        "Product development guidance",
        "Team building and culture",
        "Investment and funding advice",
        "Market analysis and positioning",
        "Partnership development"
      ],
      cta: "Explore Collaboration"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering growth through speaking, development, and entrepreneurship
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center pb-6">
                  <div className="mx-auto p-4 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full w-fit mb-4">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl mb-2">{service.title}</CardTitle>
                  <p className="text-primary font-medium">{service.subtitle}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-foreground">Key Offerings:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full group" size="lg">
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Ready to collaborate?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Whether you need a speaker for your next event, technical expertise for your project, 
                or strategic guidance for your venture, let's discuss how we can work together.
              </p>
              <Button size="lg" className="group">
                Get in Touch
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Services;