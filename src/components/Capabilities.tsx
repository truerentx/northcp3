import { Network, Database, Brain } from 'lucide-react';

function Capabilities() {
  const capabilities = [
    {
      icon: Network,
      title: 'Automation Architecture',
      description: 'Scalable workflow orchestration and API-driven systems that adapt to your business logic and scale seamlessly.'
    },
    {
      icon: Database,
      title: 'Data Intelligence',
      description: 'AI agents for data cleanup, deduplication, and verification. Transform raw data into actionable intelligence.'
    },
    {
      icon: Brain,
      title: 'Human-AI Fusion',
      description: 'Systems that extend human decision-making with AI precision, creating hybrid intelligence workflows.'
    }
  ];

  return (
    <section className="relative py-32 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1">
          {capabilities.map((capability, index) => (
            <div
              key={capability.title}
              className="group hover-lift slide-up border-r border-white/5 last:border-r-0 px-8 py-16"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-8">
                <capability.icon className="w-10 h-10 stroke-[0.5] text-white/40 group-hover:text-white/70 transition-colors" />
              </div>

              <h3 className="text-sm tracking-[0.2em] uppercase font-medium mb-6">
                {capability.title}
              </h3>

              <p className="text-sm leading-relaxed font-light text-white/70">
                {capability.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Capabilities;
