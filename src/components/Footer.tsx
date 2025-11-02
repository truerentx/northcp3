import { Button } from "@/components/ui/button";

function Footer() {
  return (
    <footer className="relative py-16 md:py-20 px-4 md:px-8 border-t border-black/5">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center text-center gap-8">
          <div>
            <p className="text-sm tracking-wide font-light text-[#0A0A0A]/70">
              © 2025 Northbyte Systems.
            </p>
            <p className="text-lg md:text-xl tracking-tight font-light text-[#0A0A0A] mt-2">
              We build businesses that run themselves.
            </p>
          </div>

          <Button className="gap-2" size="lg">
            Book a Free Call
          </Button>

          <p className="text-xs tracking-wide font-light text-[#0A0A0A]/50 max-w-sm">
            One 15-minute call to discover how automation can unlock new profit in your business.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
