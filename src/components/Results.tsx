import { TrendingUp, Target, Layers } from 'lucide-react';

function Results() {
  const results = [
    {
      icon: TrendingUp,
      stat: '6x ROI',
      title: 'Process Efficiency',
      description: 'Our automations cut manual hours by 83% across client ops.'
    },
    {
      icon: Target,
      stat: 'Zero',
      title: 'Missed Leads',
      description: 'Follow-up and qualify prospects instantly — 24/7.'
    },
    {
      icon: Layers,
      stat: 'End-to-End',
      title: 'System Design',
      description: 'From scrape to sales — we handle everything in-house.'
    }
  ];

  return (
    <section className="relative py-16 md:py-32 px-4 md:px-8 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {results.map((result, index) => (
            <div
              key={result.title}
              className="group hover-lift slide-up text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 md:mb-6 flex justify-center">
                <result.icon className="w-10 h-10 md:w-12 md:h-12 stroke-[0.5] text-[#0A0A0A]/40 group-hover:text-[#0A0A0A]/70 transition-colors" />
              </div>

              <div className="text-3xl md:text-4xl lg:text-5xl font-light tracking-wide mb-3 md:mb-4">
                {result.stat}
              </div>

              <h3 className="text-xs md:text-sm tracking-[0.2em] uppercase font-medium mb-3 md:mb-4">
                {result.title}
              </h3>

              <p className="text-xs md:text-sm leading-relaxed font-light text-[#0A0A0A]/70">
                {result.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Results;
