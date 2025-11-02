import { Search, Wrench, TrendingUp } from 'lucide-react';

function Process() {
  const steps = [
    {
      icon: Search,
      number: '01',
      title: 'Audit',
      description: 'We identify where time, leads, or money leak.'
    },
    {
      icon: Wrench,
      number: '02',
      title: 'Engineer',
      description: 'We build and deploy a custom AI system tailored to your stack.'
    },
    {
      icon: TrendingUp,
      number: '03',
      title: 'Profit',
      description: 'You watch it execute and scale, day and night.'
    }
  ];

  return (
    <section className="relative py-16 md:py-32 px-4 md:px-8 border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide uppercase text-center mb-3 md:mb-4 slide-up px-4">
          Three Steps to a Fully Autonomous Operation
        </h2>
        <p className="text-xs md:text-sm tracking-[0.2em] uppercase font-light text-[#0A0A0A]/50 text-center mb-12 md:mb-20 slide-up" style={{ animationDelay: '0.2s' }}>
          Simple. Strategic. Scalable.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 md:gap-1 mb-12 md:mb-16">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="group hover-lift slide-up border-b md:border-b-0 md:border-r border-black/5 last:border-b-0 last:border-r-0 px-4 md:px-8 py-8 md:py-12"
              style={{ animationDelay: `${index * 0.2 + 0.4}s` }}
            >
              <div className="text-4xl md:text-6xl font-extralight text-[#0A0A0A]/10 mb-4 md:mb-6">
                {step.number}
              </div>

              <div className="mb-4 md:mb-6">
                <step.icon className="w-8 h-8 md:w-10 md:h-10 stroke-[0.5] text-[#0A0A0A]/40 group-hover:text-[#0A0A0A]/70 transition-colors" />
              </div>

              <h3 className="text-lg md:text-xl tracking-wide uppercase font-light mb-3 md:mb-4">
                {step.title}
              </h3>

              <p className="text-xs md:text-sm leading-relaxed font-light text-[#0A0A0A]/70">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center slide-up" style={{ animationDelay: '1s' }}>
          <button className="w-full sm:w-auto px-8 md:px-12 py-3 md:py-4 bg-[#0A0A0A] text-white text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase font-light hover:bg-[#0A0A0A]/80 transition-all duration-300">
            Start Your Free Audit
          </button>
        </div>
      </div>
    </section>
  );
}

export default Process;
