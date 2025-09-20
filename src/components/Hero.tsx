import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import emmaProfile from "@/assets/emma-profile.jpg";
import { useEffect, useState } from "react";
import { removeBackground, loadImageFromUrl } from "@/lib/backgroundRemoval";

const Hero = () => {
  const [processedImageUrl, setProcessedImageUrl] = useState<string>("");
  const [isProcessing, setIsProcessing] = useState(true);

  useEffect(() => {
    const processImage = async () => {
      try {
        setIsProcessing(true);
        const imageElement = await loadImageFromUrl(emmaProfile);
        const processedBlob = await removeBackground(imageElement);
        const processedUrl = URL.createObjectURL(processedBlob);
        setProcessedImageUrl(processedUrl);
      } catch (error) {
        console.error('Failed to process image:', error);
        // Fallback to original image
        setProcessedImageUrl(emmaProfile);
      } finally {
        setIsProcessing(false);
      }
    };

    processImage();

    // Cleanup function
    return () => {
      if (processedImageUrl && processedImageUrl !== emmaProfile) {
        URL.revokeObjectURL(processedImageUrl);
      }
    };
  }, []);

  const heroSlides = [
    {
      title: "Software Engineer",
      subtitle: "Building scalable solutions with cutting-edge technology",
      description: "Leading technical innovation at KPMG with expertise in full-stack development, cloud architecture, and quality assurance. AWS Certified Developer driving digital transformation.",
      gradient: "from-primary/20 to-blue-500/20",
      buttonText: "View Technical Skills"
    },
    {
      title: "Entrepreneur",
      subtitle: "Innovating in biotech and creative industries",
      description: "Founder of KLPS Ltd, a pioneering biotech venture at seed stage, and Sovereign Studios Birmingham. Building women-led businesses that bridge technology and creativity.",
      gradient: "from-accent/20 to-purple-500/20",
      buttonText: "Explore Ventures"
    },
    {
      title: "Speaker",
      subtitle: "Inspiring through stories of resilience and reinvention",
      description: "Sharing insights on career transformation, technical leadership, and entrepreneurship. From music graduate to tech leader - demonstrating the power of adaptive reinvention.",
      gradient: "from-primary/20 to-teal-500/20",
      buttonText: "Book Speaking"
    }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Carousel className="w-full" opts={{ loop: true }}>
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-8">
                  {/* Text Content */}
                  <div className="space-y-6 order-2 lg:order-1">
                    <div className="space-y-2">
                      <p className="text-2xl lg:text-3xl font-semibold text-primary">
                        {slide.title}
                      </p>
                      <p className="text-lg text-muted-foreground font-medium">
                        {slide.subtitle}
                      </p>
                    </div>
                    <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                      {slide.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button size="lg" className="group">
                        {slide.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                      <Button variant="outline" size="lg">
                        Get in Touch
                      </Button>
                    </div>
                  </div>

                  {/* Profile Image */}
                  <div>
                    <div className="relative w-96 h-[32rem] lg:w-[28rem] lg:h-[36rem]">
                      {isProcessing ? (
                        <div className="w-full h-full bg-muted animate-pulse rounded-lg flex items-center justify-center">
                          <span className="text-muted-foreground">Processing...</span>
                        </div>
                      ) : (
                        <>
                          <img
                            src={processedImageUrl || emmaProfile}
                            alt={`Emma Mendez - ${slide.title}`}
                            className="w-full h-full object-contain object-top"
                          />
                          {/* Dynamic Name Overlay */}
                          <div className="absolute inset-0 flex items-center justify-center pointer-events-none" style={{ transform: 'translateY(60px)' }}>
                            <div className="text-center animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-500">
                              <h2 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-2xl tracking-wide">
                                EMMA
                              </h2>
                              <h2 className="text-4xl lg:text-6xl font-bold text-white drop-shadow-2xl tracking-wide -mt-2">
                                MENDEZ
                              </h2>
                            </div>
                          </div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4 lg:left-8 h-12 w-12 bg-background/80 backdrop-blur-sm border-2 hover:bg-background/90" />
          <CarouselNext className="right-4 lg:right-8 h-12 w-12 bg-background/80 backdrop-blur-sm border-2 hover:bg-background/90" />
        </Carousel>
      </div>
    </section>
  );
};

export default Hero;