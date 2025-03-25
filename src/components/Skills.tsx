
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
                className="h-full bg-primary transition-all duration-1000 ease-out"
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
    { name: "HTML/CSS", level: 95 },
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 88 },
    { name: "TypeScript", level: 85 },
    { name: "Tailwind CSS", level: 92 }
  ];

  const backendSkills = [
    { name: "Node.js", level: 87 },
    { name: "Express", level: 85 },
    { name: "MongoDB", level: 80 },
    { name: "PostgreSQL", level: 78 },
    { name: "REST API Design", level: 88 }
  ];

  const toolsSkills = [
    { name: "Git/GitHub", level: 92 },
    { name: "Docker", level: 75 },
    { name: "CI/CD", level: 70 },
    { name: "AWS", level: 65 },
    { name: "Testing", level: 78 }
  ];

  return (
    <section id="skills" className="section-spacing">
      <div className="container-custom">
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-6 animate-slide-up">Skills</h2>
          <p className="body-lg animate-slide-up" style={{ animationDelay: '150ms' }}>
            I've cultivated a diverse set of skills throughout my journey as a full stack developer,
            allowing me to build complete web applications from concept to deployment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <SkillCategory title="Frontend Development" skills={frontendSkills} />
          <SkillCategory title="Backend Development" skills={backendSkills} />
          <SkillCategory title="Tools & Platforms" skills={toolsSkills} />
        </div>
        
        <div className="mt-16">
          <div className="glass rounded-2xl p-8">
            <h3 className="heading-md mb-8 text-center">Other Technologies & Skills</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "Redux", "Next.js", "Vue.js", "GraphQL", "Firebase", 
                "Webpack", "SASS/SCSS", "Material UI", "Figma", 
                "Jest", "React Testing Library", "Agile", "UI/UX Design", 
                "Responsive Design", "Performance Optimization", "SEO"
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
