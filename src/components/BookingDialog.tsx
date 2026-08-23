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
import { Calendar, Mail, ArrowRight, Zap, Phone } from "lucide-react"
import { useLanguage } from "@/context/LanguageContext"

export function BookingDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { t } = useLanguage()
  const CALENDAR_URL = "https://calendar.app.google/ZAWxutRfktUA75DX9"
  const EMAIL = "info@bettercallhana.com"
  const PHONE = "+13109062504"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[90vw] sm:w-[90%] max-w-[420px] rounded-[24px] p-0 border border-cyan-500/30 shadow-[0_25px_90px_-15px_rgba(2,8,16,0.95)] overflow-hidden bg-[#08182b] md:bg-gradient-to-b md:from-[#08182b]/95 md:via-[#0b223a]/95 md:to-[#071526]/95 md:backdrop-blur-3xl text-white">
        {/* Subtle Ambient Celestial Glow */}
        <div className="hidden md:block absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[350px] h-[350px] bg-gradient-to-bl from-cyan-400/20 via-teal-400/10 to-transparent rounded-full blur-[70px] pointer-events-none" />
        <div className="hidden md:block absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[280px] h-[280px] bg-sky-500/15 rounded-full blur-[60px] pointer-events-none" />

        {/* Premium Concierge Layout */}
        <div className="max-h-[88vh] overflow-y-auto p-5 sm:p-7 md:p-8 scrollbar-hide relative z-10">
          <DialogHeader className="text-center mb-6">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-gradient-to-br from-teal-400/20 to-cyan-400/10 border border-cyan-400/30 rounded-[1.25rem] flex items-center justify-center mx-auto mb-4 relative shadow-[0_0_25px_rgba(34,211,238,0.2)]">
              <div className="absolute inset-0 bg-cyan-400/20 rounded-[1.25rem] animate-ping opacity-20" />
              <Zap className="w-7 h-7 text-cyan-300" />
            </div>
            <DialogTitle data-i18n="bookingModal.title" className="text-xl md:text-2xl font-black tracking-tight mb-2 text-white">
              {t('bookingModal.title', 'Start Scaling Today')}
            </DialogTitle>
            <DialogDescription data-i18n="bookingModal.description" className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              {t('bookingModal.description', 'Hana is ready to handle your front desk. Experience the AI now or book your custom setup call.')}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-3">
            {/* Live AI Demo Option */}
            <div className="group relative">
              <div className="hidden md:block absolute -inset-0.5 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded-[1.25rem] blur opacity-30 group-hover:opacity-70 transition duration-500" />
              <Button 
                id="modal-test-hana-btn"
                className="relative w-full min-h-[4.5rem] md:min-h-20 h-auto py-3 rounded-[1.25rem] bg-white/[0.07] border border-cyan-500/30 text-white shadow-lg md:backdrop-blur-xl transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-white/[0.12] hover:border-cyan-400/60 flex items-center justify-between px-4 md:px-5 overflow-hidden group/call cursor-pointer"
                onClick={() => window.location.href = `tel:${PHONE}`}
              >
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center shadow-md shadow-cyan-500/25 shrink-0 transition-transform duration-300 group-hover/call:rotate-[-6deg] text-slate-950">
                    <Phone className="w-4 h-4 md:w-5 md:h-5 text-slate-950 rtl-flip" />
                  </div>
                  <div className="text-left rtl:text-right min-w-0">
                    <p data-i18n="bookingModal.testHana" className="text-sm sm:text-base md:text-lg font-bold tracking-tight mb-0.5 text-white break-words leading-snug">
                      {t('bookingModal.testHana', 'Test Hana Now')}
                    </p>
                    <p data-i18n="bookingModal.testHanaSub" className="text-[10px] md:text-xs font-semibold text-cyan-300/80 uppercase tracking-wider break-words">
                      {t('bookingModal.testHanaSub', '+1 (310) 906-2504')}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-cyan-300 shrink-0 transition-transform duration-300 group-hover/call:translate-x-1.5 rtl-flip" />
              </Button>
            </div>

            {/* Primary Choice: Calendar */}
            <div className="group relative">
              <Button 
                id="modal-book-call-btn"
                className="w-full min-h-[4.5rem] md:min-h-20 h-auto py-3 rounded-[1.25rem] bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] flex items-center justify-between px-4 md:px-5 overflow-hidden group/btn border border-cyan-100/40 cursor-pointer"
                onClick={() => window.open(CALENDAR_URL, '_blank')}
              >
                <div className="flex items-center gap-3 min-w-0 pr-2">
                  <div className="w-10 h-10 bg-slate-950 rounded-xl flex items-center justify-center shadow-md shrink-0 transition-transform duration-300 group-hover/btn:rotate-6">
                    <Calendar className="w-4 h-4 md:w-5 md:h-5 text-cyan-300" />
                  </div>
                  <div className="text-left rtl:text-right min-w-0">
                    <p data-i18n="bookingModal.bookCall" className="text-sm sm:text-base md:text-lg font-bold tracking-tight mb-0.5 text-slate-950 break-words leading-snug">
                      {t('bookingModal.bookCall', 'Book Setup Call')}
                    </p>
                    <p data-i18n="bookingModal.bookCallSub" className="text-[10px] md:text-xs font-bold text-slate-800 uppercase tracking-wider break-words">
                      {t('bookingModal.bookCallSub', 'Select a 15-Min Time Slot')}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-4 h-4 text-slate-950 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1.5 rtl-flip" />
              </Button>
            </div>

            <div className="relative py-2 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-cyan-500/20" />
              </div>
              <span data-i18n="bookingModal.directLine" className="relative bg-[#091b2e] px-3 text-[9px] font-bold text-slate-400 uppercase tracking-[0.25em]">
                {t('bookingModal.directLine', 'Direct Line')}
              </span>
            </div>

            {/* Secondary Choice: Contact Details / Email */}
            <Button 
              id="modal-email-btn"
              variant="outline"
              className="w-full h-auto min-h-[4.5rem] py-3 rounded-[1.25rem] bg-white/[0.04] border border-white/15 hover:border-cyan-400/40 hover:bg-white/[0.08] text-white transition-all duration-300 ease-in-out flex items-center justify-between px-4 md:px-5 group/mail hover:scale-[1.01]"
              onClick={() => window.location.href = `mailto:${EMAIL}`}
            >
              <div className="flex items-center gap-3 min-w-0 w-full pr-2">
                <div className="w-10 h-10 bg-white/[0.08] border border-white/10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover/mail:bg-cyan-500/20 group-hover/mail:border-cyan-400/30">
                  <Mail className="w-4 h-4 text-slate-300 group-hover/mail:text-cyan-300" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <p data-i18n="bookingModal.contactDirect" className="text-sm md:text-base font-bold tracking-tight mb-0.5 text-white">
                    {t('bookingModal.contactDirect', 'Contact Direct')}
                  </p>
                  <p className="text-[10px] sm:text-[11px] font-medium text-slate-300 break-all leading-tight">
                    {EMAIL}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 group-hover/mail:translate-x-1.5 group-hover/mail:text-cyan-300" />
            </Button>
            
            <p data-i18n="bookingModal.guarantee" className="text-[9px] text-center text-slate-400 pt-4 font-bold uppercase tracking-[0.25em] leading-relaxed">
              {t('bookingModal.guarantee', '7-Day Performance Guarantee Included')}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}