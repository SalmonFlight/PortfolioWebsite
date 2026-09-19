// src/components/sections/About.jsx
import FadeIn from '../common/FadeIn';

const About = () => {
  return (
    <section id="about" className="max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-slate-800">
      <FadeIn>
        <div className="max-w-3xl">
          <h2 className="font-serif text-4xl font-bold text-white">About</h2>

          <p className="mt-6 text-lg text-slate-300 leading-relaxed">
            I'm Aaron, a Computer Science student in Hong Kong who likes building
            things that actually work. Most of what I know came from breaking my
            own projects and figuring out why.
          </p>

          <p className="mt-4 text-slate-400 leading-relaxed">
            My core stack is Python and Django on the backend, with Tailwind on
            the frontend. I'm comfortable in C++ too, and I pick up whatever a
            project needs along the way.
          </p>

          <p className="mt-4 text-slate-400 leading-relaxed">
            Three of my projects are live: a bill splitter that handles
            proportional tax and tip, a gym tracker that logs personal records,
            and a small CLI expense tracker I built while first learning Python.
            None of them started from a tutorial: I designed the schemas, wrote
            the auth, and deployed them myself.
          </p>

          <p className="mt-4 text-slate-400 leading-relaxed">
            Outside of code, I'm learning Mandarin and can follow spoken Japanese.
            I'm looking for a year-round SWE internship. Winter or Summer  where
            I can write real production code and learn from people who've been
            doing this longer than I have.
          </p>
        </div>
      </FadeIn>
    </section>
  );
};

export default About;