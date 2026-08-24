"use client"

import * as React from "react"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Play, Pause, Volume2, VolumeX, RotateCcw, Phone, Activity } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/context/LanguageContext"

export function VideoDialog({
  open,
  onOpenChange,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
}) {
  const { t } = useLanguage()
  const AUDIO_SRC = "/api/audio"
  const [isPlaying, setIsPlaying] = React.useState(false)
  const [currentTime, setCurrentTime] = React.useState(0)
  const [totalDuration, setTotalDuration] = React.useState(78)
  const [isMuted, setIsMuted] = React.useState(false)

  const audioRef = React.useRef<HTMLAudioElement | null>(null)
  const barCount = 32

  // 🔴 FIX 1: Brute-force iOS cleanup when the video modal closes normally
  const handleOpenChange = (isOpen: boolean) => {
    onOpenChange(isOpen);
    if (!isOpen) {
      setTimeout(() => {
        document.body.style.pointerEvents = 'auto';
        document.body.style.overflow = '';
        document.documentElement.style.pointerEvents = 'auto';
        
        if (document.body.hasAttribute('data-scroll-locked')) {
          document.body.removeAttribute('data-scroll-locked');
        }
      }, 10);
    }
  };

  // 🔴 FIX 2: Safe Native App Trigger for the "Call Live" button
  const handleAction = (url: string) => {
    handleOpenChange(false); 
    
    setTimeout(() => {
      window.location.href = url;
    }, 150);
  };

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      audioRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch((err) => {
        console.warn("Audio play gesture required:", err)
      })
    }
  }

  const restartAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      audioRef.current.play().then(() => {
        setIsPlaying(true)
      }).catch(() => {})
    }
    setCurrentTime(0)
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration) && audioRef.current.duration > 0) {
      setTotalDuration(Math.floor(audioRef.current.duration))
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setCurrentTime(0)
  }

  // Stop audio when dialog closes or auto-play on open
  React.useEffect(() => {
    if (!open) {
      setIsPlaying(false)
      setCurrentTime(0)
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
    } else {
      if (audioRef.current) {
        audioRef.current.play().then(() => {
          setIsPlaying(true)
        }).catch(() => {
          setIsPlaying(false)
        })
      }
    }
  }, [open])

  // 🔴 FIX 5: THE NUCLEAR UNMOUNT FAILSAFE
  // Guarantees the iPhone screen unlocks if the user hits the browser "Back" arrow
  React.useEffect(() => {
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.pointerEvents = 'auto';
        document.body.style.overflow = '';
        document.documentElement.style.pointerEvents = 'auto';
        if (document.body.hasAttribute('data-scroll-locked')) {
          document.body.removeAttribute('data-scroll-locked');
        }
      }
    };
  }, []);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60)
    const remainingSecs = Math.floor(secs % 60)
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      {/* 🔴 FIX 3: Prevent iOS focus trap loops */}
      <DialogContent 
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={(e) => e.preventDefault()}
        className="w-[90vw] sm:w-[90%] max-w-[540px] rounded-[24px] p-0 border border-cyan-500/30 shadow-[0_30px_100px_-15px_rgba(2,8,16,0.95)] overflow-hidden bg-[#08182b] md:bg-gradient-to-b md:from-[#08182b] md:via-[#091f35] md:to-[#061423] md:backdrop-blur-3xl text-white"
      >
        <audio 
          ref={audioRef} 
          src={AUDIO_SRC}
          preload="none"
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        <div className="hidden md:block absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-cyan-400/20 via-teal-400/10 to-transparent rounded-full blur-[70px]" />
          <div className="absolute bottom-0 left-0 w-[260px] h-[260px] bg-teal-500/15 rounded-full blur-[70px]" />
        </div>

        <div className="relative z-10 p-5 sm:p-7 flex flex-col gap-4 sm:gap-5 touch-auto">
          <div className="flex items-center justify-between gap-3 p-3.5 rounded-xl bg-white/[0.04] border border-cyan-400/20 md:backdrop-blur-md">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.35)] shrink-0">
                <Activity className="w-4 h-4 text-slate-950" />
              </div>
              <div className="text-left">
                <DialogTitle data-i18n="videoModal.title" className="text-lg sm:text-xl font-black tracking-tight text-white leading-tight">
                  {t('videoModal.title', 'Hana Voice Demo')}
                </DialogTitle>
              </div>
            </div>

            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-[10px] font-mono font-bold tracking-wider">
              <span className="relative flex h-2 w-2">
                {isPlaying && (
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                )}
                <span className={`relative inline-flex rounded-full h-2 w-2 ${isPlaying ? 'bg-cyan-400' : 'bg-slate-500'}`} />
              </span>
              <span data-i18n={isPlaying ? "videoModal.live" : "videoModal.paused"}>
                {isPlaying ? t('videoModal.live', 'LIVE') : t('videoModal.paused', 'PAUSED')}
              </span>
            </div>
          </div>

          <div className="relative rounded-2xl bg-[#040d18]/90 border border-cyan-500/25 p-5 sm:p-6 shadow-[inset_0_2px_24px_rgba(0,0,0,0.7)] backdrop-blur-2xl flex flex-col items-center justify-center gap-4">
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 h-36 rounded-full blur-[40px] pointer-events-none transition-all duration-500 ${
              isPlaying ? 'bg-cyan-400/20 scale-125' : 'bg-cyan-400/5 scale-90'
            }`} />

            <div className="relative z-10 w-full flex items-center justify-center gap-1 sm:gap-2 h-20 sm:h-24 px-1">
              {Array.from({ length: barCount }).map((_, index) => {
                const distanceFromCenter = Math.abs(index - barCount / 2) / (barCount / 2)
                const baseHeightPercent = Math.max(16, (1 - distanceFromCenter) * 85)
                const speed = 0.6 + ((index % 4) * 0.25)

                return (
                  <div
                    key={index}
                    className="relative flex flex-col justify-center items-center h-full flex-1 max-w-[7px]"
                  >
                    <div
                      className={`w-full rounded-full transition-all duration-150 ease-out ${
                        isPlaying 
                          ? 'bg-gradient-to-t from-teal-400 via-cyan-300 to-sky-100 shadow-[0_0_12px_rgba(34,211,238,0.75)]' 
                          : 'bg-slate-700/60 shadow-none'
                      }`}
                      style={{
                        height: isPlaying 
                          ? `${Math.max(14, (baseHeightPercent * (0.35 + Math.sin(currentTime * speed + index * 0.8) * 0.65)))}%` 
                          : '12%',
                      }}
                    />
                  </div>
                )
              })}
            </div>

            <div className="w-full relative z-10 space-y-1.5 pt-1">
              <div 
                className="relative h-2 bg-white/10 hover:bg-white/15 rounded-full overflow-hidden cursor-pointer transition-colors touch-manipulation"
                onClick={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect()
                  const clickX = e.clientX - rect.left
                  const newProgress = Math.max(0, Math.min(1, clickX / rect.width))
                  const newTime = newProgress * totalDuration
                  setCurrentTime(newTime)
                  if (audioRef.current && !isNaN(newTime)) {
                    audioRef.current.currentTime = newTime
                  }
                }}
              >
                <div 
                  className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-teal-400 via-cyan-300 to-cyan-400 rounded-full transition-all duration-200 shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                  style={{ width: `${(currentTime / totalDuration) * 100}%` }}
                />
              </div>

              <div className="flex items-center justify-between text-[11px] font-mono text-slate-300 px-0.5">
                <span>{formatTime(currentTime)}</span>
                <span className="text-slate-400">{formatTime(totalDuration)}</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 items-center p-3 rounded-xl bg-white/[0.04] border border-cyan-400/20 backdrop-blur-md">
            <div className="flex items-center gap-1 sm:gap-2 justify-start">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full w-9 h-9 text-slate-300 hover:text-white hover:bg-white/10 transition-colors touch-manipulation"
                onClick={restartAudio}
                data-i18n-title="videoModal.restart"
                title={t('videoModal.restart', 'Restart')}
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full w-9 h-9 text-slate-300 hover:text-white hover:bg-white/10 transition-colors touch-manipulation"
                onClick={() => setIsMuted(!isMuted)}
                data-i18n-title={isMuted ? "videoModal.unmute" : "videoModal.mute"}
                title={isMuted ? t('videoModal.unmute', 'Unmute') : t('videoModal.mute', 'Mute')}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
              </Button>
            </div>

            <div className="flex justify-center">
              <Button
                id="audio-dialog-play-toggle"
                className="min-h-10 sm:min-h-11 h-auto py-1.5 px-3.5 sm:px-5 rounded-full bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 text-slate-950 font-bold shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 border border-cyan-100/40 cursor-pointer touch-manipulation text-center whitespace-normal leading-snug"
                onClick={togglePlay}
              >
                <div className="flex items-center justify-center gap-1.5 flex-wrap">
                  {isPlaying ? (
                    <>
                      <Pause className="w-3.5 h-3.5 fill-slate-950 text-slate-950 shrink-0" />
                      <span data-i18n="videoModal.pause" className="text-[11px] uppercase tracking-wider font-extrabold">
                        {t('videoModal.pause', 'Pause')}
                      </span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3.5 h-3.5 fill-slate-950 text-slate-950 ml-0.5 shrink-0 rtl-flip" />
                      <span data-i18n="videoModal.play" className="text-[11px] uppercase tracking-wider font-extrabold">
                        {t('videoModal.play', 'Play')}
                      </span>
                    </>
                  )}
                </div>
              </Button>
            </div>

            <div className="flex justify-end">
              {/* 🔴 FIX 4: Safe Trigger for the Dialer App */}
              <Button
                variant="outline"
                className="rounded-full px-2.5 sm:px-3.5 min-h-8 sm:min-h-9 h-auto py-1 text-[11px] font-bold bg-white/[0.05] border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-cyan-950/80 hover:border-cyan-400 transition-all duration-300 hidden sm:inline-flex items-center gap-1.5 cursor-pointer touch-manipulation text-center whitespace-normal leading-snug"
                onClick={() => handleAction("tel:+13109062504")}
              >
                <Phone className="w-3 h-3 shrink-0 rtl-flip" />
                <span data-i18n="videoModal.callLive">{t('videoModal.callLive', 'Call Live')}</span>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}