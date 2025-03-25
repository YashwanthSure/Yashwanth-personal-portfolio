
import React from 'react';
import { Code, Globe, Users } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="glass p-6 rounded-2xl card-highlight">
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
          <h2 className="heading-lg mb-6 animate-slide-up">About Me</h2>
          <p className="body-lg animate-slide-up" style={{ animationDelay: '150ms' }}>
            I'm a passionate full stack web developer with a strong foundation in both frontend and backend technologies. 
            I enjoy transforming complex problems into simple, beautiful and intuitive solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Code size={24} />}
            title="Frontend Development"
            description="I create responsive, intuitive interfaces using modern JavaScript frameworks and libraries like React, with a focus on performance and accessibility."
          />
          <FeatureCard 
            icon={<Globe size={24} />}
            title="Backend Development"
            description="I design and implement efficient, scalable server-side applications and APIs using Node.js, Express, and modern database solutions."
          />
          <FeatureCard 
            icon={<Users size={24} />}
            title="User-Centered Approach"
            description="I believe in creating digital products that not only look good but also provide meaningful and relevant experiences to users."
          />
        </div>
        
        <div className="mt-16 grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 order-2 md:order-1">
            <h3 className="heading-md">My Journey</h3>
            <p className="body-md">
              My journey into web development began with a curiosity about how websites work. 
              This curiosity quickly evolved into a passion for creating web applications that combine 
              technical excellence with exceptional user experiences.
            </p>
            <p className="body-md">
              I continuously expand my skills by exploring new technologies and methodologies, 
              staying up-to-date with industry trends, and applying best practices to deliver 
              high-quality solutions that exceed expectations.
            </p>
            <p className="body-md">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>
          <div className="relative h-[400px] md:h-auto order-1 md:order-2">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl" />
            <div className="absolute top-0 left-0 w-full h-full glass rounded-2xl transform rotate-1 opacity-30" />
            <div className="absolute top-0 left-0 w-full h-full glass rounded-2xl transform -rotate-2 opacity-30" />
            <div className="relative glass rounded-2xl p-6 h-full flex items-center justify-center">
              <div className="text-center">
                <h4 className="heading-sm mb-3">Yashwanth</h4>
                <p className="body-md mb-5">Full Stack Developer</p>
                <div className="flex flex-wrap justify-center gap-2">
                  <span className="badge bg-primary/10 text-primary">React</span>
                  <span className="badge bg-primary/10 text-primary">Node.js</span>
                  <span className="badge bg-primary/10 text-primary">TypeScript</span>
                  <span className="badge bg-primary/10 text-primary">MongoDB</span>
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
