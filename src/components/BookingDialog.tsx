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
      <DialogContent className="sm:max-w-[480px] w-[95vw] sm:w-full rounded-[2.5rem] sm:rounded-[3rem] p-0 border border-cyan-500/30 shadow-[0_25px_90px_-15px_rgba(2,8,16,0.95)] overflow-hidden bg-gradient-to-b from-[#08182b]/95 via-[#0b223a]/95 to-[#071526]/95 backdrop-blur-3xl text-white">
        {/* Subtle Ambient Celestial Glow */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[350px] h-[350px] bg-gradient-to-bl from-cyan-400/20 via-teal-400/10 to-transparent rounded-full blur-[70px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[280px] h-[280px] bg-sky-500/15 rounded-full blur-[60px] pointer-events-none" />

        {/* Premium Concierge Layout */}
        <div className="max-h-[90vh] overflow-y-auto p-7 md:p-10 scrollbar-hide relative z-10">
          <DialogHeader className="text-center mb-8">
            <div className="w-16 h-16 md:w-18 md:h-18 bg-gradient-to-br from-teal-400/20 to-cyan-400/10 border border-cyan-400/30 rounded-[1.5rem] flex items-center justify-center mx-auto mb-5 relative shadow-[0_0_25px_rgba(34,211,238,0.2)]">
              <div className="absolute inset-0 bg-cyan-400/20 rounded-[1.5rem] animate-ping opacity-20" />
              <Zap className="w-8 h-8 text-cyan-300" />
            </div>
            <DialogTitle data-i18n="bookingModal.title" className="text-2xl md:text-3xl font-black tracking-tight mb-2 text-white">
              {t('bookingModal.title', 'Start Scaling Today')}
            </DialogTitle>
            <DialogDescription data-i18n="bookingModal.description" className="text-sm md:text-base text-slate-300 font-normal leading-relaxed">
              {t('bookingModal.description', 'Hana is ready to handle your front desk. Experience the AI now or book your custom setup call.')}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-3.5">
            {/* Live AI Demo Option */}
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-teal-400/30 to-cyan-400/30 rounded-[1.75rem] blur opacity-30 group-hover:opacity-70 transition duration-500" />
              <Button 
                id="modal-test-hana-btn"
                className="relative w-full min-h-20 md:min-h-24 h-auto py-3.5 rounded-[1.75rem] bg-white/[0.07] border border-cyan-500/30 text-white shadow-lg backdrop-blur-xl transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:bg-white/[0.12] hover:border-cyan-400/60 flex items-center justify-between px-5 md:px-7 overflow-hidden group/call cursor-pointer"
                onClick={() => window.location.href = `tel:${PHONE}`}
              >
                <div className="flex items-center gap-4 min-w-0 pr-2">
                  <div className="w-11 h-11 md:w-12 md:h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center shadow-md shadow-cyan-500/25 shrink-0 transition-transform duration-300 group-hover/call:rotate-[-6deg] text-slate-950">
                    <Phone className="w-5 h-5 md:w-6 md:h-6 text-slate-950 rtl-flip" />
                  </div>
                  <div className="text-left rtl:text-right min-w-0">
                    <p data-i18n="bookingModal.testHana" className="text-base sm:text-lg md:text-xl font-bold tracking-tight mb-0.5 text-white break-words leading-snug">
                      {t('bookingModal.testHana', 'Test Hana Now')}
                    </p>
                    <p data-i18n="bookingModal.testHanaSub" className="text-[10px] md:text-xs font-semibold text-cyan-300/80 uppercase tracking-wider break-words">
                      {t('bookingModal.testHanaSub', '+1 (310) 906-2504')}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-cyan-300 shrink-0 transition-transform duration-300 group-hover/call:translate-x-1.5 rtl-flip" />
              </Button>
            </div>

            {/* Primary Choice: Calendar */}
            <div className="group relative">
              <Button 
                id="modal-book-call-btn"
                className="w-full min-h-20 md:min-h-24 h-auto py-3.5 rounded-[1.75rem] bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.35)] transition-all duration-300 ease-in-out hover:scale-[1.02] active:scale-[0.98] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] flex items-center justify-between px-5 md:px-7 overflow-hidden group/btn border border-cyan-100/40 cursor-pointer"
                onClick={() => window.open(CALENDAR_URL, '_blank')}
              >
                <div className="flex items-center gap-4 min-w-0 pr-2">
                  <div className="w-11 h-11 md:w-12 md:h-12 bg-slate-950 rounded-2xl flex items-center justify-center shadow-md shrink-0 transition-transform duration-300 group-hover/btn:rotate-6">
                    <Calendar className="w-5 h-5 md:w-6 md:h-6 text-cyan-300" />
                  </div>
                  <div className="text-left rtl:text-right min-w-0">
                    <p data-i18n="bookingModal.bookCall" className="text-base sm:text-lg md:text-xl font-bold tracking-tight mb-0.5 text-slate-950 break-words leading-snug">
                      {t('bookingModal.bookCall', 'Book Setup Call')}
                    </p>
                    <p data-i18n="bookingModal.bookCallSub" className="text-[10px] md:text-xs font-bold text-slate-800 uppercase tracking-wider break-words">
                      {t('bookingModal.bookCallSub', 'Select a 15-Min Time Slot')}
                    </p>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-slate-950 shrink-0 transition-transform duration-300 group-hover/btn:translate-x-1.5 rtl-flip" />
              </Button>
            </div>

            <div className="relative py-3 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-cyan-500/20" />
              </div>
              <span data-i18n="bookingModal.directLine" className="relative bg-[#091b2e] px-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.3em]">
                {t('bookingModal.directLine', 'Direct Line')}
              </span>
            </div>

            {/* Secondary Choice: Contact Details / Email */}
            <Button 
              id="modal-email-btn"
              variant="outline"
              className="w-full h-auto min-h-[5.5rem] py-3.5 rounded-[1.75rem] bg-white/[0.04] border border-white/15 hover:border-cyan-400/40 hover:bg-white/[0.08] text-white transition-all duration-300 ease-in-out flex items-center justify-between px-5 md:px-7 group/mail hover:scale-[1.01]"
              onClick={() => window.location.href = `mailto:${EMAIL}`}
            >
              <div className="flex items-center gap-4 min-w-0 w-full pr-3">
                <div className="w-11 h-11 md:w-12 md:h-12 bg-white/[0.08] border border-white/10 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 group-hover/mail:bg-cyan-500/20 group-hover/mail:border-cyan-400/30">
                  <Mail className="w-5 h-5 text-slate-300 group-hover/mail:text-cyan-300" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <p data-i18n="bookingModal.contactDirect" className="text-base md:text-lg font-bold tracking-tight mb-0.5 text-white">
                    {t('bookingModal.contactDirect', 'Contact Direct')}
                  </p>
                  <p className="text-[11px] font-medium text-slate-300 break-all leading-tight">
                    {EMAIL}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 group-hover/mail:translate-x-1.5 group-hover/mail:text-cyan-300" />
            </Button>
            
            <p data-i18n="bookingModal.guarantee" className="text-[10px] text-center text-slate-400 pt-6 font-bold uppercase tracking-[0.3em] leading-relaxed">
              {t('bookingModal.guarantee', '7-Day Performance Guarantee Included')}
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}