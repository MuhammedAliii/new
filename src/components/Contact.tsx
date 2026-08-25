"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "./BookingDialog"
import { ArrowRight, Phone } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function Contact() {
  const { t } = useLanguage();
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
      id="contact" 
      className="py-24 md:py-36 px-4 md:px-6 relative overflow-hidden bg-gradient-to-b from-[#e4f2fa] via-[#0b243b] via-45% to-[#071322]"
    >
      {/* Background Thematic Details */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-[radial-gradient(rgba(56,189,248,0.15)_1px,transparent_1px)] [background-size:28px_28px] opacity-30" />
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-gradient-to-tr from-cyan-500/20 via-sky-400/15 to-teal-400/15 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className={`relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] md:rounded-[3.5rem] bg-gradient-to-br from-[#08182b]/95 via-[#0c243d]/90 to-[#071526]/95 backdrop-blur-3xl p-6 sm:p-10 md:p-20 text-center text-white border border-cyan-500/30 shadow-[0_30px_90px_-20px_rgba(2,8,16,0.8)] transition-all duration-1000 ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} hover:shadow-[0_40px_100px_-20px_rgba(34,211,238,0.3)] hover:scale-[1.01] hover:-translate-y-1.5 active:scale-[0.98] group cursor-default ring-1 ring-cyan-400/20`}>
          {/* Internal Celestial Aurora Accents */}
          <div className="hidden md:block absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-gradient-to-bl from-cyan-400/20 via-teal-400/15 to-transparent rounded-full blur-[90px] pointer-events-none transition-transform duration-1000 ease-in-out group-hover:scale-125" />
          <div className="hidden md:block absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[350px] h-[350px] bg-sky-500/20 rounded-full blur-[80px] pointer-events-none transition-transform duration-1000 ease-in-out group-hover:scale-125" />
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-xl mx-auto flex flex-col items-center gap-5 sm:gap-6 md:gap-8">
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <span data-i18n="contact.badge">{t('contact.badge', 'Instant Setup & Guarantee')}</span>
            </div>

            <h2 className="text-xl sm:text-3xl md:text-5xl font-black tracking-tight leading-[1.18] sm:leading-[1.15] text-white">
              <span data-i18n="contact.title1">{t('contact.title1', 'Ready to be the 24/7 business that ')}</span>
              <span data-i18n="contact.title2" className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.4)]">
                {t('contact.title2', 'never misses a call')}
              </span>?
            </h2>

            <p data-i18n="contact.description" className="text-sm sm:text-base md:text-lg text-slate-300 font-normal leading-relaxed">
              {t('contact.description', 'Book your live strategy session today. See a custom demo of Hana in action and discover how much revenue you can recover. Backed by our 7-Day Performance Guarantee.')}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3.5 sm:gap-4 w-full justify-center pt-2">
              <Button
                id="contact-call-now-btn"
                data-i18n="contact.testCta"
                variant="outline"
                className="relative overflow-hidden rounded-full px-6 sm:px-8 md:px-10 min-h-12 sm:min-h-14 md:min-h-16 h-auto py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-bold bg-white/[0.06] backdrop-blur-xl border-cyan-500/40 text-cyan-200 hover:text-white hover:bg-cyan-950/60 hover:border-cyan-400/80 shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] transition-all duration-300 ease-in-out w-full sm:w-auto group/call hover:scale-105 active:scale-95 cursor-pointer text-center whitespace-normal leading-snug"
                onClick={() => window.location.href = 'tel:+13109062504'}
              >
                <div className="flex items-center justify-center gap-2 flex-wrap text-center">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 transition-transform duration-300 group-hover/call:scale-110 rtl-flip shrink-0" />
                  <span>{t('contact.testCta', 'Test Hana Now')}</span>
                </div>
              </Button>

              <Button
                id="contact-book-demo-btn"
                data-i18n="contact.bookCta"
                size="lg"
                className="relative overflow-hidden rounded-full px-6 sm:px-8 md:px-10 min-h-12 sm:min-h-14 md:min-h-16 h-auto py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg font-bold bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 text-slate-950 hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_45px_rgba(34,211,238,0.7)] transition-all duration-300 ease-in-out group/btn w-full sm:w-auto border border-cyan-100/40 cursor-pointer text-center whitespace-normal leading-snug"
                onClick={() => setIsBookingOpen(true)}
              >
                {/* Premium flashlight sweep effect */}
                <span className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
                
                <span className="relative z-10 flex items-center justify-center gap-2 flex-wrap text-center">
                  <span>{t('contact.bookCta', 'Book Setup Call')}</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover/btn:translate-x-1.5 rtl-flip shrink-0" />
                </span>
              </Button>
            </div>
            
            <p className="text-[9px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] sm:tracking-[0.25em] text-cyan-300/80 pt-2 sm:pt-4">
              Experience Hana Live: +1 (310) 906-2504
            </p>
          </div>
        </div>
      </div>
      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </section>
  )
}

