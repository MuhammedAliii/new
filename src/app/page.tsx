"use client"

import { useEffect } from "react"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { ImpactSection } from "@/components/ImpactSection"
import { HowItWorks } from "@/components/HowItWorks"
import { VideoCTA } from "@/components/VideoCTA"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Home() {
  useEffect(() => {
    // Only force scroll to top if we're not navigating to a specific section hash
    if (typeof window !== 'undefined' && !window.location.hash) {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      // 🔴 FIX: Wait two real animation frames instead of resetting immediately.
      // Right after a route change, iOS Safari hasn't always finished settling
      // yet — resetting scroll too early can get ignored or leave the scroll
      // engine confused. Two rAFs guarantee the browser has actually repainted.
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.scrollTo({ top: 0, behavior: 'instant' });
        });
      });
    }
  }, []);

  return (
    <div className="main-page-wrapper relative z-10 flex flex-col min-h-[100dvh] selection:bg-primary selection:text-white overflow-x-hidden bg-transparent md:bg-[#071322]">
      {/* Universal Premium Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-dot-grid opacity-20" />
        
        {/* 🔴 SAFE FIX 1: Hides the heavy noise filter on mobile processors */}
        <div className="hidden md:block absolute inset-0 bg-noise opacity-30" />
        
        {/* 🔴 SAFE FIX 2: THE 30-SECOND FREEZE ASSASSIN */}
        {/* By applying 'hidden md:block' here, the iPhone never even attempts to calculate 
            the 150px and 120px animated blurs. It skips the math entirely and loads in 0.1 seconds. */}
        <div className="hidden md:block absolute top-[-15%] right-[-10%] w-[70vw] h-[70vw] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="hidden md:block absolute bottom-[5%] left-[-15%] w-[60vw] h-[60vw] bg-teal-500/8 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '15s' }} />
      </div>

      <Header />
      {/* Main container seamlessly aligned to dark midnight theme with zero gap */}
      <main className="relative z-10 flex-grow m-0 p-0 bg-transparent">
        <Hero />
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent pointer-events-none" />
          <HowItWorks />
        </div>
        <VideoCTA />
        <ImpactSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}