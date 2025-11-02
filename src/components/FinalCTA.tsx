function FinalCTA() {
  return (
    <section className="relative py-16 md:py-32 px-4 md:px-8 bg-[#FAFAFA] border-t border-black/5">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-light tracking-wide uppercase mb-4 md:mb-6 slide-up px-4 leading-tight">
          Let's Build a System That Prints While You Sleep.
        </h2>

        <p className="text-sm md:text-base lg:text-lg font-light text-[#0A0A0A]/70 mb-8 md:mb-12 slide-up px-4" style={{ animationDelay: '0.2s' }}>
          Your next 100 hours of growth can be automated — let's make them yours.
        </p>

        <div className="slide-up px-4" style={{ animationDelay: '0.4s' }}>
          <button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-[#0A0A0A] text-white text-xs md:text-sm tracking-[0.25em] md:tracking-[0.3em] uppercase font-light hover:bg-[#0A0A0A]/80 transition-all duration-300 shadow-lg hover:shadow-xl">
            Book a Free Audit Call
          </button>
        </div>

        <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase font-light text-[#0A0A0A]/40 mt-6 md:mt-8 slide-up" style={{ animationDelay: '0.6s' }}>
          No obligation. Just pure strategic insight.
        </p>
      </div>
    </section>
  );
}

export default FinalCTA;
