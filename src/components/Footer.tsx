import { Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted/50 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-foreground">Emma Mendez</h3>
            <p className="text-muted-foreground">
              Speaker • Entrepreneur • Software Engineer  
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transforming challenges into innovation through resilience, 
              reinvention, and technical excellence.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About", href: "/about" },
                { name: "Experience", href: "/experience" },
                { name: "Services", href: "/services" },
                { name: "Portfolio", href: "/portfolio" },
                { name: "Contact", href: "/contact" }
              ].map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://linkedin.com/in/emmamendez"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
              <a
                href="mailto:emmamendez07@gmail.com"
                className="p-2 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors group"
              >
                <Mail className="h-5 w-5 text-primary group-hover:scale-110 transition-transform" />
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Open to speaking opportunities, technical collaborations, 
              and entrepreneurial partnerships.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">
              © {currentYear} Emma Mendez. All rights reserved.
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground">
              <span>Built by Emma with</span>
              <Heart className="h-4 w-4 text-red-500" />
              <span>& Modern Tech.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;