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
import { TrendingDown, DollarSign } from "lucide-react"

export function ROICalculatorDialog({
  open,
  onOpenChange,
  onStartBooking,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onStartBooking?: () => void
}) {
  const [missedCalls, setMissedCalls] = React.useState<string>("")
  const [avgValue, setAvgValue] = React.useState<string>("")

  const numMissedCalls = parseFloat(missedCalls) || 0
  const numAvgValue = parseFloat(avgValue) || 0

  const weeklyLoss = numMissedCalls * numAvgValue
  const monthlyLoss = weeklyLoss * 4
  const yearlyLoss = monthlyLoss * 12

  const handleAction = () => {
    onOpenChange(false)
    if (onStartBooking) {
      onStartBooking()
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[440px] w-[95vw] sm:w-full rounded-[2rem] sm:rounded-[2.5rem] p-0 border-none shadow-2xl overflow-hidden">
        {/* Scrollable Container with keyboard padding */}
        <div className="max-h-[85vh] overflow-y-auto p-6 md:p-8 scrollbar-hide">
          <DialogHeader className="mb-6 text-left">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
              <DollarSign className="w-5 h-5 text-primary" />
            </div>
            <DialogTitle className="text-2xl font-bold tracking-tight">ROI Calculator</DialogTitle>
            <DialogDescription className="text-base text-muted-foreground">
              Estimate the revenue you're losing to missed calls.
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-4">
            <div className="space-y-1.5">
              <Label htmlFor="missedCalls" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">Missed Calls Per Week</Label>
              <Input
                id="missedCalls"
                type="number"
                value={missedCalls}
                onChange={(e) => setMissedCalls(e.target.value)}
                className="h-12 rounded-xl bg-muted/40 border-transparent focus:bg-white transition-all text-base"
                placeholder="e.g. 20"
              />
            </div>
            
            <div className="space-y-1.5">
              <Label htmlFor="avgValue" className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60 ml-1">Avg. Revenue Per Session ($)</Label>
              <Input
                id="avgValue"
                type="number"
                value={avgValue}
                onChange={(e) => setAvgValue(e.target.value)}
                className="h-12 rounded-xl bg-muted/40 border-transparent focus:bg-white transition-all text-base"
                placeholder="e.g. 150"
              />
            </div>

            <div className="mt-6 p-5 rounded-2xl bg-primary/5 border border-primary/10 space-y-4">
              <div className="flex items-center gap-2.5 text-primary mb-1">
                <TrendingDown className="w-4 h-4" />
                <span className="font-bold uppercase tracking-[0.15em] text-[10px]">Projected Revenue Loss</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="p-3.5 bg-white rounded-xl shadow-sm border border-primary/5">
                  <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest mb-1">Monthly Loss</p>
                  <p className="text-xl font-black text-primary leading-none">
                    ${monthlyLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </p>
                </div>
                <div className="p-3.5 bg-white rounded-xl shadow-sm border border-primary/5">
                  <p className="text-[9px] text-muted-foreground font-bold uppercase tracking-widest mb-1">Yearly Loss</p>
                  <p className="text-xl font-black text-primary leading-none">
                    ${yearlyLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </p>
                </div>
              </div>
            </div>

            <Button 
              className="w-full h-14 text-base font-bold rounded-full mt-4 shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
              onClick={handleAction}
            >
              Recover This Revenue with Hana
            </Button>

            {/* Keyboard Buffer - important for mobile */}
            <div className="h-24 sm:hidden" />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}