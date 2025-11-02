import { useState } from 'react';

function Contact() {
  const [email, setEmail] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <section className="relative py-32 px-8 border-t border-white/5">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl tracking-[0.2em] uppercase font-light mb-4 slide-up">
          Let's Build Together
        </h2>

        <p className="text-xs tracking-[0.3em] uppercase font-light text-white/50 mb-16 slide-up" style={{ animationDelay: '0.2s' }}>
          Start Your AI Transformation
        </p>

        <form onSubmit={handleSubmit} className="slide-up" style={{ animationDelay: '0.4s' }}>
          <div className="relative max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="your@email.com"
              className="w-full bg-transparent border-b border-white/20 py-4 px-2 text-center text-sm tracking-wider placeholder:text-white/30 focus:outline-none focus:border-white/60 transition-colors"
              required
            />
            <div
              className={`absolute bottom-0 left-0 h-[1px] bg-white transition-all duration-500 ${
                isFocused ? 'w-full' : 'w-0'
              }`}
            />
          </div>

          <button
            type="submit"
            className="mt-12 px-12 py-4 text-xs tracking-[0.3em] uppercase font-light border border-white/20 hover:bg-white hover:text-black transition-all duration-300"
          >
            Submit
          </button>
        </form>

        <footer className="mt-32 pt-16 border-t border-white/5 slide-up" style={{ animationDelay: '0.6s' }}>
          <p className="text-[10px] tracking-[0.3em] uppercase font-light text-white/40">
            © 2025 Northbyte Systems. All Rights Reserved.
          </p>
        </footer>
      </div>
    </section>
  );
}

export default Contact;
