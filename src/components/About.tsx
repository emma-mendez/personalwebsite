import { useState } from "react";
import { GraduationCap, Award, ChevronDown, ChevronUp, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  const [showFullBio, setShowFullBio] = useState(false);

  const education = [
    {
      degree: "BA (Hons) in Music and Professional Practice",
      institution: "Coventry University",
      icon: GraduationCap,
    },
    {
      degree: "AWS Certified Developer – Associate",
      institution: "Amazon Web Services (2024–2027)",
      icon: Award,
    },
    {
      degree: "Microsoft Azure AI Fundamentals (AI-900)",
      institution: "Microsoft",
      icon: Award,
    },
  ];

  const shortBio = "A dynamic software engineer and entrepreneur with a unique journey from music to technology. Emma combines creative problem-solving with technical expertise to drive innovation and cultural change in the tech industry.";

  const fullBio = `Emma Mendez is a passionate software engineer, entrepreneur, and speaker whose career exemplifies the power of reinvention and resilience. With a background that spans music, coaching, and technology, she brings a unique perspective to the tech industry.

Starting her career with a BA (Hons) in Music and Professional Practice from Coventry University, Emma's journey into technology began through her roles as an Employment and Employability Coach, where she discovered her passion for mentoring and guiding others toward success.

Her transition into software engineering at KPMG marked a pivotal moment in her career, where she quickly established herself as a leader in cultural change and technical innovation. Emma spearheaded the development of monorepo frameworks, led pro bono initiatives, and earned her AWS certification while representing diverse voices on company boards.

As an entrepreneur, Emma is building the next generation of women-led ventures in tech and biotech through her companies Sovereign Studios Birmingham and Stealth company Ltd. Her work focuses on creating inclusive spaces and innovative solutions that address real-world challenges.

Emma's commitment to sharing knowledge and inspiring others has made her a sought-after speaker, where she discusses topics ranging from career reinvention to technical leadership and diversity in technology.`;

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Button size="sm" className="group mb-9"
          onClick={() => {                          
            navigate('/');
          }}>
          <ArrowLeft className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            
        </Button>
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Emma</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A journey of resilience, reinvention, and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Biography</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {shortBio}
                </p>
                
                {showFullBio && (
                  <div className="space-y-4 pt-4 border-t">
                    {fullBio.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                )}
                
                <Button
                  variant="ghost"
                  onClick={() => setShowFullBio(!showFullBio)}
                  className="mt-4 p-0 h-auto text-primary hover:text-primary/80"
                >
                  {showFullBio ? (
                    <>
                      Show Less <ChevronUp className="ml-1 h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Read Full Bio <ChevronDown className="ml-1 h-4 w-4" />
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </div>
          <div className="mt-6 max-w-3xl mx-auto">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/i62cuY1XfOo"
                title="Emma Mendez Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
          {/* Logos Section */}
          <div className="mt-8 flex flex-wrap justify-center items-center gap-8">
            <img
              src="/images/kpmg.png"
              alt="KPMG"
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
          </div>


          {/* Education Section */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Education & Certifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {education.map((item, index) => {
                  const IconComponent = item.icon;
                  return (
                    <div key={index} className="flex items-start space-x-4 p-4 rounded-lg border border-border hover:bg-muted/50 transition-colors">
                      <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-foreground mb-1">
                          {item.degree}
                        </h3>
                        <p className="text-muted-foreground">
                          {item.institution}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;