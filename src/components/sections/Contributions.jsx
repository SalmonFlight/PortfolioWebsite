// src/components/sections/Contributions.jsx
import FadeIn from '../common/FadeIn';

const Contributions = () => {
  const contributions = [
    {
      id: 1,
      title: "Futsal Competition Coordinator",
      organization: "Annual Inter-School Sports Event",
      description: "Coordinated the inter-school futsal tournament, managing match schedules across multiple competing schools. Negotiated fixture times with school representatives to find slots that worked for everyone, handled last-minute rescheduling, and kept coaches and teams informed throughout the event.",
      icon: "⚽",
      year: "2023",
    },
    {
      id: 2,
      title: "Futsal Competition Coordinator",
      organization: "Annual Inter-School Sports Event",
      description: "Returned for a second year to run the tournament, this time with a larger pool of schools. Refined the scheduling process based on the previous year's friction points, coordinated referees and venue bookings, and acted as the main point of contact for all participating schools on match days.",
      icon: "🏆",
      year: "2024",
    },
  ];

  return (
    <section id="contributions" className="max-w-7xl mx-auto px-6 lg:px-8 py-24 border-t border-slate-800">
      <FadeIn>
        <div className="mb-12">
          <h2 className="font-serif text-4xl font-bold text-white">
            Leadership & Contributions
          </h2>
          <p className="mt-3 text-lg text-slate-400 max-w-2xl">
            Organizing events and coordinating across teams.
          </p>
        </div>
      </FadeIn>

      <div className="grid gap-6 md:grid-cols-2">
        {contributions.map((item, index) => (
          <FadeIn key={item.id} delay={index * 0.1}>
            <div className="border border-slate-800 rounded-xl p-6 bg-slate-900/30 hover:border-slate-700 transition-all hover:-translate-y-1">
              <div className="flex items-center justify-between">
                <span className="text-3xl">{item.icon}</span>
                <span className="text-xs font-mono text-slate-500">{item.year}</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
              <p className="text-sm text-amber-400/80">{item.organization}</p>
              <p className="mt-3 text-sm text-slate-400 leading-relaxed">{item.description}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default Contributions;