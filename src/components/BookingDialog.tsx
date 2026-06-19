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

export function BookingDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const CALENDAR_URL = "https://cal.eu/muhammed.ali/ai"
  const EMAIL = "muhammed@bettercallhana.com"
  const PHONE = "+13109062504"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[460px] w-[95vw] sm:w-full rounded-[2.5rem] sm:rounded-[3rem] p-0 border-none shadow-2xl overflow-hidden bg-white">
        {/* Premium Concierge Layout */}
        <div className="max-h-[90vh] overflow-y-auto p-8 md:p-12 scrollbar-hide">
          <DialogHeader className="text-center mb-10 md:mb-12">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-primary/10 rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 relative">
              <div className="absolute inset-0 bg-primary/20 rounded-[1.5rem] animate-ping opacity-20" />
              <Zap className="w-8 h-8 md:w-10 md:h-10 text-primary" />
            </div>
            <DialogTitle className="text-3xl md:text-4xl font-black tracking-tight mb-4">Start Scaling Today</DialogTitle>
            <DialogDescription className="text-base md:text-lg text-muted-foreground font-medium leading-relaxed">
              Hana is ready to handle your front desk. Experience the AI now or book your setup call.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            {/* Live AI Demo Option */}
            <div className="group relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-[2rem] blur opacity-25 group-hover:opacity-40 transition duration-500" />
              <Button 
                className="relative w-full h-24 md:h-28 rounded-[1.75rem] bg-white border border-border/50 text-foreground shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-between px-6 md:px-8 overflow-hidden group/call"
                onClick={() => window.location.href = `tel:${PHONE}`}
              >
                <div className="flex items-center gap-4 md:gap-6 min-w-0">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-accent rounded-2xl flex items-center justify-center shadow-lg shadow-accent/20 shrink-0 transition-transform duration-500 group-hover/call:rotate-[-6deg]">
                    <Phone className="w-6 h-6 md:w-7 md:h-7 text-white" />
                  </div>
                  <div className="text-left min-w-0">
                    <p className="text-xl md:text-2xl font-black tracking-tight mb-1">Test Hana Now</p>
                    <p className="text-[10px] md:text-xs font-semibold text-muted-foreground/70 uppercase tracking-widest">Call to Test Now</p>
                  </div>
                </div>
                <ArrowRight className="w-6 h-6 text-accent shrink-0 transition-all duration-300 group-hover/call:translate-x-2" />
              </Button>
            </div>

            {/* Primary Choice: Calendar */}
            <Button 
              className="w-full h-24 md:h-28 rounded-[1.75rem] bg-white border border-border/50 text-foreground shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-between px-6 md:px-8 overflow-hidden group/btn"
              onClick={() => window.open(CALENDAR_URL, '_blank')}
            >
              <div className="flex items-center gap-4 md:gap-6 min-w-0">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/20 shrink-0 transition-transform duration-500 group-hover/btn:rotate-6">
                  <Calendar className="w-6 h-6 md:w-7 md:h-7 text-white" />
                </div>
                <div className="text-left min-w-0">
                  <p className="text-xl md:text-2xl font-black tracking-tight mb-1">Book Setup Call</p>
                  <p className="text-[10px] md:text-xs font-semibold text-muted-foreground/70 uppercase tracking-widest">Select a Time Slot</p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-primary shrink-0 transition-all duration-300 group-hover/btn:translate-x-2" />
            </Button>

            <div className="relative py-4 flex items-center justify-center">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-border/60" />
              </div>
              <span className="relative bg-white px-6 text-[10px] font-black text-muted-foreground/30 uppercase tracking-[0.4em]">
                Direct Line
              </span>
            </div>

            {/* Secondary Choice: Contact Details / Email */}
            <Button 
              variant="outline"
              className="w-full h-auto min-h-[6rem] md:min-h-[7rem] py-4 md:py-0 rounded-[1.75rem] border-2 border-border/40 hover:border-primary/20 hover:bg-muted/20 transition-all duration-300 flex items-center justify-between px-6 md:px-8 group/mail"
              onClick={() => window.location.href = `mailto:${EMAIL}`}
            >
              <div className="flex items-center gap-4 md:gap-6 min-w-0 w-full pr-4">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-muted rounded-2xl flex items-center justify-center shrink-0 transition-all duration-500 group-hover/mail:bg-white group-hover/mail:shadow-xl">
                  <Mail className="w-6 h-6 md:w-7 md:h-7 text-muted-foreground group-hover/mail:text-primary" />
                </div>
                <div className="text-left min-w-0 flex-1">
                  <p className="text-xl md:text-2xl font-black tracking-tight mb-1 text-foreground">Contact Details</p>
                  <p className="text-[10px] md:text-xs font-semibold text-muted-foreground/70 break-all leading-tight">
                    {EMAIL}
                  </p>
                </div>
              </div>
              <ArrowRight className="w-6 h-6 text-muted-foreground/30 shrink-0 transition-all duration-300 group-hover/mail:translate-x-2 group-hover/mail:text-primary" />
            </Button>
            
            <p className="text-[10px] md:text-[11px] text-center text-muted-foreground/40 mt-12 md:mt-16 font-black uppercase tracking-[0.5em] leading-relaxed">
              The premium standard in AI Voice
            </p>
          </div>
          
          {/* Spacing for mobile scrolling */}
          <div className="h-16 md:hidden" />
        </div>
      </DialogContent>
    </Dialog>
  )
}
