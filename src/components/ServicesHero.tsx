"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { AuditDialog } from "./AuditDialog"
import { useLanguage } from "@/context/LanguageContext"

export function ServicesHero() {
  const { t } = useLanguage();
  const [isAuditOpen, setIsAuditOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section
      id="services-hero"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#071322] via-[#081728] to-[#0a1c30] text-slate-100 min-h-[82vh] md:min-h-[88vh] flex items-center justify-center pt-36 sm:pt-40 md:pt-48 pb-20 md:pb-28 px-4 sm:px-6"
    >
      {/* Background Atmosphere & Atmospheric Horizon Beam */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#061220]/75 to-[#040c16]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-7xl h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent blur-[1px]" />
        
        {/* Subtle, slow-moving abstract gradient orb */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[45%] w-[400px] sm:w-[550px] md:w-[700px] h-[400px] sm:h-[550px] md:h-[700px] rounded-full bg-gradient-to-tr from-cyan-400/20 via-sky-300/15 to-slate-200/10 blur-[110px] opacity-80 pointer-events-none animate-pulse" style={{ animationDuration: '8s' }} />
        
        {/* Floating secondary silver accent orb */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] md:w-[380px] h-[260px] md:h-[380px] rounded-full bg-gradient-to-br from-white/10 via-cyan-300/15 to-transparent blur-[80px] pointer-events-none" />

        {/* Soft bottom blend into the next section */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#0a1c30]/80 to-[#0a1c30]" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center text-center px-4">
        {/* Main H1 Headline */}
        <h1
          className={`text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight leading-[1.12] sm:leading-[1.1] text-white max-w-4xl mx-auto mb-6 sm:mb-8 [text-shadow:0_2px_15px_rgba(0,0,0,0.9)] transition-all duration-1000 delay-200 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <span data-i18n="servicesHero.title1">{t('servicesHero.title1', 'Your Digital Front Door ')}</span>
          <span data-i18n="servicesHero.title2" className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-300 drop-shadow-[0_0_30px_rgba(34,211,238,0.4)]">
            {t('servicesHero.title2', 'Perfected')}
          </span>
        </h1>

        {/* Subtitle */}
        <p
          data-i18n="servicesHero.description"
          className={`text-base sm:text-lg md:text-xl text-slate-300/90 max-w-2xl mx-auto leading-relaxed font-normal tracking-wide mb-8 sm:mb-10 transition-all duration-1000 delay-400 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          {t('servicesHero.description', 'We build high-performance, bespoke websites for professional businesses that demand a premium online presence.')}
        </p>

        {/* Call to Action Button */}
        <div
          className={`flex flex-col sm:flex-row items-center gap-4 transition-all duration-1000 delay-600 max-w-full ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <Button
            id="hero-request-audit-btn"
            data-i18n="servicesHero.cta"
            size="lg"
            className="group relative overflow-hidden rounded-full px-8 sm:px-10 min-h-12 sm:min-h-14 h-auto py-3 sm:py-3.5 text-xs sm:text-sm font-bold uppercase tracking-[0.18em] sm:tracking-[0.2em] bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_45px_rgba(34,211,238,0.75)] hover:scale-105 active:scale-95 transition-all duration-500 ease-out border border-cyan-200/50 cursor-pointer text-center whitespace-normal leading-snug"
            onClick={() => setIsAuditOpen(true)}
          >
            {/* Shimmer Effect */}
            <span className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
            <span className="relative z-10 flex items-center justify-center gap-2 flex-wrap text-center">
              <span>{t('servicesHero.cta', 'Request a Web Audit')}</span>
              <ArrowRight className="w-4 h-4 text-slate-950 transition-transform duration-300 group-hover:translate-x-1 shrink-0" />
            </span>
          </Button>
        </div>

        {/* Micro-trust line */}
        <div
          className={`flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-slate-400/80 mt-10 transition-all duration-1000 delay-800 text-center max-w-2xl ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span data-i18n="servicesHero.trust1" className="text-slate-300">{t('servicesHero.trust1', 'Core Web Vitals 100%')}</span>
          <span className="w-1 h-1 rounded-full bg-cyan-400/60" />
          <span data-i18n="servicesHero.trust2" className="text-slate-300">{t('servicesHero.trust2', 'Custom Architectural Code')}</span>
          <span className="w-1 h-1 rounded-full bg-cyan-400/60" />
          <span data-i18n="servicesHero.trust3" className="text-slate-300">{t('servicesHero.trust3', 'Conversion-First UX')}</span>
        </div>
      </div>

      <AuditDialog open={isAuditOpen} onOpenChange={setIsAuditOpen} />
    </section>
  )
}
