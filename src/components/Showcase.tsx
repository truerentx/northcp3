import { useState } from 'react';
import { Users, DollarSign, Shield } from 'lucide-react';

function Showcase() {
  const [activeTab, setActiveTab] = useState('lead');

  const tabs = [
    { id: 'lead', label: 'Lead Automation', icon: Users },
    { id: 'finance', label: 'Finance Automation', icon: DollarSign },
    { id: 'compliance', label: 'Compliance Automation', icon: Shield }
  ];

  return (
    <section className="relative py-16 md:py-32 px-4 md:px-8 bg-[#FAFAFA] border-t border-black/5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16 slide-up px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-light tracking-wide uppercase mb-4 md:mb-6">
            Automations in Action
          </h2>
          <p className="text-sm md:text-base font-light text-[#0A0A0A]/70 max-w-2xl mx-auto">
            Our automations touch every part of your funnel — from capture to cash flow.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4 mb-8 md:mb-12 slide-up px-4" style={{ animationDelay: '0.2s' }}>
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full sm:w-auto px-4 md:px-6 py-2 md:py-3 text-[10px] md:text-xs tracking-[0.2em] uppercase font-light border transition-all duration-300 flex items-center justify-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-[#0A0A0A] text-white border-[#0A0A0A]'
                  : 'bg-transparent text-[#0A0A0A] border-[#0A0A0A]/20 hover:border-[#0A0A0A]/40'
              }`}
            >
              <tab.icon className="w-3 h-3 md:w-4 md:h-4 stroke-[1.5]" />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        <div className="relative h-[300px] md:h-[400px] border border-black/10 bg-white/50 slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="absolute inset-0 flex items-center justify-center p-6 md:p-12">
            <div className="text-center">
              <div className="mb-4 md:mb-6">
                {tabs.find(t => t.id === activeTab)?.icon && (
                  <div className="inline-block">
                    {(() => {
                      const Icon = tabs.find(t => t.id === activeTab)!.icon;
                      return <Icon className="w-12 h-12 md:w-16 md:h-16 stroke-[0.5] text-[#0A0A0A]/20" />;
                    })()}
                  </div>
                )}
              </div>
              <p className="text-[10px] md:text-sm tracking-[0.2em] uppercase font-light text-[#0A0A0A]/40">
                Dashboard visualization coming soon
              </p>
              <div className="mt-6 md:mt-8 grid grid-cols-3 gap-3 md:gap-4 max-w-md mx-auto">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="h-16 md:h-20 bg-[#0A0A0A]/5 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Showcase;
