import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen bg-gradient-hero flex items-center justify-center relative overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-primary-glow/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-accent/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
                <span className="bg-gradient-to-r from-white to-accent bg-clip-text text-transparent">
                  Hi, I'm Senadhi Chandrasekara
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/90 font-medium">
                AI & Data Science Student
              </p>
              <p className="text-lg text-white/70 max-w-lg mx-auto lg:mx-0">
                Passionate about machine learning, data analysis, and building intelligent systems 
                that solve real-world problems.
              </p>
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-glow"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View My Work
              </Button>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 transition-smooth shadow-glow"
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Get In Touch
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-6 justify-center lg:justify-start">
              <a href="https://github.com/senadhi-Thimanya" className="text-white/70 hover:text-white transition-smooth" target="_blank">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/senadhi-chandrasekara/" className="text-white/70 hover:text-white transition-smooth" target="_blank">
                <Linkedin size={24} />
              </a>
              <a href="mailto:senadhithimanya@gmail.com" className="text-white/70 hover:text-white transition-smooth">
                <Mail size={24} />
              </a>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-primary-glow rounded-full animate-pulse"></div>
              <div className="absolute inset-2 rounded-full overflow-hidden shadow-elegant">
                <img 
                  src={heroImage} 
                  alt="Senadhi Chandrasekara - AI & Data Science Student"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <button 
            onClick={scrollToAbout}
            className="text-white/60 hover:text-white transition-smooth animate-bounce"
          >
            <ChevronDown size={32} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;