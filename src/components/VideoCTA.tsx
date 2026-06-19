
"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Play, Sparkles } from "lucide-react"
import { VideoDialog } from "./VideoDialog"

export function VideoCTA() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section id="demo" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background layer matching site theme */}
      <div className="absolute inset-0 bg-[#FBFBF8] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className="relative group">
          {/* Card Outer Glow */}
          <div className="absolute -inset-4 bg-primary/5 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
          
          <div className="relative overflow-hidden rounded-[2.5rem] md:rounded-[3rem] bg-white/40 premium-blur p-8 md:p-16 text-foreground border border-white/80 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] transition-all duration-700 ease-in-out hover:shadow-[0_60px_100px_-30px_rgba(0,0,0,0.08)] hover:scale-[1.01] hover:-translate-y-1 group cursor-default ring-1 ring-black/[0.01]">
            {/* Architectural decorative glows */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] h-[300px] bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/60 shadow-sm border border-black/5 text-primary text-[10px] font-black uppercase tracking-[0.3em]">
                <Sparkles className="w-3 h-3" />
                Live Demo
              </div>

              <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight tracking-tight">
                Watch <span className="italic text-primary">Hana</span> <br className="hidden sm:block" />
                Own the Call
              </h2>
              
              <p className="text-sm md:text-base text-muted-foreground font-medium max-w-lg mx-auto mb-10 md:mb-12 leading-relaxed">
                Step into a new era of administrative excellence. Witness Hana masterfully navigate complex triaging workflows and secure high-value bookings with absolute professional precision.
              </p>

              <div className="relative group/btn-container">
                <Button
                  size="lg"
                  className="relative h-16 md:h-20 px-8 md:px-12 rounded-full bg-primary text-white shadow-[0_20px_40px_-10px_rgba(18,160,153,0.3)] transition-all duration-500 hover:scale-[1.05] active:scale-95 group/play overflow-hidden border-none"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <span className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/play:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                  
                  <div className="flex items-center gap-4 md:gap-6">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center shadow-lg transition-all duration-700 group-hover/play:rotate-6 relative">
                      <Play className="w-5 h-5 md:w-6 md:h-6 text-primary fill-primary relative z-10" />
                    </div>
                    <div className="text-left">
                      <p className="text-lg md:text-xl font-black tracking-tight leading-none mb-1">Watch Demo</p>
                      <p className="text-[9px] font-black text-white/60 uppercase tracking-[0.2em]">Gold Standard Preview</p>
                    </div>
                  </div>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <VideoDialog open={isVideoOpen} onOpenChange={setIsVideoOpen} />
    </section>
  )
}
