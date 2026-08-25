"use client"

import { useEffect } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useLanguage } from "@/context/LanguageContext"

export default function TermsOfService() {
  const { t } = useLanguage();

  useEffect(() => {
    // 1. Wipe any leftover Radix UI scroll locks
    document.body.style.overflow = '';
    document.body.style.pointerEvents = '';
    
    // 2. 🔴 NEW FIX: Tell the browser NOT to fight our scroll command
    if (typeof window !== 'undefined' && 'scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
    
    // 3. A 50ms delay guarantees Next.js has finished rendering 
    // before we force an instant snap to the top.
    const timer = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  // 🔴 NEW FIX: Changed min-h-screen to min-h-[100dvh] to stop iOS Safari bouncing
  return (
    <div className="main-page-wrapper relative z-10 flex flex-col min-h-[100dvh] overflow-x-hidden bg-transparent md:bg-[#071322]">
      {/* Universal Premium Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-dot-grid" />
        
        {/* Safe from iOS Graphics crashes - hidden on mobile */}
        <div className="hidden md:block absolute inset-0 bg-noise" />
        <div className="hidden md:block absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <Header />
      
      <main className="relative z-10 flex-grow pt-48 md:pt-56 pb-24 px-6 max-w-4xl mx-auto w-full">
        <div className="bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-slate-200/80 shadow-2xl ring-1 ring-slate-900/5 w-full break-words [overflow-wrap:break-word]">
          <h1 
            data-i18n="terms.title" 
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-950 break-words"
          >
            {t('terms.title', 'Terms of Service')}
          </h1>

          <div className="mb-8">
            <span 
              data-i18n="terms.lastUpdated" 
              className="text-xs font-bold uppercase tracking-widest text-cyan-800 bg-cyan-100/70 border border-cyan-300/60 px-3.5 py-1.5 rounded-full inline-block"
            >
              {t('terms.lastUpdated', 'Last Updated: May 2026')}
            </span>
          </div>

          <div className="space-y-8 text-slate-700 text-base md:text-[17px] leading-relaxed break-words">
            <section className="space-y-3">
              <h2 
                data-i18n="terms.s1.title" 
                className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight break-words"
              >
                {t('terms.s1.title')}
              </h2>
              <p 
                data-i18n="terms.s1.desc" 
                className="text-slate-700 font-normal leading-relaxed break-words"
              >
                {t('terms.s1.desc')}
              </p>
            </section>

            <section className="space-y-3">
              <h2 
                data-i18n="terms.s2.title" 
                className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight break-words"
              >
                {t('terms.s2.title')}
              </h2>
              <p 
                data-i18n="terms.s2.desc" 
                className="text-slate-700 font-normal leading-relaxed break-words"
              >
                {t('terms.s2.desc')}
              </p>
            </section>

            <section className="space-y-3">
              <h2 
                data-i18n="terms.s3.title" 
                className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight break-words"
              >
                {t('terms.s3.title')}
              </h2>
              <p 
                data-i18n="terms.s3.desc" 
                className="text-slate-700 font-normal leading-relaxed break-words"
              >
                {t('terms.s3.desc')}
              </p>
            </section>

            <section className="space-y-3">
              <h2 
                data-i18n="terms.s4.title" 
                className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight break-words"
              >
                {t('terms.s4.title')}
              </h2>
              <p 
                data-i18n="terms.s4.desc" 
                className="text-slate-700 font-normal leading-relaxed break-words"
              >
                {t('terms.s4.desc')}
              </p>
            </section>

            <section className="space-y-3">
              <h2 
                data-i18n="terms.s5.title" 
                className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight break-words"
              >
                {t('terms.s5.title')}
              </h2>
              <p 
                data-i18n="terms.s5.desc" 
                className="text-slate-700 font-normal leading-relaxed break-words"
              >
                {t('terms.s5.desc')}
              </p>
            </section>

            <section className="space-y-3">
              <h2 
                data-i18n="terms.s6.title" 
                className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight break-words"
              >
                {t('terms.s6.title')}
              </h2>
              <p 
                data-i18n="terms.s6.desc" 
                className="text-slate-700 font-normal leading-relaxed break-words"
              >
                {t('terms.s6.desc')}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}