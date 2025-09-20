import { Code, Database, Cloud, Users, Lightbulb, Target, Award, Zap, ArrowRight, ArrowLeft } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel } from "./ui/carousel";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Skills = () => {
  const navigate = useNavigate();
  const skillCategories = [
    {
      title: "Technical Skills",
      icon: Code,
      skills: [
        "Full-stack Web Development",
        ".NET Framework & .NET Core",
        "UI/UX Architecture",
        "Quality Assurance & Testing",
        "Cloud Migration & Strategy",
        "Database Design & Management"
      ]
    },
    {
      title: "Leadership & Management",
      icon: Users,
      skills: [
        "Project Management",
        "Team Leadership",
        "Cultural Change Initiatives",
        "Mentoring & coaching",
        "Cross-functional Collaboration",
        "Board Representation"
      ]
    },
    {
      title: "Cloud & DevOps", 
      icon: Cloud,
      skills: [
        "Amazon Web Services (AWS)",
        "Microsoft Azure",
        "Cloud Architecture",
        "Infrastructure as Code",
        "CI/CD Pipelines",
        "Containerization"
      ]
    },
    {
      title: "Soft Skills",
      icon: Lightbulb,
      skills: [
        "Critical Thinking",
        "Problem Solving",
        "Public Speaking",
        "Curriculum Design",
        "Strategic Planning",
        "Innovation Management"
      ]
    }
  ];

  const coreCompetencies = [
    { name: "Software Engineering", level: 95 },
    { name: "Cloud Architecture", level: 90 },
    { name: "Leadership", level: 88 },
    { name: "Mentoring", level: 92 },
    { name: "Project Management", level: 85 },
    { name: "Public Speaking", level: 90 }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button size="lg" className="group"
          onClick={() => {                          
            navigate('/');
          }}>
          <ArrowLeft className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            Back
        </Button>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit spanning technology, leadership, and innovation
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className="p-2 bg-primary/10 rounded-lg">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <span>{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex items-center space-x-3 p-3 rounded-lg border border-border hover:bg-muted/50 transition-colors"
                      >
                        <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                        <span className="text-muted-foreground">{skill}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Core Competencies */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-3">
              <div className="p-2 bg-primary/10 rounded-lg">
                <Target className="h-6 w-6 text-primary" />
              </div>
              <span>Core Competencies</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {coreCompetencies.map((competency, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-foreground">{competency.name}</span>
                    <span className="text-sm text-muted-foreground">{competency.level}%</span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-primary to-accent h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${competency.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Skills;