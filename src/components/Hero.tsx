
"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "./BookingDialog"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative pt-4 pb-16 md:pt-16 md:pb-32 px-6 text-center max-w-5xl mx-auto flex flex-col items-center">
      {/* Background decoration local to Hero */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(18,160,153,0.08)_0%,transparent_70%)] pointer-events-none" />

      {/* Premium Badge */}
      <div className={`inline-flex items-center gap-2.5 px-5 py-2.5 md:px-6 md:py-3 rounded-full bg-white shadow-[0_15px_40px_-10px_rgba(0,0,0,0.08)] border border-border/60 text-primary text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] mb-8 md:mb-12 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'} relative z-10`}>
        The Gold Standard for AI Receptionists
      </div>

      <h1 className={`text-4xl sm:text-6xl md:text-8xl font-[900] tracking-[-0.05em] mb-8 md:mb-10 leading-[1] md:leading-[0.9] bg-clip-text text-transparent bg-gradient-to-b from-foreground via-foreground to-foreground/60 relative z-10 transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        Never Miss a Call <br />
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent px-2">Again</span>
      </h1>
      
      <p className={`text-base md:text-xl text-muted-foreground/80 mb-12 md:mb-16 max-w-2xl mx-auto leading-relaxed font-medium relative z-10 transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        The premium AI voice receptionist that answers every call, triages every request, and fills your calendar, 24/7.
      </p>

      <div className={`relative group z-10 transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'} w-full sm:w-auto`}>
        <div className="absolute -inset-12 bg-primary/30 rounded-full blur-[100px] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
        
        <Button 
          size="lg" 
          className="relative overflow-hidden rounded-full px-10 md:px-20 h-16 md:h-24 text-lg md:text-2xl font-black bg-primary text-white shadow-[0_40px_80px_-15px_rgba(18,160,153,0.45)] transition-all duration-500 hover:scale-[1.05] active:scale-[0.98] group/btn w-full sm:w-auto"
          onClick={() => setIsBookingOpen(true)}
        >
          {/* Flashlight sweep */}
          <span className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
          
          <span className="relative z-10 flex items-center justify-center gap-3 md:gap-5">
            Book Free Demo
            <ArrowRight className="w-5 h-5 md:w-8 md:h-8 group-hover:translate-x-3 transition-transform duration-300" />
          </span>
        </Button>
      </div>

      <div className={`mt-12 md:mt-20 flex flex-wrap justify-center items-center gap-4 md:gap-6 text-[9px] md:text-[10px] font-black uppercase tracking-[0.3em] md:tracking-[0.5em] text-muted-foreground/60 relative z-10 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
        <span className="hidden sm:block w-12 md:w-16 h-px bg-border/60" />
        <span className="px-2">Instant Activation</span>
        <span className="w-1.5 h-1.5 rounded-full bg-border/60 sm:hidden" />
        <span className="px-2">Expert Integration</span>
        <span className="w-1.5 h-1.5 rounded-full bg-border/60 sm:hidden" />
        <span className="px-2">24/7 Support</span>
        <span className="hidden sm:block w-12 md:w-16 h-px bg-border/60" />
      </div>

      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </section>
  )
}
