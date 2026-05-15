"use client"

import { useState } from "react"
import { Check, X, ArrowDownRight, TrendingUp, Zap, Clock, Calendar, UserCheck } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ROICalculatorDialog } from "./ROICalculatorDialog"
import { BookingDialog } from "./BookingDialog"

export function ImpactSection() {
  const [isROIOpen, setIsROIOpen] = useState(false)
  const [isBookingOpen, setIsBookingOpen] = useState(false)

  return (
    <section id="business-impact" className="py-24 md:py-32 bg-[#FBFBF8] overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-3xl md:text-5xl font-black mb-6 leading-tight">
            See the Impact on <span className="text-primary">Your</span> Business.
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground font-medium max-w-2xl mx-auto leading-relaxed">
            Missed calls aren't just missed conversations—they are missed revenue opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-10 mb-16 md:mb-20">
          {/* Card: Without Hana */}
          <Card className="group relative p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-white border-none shadow-sm transition-all duration-700 ease-in-out hover:shadow-xl hover:scale-[1.02] hover:-translate-y-2 overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-red-50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-600 text-[10px] font-bold uppercase tracking-widest mb-6">
                <X className="w-3 h-3" />
                Traditional Front Desk
              </div>

              <div className="w-14 h-14 bg-red-50 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[-6deg]">
                <ArrowDownRight className="text-red-500 w-7 h-7" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-6">The Cost of Waiting</h3>
              
              <ul className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                    <X className="w-3 h-3 text-red-600" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">~30 Missed Calls / Week</p>
                    <p className="text-sm text-muted-foreground">Patients hang up after 4 rings</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-1">
                    <X className="w-3 h-3 text-red-600" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Human Limitations</p>
                    <p className="text-sm text-muted-foreground">Staff get sick, need sleep, and take vacations</p>
                  </div>
                </li>
              </ul>

              <div className="pt-6 border-t border-border/50">
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-1">Estimated Monthly Loss</p>
                <p className="text-3xl md:text-4xl font-black text-red-600">$22,500+</p>
              </div>
            </div>
          </Card>

          {/* Card: With Hana */}
          <Card className="group relative p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] bg-white border-none shadow-2xl transition-all duration-700 ease-in-out hover:shadow-[0_40px_80px_-15px_rgba(18,160,153,0.25)] hover:scale-[1.04] hover:-translate-y-3 overflow-hidden ring-1 ring-primary/5">
            <div className="absolute top-0 right-0 w-48 h-48 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 transition-all duration-700 group-hover:scale-150 group-hover:bg-primary/20" />
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-white text-[10px] font-bold uppercase tracking-widest mb-6 shadow-lg shadow-primary/20">
                <Zap className="w-3 h-3 fill-white" />
                The Hana Standard
              </div>

              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mb-6 shadow-xl shadow-primary/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[6deg]">
                <Check className="text-white w-8 h-8" />
              </div>

              <h3 className="text-2xl md:text-3xl font-bold mb-6">Maximum Efficiency</h3>
              
              <ul className="space-y-4 md:space-y-6 mb-8 md:mb-10">
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">100% Call Response Rate</p>
                    <p className="text-sm text-muted-foreground">Every call answered on ring one</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                    <UserCheck className="w-3 h-3" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Indestructible Reliability</p>
                    <p className="text-sm text-muted-foreground">No sick days, no burnout, no vacations</p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-1 text-primary">
                    <Clock className="w-3 h-3" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground">Instant 24/7 Availability</p>
                    <p className="text-sm text-muted-foreground">Nights, weekends, and holidays covered</p>
                  </div>
                </li>
              </ul>

              <div className="pt-6 border-t border-border/50">
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1">Revenue Captured</p>
                <div className="flex items-baseline gap-2">
                  <p className="text-3xl md:text-4xl font-black text-primary">100%</p>
                  <TrendingUp className="w-5 h-5 text-primary animate-bounce" />
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center flex flex-col items-center gap-8">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground font-bold">Total Potential Business Growth</p>
            <p className="text-4xl md:text-6xl font-black text-foreground tabular-nums tracking-tight">
              $270,000<span className="text-primary">+</span><span className="text-xl md:text-2xl text-muted-foreground/40 ml-2">/yr</span>
            </p>
          </div>
          <Button 
            size="lg" 
            className="rounded-full px-12 h-16 text-lg font-bold bg-primary text-white hover:scale-105 active:scale-95 transition-all shadow-[0_20px_40px_-10px_rgba(18,160,153,0.4)] group"
            onClick={() => setIsROIOpen(true)}
          >
            Calculate Your ROI
            <TrendingUp className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Button>
        </div>
      </div>
      <ROICalculatorDialog 
        open={isROIOpen} 
        onOpenChange={setIsROIOpen} 
        onStartBooking={() => setIsBookingOpen(true)}
      />
      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
    </section>
  )
}
