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
import { useLanguage } from "@/context/LanguageContext"

export function ROICalculatorDialog({
  open,
  onOpenChange,
  onStartBooking,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  onStartBooking?: () => void
}) {
  const { t } = useLanguage()
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
      <DialogContent className="w-[90vw] sm:w-[90%] max-w-[420px] rounded-[24px] p-0 border border-cyan-500/30 shadow-[0_25px_90px_-15px_rgba(2,8,16,0.95)] overflow-hidden bg-[#08182b] md:bg-gradient-to-b md:from-[#08182b]/95 md:via-[#0b223a]/95 md:to-[#071526]/95 md:backdrop-blur-3xl text-white">
        {/* Ambient Glows */}
        <div className="hidden md:block absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[300px] h-[300px] bg-gradient-to-bl from-teal-400/20 to-transparent rounded-full blur-[70px] pointer-events-none" />
        
        {/* Scrollable Container with keyboard padding */}
        <div className="max-h-[88vh] overflow-y-auto p-5 sm:p-7 md:p-8 scrollbar-hide relative z-10">
          <DialogHeader className="mb-5 text-left">
            <div className="w-11 h-11 bg-gradient-to-br from-teal-400/20 to-cyan-400/10 border border-cyan-400/30 rounded-xl flex items-center justify-center mb-3 shadow-[0_0_20px_rgba(34,211,238,0.2)]">
              <DollarSign className="w-5 h-5 text-cyan-300" />
            </div>
            <DialogTitle data-i18n="roiModal.title" className="text-xl sm:text-2xl font-black tracking-tight text-white">
              {t('roiModal.title', 'ROI Calculator')}
            </DialogTitle>
            <DialogDescription data-i18n="roiModal.description" className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed">
              {t('roiModal.description', 'Estimate the hidden revenue leaking from missed calls.')}
            </DialogDescription>
          </DialogHeader>
          
          <div className="space-y-3.5">
            <div className="space-y-1">
              <Label htmlFor="missedCalls" data-i18n="roiModal.missedCallsLabel" className="text-[10px] font-bold uppercase tracking-widest text-cyan-300/80 ml-1">
                {t('roiModal.missedCallsLabel', 'Estimated Missed Calls / Week')}
              </Label>
              <Input
                id="missedCalls"
                type="number"
                value={missedCalls}
                onChange={(e) => setMissedCalls(e.target.value)}
                data-i18n-placeholder="roiModal.missedCallsPlaceholder"
                placeholder={t('roiModal.missedCallsPlaceholder', 'e.g. 25')}
                className="h-11 sm:h-12 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:bg-white/[0.09] transition-all text-sm sm:text-base px-3.5"
              />
            </div>
            
            <div className="space-y-1">
              <Label htmlFor="avgValue" data-i18n="roiModal.avgValueLabel" className="text-[10px] font-bold uppercase tracking-widest text-cyan-300/80 ml-1">
                {t('roiModal.avgValueLabel', 'Avg. Revenue Per Client / Session ($)')}
              </Label>
              <Input
                id="avgValue"
                type="number"
                value={avgValue}
                onChange={(e) => setAvgValue(e.target.value)}
                data-i18n-placeholder="roiModal.avgValuePlaceholder"
                placeholder={t('roiModal.avgValuePlaceholder', 'e.g. 180')}
                className="h-11 sm:h-12 rounded-xl bg-white/[0.06] border border-white/15 text-white placeholder:text-slate-500 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-400/20 focus:bg-white/[0.09] transition-all text-sm sm:text-base px-3.5"
              />
            </div>

            {/* Projected Loss Results Box */}
            <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-400/20 space-y-3 backdrop-blur-md">
              <div className="flex items-center gap-1.5 text-red-400 mb-0.5">
                <TrendingDown className="w-3.5 h-3.5" />
                <span data-i18n="roiModal.lossTitle" className="font-bold uppercase tracking-[0.15em] text-[9px]">
                  {t('roiModal.lossTitle', 'Projected Revenue Loss')}
                </span>
              </div>
              
              <div className="grid grid-cols-2 gap-2.5">
                <div className="p-3 bg-black/40 rounded-lg border border-red-500/15">
                  <p data-i18n="roiModal.monthlyLoss" className="text-[8.5px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">
                    {t('roiModal.monthlyLoss', 'Monthly Loss')}
                  </p>
                  <p className="text-lg sm:text-xl font-black text-rose-400 leading-none">
                    ${monthlyLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </p>
                </div>
                <div className="p-3 bg-black/40 rounded-lg border border-red-500/15">
                  <p data-i18n="roiModal.yearlyLoss" className="text-[8.5px] text-slate-400 font-bold uppercase tracking-widest mb-0.5">
                    {t('roiModal.yearlyLoss', 'Yearly Loss')}
                  </p>
                  <p className="text-lg sm:text-xl font-black text-rose-400 leading-none">
                    ${yearlyLoss.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                  </p>
                </div>
              </div>
            </div>

            <Button 
              id="modal-recover-roi-btn"
              data-i18n="roiModal.recoverBtn"
              className="w-full min-h-12 h-auto py-3 px-4 text-xs sm:text-sm font-bold rounded-full mt-3 bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 text-slate-950 shadow-[0_0_30px_rgba(34,211,238,0.4)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 border border-cyan-100/40 cursor-pointer text-center whitespace-normal leading-snug"
              onClick={handleAction}
            >
              <span>{t('roiModal.recoverBtn', 'Recover This Revenue with Hana')}</span>
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}