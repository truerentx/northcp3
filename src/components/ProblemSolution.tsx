function ProblemSolution() {
  return (
    <section className="relative py-16 md:py-32 px-4 md:px-8 border-t border-black/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="slide-up">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light tracking-wide uppercase mb-6 md:mb-8">
              Your Time Is Too Valuable for Repetition.
            </h2>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed font-light text-[#0A0A0A]/70 mb-4 md:mb-6">
              Most founders and teams waste 60% of their energy on repeatable tasks — follow-ups, reporting, lead qualification, compliance, etc.
            </p>
            <p className="text-sm md:text-base lg:text-lg leading-relaxed font-light text-[#0A0A0A]/70 mb-6 md:mb-8">
              Northbyte builds autonomous systems that remove that drag — so your business scales itself while you focus on strategy.
            </p>
            <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border border-[#0A0A0A]/20 text-[#0A0A0A] text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase font-light hover:bg-[#0A0A0A]/5 transition-all duration-300">
              See Use-Cases
            </button>
          </div>

          <div className="relative h-[300px] md:h-[400px] slide-up" style={{ animationDelay: '0.2s' }}>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-full h-full">
                <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#0A0A0A', stopOpacity: 0.1 }} />
                      <stop offset="100%" style={{ stopColor: '#0A0A0A', stopOpacity: 0.3 }} />
                    </linearGradient>
                  </defs>
                  <circle cx="100" cy="100" r="3" fill="#0A0A0A" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="300" cy="100" r="3" fill="#0A0A0A" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" begin="0.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="200" cy="200" r="4" fill="#0A0A0A" opacity="0.4">
                    <animate attributeName="opacity" values="0.4;1;0.4" dur="3s" begin="1s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="100" cy="300" r="3" fill="#0A0A0A" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" begin="1.5s" repeatCount="indefinite" />
                  </circle>
                  <circle cx="300" cy="300" r="3" fill="#0A0A0A" opacity="0.3">
                    <animate attributeName="opacity" values="0.3;0.8;0.3" dur="3s" begin="2s" repeatCount="indefinite" />
                  </circle>
                  <line x1="100" y1="100" x2="200" y2="200" stroke="url(#lineGradient)" strokeWidth="1">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" repeatCount="indefinite" />
                  </line>
                  <line x1="300" y1="100" x2="200" y2="200" stroke="url(#lineGradient)" strokeWidth="1">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" begin="0.5s" repeatCount="indefinite" />
                  </line>
                  <line x1="200" y1="200" x2="100" y2="300" stroke="url(#lineGradient)" strokeWidth="1">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" begin="1s" repeatCount="indefinite" />
                  </line>
                  <line x1="200" y1="200" x2="300" y2="300" stroke="url(#lineGradient)" strokeWidth="1">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" dur="3s" begin="1.5s" repeatCount="indefinite" />
                  </line>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProblemSolution;
