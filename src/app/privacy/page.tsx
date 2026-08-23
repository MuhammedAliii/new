"use client"

import { useEffect } from "react"
import { Header } from "@/components/Header"
import { Footer } from "@/components/Footer"
import { useLanguage } from "@/context/LanguageContext"

export default function PrivacyPolicy() {
  const { t } = useLanguage();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const win = window as unknown as {
        BetterCallHanaI18n?: { translatePage: (l: string) => void; getLanguage: () => string };
        updateLanguage?: (l?: string) => void;
      };
      if (win.updateLanguage && typeof win.updateLanguage === 'function') {
        win.updateLanguage();
      } else if (win.BetterCallHanaI18n && typeof win.BetterCallHanaI18n.translatePage === 'function') {
        const lang = win.BetterCallHanaI18n.getLanguage ? win.BetterCallHanaI18n.getLanguage() : 'en';
        win.BetterCallHanaI18n.translatePage(lang);
      }
    }
  }, []);

  return (
    <div className="main-page-wrapper relative z-10 flex flex-col min-h-screen overflow-x-hidden bg-transparent md:bg-[#071322]">
      {/* Universal Premium Background Layers */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-dot-grid" />
        <div className="absolute inset-0 bg-noise" />
        <div className="absolute bottom-[10%] left-[-10%] w-[50vw] h-[50vw] bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <Header />
      {/* Normalized padding-top for standard header size */}
      <main className="relative z-10 flex-grow pt-48 md:pt-56 pb-24 px-6 max-w-4xl mx-auto w-full">
        <div className="bg-white/95 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-slate-200/80 shadow-2xl ring-1 ring-slate-900/5 w-full break-words [overflow-wrap:break-word]">
          <h1 
            data-i18n="privacy.title" 
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight text-slate-950 break-words"
          >
            {t('privacy.title')}
          </h1>
          
          <div className="mb-8">
            <span 
              data-i18n="privacy.lastUpdated" 
              className="text-xs font-bold uppercase tracking-widest text-cyan-800 bg-cyan-100/70 border border-cyan-300/60 px-3.5 py-1.5 rounded-full inline-block"
            >
              {t('privacy.lastUpdated')}
            </span>
          </div>

          <div className="space-y-8 text-slate-700 text-base md:text-[17px] leading-relaxed break-words">
            <section className="space-y-3">
              <h2 
                data-i18n="privacy.s1.title" 
                className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight break-words"
              >
                {t('privacy.s1.title')}
              </h2>
              <p 
                data-i18n="privacy.s1.desc" 
                className="text-slate-700 font-normal leading-relaxed break-words"
              >
                {t('privacy.s1.desc')}
              </p>
            </section>

            <section className="space-y-3">
              <h2 
                data-i18n="privacy.s2.title" 
                className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight break-words"
              >
                {t('privacy.s2.title')}
              </h2>
              <p 
                data-i18n="privacy.s2.desc" 
                className="text-slate-700 font-normal leading-relaxed break-words"
              >
                {t('privacy.s2.desc')}
              </p>
            </section>

            <section className="space-y-3">
              <h2 
                data-i18n="privacy.s3.title" 
                className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight break-words"
              >
                {t('privacy.s3.title')}
              </h2>
              <p 
                data-i18n="privacy.s3.desc" 
                className="text-slate-700 font-normal leading-relaxed break-words"
              >
                {t('privacy.s3.desc')}
              </p>
            </section>

            <section className="space-y-3">
              <h2 
                data-i18n="privacy.s4.title" 
                className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight break-words"
              >
                {t('privacy.s4.title')}
              </h2>
              <p 
                data-i18n="privacy.s4.desc" 
                className="text-slate-700 font-normal leading-relaxed break-words"
              >
                {t('privacy.s4.desc')}
              </p>
            </section>

            <section className="space-y-3">
              <h2 
                data-i18n="privacy.s5.title" 
                className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight break-words"
              >
                {t('privacy.s5.title')}
              </h2>
              <p 
                data-i18n="privacy.s5.desc" 
                className="text-slate-700 font-normal leading-relaxed break-words"
              >
                {t('privacy.s5.desc')}
              </p>
            </section>

            <section className="space-y-3">
              <h2 
                data-i18n="privacy.s6.title" 
                className="text-xl md:text-2xl font-bold text-slate-900 tracking-tight break-words"
              >
                {t('privacy.s6.title')}
              </h2>
              <p 
                data-i18n="privacy.s6.desc" 
                className="text-slate-700 font-normal leading-relaxed break-words"
              >
                {t('privacy.s6.desc')}
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

