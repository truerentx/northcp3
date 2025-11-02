"use client";

import { Button } from "@/components/ui/button";

export function FlickeringFooter() {
  return (
    <footer id="footer" className="w-full bg-background">
      <div className="border-t border-border">
        <div className="max-w-2xl mx-auto py-16 md:py-20 px-4 md:px-8">
          <div className="flex flex-col items-center text-center gap-8">
            <div>
              <p className="text-sm tracking-wide font-light text-foreground/70">
                © 2025 Northbyte Systems.
              </p>
              <p className="text-lg md:text-xl tracking-tight font-light text-foreground mt-2">
                We build businesses that run themselves.
              </p>
            </div>

            <Button className="gap-2" size="lg">
              Book a Free Call
            </Button>

            <p className="text-xs tracking-wide font-light text-foreground/50 max-w-sm">
              One 15-minute call to discover how automation can unlock new profit in your business.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
