
"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Play } from "lucide-react"

export function VideoDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  // Updated to Google Drive preview link for reliable embedding
  const VIDEO_URL = "https://drive.google.com/file/d/12jVxnIsvtIJo4xzKZzEIBEFns2v-Ocm1/preview"

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[850px] w-[95vw] rounded-[2rem] md:rounded-[3rem] p-0 border-none shadow-2xl overflow-hidden bg-[#FBFBF8] ring-1 ring-black/[0.05]">
        <div className="p-1 relative">
          {/* Subtle architectural glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="p-6 md:p-10">
            <DialogHeader className="mb-8 text-left relative z-10">
              <div className="flex items-center gap-4 mb-3">
                <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
                  <Play className="w-5 h-5 text-white fill-white" />
                </div>
                <div>
                  <DialogTitle className="text-2xl md:text-3xl font-black tracking-tight text-foreground leading-tight">Hana Live Demo</DialogTitle>
                </div>
              </div>
              <p className="text-muted-foreground/80 font-medium text-sm md:text-base max-w-lg leading-relaxed">
                Experience how Hana handles complex scheduling and triaging with human-like precision in this live demonstration.
              </p>
            </DialogHeader>
            
            <div className="relative aspect-video w-full rounded-2xl md:rounded-3xl overflow-hidden bg-black shadow-2xl ring-1 ring-black/10">
              <iframe 
                src={VIDEO_URL}
                className="absolute inset-0 w-full h-full border-none"
                allow="autoplay; fullscreen"
                title="Better Call Hana Demo"
              />
            </div>
          </div>
          
          <div className="pb-8 text-center relative z-10">
            <p className="text-[10px] font-black uppercase tracking-[0.5em] text-primary/20">
              The Gold Standard in AI Voice Reception
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
