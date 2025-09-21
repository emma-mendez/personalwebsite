import { Building, Calendar, MapPin, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const Experience = () => {
  const navigate = useNavigate();
  const experiences = [
    {
      title: "Software Engineer",
      company: "KPMG",
      location: "UK",
      period: "Oct 2021 – Oct 2024",
      description: "Led cultural change initiatives and technical innovation, developing monorepo frameworks and spearheading pro bono projects. Achieved AWS certification and served as board representative for diverse voices in technology.",
      highlights: [
        "Leadership in cultural change initiatives",
        "Developed monorepo framework architecture", 
        "Spearheaded pro bono initiatives",
        "AWS certified developer",
        "Board representation for diversity and inclusion",
        "Board representation for diversity and inclusion"

      ],
    },
    // {
    //   title: "Employability Coach", 
    //   company: "Gordon Franks Training",
    //   location: "UK",
    //   period: "2018 – 2021",
    //   description: "Mentored young talent and designed innovative curriculum programs to enhance employability skills and career development pathways.",
    //   highlights: [
    //     "Mentored young professionals and graduates",
    //     "Designed and delivered curriculum programs",
    //     "Career development pathway creation",
    //     "Skills assessment and training delivery"
    //   ],
    // },
    // {
    //   title: "Employment Coach",
    //   company: "Pertemps",
    //   location: "UK", 
    //   period: "2015 – 2018",
    //   description: "Guided clients in developing essential employability skills, providing personalized coaching and support to help individuals achieve their career goals.",
    //   highlights: [
    //     "One-on-one career coaching",
    //     "Employability skills development",
    //     "Job search strategy and support",
    //     "Interview preparation and skills training"
    //   ],
    // },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button size="sm" className="group mb-9"
          onClick={() => {                          
            navigate('/');
          }}>
          <ArrowLeft className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey through technology, coaching, and leadership
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary rounded-full border-4 border-background hidden md:block"></div>
                
                <div className="md:ml-20">
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <div className="flex items-center space-x-4 text-muted-foreground">
                            <div className="flex items-center space-x-2">
                              <Building className="h-4 w-4" />
                              <span className="font-medium">{exp.company}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="h-4 w-4" />
                              <span>{exp.location}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center space-x-2 text-primary font-medium mt-2 md:mt-0">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="space-y-2">
                        <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {exp.highlights.map((highlight, idx) => (
                            <li key={idx} className="flex items-start space-x-2">
                              <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-muted-foreground">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;