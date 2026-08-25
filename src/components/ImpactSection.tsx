"use client"

import { useState, useEffect, useRef } from "react"
import { Check, X, ArrowDownRight, TrendingUp, Zap, Clock, UserCheck } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ROICalculatorDialog } from "./ROICalculatorDialog"
import { BookingDialog } from "./BookingDialog"
import { useLanguage } from "@/context/LanguageContext"

export function ImpactSection() {
  const { t } = useLanguage();
  const [isROIOpen, setIsROIOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      id="business-impact" 
      className="py-24 md:py-36 relative overflow-hidden bg-gradient-to-b from-[#e6f4fb] via-[#edf6fc] to-[#e4f2fa]"
    >
      {/* Thematic Ambient Grid & Aurora Glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,233,0.12)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />
        <div className="hidden md:block absolute top-1/3 -left-32 w-[600px] h-[600px] bg-red-400/5 rounded-full blur-[140px]" />
        <div className="hidden md:block absolute top-1/3 -right-32 w-[600px] h-[600px] bg-teal-400/15 rounded-full blur-[140px]" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header Capsule */}
        <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-teal-500/10 backdrop-blur-md border border-teal-500/20 text-teal-800 text-[10px] font-bold uppercase tracking-[0.25em] mb-4 shadow-sm">
            <span data-i18n="impact.badge">{t('impact.badge', 'Financial Analysis')}</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight text-slate-900">
            <span data-i18n="impact.title">{t('impact.title', 'See the Impact on Your Business')}</span>
          </h2>
          <p data-i18n="impact.description" className="text-base sm:text-lg md:text-xl text-slate-600 font-normal max-w-2xl mx-auto leading-relaxed">
            {t('impact.description', 'Missed calls aren\'t just missed conversations—they are direct leaks in patient retention and clinic revenue.')}
          </p>
        </div>

        {/* 2-Column Comparison Grid in High-End Glassmorphism */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-20 transition-all duration-1000 delay-200 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Card 1: Without Hana (The Cost of Waiting) */}
          <Card className="group relative p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] bg-white/70 backdrop-blur-2xl border border-red-200/50 shadow-[0_20px_50px_-15px_rgba(239,68,68,0.08)] transition-all duration-500 ease-in-out hover:shadow-[0_30px_70px_-15px_rgba(239,68,68,0.15)] hover:scale-[1.02] hover:-translate-y-1.5 active:scale-[0.98] overflow-hidden ring-1 ring-red-950/[0.02]">
            <div className="absolute top-0 right-0 w-44 h-44 bg-red-400/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-60 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-transparent to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/20 text-red-700 text-[10px] font-bold uppercase tracking-widest mb-6">
                <X className="w-3.5 h-3.5 text-red-600" />
                <span data-i18n="impact.card1.badge">{t('impact.card1.badge', 'Traditional Front Desk')}</span>
              </div>

              <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-red-500 to-rose-600 rounded-2xl flex items-center justify-center mb-6 shadow-md shadow-red-500/20 text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
                <ArrowDownRight className="w-6 h-6 sm:w-7 sm:h-7 text-white rtl-flip" />
              </div>

              <h3 data-i18n="impact.card1.title" className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-slate-900 tracking-tight">
                {t('impact.card1.title', 'The Cost of Waiting')}
              </h3>
              
              <ul className="space-y-4 md:space-y-6 mb-6 sm:mb-8 md:mb-10">
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-100/80 border border-red-200 flex items-center justify-center shrink-0 mt-0.5 sm:mt-1">
                    <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-600" />
                  </div>
                  <div>
                    <p data-i18n="impact.card1.item1.title" className="font-bold text-slate-900 text-sm sm:text-base">
                      {t('impact.card1.item1.title', '~30 Missed Calls / Week')}
                    </p>
                    <p data-i18n="impact.card1.item1.desc" className="text-xs sm:text-sm text-slate-600">
                      {t('impact.card1.item1.desc', 'Clients hang up after 4 rings and call your competitor')}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-red-100/80 border border-red-200 flex items-center justify-center shrink-0 mt-0.5 sm:mt-1">
                    <X className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-red-600" />
                  </div>
                  <div>
                    <p data-i18n="impact.card1.item2.title" className="font-bold text-slate-900 text-sm sm:text-base">
                      {t('impact.card1.item2.title', 'Human Capacity Limitations')}
                    </p>
                    <p data-i18n="impact.card1.item2.desc" className="text-xs sm:text-sm text-slate-600">
                      {t('impact.card1.item2.desc', 'Front desk staff get overwhelmed, need sick days, and take vacations')}
                    </p>
                  </div>
                </li>
              </ul>

              <div className="pt-5 sm:pt-6 border-t border-red-100/80">
                <p data-i18n="impact.card1.lossLabel" className="text-[10px] font-bold uppercase tracking-widest text-slate-500 mb-1">
                  {t('impact.card1.lossLabel', 'Estimated Monthly Loss')}
                </p>
                <p className="text-2xl sm:text-3xl md:text-4xl font-black text-red-600 tracking-tight">$22,500+</p>
              </div>
            </div>
          </Card>

          {/* Card 2: With Hana (Maximum Efficiency) */}
          <Card className="group relative p-6 sm:p-8 md:p-10 rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] bg-gradient-to-b from-white/90 via-white/80 to-sky-50/80 backdrop-blur-2xl border border-teal-400/40 shadow-[0_25px_60px_-15px_rgba(18,160,153,0.18)] transition-all duration-500 ease-in-out hover:shadow-[0_35px_80px_-15px_rgba(18,160,153,0.28)] hover:scale-[1.02] md:hover:scale-[1.03] hover:-translate-y-2 active:scale-[0.98] overflow-hidden ring-1 ring-teal-500/20">
            <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-cyan-400/20 to-teal-400/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-all duration-700 group-hover:scale-125 pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-b from-white/95 via-white/40 to-transparent pointer-events-none" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500 text-white text-[10px] font-bold uppercase tracking-widest mb-6 shadow-md shadow-teal-500/20">
                <Zap className="w-3.5 h-3.5 fill-white" />
                <span data-i18n="impact.card2.badge">{t('impact.card2.badge', 'The Hana Standard')}</span>
              </div>

              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/25 text-white transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[6deg]">
                <Check className="text-white w-6 h-6 sm:w-8 sm:h-8 stroke-[3]" />
              </div>

              <h3 data-i18n="impact.card2.title" className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6 text-slate-900 tracking-tight">
                {t('impact.card2.title', 'Maximum Efficiency')}
              </h3>
              
              <ul className="space-y-4 md:space-y-6 mb-6 sm:mb-8 md:mb-10">
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-teal-500/15 border border-teal-500/30 flex items-center justify-center shrink-0 mt-0.5 sm:mt-1">
                    <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-teal-700 stroke-[3]" />
                  </div>
                  <div>
                    <p data-i18n="impact.card2.item1.title" className="font-bold text-slate-900 text-sm sm:text-base">
                      {t('impact.card2.item1.title', '100% Call Response Rate')}
                    </p>
                    <p data-i18n="impact.card2.item1.desc" className="text-xs sm:text-sm text-slate-600">
                      {t('impact.card2.item1.desc', 'Every single call answered instantly on ring one')}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-teal-500/15 border border-teal-500/30 flex items-center justify-center shrink-0 mt-0.5 sm:mt-1 text-teal-700">
                    <UserCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <div>
                    <p data-i18n="impact.card2.item2.title" className="font-bold text-slate-900 text-sm sm:text-base">
                      {t('impact.card2.item2.title', 'Indestructible Reliability')}
                    </p>
                    <p data-i18n="impact.card2.item2.desc" className="text-xs sm:text-sm text-slate-600">
                      {t('impact.card2.item2.desc', 'Zero sick days, zero staff burnout, zero vacations')}
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3 sm:gap-4">
                  <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-teal-500/15 border border-teal-500/30 flex items-center justify-center shrink-0 mt-0.5 sm:mt-1 text-teal-700">
                    <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                  </div>
                  <div>
                    <p data-i18n="impact.card2.item3.title" className="font-bold text-slate-900 text-sm sm:text-base">
                      {t('impact.card2.item3.title', 'Instant 24/7 Availability')}
                    </p>
                    <p data-i18n="impact.card2.item3.desc" className="text-xs sm:text-sm text-slate-600">
                      {t('impact.card2.item3.desc', 'After-hours, weekends, and holidays fully covered')}
                    </p>
                  </div>
                </li>
              </ul>

              <div className="pt-5 sm:pt-6 border-t border-teal-200/50">
                <p data-i18n="impact.card2.capturedLabel" className="text-[10px] font-bold uppercase tracking-widest text-teal-700 mb-1">
                  {t('impact.card2.capturedLabel', 'Revenue Captured')}
                </p>
                <div className="flex items-baseline gap-2">
                  <p className="text-2xl sm:text-3xl md:text-4xl font-black text-teal-700 tracking-tight">100%</p>
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-teal-600 animate-bounce" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Growth Metric & Interactive ROI Trigger */}
        <div className={`text-center flex flex-col items-center gap-8 transition-all duration-1000 delay-300 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="p-8 md:p-10 rounded-3xl bg-white/70 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_-15px_rgba(14,116,144,0.1)] max-w-xl w-full">
            <p data-i18n="impact.growthLabel" className="text-[10px] uppercase tracking-[0.3em] text-slate-500 font-bold mb-2">
              {t('impact.growthLabel', 'Total Potential Business Growth')}
            </p>
            <p className="text-4xl md:text-6xl font-black text-slate-900 tabular-nums tracking-tight">
              $270,000<span className="text-teal-600">+</span><span className="text-xl md:text-2xl text-slate-400 ml-2">/yr</span>
            </p>
          </div>

          <Button 
            id="impact-calculate-roi-btn"
            data-i18n="impact.cta"
            size="lg" 
            className="rounded-full px-8 sm:px-12 min-h-14 sm:min-h-16 h-auto py-3.5 sm:py-4 text-base sm:text-lg font-bold bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 text-white hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out shadow-[0_15px_35px_-5px_rgba(18,160,153,0.4)] hover:shadow-[0_20px_45px_-5px_rgba(18,160,153,0.6)] border border-white/25 group cursor-pointer text-center whitespace-normal leading-snug"
            onClick={() => setIsROIOpen(true)}
          >
            <span className="flex items-center justify-center gap-2 flex-wrap text-center">
              <span>{t('impact.cta', 'Calculate Your ROI')}</span>
              <TrendingUp className="w-5 h-5 ml-1 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 rtl-flip shrink-0" />
            </span>
          </Button>
        </div>
      </div>
      
      <ROICalculatorDialog 
        open={isROIOpen} 
        onOpenChange={setIsROIOpen} 
        onStartBooking={() => setIsBookingOpen(true)}
      />
      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </section>
  )
}


