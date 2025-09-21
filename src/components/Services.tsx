import { Mic, Code, Briefcase, ArrowRight, Send, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";
import { Label } from "@/components/ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useState } from "react";

const Services = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };  
  const services = [
    // {
    //   icon: Code,
    //   title: "Full Stack Developer",
    //   subtitle: "Advanced development services and consulting",
    //   description: "Offering comprehensive software development services from architecture design to deployment. Emma combines her technical expertise with strategic thinking to deliver scalable, maintainable solutions that drive business value.",
    //   features: [
    //     "Web application development",
    //     "Cloud architecture design",
    //     "Legacy system modernization", 
    //     "Technical consultation",
    //     "Code review and optimization",
    //     "Team mentoring and training"
    //   ],
    //   cta: "Discuss Your Project"
    // },
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
    // {
    //   icon: Briefcase,
    //   title: "Entrepreneur",
    //   subtitle: "Building women-led tech and biotech ventures",
    //   description: "As a passionate entrepreneur, Emma is building the next generation of innovative companies. Through her stealth company, she's creating inclusive spaces and developing cutting-edge solutions in technology and biotechnology.",
    //   features: [
    //     "Business strategy and planning",
    //     "Product development guidance",
    //     "Team building and culture",
    //     "Investment and funding advice",
    //     "Market analysis and positioning",
    //     "Partnership development"
    //   ],
    //   cta: "Explore Collaboration"
    // }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button size="sm" className="group mb-9"
          onClick={() => {                          
            navigate('/');
          }}>
          <ArrowLeft className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
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

                  <Button className="w-full group" size="lg"           onClick={() => {                          
                    navigate('/contact');
                  }}>
                    {service.cta}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
                    {/* Logos Section */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8">
            <img
              src="/images/kpmg.png"
              alt="KPMG"
              className="h-16 object-contain"
            /> 
            <img
              src="/images/andigital.png"
              alt="andigital"
              className="h-16 object-contain"
            /> 
            <img
              src="/images/barclays.png"
              alt="Barclays"
              className="h-16 object-contain"
            />
            <img
              src="/images/birmingham-tech-week.png"
              alt="Birmingham Tech Week"
              className="h-16 object-contain"
            />
            <img
              src="/images/niyo.png"
              alt="Niyo"
              className="h-16 object-contain"
            />
            <img
              src="/images/bsn.png"
              alt="birmingham says no"
              className="h-16 object-contain"
            />
            <img
              src="/images/iamremarkable.png"
              alt="iamremarkable"
              className="h-16 object-contain"
            />
            <img
              src="/images/newstyle.png"
              alt="newstyle"
              className="h-16 object-contain"
            />
            <img
              src="/images/bmet.png"
              alt="bmet"
              className="h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default Services;