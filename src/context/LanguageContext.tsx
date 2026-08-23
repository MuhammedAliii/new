"use client";

import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { Language, LANGUAGES, translations, LanguageOption } from '@/lib/translations';

interface LanguageContextType {
  language: Language;
  currentLanguage: LanguageOption;
  setLanguage: (lang: Language) => void;
  t: (key: string, fallback?: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const PRIMARY_STORAGE_KEY = 'selectedLanguage';
const BACKUP_STORAGE_KEY = 'bch_selected_lang';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en');

  // Initialize from localStorage or default strictly to 'en'
  useEffect(() => {
    try {
      const saved = (localStorage.getItem(PRIMARY_STORAGE_KEY) || localStorage.getItem(BACKUP_STORAGE_KEY)) as Language;
      if (saved && (saved === 'en' || saved === 'es' || saved === 'fr' || saved === 'de')) {
        setLanguageState(saved);
        if (typeof document !== 'undefined') {
          document.documentElement.lang = saved;
          document.documentElement.dir = 'ltr';
        }
      } else {
        setLanguageState('en');
        if (typeof document !== 'undefined') {
          document.documentElement.lang = 'en';
          document.documentElement.dir = 'ltr';
        }
      }
    } catch {
      setLanguageState('en');
    }
  }, []);

  // Sync language attribute
  useEffect(() => {
    if (typeof document !== 'undefined') {
      document.documentElement.lang = language;
      document.documentElement.dir = 'ltr';
      document.documentElement.classList.remove('rtl-active');
      if (document.body) {
        document.body.classList.remove('rtl-active');
      }
    }
  }, [language]);

  // Listen for external language change events from vanilla JS (language.js)
  useEffect(() => {
    const handleLangEvent = (event: Event) => {
      const customEvent = event as CustomEvent<{ language: Language }>;
      if (customEvent.detail && customEvent.detail.language) {
        const newLang = customEvent.detail.language;
        if (newLang !== language && (newLang === 'en' || newLang === 'es' || newLang === 'fr' || newLang === 'de')) {
          setLanguageState(newLang);
        }
      }
    };

    window.addEventListener('languageChanged', handleLangEvent);
    return () => {
      window.removeEventListener('languageChanged', handleLangEvent);
    };
  }, [language]);

  const setLanguage = useCallback((newLang: Language) => {
    if (newLang !== 'en' && newLang !== 'es' && newLang !== 'fr' && newLang !== 'de') {
      newLang = 'en';
    }

    setLanguageState(newLang);

    try {
      localStorage.setItem(PRIMARY_STORAGE_KEY, newLang);
      localStorage.setItem(BACKUP_STORAGE_KEY, newLang);
    } catch (e) {
      console.warn("Failed to save language to localStorage", e);
    }

    if (typeof document !== 'undefined') {
      document.documentElement.lang = newLang;
      document.documentElement.dir = 'ltr';
      document.documentElement.classList.remove('rtl-active');
      if (document.body) {
        document.body.classList.remove('rtl-active');
      }

      // Also call global vanilla DOM translator if available
      const win = window as unknown as { BetterCallHanaI18n?: { translatePage: (l: string) => void } };
      if (win.BetterCallHanaI18n && typeof win.BetterCallHanaI18n.translatePage === 'function') {
        win.BetterCallHanaI18n.translatePage(newLang);
      }
    }
  }, []);

  const t = useCallback((key: string, fallback?: string): string => {
    const langDict = translations[language] || translations.en;
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    // Fallback to English dictionary
    if (translations.en && translations.en[key]) {
      return translations.en[key];
    }
    return fallback || key;
  }, [language]);

  const currentLanguage = LANGUAGES.find(l => l.code === language) || LANGUAGES[0];

  return (
    <LanguageContext.Provider value={{ language, currentLanguage, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    // Graceful fallback if used outside provider during SSR/initial render
    return {
      language: 'en' as Language,
      currentLanguage: LANGUAGES[0],
      setLanguage: () => {},
      t: (key: string, fallback?: string) => {
        return translations.en[key] || fallback || key;
      },
    };
  }
  return context;
}
