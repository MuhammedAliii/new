"use client";

import { Phone, MessageSquare, CalendarCheck, Clock, Zap, UserCheck, ShieldCheck, Sparkles, ArrowUpRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/context/LanguageContext"

export function HowItWorks() {
  const { t } = useLanguage();

  const steps = [
    {
      number: "01",
      icon: <Phone className="w-6 h-6" />,
      titleKey: "how.step1.title",
      defaultTitle: "Call Ingestion & Identification",
      badgeKey: "how.step1.badge",
      defaultBadge: "Smart Routing",
      descKey: "how.step1.desc",
      defaultDesc: "Hana answers immediately on ring one, identifies the caller, checks CRM history, and initiates context-aware voice conversation in natural human tone.",
    },
    {
      number: "02",
      icon: <MessageSquare className="w-6 h-6" />,
      titleKey: "how.step2.title",
      defaultTitle: "Intent Triage & Knowledge Base",
      badgeKey: "how.step2.badge",
      defaultBadge: "Conversational AI",
      descKey: "how.step2.desc",
      defaultDesc: "Using custom-trained neural models, Hana accurately answers complex FAQs, screens emergency requests, and guides callers through qualification questions.",
    },
    {
      number: "03",
      icon: <CalendarCheck className="w-6 h-6" />,
      titleKey: "how.step3.title",
      defaultTitle: "Instant Booking & Live Dispatch",
      badgeKey: "how.step3.badge",
      defaultBadge: "Automation",
      descKey: "how.step3.desc",
      defaultDesc: "Appointments are booked directly into your Google/Outlook calendar. Urgent escalations are patched through to on-call staff with full audio summaries.",
    }
  ];

  const vitals = [
    { icon: <Clock className="w-4 h-4" />, key: "how.dock.v1", text: "24/7/365 Always Awake" },
    { icon: <Zap className="w-4 h-4" />, key: "how.dock.v2", text: "Zero Lag Response" },
    { icon: <UserCheck className="w-4 h-4" />, key: "how.dock.v3", text: "Zero Staff Burnout" },
    { icon: <ShieldCheck className="w-4 h-4" />, key: "how.dock.v4", text: "Enterprise Compliance" }
  ];

  return (
    <section 
      id="how-it-works" 
      className="relative w-full py-20 md:py-36 px-6 overflow-hidden bg-gradient-to-b from-[#0a1c30] via-[#122e4d] via-40% via-[#e1f0fa] via-75% to-[#eef7fc]"
    >
      {/* 1. SEAMLESS GRADIENT BLENDING & THEMATIC TECH BACKGROUND DETAILS */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* Soft Faint Tech Grid */}
        <div className="absolute inset-0 bg-[radial-gradient(rgba(56,189,248,0.18)_1px,transparent_1px)] [background-size:28px_28px] opacity-40" />

        {/* Ambient Sky Light Blue & Cyan Light Leaks */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-cyan-400/15 via-sky-400/10 to-transparent rounded-full blur-[100px]" />
        <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-sky-300/20 rounded-full blur-[120px]" />
        <div className="absolute top-2/3 -right-20 w-[500px] h-[500px] bg-teal-400/15 rounded-full blur-[120px]" />

        {/* Delicate Architectural Flow Lines */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-full">
          <div className="absolute left-8 md:left-16 top-0 w-px h-full bg-gradient-to-b from-cyan-500/20 via-sky-300/30 to-transparent" />
          <div className="absolute right-8 md:right-16 top-0 w-px h-full bg-gradient-to-b from-cyan-500/20 via-sky-300/30 to-transparent" />
        </div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* 2. HEADER CONTAINER IN LUXURIOUS GLASSMORPHIC STRUCTURE */}
        <div className="relative mx-auto max-w-3xl mb-16 md:mb-24 text-center">
          {/* Frosted Glass Header Capsule */}
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-cyan-300 shadow-[0_4px_20px_rgba(34,211,238,0.15)] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.25em] mb-6">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span data-i18n="how.badge">{t('how.badge', 'The Architecture')}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tight text-white mb-6 leading-tight drop-shadow-sm">
            <span data-i18n="how.title">{t('how.title', 'How Hana Powers Your Front Desk')}</span>
          </h2>

          <div className="p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/[0.08] backdrop-blur-2xl border border-white/15 shadow-[0_15px_35px_rgba(0,0,0,0.1)]">
            <p data-i18n="how.description" className="text-base sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed">
              {t('how.description', 'Deploying our enterprise-grade voice AI is seamless. Hana integrates directly with your existing phone systems and calendar in under 48 hours.')}
            </p>
          </div>
        </div>

        {/* 3. PREMIUM GLASSMORPHISM PROCESS CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, idx) => (
            <Card 
              key={idx} 
              className="group relative p-6 sm:p-8 md:p-10 rounded-[2rem] md:rounded-[2.5rem] bg-white/70 backdrop-blur-2xl border border-white/90 shadow-[0_20px_50px_-15px_rgba(14,116,144,0.12)] transition-all duration-500 ease-in-out hover:shadow-[0_30px_70px_-15px_rgba(14,116,144,0.22)] hover:bg-white/90 hover:scale-[1.02] md:hover:scale-[1.03] hover:-translate-y-1.5 active:scale-[0.98] cursor-default overflow-hidden ring-1 ring-sky-950/[0.04]"
            >
              {/* Subtle top light sheen on card */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/20 to-transparent pointer-events-none" />

              {/* Hover Radial Aura */}
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-gradient-to-br from-cyan-400/20 to-teal-400/10 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              <div className="relative z-10">
                {/* Header Row: Icon & Step Number */}
                <div className="flex items-center justify-between mb-6 md:mb-8">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-br from-sky-500 to-teal-600 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-sky-500/25 ring-1 ring-white/50 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 ease-in-out">
                    {step.icon}
                  </div>

                  <div className="flex flex-col items-end">
                    <span className="text-2xl sm:text-3xl font-black text-sky-900/20 group-hover:text-sky-600/30 transition-colors duration-500 font-mono">
                      {step.number}
                    </span>
                    <span 
                      data-i18n={step.badgeKey}
                      className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] text-teal-700 bg-teal-500/10 px-2.5 py-0.5 sm:py-1 rounded-full border border-teal-500/20 mt-1"
                    >
                      {t(step.badgeKey, step.defaultBadge)}
                    </span>
                  </div>
                </div>
                
                {/* Card Title */}
                <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3 tracking-tight text-slate-900 group-hover:text-teal-700 transition-colors duration-300 flex items-center justify-between">
                  <span data-i18n={step.titleKey}>{t(step.titleKey, step.defaultTitle)}</span>
                  <ArrowUpRight className="w-5 h-5 opacity-40 md:opacity-0 -translate-x-1 md:-translate-x-2 translate-y-1 md:translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-teal-600 rtl-flip" />
                </h3>
                
                {/* Card Description */}
                <p data-i18n={step.descKey} className="text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                  {t(step.descKey, step.defaultDesc)}
                </p>
              </div>
            </Card>
          ))}
        </div>

        {/* 4. ALWAYS-ON ADVANTAGE GLASS DOCK */}
        <div className="mt-16 md:mt-24 pt-12 md:pt-16 border-t border-sky-300/40 flex flex-col items-center gap-8 md:gap-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-800 text-[10px] font-black uppercase tracking-[0.25em]">
            <span className="w-2 h-2 rounded-full bg-teal-500 animate-ping" />
            <span data-i18n="how.dock.badge">{t('how.dock.badge', 'The Always-On Advantage')}</span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap justify-center gap-3 md:gap-5 w-full max-w-5xl mx-auto px-2">
            {vitals.map((vital, idx) => (
              <div 
                key={idx} 
                className="flex items-center justify-center gap-2.5 sm:gap-3 px-4 py-3 sm:px-6 sm:py-3.5 rounded-2xl bg-white/80 backdrop-blur-xl border border-white/90 shadow-[0_10px_25px_-5px_rgba(14,116,144,0.08)] text-slate-800 text-[11px] md:text-xs font-bold uppercase tracking-wider transition-all duration-300 ease-in-out hover:shadow-[0_15px_30px_-5px_rgba(14,116,144,0.18)] hover:border-teal-400/40 hover:-translate-y-1 hover:bg-white w-full sm:w-auto group cursor-default text-center"
              >
                <div className="p-1.5 rounded-lg bg-teal-500/10 text-teal-600 group-hover:bg-teal-500 group-hover:text-white transition-colors duration-300 shrink-0">
                  {vital.icon}
                </div>
                <span data-i18n={vital.key} className="break-words leading-snug">{t(vital.key, vital.text)}</span>
              </div>
            ))}
          </div>

          <div className="flex items-center gap-4 w-full justify-center opacity-80 max-w-3xl">
            <div className="hidden sm:block w-16 h-px bg-sky-300/50" />
            <p data-i18n="how.dock.sub" className="text-xs md:text-sm text-slate-600 font-medium text-center break-words leading-relaxed px-4">
              {t('how.dock.sub', 'Unmatched 24/7 reliability for your front desk & client workflows')}
            </p>
            <div className="hidden sm:block w-16 h-px bg-sky-300/50" />
          </div>
        </div>
      </div>
    </section>
  )
}

