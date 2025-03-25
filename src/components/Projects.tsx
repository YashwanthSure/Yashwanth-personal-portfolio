
import React from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
}

const ProjectCard = ({ title, description, tags, image, githubUrl, liveUrl }: ProjectCardProps) => {
  return (
    <div className="glass rounded-2xl overflow-hidden card-highlight h-full flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${image})` }}
        />
      </div>
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="heading-sm mb-2">{title}</h3>
        <p className="body-md mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <span key={index} className="badge bg-secondary text-secondary-foreground">
              {tag}
            </span>
          ))}
        </div>
        <div className="flex space-x-3">
          {githubUrl && (
            <Button asChild variant="outline" size="sm">
              <a href={githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Code
              </a>
            </Button>
          )}
          {liveUrl && (
            <Button asChild size="sm">
              <a href={liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce platform with product catalog, cart system, and payment integration.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team sharing functionality.",
      tags: ["React", "Firebase", "Tailwind CSS"],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Personal Finance Dashboard",
      description: "A dashboard application for tracking personal finances, expenses, and budget planning.",
      tags: ["TypeScript", "Chart.js", "Express", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-spacing bg-secondary/50">
      <div className="container-custom">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6 animate-slide-up">Projects</h2>
          <p className="body-lg animate-slide-up" style={{ animationDelay: '150ms' }}>
            Here are some of my recent projects showcasing my skills and experience 
            in building web applications with modern technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
