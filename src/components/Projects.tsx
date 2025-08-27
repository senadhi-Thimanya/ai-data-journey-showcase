import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Calendar } from "lucide-react";
import aiProject from "@/assets/ai-project.jpg";
import dataProject from "@/assets/data-project.jpg";

const Projects = () => {
  const projects = [
    {
      title: "Neural Network Image Classifier",
      description: "Built a deep learning model using TensorFlow to classify medical images with 94% accuracy. Implemented data augmentation and transfer learning techniques to optimize performance.",
      image: aiProject,
      technologies: ["Python", "TensorFlow", "OpenCV", "Jupyter"],
      github: "https://github.com/alexchen/image-classifier",
      demo: "https://image-classifier-demo.com",
      date: "October 2024",
      featured: true
    },
    {
      title: "Customer Segmentation Analysis",
      description: "Performed comprehensive customer segmentation using K-means clustering and RFM analysis. Created interactive dashboards to visualize customer behavior patterns.",
      image: dataProject,
      technologies: ["Python", "Scikit-learn", "Plotly", "Pandas"],
      github: "https://github.com/alexchen/customer-segmentation",
      demo: "https://customer-analysis-dashboard.com",
      date: "September 2024",
      featured: true
    },
    {
      title: "Sentiment Analysis API",
      description: "Developed a REST API that analyzes sentiment from text data using natural language processing. Deployed on AWS with automated CI/CD pipeline.",
      image: null,
      technologies: ["Python", "Flask", "NLTK", "AWS", "Docker"],
      github: "https://github.com/alexchen/sentiment-api",
      demo: null,
      date: "August 2024",
      featured: false
    },
    {
      title: "Stock Price Prediction Model",
      description: "Created an LSTM neural network to predict stock prices using historical data and market indicators. Achieved 15% better accuracy than baseline models.",
      image: null,
      technologies: ["Python", "PyTorch", "yfinance", "Streamlit"],
      github: "https://github.com/alexchen/stock-prediction",
      demo: "https://stock-predictor-app.com",
      date: "July 2024",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work in AI, machine learning, and data science.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="overflow-hidden bg-gradient-card shadow-card hover:shadow-elegant transition-smooth group">
              {project.image && (
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
              )}
              <div className="p-6 space-y-4">
                <div className="flex items-start justify-between">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-smooth">
                    {project.title}
                  </h3>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-1" />
                    {project.date}
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex items-center gap-2"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                  </Button>
                  {project.demo && (
                    <Button 
                      size="sm"
                      className="flex items-center gap-2 bg-primary hover:bg-primary/90"
                      asChild
                    >
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Demo
                      </a>
                    </Button>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold text-foreground text-center">
            Other Projects
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="p-6 bg-card shadow-card hover:shadow-elegant transition-smooth group">
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h4 className="text-lg font-semibold text-foreground group-hover:text-primary transition-smooth">
                      {project.title}
                    </h4>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-1" />
                      {project.date}
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground text-sm">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-accent/10 text-accent-foreground rounded text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button 
                      variant="ghost" 
                      size="sm"
                      className="flex items-center gap-2 h-8"
                      asChild
                    >
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-3 h-3" />
                        Code
                      </a>
                    </Button>
                    {project.demo && (
                      <Button 
                        variant="ghost"
                        size="sm"
                        className="flex items-center gap-2 h-8"
                        asChild
                      >
                        <a href={project.demo} target="_blank" rel="noopener noreferrer">
                          <ExternalLink className="w-3 h-3" />
                          Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
