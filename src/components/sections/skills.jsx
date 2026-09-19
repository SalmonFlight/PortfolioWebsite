// src/components/sections/skills.jsx
import FadeIn from '../common/FadeIn';

const Skills = () => {
  const skillCategories = [
    {
      name: "Languages",
      skills: ["Python", "C++", "C", "Java", "JavaScript", "SQL"],
    },
    {
      name: "Frameworks & Libraries",
      skills: ["Django", "Tailwind CSS", "Bootstrap", "React (Currently Learning)"],
    },
    {
      name: "Tools & Infrastructure",
      skills: ["Git", "GitHub", "Vercel"],
    },
  ];

  return (
    <section id="skills" className="max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-slate-800">
      <FadeIn>
        <div className="grid lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <h2 className="font-serif text-4xl font-bold text-white">Skills</h2>
            <p className="mt-3 text-slate-400 text-sm">
              My tech stack.
            </p>
          </div>

          <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <FadeIn key={category.name} delay={index * 0.1}>
                <div>
                  <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    {category.name}
                  </h3>
                  <div className="mt-3 space-y-1.5">
                    {category.skills.map((skill) => (
                      <div key={skill} className="text-slate-300 text-sm">
                        {skill}
                      </div>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </FadeIn>
    </section>
  );
};

export default Skills;