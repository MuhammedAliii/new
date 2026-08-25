"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { BookingDialog } from "./BookingDialog"
import { VideoDialog } from "./VideoDialog"
import { useLanguage } from "@/context/LanguageContext"

export function ServicesCrossSellBanner() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [isVideoOpen, setIsVideoOpen] = useState(false)
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
      id="ai-integration-banner"
      className="relative w-full py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#071322] via-[#091d33] to-[#071322] overflow-hidden"
    >
      <div className="max-w-6xl mx-auto relative z-10">
        {/* Sky Light Blue Contrasting Premium Banner Card with Strict Grid & Floating Glass Containers */}
        <div
          className={`relative rounded-[2.5rem] bg-gradient-to-br from-[#e0f2fe]/95 via-[#ecfeff]/95 to-[#e6fffa]/95 border border-cyan-300/80 shadow-[0_25px_80px_rgba(34,211,238,0.22)] p-8 sm:p-12 md:p-14 overflow-hidden transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-10 scale-[0.98]"
          }`}
        >
          {/* Subtle Ambient Decorative Gradients inside card */}
          <div className="hidden md:block absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[400px] h-[400px] bg-gradient-to-bl from-teal-400/20 via-cyan-400/20 to-transparent rounded-full blur-[80px] pointer-events-none" />
          <div className="hidden md:block absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[350px] h-[350px] bg-sky-400/20 rounded-full blur-[70px] pointer-events-none" />

          <div className="relative z-10 space-y-10 md:space-y-12">
            {/* Header Block: Centered Typographical Hierarchy */}
            <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-900/10 border border-cyan-900/20 text-cyan-950 text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.25em] shadow-sm backdrop-blur-md">
                <span data-i18n="servicesCross.badge">{t('servicesCross.badge', 'AI Voice Reception Synergy')}</span>
              </div>

              {/* H2 Title */}
              <h2 data-i18n="servicesCross.title" className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-950 leading-[1.15]">
                {t('servicesCross.title', 'Future-Proof Your Business.')}
              </h2>

              {/* Required Lead Paragraph */}
              <p data-i18n="servicesCross.description" className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed max-w-2xl">
                {t('servicesCross.description', 'Need more than just a website? Ask about our proprietary AI integration. We can embed premium AI receptionists directly into your business, fully automating your front desk.')}
              </p>
            </div>

            {/* Strict Symmetrical 2-Column Grid Container */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {/* Premium Card 1: AI Integration Exploration */}
              <div className="group rounded-[2rem] bg-white/80 border border-white/95 p-8 sm:p-10 backdrop-blur-2xl shadow-[0_15px_35px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.12)] hover:-translate-y-1.5 [transition:all_0.5s_cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <h3 data-i18n="servicesCross.card1.title" className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
                    {t('servicesCross.card1.title', 'Autonomous Voice Agents')}
                  </h3>
                  <p data-i18n="servicesCross.card1.desc" className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                    {t('servicesCross.card1.desc', 'Transform missed calls into secured revenue with 24/7 intelligent voice reception, real-time qualification, and automated CRM sync.')}
                  </p>
                </div>

                <div className="pt-2">
                  <Link href="/#hero-section" className="block w-full">
                    <Button
                      id="services-ai-cta-btn"
                      size="lg"
                      className="w-full rounded-2xl min-h-12 sm:min-h-14 h-auto py-3 sm:py-3.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] bg-slate-950 text-white hover:bg-slate-800 active:scale-98 transition-all duration-300 shadow-md border border-slate-800 flex items-center justify-center gap-2 cursor-pointer text-center whitespace-normal leading-snug"
                    >
                      <span data-i18n="servicesCross.card1.btn">{t('servicesCross.card1.btn', 'Learn About AI Integration')}</span>
                      <ArrowRight className="w-4 h-4 text-cyan-400 shrink-0" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Premium Card 2: Strategy & Consultation */}
              <div className="group rounded-[2rem] bg-white/80 border border-white/95 p-8 sm:p-10 backdrop-blur-2xl shadow-[0_15px_35px_rgba(15,23,42,0.06)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.12)] hover:-translate-y-1.5 [transition:all_0.5s_cubic-bezier(0.25,1,0.5,1)] flex flex-col justify-between space-y-6">
                <div className="space-y-2">
                  <h3 data-i18n="servicesCross.card2.title" className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
                    {t('servicesCross.card2.title', 'Custom Voice Architecture')}
                  </h3>
                  <p data-i18n="servicesCross.card2.desc" className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
                    {t('servicesCross.card2.desc', 'Collaborate 1-on-1 with our engineers to design bespoke conversation flows, custom knowledge bases, and multi-channel routing.')}
                  </p>
                </div>

                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="lg"
                    onClick={() => setIsBookingOpen(true)}
                    className="w-full rounded-2xl min-h-12 sm:min-h-14 h-auto py-3 sm:py-3.5 px-4 text-xs sm:text-sm font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] border-2 border-slate-900/30 text-slate-900 hover:bg-slate-900/10 hover:border-slate-900 active:scale-98 transition-all duration-300 bg-white/60 backdrop-blur-sm cursor-pointer text-center whitespace-normal leading-snug"
                  >
                    <span data-i18n="servicesCross.card2.btn">{t('servicesCross.card2.btn', 'Book AI Consultation')}</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
      <VideoDialog open={isVideoOpen} onOpenChange={setIsVideoOpen} />
    </section>
  )
}
