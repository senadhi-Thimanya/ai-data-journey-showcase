import { Card } from "@/components/ui/card";
import { Brain, Code, Database, TrendingUp } from "lucide-react";

const About = () => {
  const interests = [
    {
      icon: Brain,
      title: "Machine Learning",
      description: "Deep learning, neural networks, and AI model development"
    },
    {
      icon: Database,
      title: "Data Analysis",
      description: "Statistical analysis, data visualization, and insights extraction"
    },
    {
      icon: Code,
      title: "Software Development",
      description: "Python, R, JavaScript, and full-stack development"
    },
    {
      icon: TrendingUp,
      title: "Research",
      description: "Academic research in AI ethics and algorithmic fairness"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              About Me
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate undergraduate exploring the intersection of artificial intelligence 
              and data science to create meaningful solutions.
            </p>
          </div>
          
          {/* About Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed">
                  I'm currently a first-year undergraduate student majoring in Artificial 
                  Intelligence and Data Science. My academic journey 
                  has been driven by curiosity about how we can leverage data and intelligent 
                  algorithms to solve complex real-world problems.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Through coursework, personal projects, and research opportunities, I've developed 
                  a strong foundation in machine learning and software 
                  development. I'm particularly interested in the ethical implications of AI 
                  and ensuring that technology serves everyone equitably.
                </p>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl font-semibold text-foreground">Education</h3>
                <div className="bg-card p-6 rounded-lg shadow-card">
                  <h4 className="font-semibold text-lg">BSc (Hons) Artificial Intelligence and Data Science</h4>
                  <p className="text-primary font-medium">Robert Gordon University • 2024 - 2028</p>
                  <p className="text-muted-foreground mt-2"></p>
                </div>
              </div>
            </div>
            
            {/* Skills/Technologies */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground">Technical Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Languages</h4>
                  <div className="flex flex-wrap gap-2">
                    {["Python", "R", "SQL", "JavaScript", "Java", "HTML", "CSS"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-medium text-foreground">Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    {["IntelliJ", "PyCharm", "VS Code", "MySQL", "Figma"].map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Interests Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {interests.map((interest, index) => (
              <Card key={index} className="p-6 bg-gradient-card shadow-card hover:shadow-elegant transition-smooth">
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-primary/10 rounded-full">
                    <interest.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="font-semibold text-foreground">{interest.title}</h4>
                  <p className="text-sm text-muted-foreground">{interest.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;