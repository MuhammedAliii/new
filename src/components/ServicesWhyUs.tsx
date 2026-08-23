"use client"

import { useState, useEffect, useRef } from "react"
import { CheckCircle, TrendingUp, Gauge } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function ServicesWhyUs() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.15 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="services-why-us"
      className="relative w-full py-24 md:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a1c30] via-[#cbdbe8] to-[#edf4f9] text-slate-900 overflow-hidden"
    >
      {/* Background Soft Glows and Atmospheric Highlights */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute top-1/4 right-[-5%] w-[550px] h-[550px] bg-cyan-400/15 rounded-full blur-[140px] pointer-events-none" />
        <div className="absolute bottom-10 left-[-5%] w-[550px] h-[550px] bg-sky-300/25 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Centered Section Header with Strong Visual Hierarchy */}
        <div
          className={`flex flex-col items-center text-center max-w-3xl mx-auto mb-16 md:mb-20 space-y-4 transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-[1.18]">
            <span data-i18n="servicesWhy.title">{t('servicesWhy.title', 'Beautiful design is useless if it ')}</span>
            <span data-i18n="servicesWhy.highlight" className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-cyan-500 to-sky-500 font-black drop-shadow-sm">
              {t('servicesWhy.highlight', "doesn't convert.")}
            </span>
          </h2>

          <p data-i18n="servicesWhy.description" className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal max-w-2xl">
            {t('servicesWhy.description', "Most business websites are built like digital brochures—static, outdated, and slow. In today's market, your website is your best salesperson. We design ultra-fast, mobile-optimized, and conversion-focused websites that turn casual visitors into booked clients.")}
          </p>
        </div>

        {/* Strict Symmetrical Grid with Floating Glassmorphism Card Containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* Card 1: Performance & Speed Engine */}
          <div
            className={`group rounded-[2.25rem] bg-white/85 border border-white/95 p-8 sm:p-10 lg:p-10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(15,23,42,0.12)] hover:shadow-[0_35px_80px_rgba(15,23,42,0.22)] hover:-translate-y-2.5 [transition:all_0.5s_cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            } duration-1000 delay-200`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-cyan-50 border border-cyan-200/80 flex items-center justify-center text-cyan-800 shadow-sm transition-transform duration-500 group-hover:scale-105">
                  <Gauge className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <span data-i18n="servicesWhy.card1.badge" className="px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold font-mono shadow-sm">
                  {t('servicesWhy.card1.badge', '100% Score')}
                </span>
              </div>

              <div className="space-y-2.5">
                <h3 data-i18n="servicesWhy.card1.title" className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
                  {t('servicesWhy.card1.title', 'Sub-Second Speed & SSR Architecture')}
                </h3>
                <p data-i18n="servicesWhy.card1.desc" className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {t('servicesWhy.card1.desc', 'Engineered with modern server-side rendering and edge optimization. Faster load times directly reduce bounce rates and capture customer attention instantly.')}
                </p>
              </div>

              {/* Lighthouse Score Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2 text-center">
                {[
                  { label: "Perf", score: "100" },
                  { label: "A11y", score: "100" },
                  { label: "Best", score: "100" },
                  { label: "SEO", score: "100" },
                ].map((m, i) => (
                  <div key={i} className="p-2.5 sm:p-3 rounded-xl bg-slate-50/90 border border-slate-200/80 shadow-xs">
                    <div className="text-sm sm:text-base font-black font-mono text-emerald-600">
                      {m.score}
                    </div>
                    <div className="text-[9px] text-slate-500 uppercase tracking-wider font-semibold break-words">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-slate-200/80 flex items-center gap-2.5 text-xs font-semibold text-slate-600">
              <CheckCircle className="w-4 h-4 text-cyan-700 shrink-0" />
              <span data-i18n="servicesWhy.card1.footer">{t('servicesWhy.card1.footer', 'Optimized Core Web Vitals & Next.js SSR')}</span>
            </div>
          </div>

          {/* Card 2: Conversion Funnels & Lead Generation */}
          <div
            className={`group rounded-[2.25rem] bg-white/85 border border-white/95 p-8 sm:p-10 lg:p-10 backdrop-blur-2xl shadow-[0_20px_50px_rgba(15,23,42,0.12)] hover:shadow-[0_35px_80px_rgba(15,23,42,0.22)] hover:-translate-y-2.5 [transition:all_0.5s_cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between transform ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
            } duration-1000 delay-400`}
          >
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-2xl bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-800 shadow-sm transition-transform duration-500 group-hover:scale-105">
                  <TrendingUp className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <span data-i18n="servicesWhy.card2.badge" className="px-3.5 py-1 rounded-full bg-cyan-50 border border-cyan-200 text-cyan-900 text-xs font-bold font-mono shadow-sm">
                  {t('servicesWhy.card2.badge', '+340% Lift')}
                </span>
              </div>

              <div className="space-y-2.5">
                <h3 data-i18n="servicesWhy.card2.title" className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
                  {t('servicesWhy.card2.title', 'Zero-Friction Conversion Funnels')}
                </h3>
                <p data-i18n="servicesWhy.card2.desc" className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {t('servicesWhy.card2.desc', 'Strategic layout hierarchies, compelling call-to-actions, and friction-free booking experiences turn passive traffic into qualified inbound inquiries.')}
                </p>
              </div>

              {/* Conversion Graph Visual Preview */}
              <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 text-white space-y-2 shadow-inner">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span data-i18n="servicesWhy.card2.stat" className="text-slate-400">{t('servicesWhy.card2.stat', 'Visitor-to-Lead Ratio')}</span>
                  <span data-i18n="servicesWhy.card2.statVal" className="text-cyan-400 font-bold">{t('servicesWhy.card2.statVal', 'Consistently Upward')}</span>
                </div>
                <div className="h-16 w-full relative">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 300 60" fill="none">
                    <defs>
                      <linearGradient id="whyUsCurve" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.35" />
                        <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    <path d="M0 50 Q 75 45, 150 25 T 300 8 L 300 60 L 0 60 Z" fill="url(#whyUsCurve)" />
                    <path d="M0 50 Q 75 45, 150 25 T 300 8" stroke="#22d3ee" strokeWidth="2.5" fill="none" />
                    <circle cx="300" cy="8" r="3.5" fill="#38bdf8" stroke="#ffffff" strokeWidth="1" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="pt-6 mt-8 border-t border-slate-200/80 flex items-center gap-2.5 text-xs font-semibold text-slate-600">
              <CheckCircle className="w-4 h-4 text-teal-700 shrink-0" />
              <span data-i18n="servicesWhy.card2.footer">{t('servicesWhy.card2.footer', 'Direct Calendar & High-Impact Lead Routing')}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
