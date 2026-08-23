"use client"

import { useEffect } from "react"
import { Header } from "@/components/Header"
import { ServicesHero } from "@/components/ServicesHero"
import { ServicesWhyUs } from "@/components/ServicesWhyUs"
import { ServicesCoreFeatures } from "@/components/ServicesCoreFeatures"
import { ServicesCrossSellBanner } from "@/components/ServicesCrossSellBanner"
import { Footer } from "@/components/Footer"
import { InteractiveBackground } from "@/components/InteractiveBackground"

export default function ServicesPage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in history) {
        history.scrollRestoration = 'manual';
      }
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  return (
    <div className="relative flex flex-col min-h-screen selection:bg-primary selection:text-white overflow-x-hidden bg-[#071322]">
      {/* Universal Premium Atmospheric Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-dot-grid opacity-20" />
        <div className="absolute inset-0 bg-noise opacity-30" />
        
        {/* Soft Aurora Glows */}
        <div 
          className="absolute top-[-15%] right-[-10%] w-[70vw] h-[70vw] bg-cyan-500/10 rounded-full blur-[150px] animate-pulse" 
          style={{ animationDuration: '10s' }} 
        />
        <div 
          className="absolute bottom-[10%] left-[-15%] w-[60vw] h-[60vw] bg-teal-500/8 rounded-full blur-[120px] animate-pulse" 
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
