"use client"

import { useState, useEffect, useRef } from "react"
import { Palette, Zap, Target, Check } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function ServicesCoreFeatures() {
  const { t } = useLanguage()
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      id: "custom-design",
      icon: Palette,
      badgeKey: "servicesCore.c1.badge",
      badgeDefault: "Tailored Aesthetics",
      titleKey: "servicesCore.c1.title",
      titleDefault: "Custom UI/UX Design",
      descKey: "servicesCore.c1.desc",
      descDefault:
        "We don't use generic templates. Every site is custom-crafted to reflect the gold standard of your specific brand, ensuring a seamless experience for your clients.",
      highlights: [
        { key: "servicesCore.c1.h1", default: "Bespoke brand design system" },
        { key: "servicesCore.c1.h2", default: "Intuitive client journey architecture" },
        { key: "servicesCore.c1.h3", default: "Fluid motion & micro-interactions" },
        { key: "servicesCore.c1.h4", default: "Responsive pixel-perfect layouts" },
      ],
      glow: "from-teal-400/20 via-cyan-400/10 to-transparent",
      accentBorder: "group-hover:border-teal-400/50",
      iconColor: "text-teal-300",
      iconBg: "bg-teal-400/15 border-teal-400/30",
    },
    {
      id: "speed-performance",
      icon: Zap,
      badgeKey: "servicesCore.c2.badge",
      badgeDefault: "Sub-Second Latency",
      titleKey: "servicesCore.c2.title",
      titleDefault: "Speed & Performance",
      descKey: "servicesCore.c2.desc",
      descDefault:
        "A slow site kills trust. We engineer lightweight, lightning-fast digital environments that rank higher on search engines and keep visitors engaged.",
      highlights: [
        { key: "servicesCore.c2.h1", default: "Modern SSR & edge caching" },
        { key: "servicesCore.c2.h2", default: "100/100 Core Web Vitals" },
        { key: "servicesCore.c2.h3", default: "Lightweight media & asset pipelines" },
        { key: "servicesCore.c2.h4", default: "Top-tier technical search ranking" },
      ],
      glow: "from-cyan-400/20 via-sky-400/10 to-transparent",
      accentBorder: "group-hover:border-cyan-400/50",
      iconColor: "text-cyan-300",
      iconBg: "bg-cyan-400/15 border-cyan-400/30",
    },
    {
      id: "conversion-opt",
      icon: Target,
      badgeKey: "servicesCore.c3.badge",
      badgeDefault: "Revenue Growth",
      titleKey: "servicesCore.c3.title",
      titleDefault: "Conversion Optimization",
      descKey: "servicesCore.c3.desc",
      descDefault:
        "Traffic means nothing without action. We strategically design layouts, buttons, and booking flows to maximize your lead generation and sales.",
      highlights: [
        { key: "servicesCore.c3.h1", default: "Frictionless appointment booking" },
        { key: "servicesCore.c3.h2", default: "High-intent CTA placement" },
        { key: "servicesCore.c3.h3", default: "Psychological visual hierarchy" },
        { key: "servicesCore.c3.h4", default: "Clear client conversion paths" },
      ],
      glow: "from-sky-400/20 via-teal-400/10 to-transparent",
      accentBorder: "group-hover:border-sky-400/50",
      iconColor: "text-sky-300",
      iconBg: "bg-sky-400/15 border-sky-400/30",
    },
  ]

  return (
    <section
      ref={sectionRef}
      id="core-services"
      className="relative w-full py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0a1c30] via-[#081728] to-[#071322] text-slate-100 overflow-hidden"
    >
      {/* Background Atmosphere */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-cyan-500/8 rounded-full blur-[140px] pointer-events-none" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div
          className={`text-center max-w-3xl mx-auto mb-16 md:mb-20 transition-all duration-1000 ease-out transform ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight [text-shadow:0_2px_10px_rgba(0,0,0,0.8)]">
            <span data-i18n="servicesCore.title">{t('servicesCore.title', 'Crafted for Impact. ')}</span>
            <span data-i18n="servicesCore.highlight" className="text-transparent bg-clip-text bg-gradient-to-r from-teal-300 via-cyan-300 to-sky-300">
              {t('servicesCore.highlight', 'Built to Scale.')}
            </span>
          </h2>

          <p data-i18n="servicesCore.description" className="text-base sm:text-lg text-slate-300/90 leading-relaxed font-normal">
            {t('servicesCore.description', 'Every layer of your web experience is calibrated for speed, aesthetics, and measurable client acquisition.')}
          </p>
        </div>

        {/* 3-Column CSS Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={service.id}
                className={`group relative rounded-[2.25rem] bg-gradient-to-b from-white/[0.07] via-white/[0.04] to-white/[0.02] border border-white/10 ${service.accentBorder} backdrop-blur-xl p-8 sm:p-9 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(34,211,238,0.15)] flex flex-col justify-between overflow-hidden ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                {/* Ambient Card Background Glow on Hover */}
                <div
                  className={`absolute -top-24 -right-24 w-48 h-48 rounded-full bg-gradient-to-bl ${service.glow} blur-2xl opacity-40 group-hover:opacity-80 transition-opacity duration-500 pointer-events-none`}
                />

                <div>
                  {/* Top Icon & Badge */}
                  <div className="flex items-center justify-between mb-7">
                    <div
                      className={`w-14 h-14 rounded-2xl ${service.iconBg} border flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className={`w-7 h-7 ${service.iconColor}`} />
                    </div>
                    <span data-i18n={service.badgeKey} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 bg-white/[0.05] border border-white/10 px-3 py-1 rounded-full">
                      {t(service.badgeKey, service.badgeDefault)}
                    </span>
                  </div>

                  {/* H3 Title */}
                  <h3 data-i18n={service.titleKey} className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-4 group-hover:text-cyan-300 transition-colors duration-300">
                    {t(service.titleKey, service.titleDefault)}
                  </h3>

                  {/* Description */}
                  <p data-i18n={service.descKey} className="text-sm sm:text-base text-slate-300/90 font-normal leading-relaxed mb-6">
                    {t(service.descKey, service.descDefault)}
                  </p>
                </div>

                {/* Highlights List */}
                <div className="pt-6 border-t border-white/10 space-y-2.5">
                  {service.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2.5 text-xs text-slate-300">
                      <div className="w-4 h-4 rounded-full bg-cyan-400/20 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-cyan-300" />
                      </div>
                      <span data-i18n={highlight.key}>{t(highlight.key, highlight.default)}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
