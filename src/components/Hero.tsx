import { useEffect, useState } from 'react';

function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background neural mesh */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(255,255,255,0.1) 0%, transparent 50%)`,
          transition: 'background-image 0.3s ease'
        }} />
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="white" strokeWidth="0.5" opacity="0.2" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Corner labels */}
      <div className="absolute top-4 left-4 md:top-8 md:left-8 text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-light fade-in text-white/70">
        NORTHBYTE STUDIO
      </div>
      <div className="absolute top-4 left-1/2 -translate-x-1/2 md:top-8 text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-light fade-in hidden sm:block text-white/70" style={{ animationDelay: '0.2s' }}>
        AUTOMATION ENGINEERS
      </div>
      <div className="absolute top-4 right-4 md:top-8 md:right-8 text-[8px] md:text-[10px] tracking-[0.2em] md:tracking-[0.3em] uppercase font-light fade-in text-white/70" style={{ animationDelay: '0.4s' }}>
        N.SYSTEMS
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <h1
          className="chromatic-aberration scanline text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-extralight tracking-wider uppercase mb-6 md:mb-8 leading-tight"
          data-text="AUTOMATE YOUR BUSINESS WHILE YOU SLEEP."
          style={{
            filter: 'blur(0.5px)',
            letterSpacing: '0.1em',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 100
          }}
        >
          AUTOMATE YOUR BUSINESS WHILE YOU SLEEP.
        </h1>

        <p className="text-xs sm:text-sm md:text-base max-w-3xl mx-auto leading-relaxed font-light text-white/80 mb-8 md:mb-12 px-4 slide-up" style={{ animationDelay: '0.6s' }}>
          Northbyte Systems builds fully-autonomous AI workflows that execute, analyze, and grow — even when you're offline.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center slide-up px-4" style={{ animationDelay: '0.8s' }}>
          <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 bg-white text-black text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase font-light hover:bg-white/80 transition-all duration-300">
            Book a Free Audit Call
          </button>
          <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 border border-white/20 text-white text-[10px] md:text-xs tracking-[0.25em] md:tracking-[0.3em] uppercase font-light hover:bg-white/5 transition-all duration-300">
            See Automations in Action
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 fade-in" style={{ animationDelay: '1s' }}>
        <div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/30 to-transparent" />
      </div>
    </section>
  );
}

export default Hero;
