
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
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Calendar, CheckCircle2 } from "lucide-react"

export function BookingDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const [step, setStep] = React.useState(1)
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
  })

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault()
    setStep(2)
  }

  return (
    <Dialog open={open} onOpenChange={(val) => {
      onOpenChange(val)
      if (!val) setStep(1)
    }}>
      <DialogContent className="sm:max-w-[440px] w-[95vw] sm:w-full rounded-[2rem] sm:rounded-[2.5rem] p-0 border-none shadow-2xl overflow-hidden">
        {/* Scrollable Container with consistent ROI-style logic */}
        <div className="max-h-[85vh] overflow-y-auto p-6 md:p-8 scrollbar-hide">
          {step === 1 ? (
            <div className="space-y-6">
              <DialogHeader className="text-left">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <Calendar className="w-5 h-5 text-primary" />
                </div>
                <DialogTitle className="text-2xl font-bold tracking-tight">Book a Demo</DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  Enter your details to view Hana's availability.
                </DialogDescription>
              </DialogHeader>
              
              <form onSubmit={handleNext} className="space-y-4">
                <div className="space-y-1.5">
                  <Label htmlFor="name" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">Business / Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Your Name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 rounded-xl bg-muted/40 border-transparent focus:bg-white transition-all text-base"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="email" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="name@business.com"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 rounded-xl bg-muted/40 border-transparent focus:bg-white transition-all text-base"
                  />
                </div>
                <div className="space-y-1.5">
                  <Label htmlFor="phone" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="(555) 000-0000"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="h-12 rounded-xl bg-muted/40 border-transparent focus:bg-white transition-all text-base"
                  />
                </div>
                <Button type="submit" className="w-full h-14 text-base font-bold rounded-full mt-4 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                  Continue to Calendar
                </Button>
                
                {/* Generous Keyboard Buffer - matches ROI calculator */}
                <div className="h-32 sm:hidden" />
              </form>
            </div>
          ) : (
            <div className="space-y-6">
              <DialogHeader className="text-left">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5 text-primary" />
                </div>
                <DialogTitle className="text-2xl font-bold tracking-tight">Select a Time</DialogTitle>
                <DialogDescription className="text-base text-muted-foreground">
                  Hana's schedule is synced. Pick a slot that works.
                </DialogDescription>
              </DialogHeader>
              <div className="aspect-[5/4] bg-muted/20 rounded-2xl flex flex-col items-center justify-center border border-border/50 overflow-hidden p-6 text-center">
                 <Calendar className="w-10 h-10 text-muted-foreground/20 mb-3" />
                 <p className="text-sm text-muted-foreground mb-5 font-medium">Your external booking calendar will be embedded here.</p>
                 <Button
                  variant="outline"
                  className="rounded-full h-10 px-6 text-sm font-bold border-primary text-primary hover:bg-primary/5 transition-colors"
                  onClick={() => window.open('https://calendly.com', '_blank')}
                 >
                   Open Scheduler
                 </Button>
              </div>
              <p className="text-[10px] text-center text-muted-foreground/60 mt-6 pb-4 font-medium uppercase tracking-widest">
                Booking confirmed instantly in our system
              </p>
              {/* Keyboard Buffer */}
              <div className="h-24 sm:hidden" />
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
