"use client"

import Link from "next/link"
// 🔴 FIX 1: Import useRouter to restore Single-Page-Application speeds
import { usePathname, useRouter } from "next/navigation"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "./BookingDialog"
import { VideoDialog } from "./VideoDialog"
import { LanguageSwitcher } from "./LanguageSwitcher"
import { useLanguage } from "@/context/LanguageContext"
import Image from "next/image"
import myLogo from "@/assets/3.png"
import { Menu, X, ArrowRight, Sparkles } from "lucide-react"

import { lockScroll, unlockScroll, clearAllScrollLocks } from "@/lib/scrollLock"

export function Header() {
  const pathname = usePathname();
  const router = useRouter(); // 🔴 Initialize the Next.js router
  const { t } = useLanguage();
  
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  const isServicesPage = pathname === "/services";
  const isLightSection = false;

  useEffect(() => {
    // 🔴 FIX 2: Let this single useEffect act as the master controller for the mobile menu.
    // It prevents double-firing of unlock commands.
    if (isMobileMenuOpen) {
      lockScroll();
    } else {
      unlockScroll();
    }
    return () => {
      // If the page changes, aggressively wipe locks without jumping the screen
      clearAllScrollLocks(true); 
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 🔴 FIX 3: The Flawless Next.js Mobile Routing
  const handleMobileNavRoute = (url: string) => {
    setIsMobileMenuOpen(false);
    
    // Wipe the lock instantly but DO NOT restore scroll position,
    // otherwise it will fight Next.js trying to scroll to the new section.
    clearAllScrollLocks(true);
    
    // Give the DOM 150ms to recalculate its un-locked coordinates, 
    // then use Next.js router for a lightning-fast, refresh-free jump!
    setTimeout(() => {
      router.push(url);
    }, 150);
  };

  const handleLogoClick = () => {
    setIsMobileMenuOpen(false);
    clearAllScrollLocks(true); 
    setActiveSection("");
  };

  const handleNavClick = (_e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setIsMobileMenuOpen(false);
    clearAllScrollLocks(true); 
    setActiveSection(id);
  };

  return (
    <>
      <header 
        id="main-header"
        className="fixed top-0 left-0 right-0 w-full z-50 py-4 md:py-7 bg-transparent backdrop-blur-none border-none shadow-none transition-none md:transition-all md:duration-500 ease-in-out"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex items-center justify-between lg:flex-col lg:items-center gap-2 md:gap-5 relative z-10 transition-all duration-500 ease-in-out">
          
          <div className={`transition-all duration-700 ease-out transform shrink-0 flex-shrink-0 header-logo-wrapper ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-2 scale-95'}`}>
            <Link 
              href="/" 
              prefetch={false}
              onClick={handleLogoClick}
              id="header-logo-link"
              className="group relative block transition-transform duration-300 ease-in-out hover:scale-[1.03] active:scale-95 shrink-0 flex-shrink-0 brand-logo touch-manipulation"
            >
              <div className={`absolute -inset-3 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out pointer-events-none ${
                isLightSection ? "bg-cyan-500/15" : "bg-cyan-400/20"
              }`} />
              
              <div className="relative w-[135px] h-[38px] sm:w-[160px] sm:h-[46px] md:w-[220px] md:h-[60px] flex items-center justify-center shrink-0 flex-shrink-0 header-logo">
                <Image 
                  src={myLogo} 
                  alt="Better Call Hana" 
                  width={220}
                  height={60}
                  className={`object-contain transition-all duration-500 ease-in-out header-logo shrink-0 flex-shrink-0 ${
                    isLightSection
                      ? "brightness-0 opacity-90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.15)] group-hover:opacity-100" 
                      : "brightness-0 invert drop-shadow-[0_2px_14px_rgba(34,211,238,0.35)] group-hover:drop-shadow-[0_4px_22px_rgba(34,211,238,0.65)]"
                  }`}
                  priority
                />
              </div>
            </Link>
          </div>

          <div className={`hidden lg:flex items-center gap-4 md:gap-6 transition-all duration-500 delay-150 transform ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-0'}`}>
            <nav 
              id="main-nav-bar"
              className={`flex items-center gap-6 xl:gap-8 px-6 py-2 rounded-full transition-all duration-500 ease-in-out ${
                isLightSection
                  ? "bg-slate-900/[0.08] backdrop-blur-md border border-slate-900/15 shadow-[0_4px_20px_rgba(0,0,0,0.06)] hover:border-slate-900/30"
                  : "bg-white/[0.05] backdrop-blur-md border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:border-cyan-400/30"
              }`}
            >
              <Link 
                href="/#how-it-works" 
                prefetch={false}
                id="nav-process"
                data-i18n="nav.process"
                onClick={(e) => handleNavClick(e, "how-it-works")}
                className={`group text-[11px] font-bold uppercase tracking-[0.2em] relative py-1 transition-all duration-300 ease-in-out ${
                  activeSection === "how-it-works"
                    ? isLightSection
                      ? "active text-cyan-700 [text-shadow:0_0_12px_rgba(14,165,233,0.3)] font-extrabold"
                      : "active text-cyan-300 [text-shadow:0_0_12px_rgba(34,211,238,0.9),0_0_24px_rgba(56,189,248,0.5)]"
                    : isLightSection
                      ? "text-slate-800 hover:text-cyan-700"
                      : "text-slate-200/90 hover:text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.85)] hover:[text-shadow:0_0_10px_rgba(34,211,238,0.7)]"
                }`}
              >
                {t('nav.process', 'Process')}
                <span 
                  className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-all duration-300 ease-in-out ${
                    isLightSection
                      ? "bg-gradient-to-r from-teal-500 via-cyan-600 to-sky-600 shadow-[0_0_8px_rgba(14,165,233,0.5)]"
                      : "bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                  } ${
                    activeSection === "how-it-works" 
                      ? "opacity-100 scale-x-100" 
                      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 origin-center"
                  }`}
                />
              </Link>

              <Link 
                href="/services" 
                prefetch={false}
                id="nav-services"
                data-i18n="nav.services"
                className={`group text-[11px] font-bold uppercase tracking-[0.2em] relative py-1 transition-all duration-300 ease-in-out ${
                  isServicesPage
                    ? isLightSection
                      ? "active text-cyan-700 [text-shadow:0_0_12px_rgba(14,165,233,0.3)] font-extrabold"
                      : "active text-cyan-300 [text-shadow:0_0_12px_rgba(34,211,238,0.9),0_0_24px_rgba(56,189,248,0.5)]"
                    : isLightSection
                      ? "text-slate-800 hover:text-cyan-700"
                      : "text-slate-200/90 hover:text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.85)] hover:[text-shadow:0_0_10px_rgba(34,211,238,0.7)]"
                }`}
              >
                {t('nav.services', 'Services')}
                <span 
                  className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-all duration-300 ease-in-out ${
                    isLightSection
                      ? "bg-gradient-to-r from-teal-500 via-cyan-600 to-sky-600 shadow-[0_0_8px_rgba(14,165,233,0.5)]"
                      : "bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                  } ${
                    isServicesPage 
                      ? "opacity-100 scale-x-100" 
                      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 origin-center"
                  }`}
                />
              </Link>
              
              <button 
                id="nav-live-demo"
                data-i18n="nav.liveDemo"
                onClick={() => setIsVideoOpen(true)}
                className={`group inline-flex items-center text-[11px] font-bold uppercase tracking-[0.2em] relative py-1 transition-all duration-300 ease-in-out cursor-pointer ${
                  isLightSection
                    ? "text-slate-800 hover:text-cyan-700"
                    : "text-slate-200/90 hover:text-cyan-300 [text-shadow:0_1px_3px_rgba(0,0,0,0.85)] hover:[text-shadow:0_0_10px_rgba(34,211,238,0.7)]"
                }`}
              >
                {t('nav.liveDemo', 'Live Demo')}
                <span className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 origin-center transition-all duration-300 ease-in-out ${
                  isLightSection
                    ? "bg-gradient-to-r from-teal-500 via-cyan-600 to-sky-600 shadow-[0_0_8px_rgba(14,165,233,0.5)]"
                    : "bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                }`} />
              </button>
              
              <Link 
                href="/#business-impact" 
                prefetch={false}
                id="nav-impact"
                data-i18n="nav.impact"
                onClick={(e) => handleNavClick(e, "business-impact")}
                className={`group text-[11px] font-bold uppercase tracking-[0.2em] relative py-1 transition-all duration-300 ease-in-out ${
                  activeSection === "business-impact"
                    ? isLightSection
                      ? "active text-cyan-700 [text-shadow:0_0_12px_rgba(14,165,233,0.3)] font-extrabold"
                      : "active text-cyan-300 [text-shadow:0_0_12px_rgba(34,211,238,0.9),0_0_24px_rgba(56,189,248,0.5)]"
                    : isLightSection
                      ? "text-slate-800 hover:text-cyan-700"
                      : "text-slate-200/90 hover:text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.85)] hover:[text-shadow:0_0_10px_rgba(34,211,238,0.7)]"
                }`}
              >
                {t('nav.impact', 'Impact')}
                <span 
                  className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-all duration-300 ease-in-out ${
                    isLightSection
                      ? "bg-gradient-to-r from-teal-500 via-cyan-600 to-sky-600 shadow-[0_0_8px_rgba(14,165,233,0.5)]"
                      : "bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                  } ${
                    activeSection === "business-impact" 
                      ? "opacity-100 scale-x-100" 
                      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 origin-center"
                  }`}
                />
              </Link>
              
              <Link 
                href="/#contact" 
                prefetch={false}
                id="nav-contact"
                data-i18n="nav.contact"
                onClick={(e) => handleNavClick(e, "contact")}
                className={`group text-[11px] font-bold uppercase tracking-[0.2em] relative py-1 transition-all duration-300 ease-in-out ${
                  activeSection === "contact"
                    ? isLightSection
                      ? "active text-cyan-700 [text-shadow:0_0_12px_rgba(14,165,233,0.3)] font-extrabold"
                      : "active text-cyan-300 [text-shadow:0_0_12px_rgba(34,211,238,0.9),0_0_24px_rgba(56,189,248,0.5)]"
                    : isLightSection
                      ? "text-slate-800 hover:text-cyan-700"
                      : "text-slate-200/90 hover:text-white [text-shadow:0_1px_3px_rgba(0,0,0,0.85)] hover:[text-shadow:0_0_10px_rgba(34,211,238,0.7)]"
                }`}
              >
                {t('nav.contact', 'Contact')}
                <span 
                  className={`absolute bottom-0 left-0 right-0 h-[2px] rounded-full transition-all duration-300 ease-in-out ${
                    isLightSection
                      ? "bg-gradient-to-r from-teal-500 via-cyan-600 to-sky-600 shadow-[0_0_8px_rgba(14,165,233,0.5)]"
                      : "bg-gradient-to-r from-teal-400 via-cyan-300 to-sky-400 shadow-[0_0_8px_rgba(34,211,238,0.9)]"
                  } ${
                    activeSection === "contact" 
                      ? "opacity-100 scale-x-100" 
                      : "opacity-0 scale-x-0 group-hover:opacity-100 group-hover:scale-x-100 origin-center"
                  }`}
                />
              </Link>
            </nav>
            
            <div className={`w-px h-4 mx-1 transition-colors duration-500 ${
              isLightSection ? "bg-slate-900/20" : "bg-cyan-500/30"
            }`} />
            
            <Button 
              id="header-book-demo-btn"
              data-i18n="nav.bookDemo"
              className="relative overflow-hidden rounded-full px-5 sm:px-7 py-2 min-h-10 h-auto text-[11px] font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 text-slate-950 shadow-[0_0_25px_rgba(34,211,238,0.4)] hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out border border-cyan-200/40 cursor-pointer text-center whitespace-normal leading-snug"
              onClick={() => setIsBookingOpen(true)}
            >
              <span className="absolute inset-0 block w-full h-full bg-gradient-to-r from-transparent via-white/35 to-transparent -translate-x-full hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
              <span className="relative z-10">{t('nav.bookDemo', 'Book Demo')}</span>
            </Button>

            <LanguageSwitcher isLightSection={isLightSection} align="right" />
          </div>

          <div className="flex lg:hidden items-center gap-1.5 sm:gap-2.5">
            <LanguageSwitcher isLightSection={isLightSection} align="right" />

            <Button 
              id="header-mobile-book-btn"
              data-i18n="nav.bookDemo"
              size="sm"
              className="relative overflow-hidden rounded-full px-2.5 sm:px-4 py-1.5 min-h-[2rem] sm:min-h-[2.25rem] h-auto text-[8.5px] sm:text-[10px] font-bold uppercase tracking-[0.12em] sm:tracking-[0.18em] bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 text-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.35)] active:scale-95 transition-all border border-cyan-200/40 text-center whitespace-normal leading-tight touch-manipulation"
              onClick={() => setIsBookingOpen(true)}
            >
              <span>{t('nav.bookDemo', 'Book Demo')}</span>
            </Button>

            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 sm:p-2.5 rounded-full border transition-all duration-300 active:scale-90 flex items-center justify-center touch-manipulation ${
                isMobileMenuOpen
                  ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_15px_rgba(34,211,238,0.4)]"
                  : isLightSection
                    ? "bg-slate-900/10 border-slate-900/20 text-slate-900"
                    : "bg-white/10 border-white/15 text-white hover:bg-white/15"
              }`}
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-cyan-300" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>

        </div>
      </header>

      {/* Mobile Navigation Overlay */}
      <div 
        id="mobile-nav-overlay"
        className={`fixed inset-0 z-40 lg:hidden ${
          isMobileMenuOpen 
            ? "block opacity-100 pointer-events-auto" 
            : "hidden opacity-0 pointer-events-none"
        }`}
      >
        {/* 🔴 FIX 4: Removed manual unlock calls, the useEffect handles it cleanly! */}
        <div 
          className="absolute inset-0 bg-[#061220]"
          onClick={() => setIsMobileMenuOpen(false)}
        />

        <div className="relative z-50 flex flex-col justify-between h-full pt-28 pb-10 px-6 sm:px-8">
          <div className="flex flex-col gap-3 sm:gap-4 max-w-sm mx-auto w-full">
            <div className="flex items-center justify-between px-2 mb-1">
              <div 
                data-i18n="nav.navigation"
                className="text-[10px] font-bold uppercase tracking-[0.25em] text-cyan-400/80"
              >
                {t('nav.navigation', 'Navigation')}
              </div>

              <div className="flex items-center gap-1.5">
                <span className="text-[10px] text-slate-400 uppercase tracking-wider font-mono">
                  {t('nav.langSelect', 'Language')}:
                </span>
                <LanguageSwitcher isLightSection={false} align="right" />
              </div>
            </div>

            <a
              href="/#how-it-works"
              id="mobile-nav-process"
              data-i18n="nav.process"
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavRoute("/#how-it-works");
              }}
              className={`flex items-center justify-between p-4 rounded-2xl border transition-none active:scale-[0.98] touch-manipulation ${
                activeSection === "how-it-works"
                  ? "bg-cyan-500/15 border-cyan-400/40 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] font-extrabold"
                  : "bg-white/[0.04] border-white/10 text-slate-100"
              }`}
            >
              <span className="text-base font-bold uppercase tracking-[0.15em]">{t('nav.process', 'Process')}</span>
              <span className="text-xs text-cyan-400/70 font-mono">01</span>
            </a>

            <a
              href="/services"
              id="mobile-nav-services"
              data-i18n="nav.services"
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavRoute("/services");
              }}
              className={`flex items-center justify-between p-4 rounded-2xl border transition-none active:scale-[0.98] touch-manipulation ${
                isServicesPage
                  ? "bg-cyan-500/15 border-cyan-400/40 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] font-extrabold"
                  : "bg-white/[0.04] border-white/10 text-slate-100"
              }`}
            >
              <div className="flex items-center gap-2">
                <span className="text-base font-bold uppercase tracking-[0.15em]">{t('nav.services', 'Services')}</span>
                <span className="px-2 py-0.5 rounded-full bg-cyan-400/20 text-cyan-300 text-[9px] font-mono uppercase">New</span>
              </div>
              <span className="text-xs text-cyan-400/70 font-mono">02</span>
            </a>

            <button
              id="mobile-nav-live-demo"
              data-i18n="nav.liveDemo"
              onClick={() => {
                setIsMobileMenuOpen(false);
                // The useEffect will restore scroll because they stay on the current page
                setTimeout(() => setIsVideoOpen(true), 150);
              }}
              className="flex items-center justify-between p-4 rounded-2xl border border-white/10 bg-white/[0.04] text-slate-100 transition-none active:scale-[0.98] text-left cursor-pointer touch-manipulation"
            >
              <span className="text-base font-bold uppercase tracking-[0.15em]">{t('nav.liveDemo', 'Live Demo')}</span>
              <span className="text-xs text-cyan-400/70 font-mono">03</span>
            </button>

            <a
              href="/#business-impact"
              id="mobile-nav-impact"
              data-i18n="nav.impact"
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavRoute("/#business-impact");
              }}
              className={`flex items-center justify-between p-4 rounded-2xl border transition-none active:scale-[0.98] touch-manipulation ${
                activeSection === "business-impact"
                  ? "bg-cyan-500/15 border-cyan-400/40 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] font-extrabold"
                  : "bg-white/[0.04] border-white/10 text-slate-100"
              }`}
            >
              <span className="text-base font-bold uppercase tracking-[0.15em]">{t('nav.impact', 'Impact')}</span>
              <span className="text-xs text-cyan-400/70 font-mono">04</span>
            </a>

            <a
              href="/#contact"
              id="mobile-nav-contact"
              data-i18n="nav.contact"
              onClick={(e) => {
                e.preventDefault();
                handleMobileNavRoute("/#contact");
              }}
              className={`flex items-center justify-between p-4 rounded-2xl border transition-none active:scale-[0.98] touch-manipulation ${
                activeSection === "contact"
                  ? "bg-cyan-500/15 border-cyan-400/40 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.2)] font-extrabold"
                  : "bg-white/[0.04] border-white/10 text-slate-100"
              }`}
            >
              <span className="text-base font-bold uppercase tracking-[0.15em]">{t('nav.contact', 'Contact')}</span>
              <span className="text-xs text-cyan-400/70 font-mono">05</span>
            </a>
          </div>

          <div className="max-w-sm mx-auto w-full space-y-4 pt-4 border-t border-white/10">
            <Button
              id="mobile-menu-book-consult-btn"
              data-i18n="nav.bookDiscovery"
              size="lg"
              className="w-full rounded-2xl h-14 text-sm font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-teal-400 via-cyan-400 to-teal-400 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.4)] active:scale-95 transition-all border border-cyan-200/50 flex items-center justify-center gap-2 cursor-pointer touch-manipulation"
              onClick={() => {
                setIsMobileMenuOpen(false);
                setTimeout(() => setIsBookingOpen(true), 150);
              }}
            >
              <span>{t('nav.bookDiscovery', 'Book Discovery Demo')}</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Button>

            <p 
              data-i18n="nav.footerNote"
              className="text-center text-[10px] font-medium text-slate-400 uppercase tracking-widest"
            >
              {t('nav.footerNote', 'Better Call Hana © 2026 • 24/7 AI Voice Reception')}
            </p>
          </div>
        </div>
      </div>

      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
      <VideoDialog open={isVideoOpen} onOpenChange={setIsVideoOpen} />
    </>
  )
}