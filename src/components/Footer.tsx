
"use client"

import NextLink from "next/link"
import { Heart, Linkedin } from "lucide-react"
import Image from "next/image"
import myLogo from "@/assets/4.png"
import { useLanguage } from "@/context/LanguageContext"

export function Footer() {
  const { t } = useLanguage();
  const handleLogoClick = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-20 border-t border-cyan-500/20 bg-[#071322] flex flex-col items-center text-center px-6 relative z-10">
      <div className="mb-8 relative group shrink-0 flex-shrink-0 header-logo-wrapper">
        <NextLink 
          href="/" 
          onClick={handleLogoClick}
          className="block transition-all duration-500 hover:scale-[1.05] active:scale-95 shrink-0 flex-shrink-0 brand-logo"
        >
          <div className="flex flex-col items-center shrink-0 flex-shrink-0">
            <div className="relative w-[150px] h-[45px] flex items-center justify-center shrink-0 flex-shrink-0 header-logo">
              <Image 
                src={myLogo} 
                alt="Better Call Hana" 
                width={150}
                height={45}
                loading="lazy"
                className="object-contain brightness-0 invert opacity-80 group-hover:opacity-100 transition-all duration-500 drop-shadow-[0_2px_12px_rgba(34,211,238,0.25)] header-logo shrink-0 flex-shrink-0"
              />
            </div>
          </div>
        </NextLink>
      </div>
      <div className="space-y-4 relative z-20">
        <p className="text-white/90 font-medium text-sm sm:text-base tracking-wide [text-shadow:0_1px_4px_rgba(0,0,0,0.5)]">
          Better Call Hana © 2026
        </p>
        <p data-i18n="footer.tagline" className="text-sm sm:text-[15px] text-slate-200/85 max-w-sm mx-auto font-normal leading-relaxed">
          {t('footer.tagline', 'The premium AI voice solution for professional businesses.')}
        </p>
        
        {/* Fine-print Navigation & Legal Links with High Contrast & Crisp Legibility */}
        <div className="flex flex-wrap gap-6 sm:gap-8 justify-center pt-3 items-center relative z-30">
          <NextLink 
            href="/services" 
            id="footer-services-link"
            data-i18n="footer.services"
            className="text-sm font-medium text-cyan-300 hover:text-white transition-all duration-300 ease-in-out underline-offset-4 hover:underline [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]"
          >
            {t('footer.services', 'Web Services')}
          </NextLink>
          <span className="w-1 h-1 rounded-full bg-cyan-400/40" />
          <NextLink 
            href="/privacy" 
            id="footer-privacy-link"
            data-i18n="footer.privacy"
            className="text-sm font-medium text-white/85 hover:text-cyan-300 transition-all duration-300 ease-in-out underline-offset-4 hover:underline [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]"
          >
            {t('footer.privacy', 'Privacy Policy')}
          </NextLink>
          <span className="w-1 h-1 rounded-full bg-cyan-400/40" />
          <NextLink 
            href="/terms" 
            id="footer-terms-link"
            data-i18n="footer.terms"
            className="text-sm font-medium text-white/85 hover:text-cyan-300 transition-all duration-300 ease-in-out underline-offset-4 hover:underline [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]"
          >
            {t('footer.terms', 'Terms of Service')}
          </NextLink>
        </div>

        {/* LinkedIn icon centered with balanced vertical spacing */}
        <div className="flex justify-center pt-3 relative z-30">
          <a 
            href="https://linkedin.com/company/bettercallhana" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-slate-200/90 hover:text-cyan-300 transition-all duration-300 hover:scale-110 block p-2.5 rounded-full hover:bg-white/10 [text-shadow:0_1px_3px_rgba(0,0,0,0.8)]"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
        
        <p className="text-[11px] sm:text-xs text-slate-300/80 font-medium uppercase tracking-widest pt-4 flex items-center justify-center gap-1.5">
          <span>Made with</span> <Heart className="w-3.5 h-3.5 fill-rose-500 text-rose-500" /> <span>in Barcelona</span>
        </p>
      </div>
    </footer>
  )
}


