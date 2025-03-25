
import React from 'react';
import { Code, Globe, Users } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glass p-6 rounded-2xl card-highlight h-full">
      <div className="h-12 w-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-4">
        {icon}
      </div>
      <h3 className="heading-sm mb-2">{title}</h3>
      <p className="body-md">{description}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="section-spacing">
      <div className="container-custom">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6 reveal">About Me</h2>
          <p className="body-lg reveal" style={{ transitionDelay: '150ms' }}>
            I'm a computer science student with a passion for web development. Currently learning and building 
            projects to improve my skills in both frontend and backend technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal" style={{ transitionDelay: '300ms' }}>
          <FeatureCard 
            icon={<Code size={24} />}
            title="Learning Frontend"
            description="I'm exploring HTML, CSS, JavaScript and React to create responsive and user-friendly web interfaces that look good on all devices."
          />
          <FeatureCard 
            icon={<Globe size={24} />}
            title="Exploring Backend"
            description="I'm learning Node.js, Express, and databases to understand how to build server-side applications and APIs that power websites."
          />
          <FeatureCard 
            icon={<Users size={24} />}
            title="Student Projects"
            description="I work on personal projects and assignments to apply what I'm learning and build a portfolio that showcases my growth as a developer."
          />
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center reveal" style={{ transitionDelay: '450ms' }}>
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="heading-md">My Learning Journey</h3>
            <p className="body-md">
              I started my coding journey with basic HTML and CSS, creating simple websites to understand 
              the fundamentals of web development. This sparked my interest in building more interactive experiences.
            </p>
            <p className="body-md">
              Currently, I'm focused on strengthening my JavaScript skills and learning React for frontend development. 
              I'm also exploring backend technologies to understand how full-stack applications work.
            </p>
            <p className="body-md">
              When I'm not studying or coding, I enjoy participating in coding challenges, watching tutorial videos, 
              and collaborating with fellow students on small projects to enhance my skills.
            </p>
          </div>
          <div className="relative h-[400px] md:h-auto order-1 md:order-2 reveal" style={{ transitionDelay: '600ms' }}>
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl" />
            <div className="absolute top-0 left-0 w-full h-full glass rounded-2xl transform rotate-1 opacity-30" />
            <div className="absolute top-0 left-0 w-full h-full glass rounded-2xl transform -rotate-2 opacity-30" />
            <div className="relative glass rounded-2xl p-6 h-full flex items-center justify-center">
              <div className="text-center">
                <h4 className="heading-sm mb-3">Yashwanth</h4>
                <p className="body-md mb-5">Computer Science Student</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="badge bg-blue-500/10 text-blue-600 border-0">HTML/CSS</span>
                  <span className="badge bg-purple-500/10 text-purple-600 border-0">JavaScript</span>
                  <span className="badge bg-teal-500/10 text-teal-600 border-0">React</span>
                  <span className="badge bg-orange-500/10 text-orange-600 border-0">Node.js</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
