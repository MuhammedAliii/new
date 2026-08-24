"use client"

import { useEffect } from "react"
import { Header } from "@/components/Header"
import { ServicesHero } from "@/components/ServicesHero"
import { ServicesWhyUs } from "@/components/ServicesWhyUs"
import { ServicesCoreFeatures } from "@/components/ServicesCoreFeatures"
import { ServicesCrossSellBanner } from "@/components/ServicesCrossSellBanner"
import { Footer } from "@/components/Footer"

export default function ServicesPage() {
  // 🔴 FIX 1: Synchronized with the bulletproof Next.js Routing Fix
  useEffect(() => {
    // Wipe any leftover Radix UI scroll locks
    document.body.style.overflow = '';
    document.body.style.pointerEvents = '';
    
    // Tell the browser NOT to fight our scroll command
    if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // 50ms delay guarantees Next.js has finished rendering before we snap to top
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="main-page-wrapper relative z-10 flex flex-col min-h-[100dvh] selection:bg-primary selection:text-white overflow-x-hidden bg-transparent md:bg-[#071322]">
      {/* Universal Premium Atmospheric Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-dot-grid opacity-20" />
        
        {/* 🔴 FIX 2: Added `hidden md:block` to save iOS Safari from the animated blur crashes */}
        <div className="hidden md:block absolute inset-0 bg-noise opacity-30" />
        
        {/* Soft Aurora Glows - Hidden on mobile to prevent GPU VRAM exhaustion */}
        <div 
          className="hidden md:block absolute top-[-15%] right-[-10%] w-[70vw] h-[70vw] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse" 
          style={{ animationDuration: '10s' }} 
        />
        <div 
          className="hidden md:block absolute bottom-[10%] left-[-15%] w-[60vw] h-[60vw] bg-teal-500/8 rounded-full blur-[120px] animate-pulse" 
          style={{ animationDuration: '15s' }} 
        />
      </div>

      <Header />

      <main className="relative z-10 flex-grow m-0 p-0 bg-transparent">
        <ServicesHero />
        <ServicesWhyUs />
        <ServicesCoreFeatures />
        <ServicesCrossSellBanner />
      </main>

      <Footer />
    </div>
  )
}