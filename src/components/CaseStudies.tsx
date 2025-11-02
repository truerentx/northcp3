import { Clock, DollarSign, Zap } from 'lucide-react';

function CaseStudies() {
  const cases = [
    {
      icon: Clock,
      industry: 'Recruitment Agency',
      result: 'Saved 70+ hours/week',
      description: 'Automated candidate screening, follow-ups, and interview scheduling across 500+ monthly applications.'
    },
    {
      icon: DollarSign,
      industry: 'E-com Brand',
      result: '$12K extra monthly revenue',
      description: 'AI follow-ups recovered abandoned carts and re-engaged dormant customers automatically.'
    },
    {
      icon: Zap,
      industry: 'Fintech',
      result: '90% faster compliance',
      description: 'Automated compliance checks and regulatory reporting, reducing manual review time dramatically.'
    }
  ];

  return (
    <section className="relative py-16 md:py-32 px-4 md:px-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16 slide-up px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide uppercase mb-3 md:mb-4">
            Real Systems. Real Results.
          </h2>
          <p className="text-xs md:text-sm tracking-[0.2em] uppercase font-light text-[#0A0A0A]/50">
            From chaos to clarity
          </p>
        </div>

        <div className="space-y-0 md:space-y-1">
          {cases.map((item, index) => (
            <div
              key={item.industry}
              className="group hover-lift slide-up border-t border-black/5 last:border-b py-8 md:py-12 px-4 md:px-8"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-start md:items-center">
                <div className="md:col-span-1 flex justify-start md:justify-center">
                  <item.icon className="w-8 h-8 md:w-10 md:h-10 stroke-[0.5] text-[#0A0A0A]/40 group-hover:text-[#0A0A0A]/70 transition-colors" />
                </div>

                <div className="md:col-span-3">
                  <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-light text-[#0A0A0A]/50 mb-1 md:mb-2">
                    Industry
                  </div>
                  <div className="text-base md:text-lg tracking-wide font-light">
                    {item.industry}
                  </div>
                </div>

                <div className="md:col-span-3">
                  <div className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-light text-[#0A0A0A]/50 mb-1 md:mb-2">
                    Impact
                  </div>
                  <div className="text-lg md:text-xl font-light">
                    {item.result}
                  </div>
                </div>

                <div className="md:col-span-5">
                  <p className="text-xs md:text-sm leading-relaxed font-light text-[#0A0A0A]/70">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CaseStudies;
