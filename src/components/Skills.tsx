
import React from 'react';

interface SkillCategoryProps {
  title: string;
  skills: { name: string; level: number }[];
}

const SkillCategory = ({ title, skills }: SkillCategoryProps) => {
  return (
    <div className="glass rounded-2xl p-6 h-full">
      <h3 className="heading-sm mb-6">{title}</h3>
      <div className="space-y-4">
        {skills.map((skill, index) => (
          <div key={index}>
            <div className="flex justify-between mb-1">
              <span className="font-medium">{skill.name}</span>
              <span className="text-sm text-muted-foreground">{skill.level}%</span>
            </div>
            <div className="h-2 bg-secondary rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-primary to-blue-400 transition-all duration-1000 ease-out"
                style={{ 
                  width: `${skill.level}%`,
                  transitionDelay: `${index * 100}ms`
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  const frontendSkills = [
    { name: "HTML", level: 80 },
    { name: "CSS", level: 75 },
    { name: "JavaScript", level: 65 },
    { name: "React.js", level: 60 },
    { name: "Responsive Design", level: 70 }
  ];

  const backendSkills = [
    { name: "Node.js", level: 50 },
    { name: "Express", level: 45 },
    { name: "MongoDB", level: 40 },
    { name: "API Development", level: 55 },
    { name: "Database Design", level: 50 }
  ];

  const toolsSkills = [
    { name: "Git/GitHub", level: 70 },
    { name: "VS Code", level: 85 },
    { name: "Chrome DevTools", level: 75 },
    { name: "Figma (Basics)", level: 60 },
    { name: "Command Line", level: 65 }
  ];

  return (
    <section id="skills" className="section-spacing">
      <div className="container-custom">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6 reveal">Skills I'm Learning</h2>
          <p className="body-lg reveal" style={{ transitionDelay: '150ms' }}>
            These are the technologies and skills I'm currently developing as a student developer.
            I'm actively working to improve these skills through projects and coursework.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 reveal" style={{ transitionDelay: '300ms' }}>
          <SkillCategory title="Frontend" skills={frontendSkills} />
          <SkillCategory title="Backend" skills={backendSkills} />
          <SkillCategory title="Tools & Environment" skills={toolsSkills} />
        </div>
        
        <div className="mt-16 reveal" style={{ transitionDelay: '450ms' }}>
          <div className="glass rounded-2xl p-8">
            <h3 className="heading-md mb-8 text-center">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "TypeScript", "Tailwind CSS", "React Hooks", "REST APIs", 
                "JSON", "Responsive Design", "State Management", "UI/UX Basics", 
                "Web Accessibility", "Frontend Performance", "Backend Basics"
              ].map((skill, index) => (
                <span 
                  key={index} 
                  className="badge bg-primary/10 text-primary border-0 py-1.5 px-3"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
