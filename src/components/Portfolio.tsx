import { ExternalLink, Building, Microscope, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "Sovereign Studios Birmingham",
      category: "Creative Technology",
      description: "A premier creative studio space fostering innovation and collaboration in Birmingham's creative sector. Sovereign Studios provides state-of-the-art facilities and resources for artists, designers, and creative technologists.",
      website: "sovereignstudios.co.uk",
      icon: Building,
      status: "Live",
      tags: ["Creative Space", "Community Building", "Technology", "Arts"],
      highlights: [
        "Modern creative studio facilities",
        "Community-driven approach",
        "Supporting local creative economy", 
        "Technology integration"
      ]
    },
    {
      id: 2,
      title: "KLPS Ltd",
      category: "Biotechnology", 
      description: "An innovative biotech venture at seed stage focused on developing cutting-edge solutions in life sciences. KLPS Ltd represents the intersection of technology and biology, working towards breakthrough innovations in healthcare.",
      website: "Coming Soon",
      icon: Microscope,
      status: "Seed Stage",
      tags: ["Biotech", "Life Sciences", "Healthcare", "Innovation"],
      highlights: [
        "Seed-stage biotech company",
        "Life sciences innovation",
        "Healthcare technology focus",
        "Research and development"
      ]
    }
  ];

  const achievements = [
    { label: "Years in Tech", value: "3+" },
    { label: "Projects Led", value: "15+" },
    { label: "Teams Mentored", value: "50+" },
    { label: "Speaking Events", value: "25+" }
  ];

  return (
    <section id="portfolio" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Portfolio & Ventures</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building innovative solutions and fostering creative communities
          </p>
        </div>

        {/* Achievement Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <Card key={index} className="text-center hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-primary mb-2">{achievement.value}</div>
                <div className="text-muted-foreground text-sm">{achievement.label}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Projects */}
        <div className="space-y-8">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <Card key={project.id} className="hover:shadow-xl transition-all duration-300">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
                  {/* Project Icon & Status */}
                  <div className="lg:col-span-1 p-8 bg-gradient-to-br from-primary/5 to-accent/5 flex flex-col items-center justify-center text-center border-r border-border">
                    <div className="p-6 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mb-4">
                      <IconComponent className="h-12 w-12 text-primary" />
                    </div>
                    <Badge 
                      variant={project.status === "Live" ? "default" : "secondary"}
                      className="mb-2"
                    >
                      {project.status}
                    </Badge>
                    <p className="text-sm text-muted-foreground">{project.category}</p>
                  </div>

                  {/* Project Details */}
                  <div className="lg:col-span-2 p-8">
                    <div className="flex flex-col h-full">
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                              {project.title}
                            </h3>
                            <div className="flex flex-wrap gap-2 mb-4">
                              {project.tags.map((tag, tagIndex) => (
                                <Badge key={tagIndex} variant="outline" className="text-xs">
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </div>

                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {project.description}
                        </p>

                        <div className="space-y-3 mb-6">
                          <h4 className="font-semibold text-foreground">Key Features:</h4>
                          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {project.highlights.map((highlight, highlightIndex) => (
                              <li key={highlightIndex} className="flex items-start space-x-2">
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-muted-foreground text-sm">{highlight}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="flex items-center justify-between pt-4 border-t border-border">
                        <div className="text-sm text-muted-foreground">
                          {project.website !== "Coming Soon" ? (
                            <span className="flex items-center space-x-1">
                              <ExternalLink className="h-3 w-3" />
                              <span>{project.website}</span>
                            </span>
                          ) : (
                            <span>{project.website}</span>
                          )}
                        </div>
                        
                        {project.website !== "Coming Soon" && (
                          <Button variant="outline" size="sm" className="group">
                            Visit Project
                            <ExternalLink className="ml-2 h-3 w-3 group-hover:scale-110 transition-transform" />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-foreground mb-4">
                Interested in collaborating on the next big thing?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Emma is always open to discussing new opportunities, partnerships, and innovative projects 
                that make a meaningful impact.
              </p>
              <Button size="lg" className="group">
                Start a Conversation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;