import { Apple, Facebook, Cpu, Zap, Chrome, Cloud } from 'lucide-react';

function Partners() {
  const partners = [
    { name: 'Apple', icon: Apple },
    { name: 'Meta', icon: Facebook },
    { name: 'OpenAI', icon: Cpu },
    { name: 'Tesla', icon: Zap },
    { name: 'Google', icon: Chrome },
    { name: 'Microsoft', icon: Cloud }
  ];

  return (
    <section className="relative py-12 md:py-24 px-4 md:px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <p className="text-center text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-light mb-8 md:mb-12 slide-up">
          Trusted by innovators and teams from world-class companies.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16">
          {partners.map((partner, index) => (
            <div
              key={partner.name}
              className="hover-lift slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <partner.icon className="w-10 h-10 md:w-12 md:h-12 stroke-[0.5] text-white/30 hover:text-white/60 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
