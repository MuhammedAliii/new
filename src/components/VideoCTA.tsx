
"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Play } from "lucide-react"
import { VideoDialog } from "./VideoDialog"
import { useLanguage } from "@/context/LanguageContext"

export function VideoCTA() {
  const { t } = useLanguage();
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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
      id="demo" 
      className="py-20 md:py-28 relative overflow-hidden bg-gradient-to-b from-[#eef7fc] via-[#f2f9fd] to-[#e6f4fb]"
    >
      {/* Thematic Ambient Tech Details */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(14,165,233,0.15)_1px,transparent_1px)] [background-size:24px_24px] opacity-35" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-gradient-to-tr from-cyan-400/15 via-sky-300/20 to-teal-300/15 rounded-full blur-[90px]" />
      </div>
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <div className={`relative group transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {/* Card Outer Ambient Aura Glow */}
          <div className="absolute -inset-4 bg-gradient-to-r from-sky-400/20 via-cyan-400/20 to-teal-400/20 rounded-[3.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
          
          <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3rem] bg-white/75 backdrop-blur-2xl p-6 sm:p-10 md:p-16 text-slate-900 border border-white/90 shadow-[0_25px_60px_-15px_rgba(14,116,144,0.12)] transition-all duration-500 ease-in-out hover:shadow-[0_35px_80px_-20px_rgba(14,116,144,0.22)] hover:scale-[1.01] hover:-translate-y-1.5 active:scale-[0.98] cursor-default ring-1 ring-sky-950/[0.04]">
            {/* Top Light Sheen */}
            <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/40 to-transparent pointer-events-none" />
            
            {/* Decorative Radial Corner Accent */}
            <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[320px] h-[320px] bg-gradient-to-bl from-teal-400/15 via-cyan-400/10 to-transparent rounded-full blur-[70px] pointer-events-none" />
            
            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="flex items-center px-3.5 py-1.5 sm:px-4 sm:py-2 mb-4 sm:mb-6 rounded-full bg-teal-500/10 backdrop-blur-md border border-teal-500/25 text-teal-800 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] shadow-sm">
                <span data-i18n="video.badge">{t('video.badge', 'Live Demo Experience')}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-black mb-4 sm:mb-6 leading-tight tracking-tight text-slate-900">
                <span data-i18n="video.title1">{t('video.title1', 'Hear ')}</span>
                <span data-i18n="video.title2" className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-sky-600">{t('video.title2', 'Hana')}</span> <br className="hidden sm:block" />
                <span data-i18n="video.title3">{t('video.title3', 'Own the Call')}</span>
              </h2>
              
              <p data-i18n="video.description" className="text-xs sm:text-sm md:text-base text-slate-600 font-normal max-w-lg mx-auto mb-8 sm:mb-10 md:mb-12 leading-relaxed">
                {t('video.description', 'Step into a new era of administrative excellence. Listen to Hana masterfully navigate complex triaging workflows and secure high-value bookings with absolute professional precision.')}
              </p>

              <div className="relative group/btn-container w-full sm:w-auto max-w-full">
                <Button
                  id="video-cta-play-btn"
                  size="lg"
                  className="relative min-h-[3.5rem] sm:min-h-[4rem] md:min-h-[5rem] h-auto py-3 sm:py-4 md:py-5 px-6 sm:px-8 md:px-12 rounded-full bg-gradient-to-r from-teal-500 via-cyan-500 to-teal-500 text-white shadow-[0_15px_35px_-5px_rgba(18,160,153,0.4)] transition-all duration-300 ease-in-out hover:shadow-[0_20px_45px_-5px_rgba(18,160,153,0.6)] hover:scale-105 active:scale-95 group/play overflow-hidden border border-white/20 w-full sm:w-auto cursor-pointer text-center whitespace-normal leading-snug"
                  onClick={() => setIsVideoOpen(true)}
                >
                  <span className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover/play:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                  
                  <div className="flex items-center justify-center gap-3 sm:gap-4 md:gap-6 flex-wrap">
                    <div className="w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 bg-white rounded-xl flex items-center justify-center shadow-md transition-transform duration-300 ease-in-out group-hover/play:rotate-6 group-hover/play:scale-110 relative shrink-0">
                      <Play className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-teal-600 fill-teal-600 relative z-10 ml-0.5 rtl-flip" />
                    </div>
                    <div className="text-left rtl:text-right min-w-0">
                      <p data-i18n="video.buttonMain" className="text-sm sm:text-lg md:text-xl font-bold tracking-tight leading-snug mb-0.5 break-words">
                        {t('video.buttonMain', 'Listen to Audio Demo')}
                      </p>
                      <p data-i18n="video.buttonSub" className="text-[8px] sm:text-[9px] font-bold text-white/80 uppercase tracking-[0.18em] sm:tracking-[0.2em] break-words">
                        {t('video.buttonSub', 'Neural Voice Experience')}
                      </p>
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

