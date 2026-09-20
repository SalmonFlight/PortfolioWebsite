// src/components/sections/Hero.jsx
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 min-h-screen flex items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="max-w-5xl"
      >
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2.5 bg-slate-800/50 border border-slate-700 rounded-full px-5 py-2 mb-8">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-400"></span>
          <span className="text-sm text-slate-400 font-medium">Open to opportunities</span>
        </div>

        {/* Main Heading */}
        <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold text-white leading-[1.05] tracking-tight">
          Aaron
          <span className="block text-amber-400 mt-3">Hong Kong</span>
        </h1>

        {/* Subtitle - Location & Status */}
        <p className="mt-5 text-base sm:text-lg text-slate-400">
          International Student
        </p>

        {/* Role / Tech Stack */}
        <p className="mt-6 text-xl sm:text-2xl text-slate-300 max-w-2xl leading-relaxed">
          Full-stack dev · Python/Django · Tailwind
        </p>

        {/* Availability */}
        <p className="mt-4 text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed">
          Open to internships of any kind, Winter or Summer start.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-wrap gap-4">
          <a href="#work" className="btn-primary text-base px-8 py-3.5">
            View My Work
          </a>
          <a
            href="/Brayden_Aaron_Santoso_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-base px-8 py-3.5 inline-flex items-center gap-2"
          >
            Download Resume
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M7 10l5 5 5-5M12 15V3"
              />
            </svg>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;