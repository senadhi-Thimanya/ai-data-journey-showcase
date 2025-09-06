import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Section */}
      <section id="hero">
        <Hero />
      </section>
      
      {/* About Section */}
      <About />
      
      {/* Projects Section */}
      <Projects />
      
      {/* Contact Section */}
      <Contact />
      
      {/* Footer */}
      <footer className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] py-12">
        <div className="container mx-auto px-6">
          <div className="text-center space-y-4">
            <p className="text-lg font-medium">Senadhi Chandrasekra</p>
            <p className="text-foreground/70">
              AI & Data Science Student • Building the future with intelligent systems
            </p>
            <div className="flex justify-center space-x-6 text-sm text-foreground/60">
              <span>© 2024 Senadhi Chandrasekara</span>
              <span>•</span>
              <span>Built with React & TypeScript</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;