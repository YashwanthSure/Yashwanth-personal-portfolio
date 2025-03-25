
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
        <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-blue-500/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-purple-500/10 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/4 left-1/5 w-64 h-64 bg-teal-500/10 rounded-full blur-[80px] animate-float" style={{ animationDelay: '2s' }} />
      </div>

      <div className="container-custom z-10">
        <div className="flex flex-col items-center text-center space-y-8 animate-fade-in">
          <div className="glass px-4 py-1.5 rounded-full">
            <span className="text-primary text-sm font-medium">Computer Science Student</span>
          </div>
          
          <h1 className="heading-xl">
            Hi, I'm <span className="text-primary relative inline-block">
              Yashwanth
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-primary/30 rounded-full"></span>
            </span>
          </h1>
          
          <p className="body-lg max-w-2xl mx-auto">
            A passionate student developer exploring the world of web development. 
            I'm learning to build user-friendly applications and websites with modern technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 pt-6">
            <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/20">
              <a href="#contact">Get in Touch</a>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full px-8 bg-white/50 hover:bg-white/70">
              <a href="#projects">See My Projects</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#about" className="glass p-3 rounded-full flex items-center justify-center" aria-label="Scroll to about section">
          <ArrowDown size={20} className="text-primary" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
