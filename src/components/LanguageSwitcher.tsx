"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import { LANGUAGES, Language, LanguageOption } from '@/lib/translations';
import { Globe, ChevronDown, Check } from 'lucide-react';

interface LanguageSwitcherProps {
  isLightSection?: boolean;
  className?: string;
  align?: 'left' | 'right' | 'center';
}

export function LanguageSwitcher({ isLightSection = false, className = "", align = 'right' }: LanguageSwitcherProps) {
  const { language, currentLanguage, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: Event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside, { passive: true });
      document.addEventListener('touchstart', handleClickOutside, { passive: true });
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const handleSelect = (code: Language) => {
    setLanguage(code);
    setIsOpen(false);
  };

  return (
    <div 
      ref={dropdownRef} 
      className={`relative inline-block text-left ${className}`}
      id="header-language-switcher-container"
    >
      {/* Trigger Button */}
      <button
        id="language-switcher-btn"
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-label="Select Language"
        className={`group relative flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 h-9 sm:h-10 rounded-full border transition-all duration-300 ease-in-out cursor-pointer active:scale-95 ${
          isOpen
            ? "bg-cyan-500/20 border-cyan-400 text-cyan-300 shadow-[0_0_20px_rgba(34,211,238,0.35)]"
            : isLightSection
              ? "bg-slate-900/[0.08] hover:bg-slate-900/[0.14] border-slate-900/15 text-slate-800 shadow-[0_2px_10px_rgba(0,0,0,0.06)]"
              : "bg-white/[0.06] hover:bg-white/[0.12] border-white/15 text-slate-100 shadow-[0_2px_15px_rgba(0,0,0,0.25)] hover:border-cyan-400/40"
        }`}
      >
        <Globe className={`w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform duration-300 group-hover:rotate-12 ${
          isOpen 
            ? "text-cyan-300" 
            : isLightSection 
              ? "text-slate-800 group-hover:text-cyan-700" 
              : "text-cyan-400 group-hover:text-cyan-300"
        }`} />
        
        <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider font-mono">
          {currentLanguage.code.toUpperCase()}
        </span>

        <ChevronDown className={`w-3 h-3 transition-transform duration-300 ${
          isOpen ? "rotate-180 text-cyan-300" : "opacity-70 group-hover:opacity-100"
        }`} />
      </button>

      {/* Glassmorphism Dropdown Menu */}
      {isOpen && (
        <div
          id="language-dropdown-menu"
          role="menu"
          aria-orientation="vertical"
          className={`absolute z-50 mt-2 w-48 sm:w-52 rounded-2xl p-1.5 backdrop-blur-2xl transition-all duration-300 ease-out transform origin-top shadow-[0_20px_50px_rgba(0,0,0,0.6)] ${
            align === 'left' ? 'left-0' : align === 'center' ? 'left-1/2 -translate-x-1/2' : 'right-0'
          } ${
            isLightSection
              ? "bg-white/95 border border-slate-200/80 shadow-[0_15px_35px_rgba(0,0,0,0.12)] text-slate-900"
              : "bg-[#071729]/95 border border-cyan-500/30 text-white shadow-[0_20px_60px_rgba(2,12,27,0.85)] ring-1 ring-white/10"
          }`}
        >
          {/* Subtle Top Glow Sheen */}
          <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-transparent rounded-2xl pointer-events-none" />

          <div className="px-3 py-2 border-b border-white/10 mb-1">
            <p className={`text-[10px] font-bold uppercase tracking-[0.2em] ${
              isLightSection ? "text-slate-500" : "text-cyan-400/80"
            }`}>
              Select Language
            </p>
          </div>

          <div className="space-y-1 relative z-10">
            {LANGUAGES.map((lang: LanguageOption) => {
              const isSelected = language === lang.code;
              return (
                <button
                  key={lang.code}
                  id={`lang-opt-${lang.code}`}
                  onClick={() => handleSelect(lang.code)}
                  role="menuitem"
                  className={`w-full flex items-center justify-between px-3 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? isLightSection
                        ? "bg-cyan-50 text-cyan-800 font-bold border border-cyan-200"
                        : "bg-cyan-500/20 text-cyan-300 font-bold border border-cyan-400/40 shadow-[0_0_15px_rgba(34,211,238,0.2)]"
                      : isLightSection
                        ? "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                        : "text-slate-300 hover:bg-white/[0.08] hover:text-white"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className="text-base leading-none">{lang.flag}</span>
                    <div className="flex flex-col text-left">
                      <span className="leading-tight">{lang.nativeName}</span>
                      <span className={`text-[9px] uppercase tracking-wider font-mono ${
                        isSelected ? (isLightSection ? "text-cyan-700" : "text-cyan-400") : "opacity-60"
                      }`}>
                        {lang.name}
                      </span>
                    </div>
                  </div>

                  {isSelected && (
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center ${
                      isLightSection ? "bg-cyan-600 text-white" : "bg-cyan-400 text-slate-950 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
                    }`}>
                      <Check className="w-3 h-3 stroke-[3]" />
                    </div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
