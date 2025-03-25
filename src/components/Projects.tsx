
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
    <div className="glass rounded-2xl overflow-hidden card-highlight h-full flex flex-col group">
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center transform group-hover:scale-105 transition-transform duration-700 ease-out"
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
      title: "Personal Blog Website",
      description: "A simple blog website built with HTML, CSS, and JavaScript. This was my first web project where I learned about responsive design.",
      tags: ["HTML", "CSS", "JavaScript"],
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "Weather App",
      description: "A weather application that fetches data from a weather API and displays current conditions and forecasts.",
      tags: ["JavaScript", "API", "CSS"],
      image: "https://images.unsplash.com/photo-1534088568595-a066f410bcda",
      githubUrl: "#",
      liveUrl: "#"
    },
    {
      title: "To-Do List App",
      description: "A simple task management application to keep track of daily tasks, with the ability to add, complete, and delete tasks.",
      tags: ["React", "CSS", "LocalStorage"],
      image: "https://images.unsplash.com/photo-1540350394557-8d14678e7f91",
      githubUrl: "#",
      liveUrl: "#"
    }
  ];

  return (
    <section id="projects" className="section-spacing bg-secondary/50">
      <div className="container-custom">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6 reveal">Student Projects</h2>
          <p className="body-lg reveal" style={{ transitionDelay: '150ms' }}>
            Here are some of the projects I've worked on during my learning journey.
            Each project represents different skills and concepts I've learned.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal" style={{ transitionDelay: '300ms' }}>
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
        
        <div className="mt-12 text-center reveal" style={{ transitionDelay: '450ms' }}>
          <Button asChild variant="outline" size="lg" className="rounded-full px-8">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              See More on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
