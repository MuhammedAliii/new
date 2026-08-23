"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight, Clock, Video, Sparkles, CheckCircle2 } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function AuditDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { t } = useLanguage()
  const CALENDAR_URL = "https://calendar.app.google/ZAWxutRfktUA75DX9"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[520px] w-[92vw] sm:w-full rounded-[2.5rem] sm:rounded-[3rem] p-0 border border-cyan-500/30 shadow-[0_25px_90px_-15px_rgba(2,8,16,0.95)] overflow-hidden bg-gradient-to-b from-[#08182b]/98 via-[#0b223a]/98 to-[#071526]/98 backdrop-blur-3xl text-white">
        {/* Ambient Glow Orbs */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[350px] h-[350px] bg-gradient-to-bl from-cyan-400/20 via-teal-400/10 to-transparent rounded-full blur-[70px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[280px] h-[280px] bg-sky-500/15 rounded-full blur-[60px] pointer-events-none" />

        {/* Modal Body Container with Generous Symmetrical Padding */}
        <div className="max-h-[90vh] overflow-y-auto p-8 sm:p-10 md:p-12 scrollbar-hide relative z-10 flex flex-col items-center text-center">
          
          {/* Glowing Top Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-400/20 via-cyan-400/15 to-transparent border border-cyan-400/30 rounded-[1.75rem] flex items-center justify-center mx-auto mb-6 relative shadow-[0_0_30px_rgba(34,211,238,0.25)]">
            <div className="absolute inset-0 bg-cyan-400/20 rounded-[1.75rem] animate-ping opacity-20" />
            <Calendar className="w-8 h-8 sm:w-9 sm:h-9 text-cyan-300" />
          </div>

          {/* Confident, Singular Header */}
          <DialogHeader className="text-center mb-8 sm:mb-9 max-w-md mx-auto space-y-2">
            <DialogTitle data-i18n="auditModal.title" className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white [text-shadow:0_2px_12px_rgba(0,0,0,0.8)]">
              {t('auditModal.title', 'Book Your Strategy Session')}
            </DialogTitle>
            <DialogDescription data-i18n="auditModal.description" className="text-sm sm:text-base text-slate-300/90 font-normal leading-relaxed">
              {t('auditModal.description', 'Select a dedicated time on our calendar for a 1-on-1 bespoke web architecture and conversion teardown.')}
            </DialogDescription>
          </DialogHeader>

          {/* Centralized & Elevated Calendar Booking Widget Card */}
          <div className="w-full relative group mb-6">
            {/* Subtle Neon Halo Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-teal-400/30 via-cyan-400/30 to-sky-400/30 rounded-[2rem] blur-lg opacity-40 group-hover:opacity-75 transition-opacity duration-500 pointer-events-none" />

            <div className="relative w-full rounded-[1.85rem] bg-gradient-to-b from-white/[0.08] via-white/[0.04] to-white/[0.02] border border-cyan-400/30 p-5 sm:p-7 backdrop-blur-2xl shadow-xl flex flex-col items-center text-center space-y-5">
              
              {/* Meeting Perks & Format Badges */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 w-full">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-200 text-xs font-semibold">
                  <Clock className="w-3.5 h-3.5 text-cyan-400" />
                  <span data-i18n="auditModal.badge1">{t('auditModal.badge1', '15–20 Minutes')}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-200 text-xs font-semibold">
                  <Video className="w-3.5 h-3.5 text-teal-400" />
                  <span data-i18n="auditModal.badge2">{t('auditModal.badge2', 'Google Meet / Screen Share')}</span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 text-slate-200 text-xs font-semibold">
                  <Sparkles className="w-3.5 h-3.5 text-sky-400" />
                  <span data-i18n="auditModal.badge3">{t('auditModal.badge3', 'Live Conversion Teardown')}</span>
                </div>
              </div>

              {/* Central Action CTA */}
              <Button
                id="modal-select-time-btn"
                size="lg"
                onClick={() => {
                  window.open(CALENDAR_URL, "_blank")
                }}
                className="w-full min-h-14 sm:min-h-16 h-auto py-3.5 sm:py-4 px-4 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-[0.16em] sm:tracking-[0.2em] bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_45px_rgba(34,211,238,0.7)] hover:scale-[1.02] active:scale-98 transition-all duration-300 border border-cyan-100/50 flex items-center justify-center gap-2.5 group/btn cursor-pointer text-center whitespace-normal leading-snug"
              >
                <Calendar className="w-5 h-5 text-slate-950 transition-transform duration-300 group-hover/btn:scale-110 shrink-0" />
                <span data-i18n="auditModal.selectTime">{t('auditModal.selectTime', 'Select a Time')}</span>
                <ArrowRight className="w-4 h-4 text-slate-950 transition-transform duration-300 group-hover/btn:translate-x-1.5 shrink-0 rtl-flip" />
              </Button>

              {/* What Happens Next Items */}
              <div className="w-full pt-4 border-t border-white/10 text-left space-y-2">
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span data-i18n="auditModal.perk1">{t('auditModal.perk1', 'Instant Google Calendar confirmation & invite')}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-300">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                  <span data-i18n="auditModal.perk2">{t('auditModal.perk2', '100% confidential with zero sales obligation')}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </DialogContent>
    </Dialog>
  )
}
