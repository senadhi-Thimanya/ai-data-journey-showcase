import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "senadhithimanya@gmail.com",
      href: "mailto:senadhithimanya@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 76 703 3151",
      href: "tel:+94767033151"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Colombo, Sri Lanka",
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/senadhi-Thimanya",
      username: "@senadhi-Thimanya"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/senadhi-chandrasekara/",
      username: "Senadhi Chandrasekara"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Let's Connect
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              I'm always interested in discussing new opportunities, collaborations, 
              or just chatting about AI and data science!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-foreground">Get In Touch</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you're looking for a passionate AI/Data Science student for internships, 
                  research collaborations, or project partnerships, I'd love to hear from you. 
                  I'm currently seeking summer 2025 internship opportunities!
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-4">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <contact.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{contact.label}</p>
                      {contact.href ? (
                        <a 
                          href={contact.href}
                          className="text-muted-foreground hover:text-primary transition-smooth"
                        >
                          {contact.value}
                        </a>
                      ) : (
                        <p className="text-muted-foreground">{contact.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Contact */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Quick Contact</h4>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href="mailto:senadhithimanya@gmail.com">
                      <Mail className="w-4 h-4" />
                      Send Email
                    </a>
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a href="/resume.pdf" download>
                      Download Resume
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            {/* Social Links & Availability */}
            <div className="space-y-8">
              {/* Current Status */}
              <Card className="p-6 bg-gradient-card shadow-card">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <h4 className="text-lg font-semibold text-foreground">Currently Available</h4>
                  </div>
                  <p className="text-muted-foreground">
                    Looking for summer 2025 internships in AI/ML, Data Science, or Software Engineering roles.
                  </p>
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground">
                      <strong>Preferred Locations:</strong> Colombo
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Interests:</strong> AI/ML Engineering, AI/ML Research
                    </p>
                  </div>
                </div>
              </Card>

              {/* Social Links */}
              <div className="space-y-6">
                <h4 className="text-lg font-semibold text-foreground">Connect Online</h4>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-4 p-4 bg-card rounded-lg shadow-card hover:shadow-elegant transition-smooth group"
                    >
                      <div className="p-2 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-smooth">
                        <social.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-foreground group-hover:text-primary transition-smooth">
                          {social.label}
                        </p>
                        <p className="text-sm text-muted-foreground">{social.username}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Fun Fact */}
              <Card className="p-6 bg-accent/5 border-accent/20">
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-foreground">Fun Fact</h4>
                  <p className="text-muted-foreground">
                    When I'm not coding or analyzing data, you can find me hiking, 
                    reading about the latest AI research, or experimenting with new 
                    machine learning frameworks!
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;