import { useState } from "react";
import emailjs from "emailjs-com";
import { Mail, Linkedin, MapPin, Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const Contact = () => {
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

    emailjs
      .send(
        "service_uee24s7",    // Replace with your EmailJS Service ID
        "template_x598viv",   // Replace with your EmailJS Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_email: "emmamendez07@gmail.com"
        },
        "0m68tZs3aqG_yzht9"   // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Message sent!", result.text);
          alert("Your message has been sent successfully!");
          setFormData({ name: "", email: "", subject: "", message: "" }); // reset form
        },
        (error) => {
          console.log("Failed...", error.text);
          alert("Something went wrong, please try again.");
        }
      );
  };

  const contactInfo = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/emmamendez",
      href: "https://linkedin.com/in/emmamendez",
      primary: true
    },
    {
      icon: Mail, 
      label: "Email",
      value: "hello@emmamendez.com",
      href: "mailto:emmamendez07@gmail.com"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Birmingham, UK"
    },
    {
      icon: Phone,
      label: "Speaking Inquiries",
      value: "Available upon request"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Get in Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start a conversation? Whether it's about speaking opportunities, 
            technical collaboration, or entrepreneurial ventures, let's connect.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {contactInfo.map((contact, index) => {
                  const IconComponent = contact.icon;
                  return (
                    <div 
                      key={index} 
                      className={`flex items-start space-x-3 p-3 rounded-lg transition-colors ${
                        contact.primary ? 'bg-primary/10 border border-primary/20' : 'hover:bg-muted/50'
                      }`}
                    >
                      <div className={`flex-shrink-0 p-2 rounded-lg ${
                        contact.primary ? 'bg-primary/20' : 'bg-muted'
                      }`}>
                        <IconComponent className={`h-4 w-4 ${
                          contact.primary ? 'text-primary' : 'text-muted-foreground'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <p className="font-medium text-foreground text-sm mb-1">
                          {contact.label}
                        </p>
                        {contact.href ? (
                          <a 
                            href={contact.href}
                            className={`text-sm transition-colors ${
                              contact.primary 
                                ? 'text-primary hover:text-primary/80 font-medium' 
                                : 'text-muted-foreground hover:text-foreground'
                            }`}
                            target={contact.href.startsWith('http') ? '_blank' : '_self'}
                            rel={contact.href.startsWith('http') ? 'noopener noreferrer' : ''}
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-muted-foreground text-sm">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </CardContent>
            </Card>

            {/* CTA Card */}
            <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20">
              <CardContent className="p-6 text-center">
                <h3 className="font-semibold text-foreground mb-2">
                  Prefer a direct conversation?
                </h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Connect with Emma on LinkedIn for the fastest response to your inquiry.
                </p>
                <Button 
                  size="sm" 
                  className="w-full" 
                  onClick={() => window.open('https://linkedin.com/in/emmamendez', '_blank')}
                >
                  <Linkedin className="mr-2 h-4 w-4" />
                  Connect on LinkedIn
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your full name"
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="your@email.com"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What would you like to discuss?"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell Emma about your project, speaking opportunity, or collaboration idea..."
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full group">
                    Send Message
                    <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </form>

                <div className="mt-6 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>Response Time:</strong> Emma typically responds within 24-48 hours. 
                    For urgent inquiries, please connect on LinkedIn for faster communication.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;