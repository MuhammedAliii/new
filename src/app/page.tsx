
"use client"

import { useEffect } from "react"
import { Header } from "@/components/Header"
import { Hero } from "@/components/Hero"
import { ImpactSection } from "@/components/ImpactSection"
import { HowItWorks } from "@/components/HowItWorks"
import { Contact } from "@/components/Contact"
import { Footer } from "@/components/Footer"

export default function Home() {
  useEffect(() => {
    // Only force scroll to top if we're not navigating to a specific section hash
    if (typeof window !== 'undefined' && !window.location.hash) {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen selection:bg-primary selection:text-white overflow-x-hidden">
      {/* Universal Premium Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-dot-grid opacity-60" />
        <div className="absolute inset-0 bg-noise" />
        
        {/* Soft Aurora Glows */}
        <div className="absolute top-[-15%] right-[-10%] w-[70vw] h-[70vw] bg-primary/10 rounded-full blur-[150px] animate-pulse" style={{ animationDuration: '10s' }} />
        <div className="absolute bottom-[5%] left-[-15%] w-[60vw] h-[60vw] bg-accent/8 rounded-full blur-[120px] animate-pulse" style={{ animationDuration: '15s' }} />
      </div>

      <Header />
      {/* Normalized padding-top for standard header size */}
      <main className="relative z-10 flex-grow pt-32 sm:pt-40 md:pt-48 lg:pt-56">
        <Hero />
        <div className="relative">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-5xl h-px bg-gradient-to-r from-transparent via-border/60 to-transparent" />
          <HowItWorks />
        </div>
        <ImpactSection />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
