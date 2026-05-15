
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "./BookingDialog"
import { ArrowRight } from "lucide-react"

export function Contact() {
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <section id="contact" className="py-16 md:py-20 px-4 md:px-6 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-br from-[#12a099] to-[#0ea5e9] p-8 md:p-20 text-center text-white shadow-2xl transition-all duration-700 ease-in-out hover:shadow-[0_40px_80px_-20px_rgba(18,160,153,0.35)] hover:scale-[1.01] hover:-translate-y-1 group cursor-default">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-[100px] pointer-events-none transition-all duration-1000 ease-in-out group-hover:scale-125 group-hover:-translate-y-1/4 group-hover:bg-white/15" />
          <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[300px] h-[300px] bg-[#0ea5e9]/20 rounded-full blur-[70px] pointer-events-none transition-all duration-1000 ease-in-out group-hover:scale-125 group-hover:translate-y-1/4" />

          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-6 md:gap-8">
            <h2 className="text-2xl md:text-4xl font-bold tracking-tight leading-[1.2] transition-all duration-700 ease-in-out group-hover:translate-y-[-4px]">
              Ready to be the 24/7 business that never misses a call?
            </h2>

            <p className="text-base md:text-lg text-white/90 font-medium leading-relaxed transition-all duration-700 ease-in-out group-hover:text-white group-hover:translate-y-[-2px]">
              Experience the power of Hana with a 7-day free trial. We'll handle your calls and book your patients while you focus on providing care.
            </p>

            <div className="flex flex-col items-center gap-4 w-full justify-center pt-2">
              <Button
                size="lg"
                className="relative overflow-hidden rounded-full px-8 md:px-12 h-14 md:h-16 text-lg md:text-xl font-bold bg-white text-primary hover:bg-white/95 shadow-xl transition-all duration-500 hover:scale-105 active:scale-95 group/btn w-full sm:w-auto"
                onClick={() => setIsBookingOpen(true)}
              >
                {/* Premium flashlight sweep effect */}
                <span className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                
                <span className="relative z-10 flex items-center justify-center">
                  Try For Free
                  <ArrowRight className="w-5 h-5 ml-2 group-hover/btn:translate-x-1.5 transition-transform duration-300" />
                </span>
              </Button>
            </div>
            
            <p className="text-[9px] md:text-[10px] font-bold uppercase tracking-[0.2em] md:tracking-[0.25em] text-white/50 transition-all duration-700 group-hover:text-white/70 group-hover:tracking-[0.3em] pt-4">
              Advanced AI voice technology for professional businesses
            </p>
          </div>
        </div>
      </div>
      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </section>
  )
}
