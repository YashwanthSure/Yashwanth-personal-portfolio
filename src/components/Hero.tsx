
import React from 'react';
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section 
      id="top" 
      className="relative min-h-screen flex items-center justify-center pt-20"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      </div>

      <div className="container-custom">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="badge bg-muted border-0">
            Full Stack Web Developer
          </div>
          
          <h1 className="heading-xl">
            Hi, I'm <span className="text-primary">Yashwanth</span>
          </h1>
          
          <p className="body-lg max-w-2xl mx-auto">
            I craft elegant, user-centered web applications with modern technologies. 
            Passionate about creating seamless digital experiences that solve real problems.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button asChild size="lg" className="rounded-full px-8">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <a href="#projects">View My Work</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" aria-label="Scroll to about section">
          <ArrowDown size={24} className="text-muted-foreground" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
