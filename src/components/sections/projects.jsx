// src/components/sections/projects.jsx
import { motion } from 'framer-motion';
import FadeIn from '../common/FadeIn';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "BillShare",
      subtitle: "Django Web Application",
      overview: "A Django application for splitting shared bills fairly. A host creates a room with a short join code, others request to join, and each member logs what they ordered. The app computes everyone's share including proportional tax and tip, and tracks who has paid. Features weighted item splits, guest members without accounts, and full mobile responsiveness.",
      tech: ["Django", "Python", "Tailwind CSS", "SQLite", "JavaScript"],
      outcomes: "Built from scratch with a per-object permission model, proportional cost allocation with exact rounding, and an account-less guest system with data claiming.",
      liveLink: "#",
      githubLink: "https://github.com/SalmonFlight/BillShare",
      year: "2026",
      icon: "🧾",
    },
    {
      id: 2,
      title: "Fitness Progress Tracker",
      subtitle: "Django Web Application",
      overview: "A production-ready Django application for gym-goers to log workouts with precision (sets, reps, weight), automatically track personal records (PRs), and monitor progress through an intuitive dashboard. Features workout drafting, dark/light theme toggle, and full mobile responsiveness.",
      tech: ["Django", "Python", "Tailwind CSS", "SQLite", "JavaScript"],
      outcomes: "Built from scratch with full user authentication, auto-detection of PRs, and a clean, responsive UI.",
      liveLink: "#",
      githubLink: "https://github.com/SalmonFlight/Fitness-Progress-Tracker",
      year: "2026",
      icon: "🏋️",
    },
    {
      id: 3,
      title: "Expense Tracker CLI",
      subtitle: "Python CLI Application",
      overview: "A command-line expense tracker built in Python. Users add expenses with amount, category, description, and date, then browse them paginated or filtered by category. Data persists to a JSON file between sessions.",
      tech: ["Python", "JSON", "Standard Library"],
      outcomes: "Built entirely with the standard library, no external dependencies. Covers file I/O, JSON serialization, input validation, and pagination.",
      liveLink: "#",
      githubLink: "https://github.com/SalmonFlight/CLIExpenseTracker",
      year: "2026",
      icon: "💰",
    },
  ];

  return (
    <section id="work" className="max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-slate-800">
      <FadeIn>
        <div className="mb-16">
          <h2 className="font-serif text-4xl font-bold text-white">
            Featured Work
          </h2>
          <p className="mt-3 text-lg text-slate-400 max-w-2xl">
            Full-stack applications built from scratch, not tutorials.
          </p>
        </div>
      </FadeIn>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <FadeIn key={project.id} delay={index * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="border-t border-slate-800 pt-12 first:border-t-0 first:pt-0"
            >
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Left Column - Overview */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-sm font-mono text-slate-500">#{String(index + 1).padStart(2, '0')}</span>
                    <span className="text-xs text-slate-600 border border-slate-800 rounded-full px-3 py-0.5">
                      {project.year}
                    </span>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-white">{project.title}</h3>
                  <p className="text-sm text-amber-400/80 mt-1">{project.subtitle}</p>
                  
                  <div className="mt-6">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Overview</h4>
                    <p className="mt-2 text-slate-400 leading-relaxed">{project.overview}</p>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Outcomes</h4>
                    <p className="mt-2 text-slate-300">{project.outcomes}</p>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-4">
                    {project.githubLink !== "#" && (
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="text-sm text-amber-400 hover:text-amber-300 transition-colors">
                        View on GitHub →
                      </a>
                    )}
                    {project.liveLink !== "#" && (
                      <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="text-sm text-amber-400 hover:text-amber-300 transition-colors">
                        Live Demo →
                      </a>
                    )}
                  </div>
                </div>

                {/* Right Column - Tech Stack */}
                <div>
                  <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/30">
                    <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="font-mono text-xs text-slate-400 border border-slate-700/50 rounded-full px-3 py-1"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 border border-slate-800 rounded-xl p-8 bg-slate-900/20 flex items-center justify-center">
                    <span className="text-4xl opacity-20">{project.icon}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Projects;