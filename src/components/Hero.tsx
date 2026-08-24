"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "./BookingDialog"
import { useLanguage } from "@/context/LanguageContext"
import { ArrowRight } from "lucide-react"

// Precomputed static LED coordinates with fixed 2-decimal rounding to guarantee deterministic SSR & client hydration
const LED_POINTS = Array.from({ length: 64 }).map((_, index) => {
  const angle = (index * 360) / 64;
  const rad = (angle * Math.PI) / 180;
  const r = 500;
  const cx = Math.round((500 + r * Math.cos(rad)) * 100) / 100;
  const cy = Math.round((500 + r * Math.sin(rad)) * 100) / 100;
  const isCardinal = index % 16 === 0;
  const isMajor = index % 4 === 0;
  return {
    index,
    cx,
    cy,
    r: isCardinal ? 4.5 : isMajor ? 3.5 : 2.2,
    fill: isCardinal ? "#ffffff" : isMajor ? "#e0f2fe" : "#38bdf8",
    opacity: isCardinal ? 1 : isMajor ? 0.95 : 0.8,
  };
});

export function Hero() {
  const { t } = useLanguage();
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section 
      id="hero-section"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#071322] via-[#081728] to-[#0a1c30] text-slate-100 min-h-[92dvh] sm:min-h-[96dvh] lg:min-h-[100dvh] flex items-center justify-center pt-32 sm:pt-36 md:pt-40 pb-20 md:pb-24 px-4 sm:px-6"
    >
      {/* Ambient background atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#061220]/75 to-[#040c16]" />
        {/* Luminous horizontal atmospheric horizon beam */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[92vw] max-w-7xl h-px bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent blur-[1px]" />
        {/* Soft bottom blend into subsequent page sections */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-[#0a1c30]/80 to-[#0a1c30]" />
      </div>

      {/* CENTRAL ECLIPSE SHADOW & LOCKED CONTENT UNIT (Single Bound Container) */}
      <div 
        className="relative flex items-center justify-center aspect-square w-[min(90vw,340px)] sm:w-[480px] md:w-[640px] lg:w-[750px] xl:w-[840px] rounded-full z-10 mx-auto"
        style={{ aspectRatio: "1 / 1", borderRadius: "50%" }}
      >
        
        {/* Soft Ambient Radiance behind the Eclipse */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full bg-gradient-to-tr from-cyan-500/20 via-sky-400/15 to-teal-400/10 blur-[60px] sm:blur-[90px] opacity-75 pointer-events-none z-0" />

        {/* THE CENTRAL ECLIPSE SHADOW (Solid, heavy, stable circular mask) */}
        <div 
          className="absolute top-0 left-0 w-full h-full rounded-full bg-[#050e18] border border-cyan-400/25 shadow-[0_0_100px_rgba(2,8,16,0.95),inset_0_0_90px_rgba(0,0,0,0.9)] overflow-hidden z-[1] pointer-events-none"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "50%" }}
        >
          {/* Subtle inner depth vignette */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#030911]/40 to-[#02060c] opacity-90" />
          
          {/* Extremely subtle interior specular sheen */}
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-500/[0.02] to-sky-300/[0.04]" />
        </div>

        {/* Rotating Precision LED Border Lights Ring */}
        <div 
          className="absolute top-0 left-0 w-full h-full rounded-full pointer-events-none z-[2] animate-orbit-spin"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "50%", animation: "spin 50s linear infinite" }}
        >
          {/* 🔴 FIX: Changed overflow-visible to overflow-hidden. Visible overflow on SVGs creates phantom width on iOS and causes crashes */}
          <svg 
            className="w-full h-full overflow-hidden" 
            viewBox="0 0 1000 1000" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer delicate guide orbit line */}
            <circle 
              cx="500" 
              cy="500" 
              r="500" 
              stroke="rgba(56,189,248,0.22)" 
              strokeWidth="1" 
              strokeDasharray="4 8"
            />

            {/* Exact Ring of 64 Mathematically Positioned Glowing LED Points */}
            {LED_POINTS.map((point) => (
              <g key={point.index}>
                {/* Soft vector ambient halo */}
                <circle
                  cx={point.cx}
                  cy={point.cy}
                  r={point.r * 2.2}
                  fill={point.fill}
                  opacity={point.opacity * 0.3}
                />
                {/* Core bright LED Point */}
                <circle
                  cx={point.cx}
                  cy={point.cy}
                  r={point.r}
                  fill={point.fill}
                  opacity={point.opacity}
                />
              </g>
            ))}
          </svg>
        </div>

        {/* Concentric Subtle Inner Coordinate Ring */}
        <div 
          className="absolute top-0 left-0 w-full h-full rounded-full opacity-30 pointer-events-none z-[2] animate-orbit-spin-reverse"
          style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", borderRadius: "50%", animation: "spin 100s linear infinite reverse" }}
        >
          {/* 🔴 FIX: overflow-hidden */}
          <svg className="w-full h-full overflow-hidden" viewBox="0 0 1000 1000" fill="none">
            <circle 
              cx="500" 
              cy="500" 
              r="465" 
              stroke="rgba(34,211,238,0.2)" 
              strokeWidth="1" 
              strokeDasharray="2 12"
            />
          </svg>
        </div>

        {/* 🔴 THE FIX: LOCKED FOREGROUND CONTENT - NATIVE FLEXBOX CENTERING */}
        {/* Removed 'absolute top-1/2 left-1/2 -translate-x-1/2'. Converted to 'relative mx-auto -translate-y-2'. This guarantees flawless dead-center math on iOS. */}
        <div className="hero-eclipse-content relative z-10 w-[82%] max-w-[270px] sm:w-full sm:max-w-[420px] md:max-w-[540px] lg:max-w-[640px] xl:max-w-[700px] flex flex-col items-center justify-center text-center gap-1.5 xs:gap-2 sm:gap-4 md:gap-5 m-0 p-0 pointer-events-auto mx-auto -translate-y-2 sm:-translate-y-4">
          
          {/* Premium Pill Badge */}
          <div className={`m-0 inline-flex items-center text-center px-2.5 py-0.5 sm:px-5 sm:py-2 rounded-full bg-white/[0.06] backdrop-blur-xl border border-cyan-400/30 text-cyan-300 text-[7px] xs:text-[8px] sm:text-[10px] md:text-[11px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.22em] shadow-[0_0_20px_rgba(34,211,238,0.15)] transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-6 opacity-0'}`}>
            <span data-i18n="hero.badge" className="text-center break-words">{t('hero.badge', 'Gold Standard AI Reception')}</span>
          </div>

          {/* Main Headline */}
          <h1 className={`m-0 p-0 text-[17px] xs:text-[19px] sm:text-4xl md:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.12] sm:leading-[1.18] md:leading-[1.2] text-white text-center [text-shadow:0_2px_10px_rgba(0,0,0,0.8)] transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span data-i18n="hero.title1">{t('hero.title1', 'Never Miss a Call')}</span> <br />
            <span data-i18n="hero.title2" className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-300 drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]">
              {t('hero.title2', 'Ever Again')}
            </span>
          </h1>
          
          {/* Subheading */}
          <p data-i18n="hero.description" className={`m-0 p-0 text-[9.5px] xs:text-[10.5px] sm:text-sm md:text-base text-slate-300/90 max-w-[210px] xs:max-w-[240px] sm:max-w-md md:max-w-lg mx-auto leading-snug sm:leading-relaxed text-center font-normal tracking-wide transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {t('hero.description', 'The intelligent voice receptionist that answers every call, triages client requests, and books appointments 24/7.')}
          </p>

          {/* Primary Call to Action Button */}
          <div className={`m-0 relative group transition-all duration-1000 delay-700 max-w-full ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {/* Luminous ambient aura on hover */}
            <div className="absolute -inset-3 bg-gradient-to-r from-teal-400/40 via-cyan-400/40 to-sky-400/40 rounded-full blur-xl opacity-40 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
            
            {/* 🔴 FIX: Added 'touch-manipulation' to stop iOS 300ms tap delay freezing */}
            <Button 
              id="hero-book-demo-btn"
              data-i18n="hero.cta"
              size="lg" 
              className="relative overflow-hidden rounded-full px-4 xs:px-6 sm:px-9 md:px-11 py-1.5 xs:py-2 sm:py-3.5 md:py-4 min-h-[2rem] xs:min-h-[2.25rem] sm:min-h-[3.25rem] md:min-h-[3.5rem] h-auto text-[10px] xs:text-[11px] sm:text-sm md:text-base font-bold bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] group/btn border border-cyan-100/40 cursor-pointer touch-manipulation text-center whitespace-normal leading-tight sm:leading-snug"
              onClick={() => setIsBookingOpen(true)}
            >
              {/* Shimmer light sweep */}
              <span className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              
              <span className="relative z-10 flex items-center justify-center gap-1.5 sm:gap-2.5 text-center flex-wrap">
                <span>{t('hero.cta', 'Book Free Demo')}</span>
                <ArrowRight className="w-3 h-3 xs:w-3.5 xs:h-3.5 sm:w-4.5 sm:h-4.5 group-hover:translate-x-1.5 transition-transform duration-300 rtl-flip shrink-0" />
              </span>
            </Button>
          </div>

          {/* Feature Trust Bar */}
          <div className={`m-0 flex items-center justify-center flex-wrap gap-1.5 xs:gap-2 sm:gap-3.5 text-[7px] xs:text-[7.5px] sm:text-[9px] md:text-[10px] font-bold uppercase tracking-[0.14em] sm:tracking-[0.22em] text-slate-400/80 transition-all duration-1000 delay-900 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            <span data-i18n="hero.feature1" className="text-slate-300">{t('hero.feature1', 'Instant Setup')}</span>
            <span className="w-1 h-1 rounded-full bg-cyan-400/60" />
            <span data-i18n="hero.feature2" className="text-slate-300">{t('hero.feature2', '24/7 Availability')}</span>
            <span className="w-1 h-1 rounded-full bg-cyan-400/60" />
            <span data-i18n="hero.feature3" className="text-slate-300">{t('hero.feature3', '100% Capture')}</span>
          </div>
        </div>
      </div>

      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </section>
  )
}