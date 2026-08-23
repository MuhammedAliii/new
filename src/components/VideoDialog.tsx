
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

  // Handle Play/Pause
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

  // Handle audio time updates
  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  // Handle audio metadata loaded (for real duration)
  const handleLoadedMetadata = () => {
    if (audioRef.current && !isNaN(audioRef.current.duration) && audioRef.current.duration > 0) {
      setTotalDuration(Math.floor(audioRef.current.duration))
    }
  }

  // Handle audio end
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

  // Format seconds to mm:ss
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60)
    const remainingSecs = Math.floor(secs % 60)
    return `${mins.toString().padStart(2, '0')}:${remainingSecs.toString().padStart(2, '0')}`
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[640px] w-[95vw] rounded-[2.5rem] p-0 border border-cyan-500/30 shadow-[0_30px_100px_-15px_rgba(2,8,16,0.95)] overflow-hidden bg-gradient-to-b from-[#08182b] via-[#091f35] to-[#061423] backdrop-blur-3xl text-white">
        {/* Real Audio element configured with stream endpoint */}
        <audio 
          ref={audioRef} 
          src={AUDIO_SRC}
          preload="auto"
          muted={isMuted}
          onTimeUpdate={handleTimeUpdate}
          onLoadedMetadata={handleLoadedMetadata}
          onEnded={handleEnded}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Ambient Holographic Radial Glow */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
          <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-bl from-cyan-400/20 via-teal-400/10 to-transparent rounded-full blur-[70px]" />
          <div className="absolute bottom-0 left-0 w-[260px] h-[260px] bg-teal-500/15 rounded-full blur-[70px]" />
        </div>

        {/* Precision Structured Grid Container */}
        <div className="relative z-10 p-6 md:p-8 flex flex-col gap-6">
          {/* Header Card: Anchored, Balanced, High-Contrast */}
          <div className="flex items-center justify-between gap-4 p-4 rounded-2xl bg-white/[0.04] border border-cyan-400/20 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.35)] shrink-0">
                <Activity className="w-5 h-5 text-slate-950" />
              </div>
              <div className="text-left">
                <DialogTitle data-i18n="videoModal.title" className="text-xl md:text-2xl font-black tracking-tight text-white leading-tight">
                  {t('videoModal.title', 'Hana Voice Demo')}
                </DialogTitle>
              </div>
            </div>

            {/* Live Indicator Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/30 text-cyan-300 text-[11px] font-mono font-bold tracking-wider">
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

          {/* Visualizer Stage Card: Symmetrical, Clean, No Subtitles */}
          <div className="relative rounded-3xl bg-[#040d18]/90 border border-cyan-500/25 p-6 md:p-8 shadow-[inset_0_2px_24px_rgba(0,0,0,0.7)] backdrop-blur-2xl flex flex-col items-center justify-center gap-6">
            {/* Center Neon Pulse Aura */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 rounded-full blur-[50px] pointer-events-none transition-all duration-500 ${
              isPlaying ? 'bg-cyan-400/20 scale-125' : 'bg-cyan-400/5 scale-90'
            }`} />

            {/* Waveform Frequency Bars */}
            <div className="relative z-10 w-full flex items-center justify-center gap-1.5 md:gap-2.5 h-28 md:h-32 px-2">
              {Array.from({ length: barCount }).map((_, index) => {
                const distanceFromCenter = Math.abs(index - barCount / 2) / (barCount / 2)
                const baseHeightPercent = Math.max(16, (1 - distanceFromCenter) * 85)
                const speed = 0.6 + ((index % 4) * 0.25)

                return (
                  <div
                    key={index}
                    className="relative flex flex-col justify-center items-center h-full flex-1 max-w-[8px]"
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

            {/* Anchored Timeline Scrubber */}
            <div className="w-full relative z-10 space-y-2 pt-2">
              <div 
                className="relative h-2 bg-white/10 hover:bg-white/15 rounded-full overflow-hidden cursor-pointer transition-colors"
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

              {/* Time Indicators */}
              <div className="flex items-center justify-between text-xs font-mono text-slate-300 px-0.5">
                <span>{formatTime(currentTime)}</span>
                <span className="text-slate-400">{formatTime(totalDuration)}</span>
              </div>
            </div>
          </div>

          {/* Controls Deck Card: Symmetrical & Rock-Solid */}
          <div className="grid grid-cols-3 items-center p-3.5 rounded-2xl bg-white/[0.04] border border-cyan-400/20 backdrop-blur-md">
            {/* Left Controls */}
            <div className="flex items-center gap-2 justify-start">
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full w-10 h-10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                onClick={restartAudio}
                data-i18n-title="videoModal.restart"
                title={t('videoModal.restart', 'Restart')}
              >
                <RotateCcw className="w-4 h-4" />
              </Button>
              <Button
                size="icon"
                variant="ghost"
                className="rounded-full w-10 h-10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                onClick={() => setIsMuted(!isMuted)}
                data-i18n-title={isMuted ? "videoModal.unmute" : "videoModal.mute"}
                title={isMuted ? t('videoModal.unmute', 'Unmute') : t('videoModal.mute', 'Mute')}
              >
                {isMuted ? <VolumeX className="w-4 h-4 text-rose-400" /> : <Volume2 className="w-4 h-4" />}
              </Button>
            </div>

            {/* Center Play/Pause Button */}
            <div className="flex justify-center">
              <Button
                id="audio-dialog-play-toggle"
                className="min-h-11 sm:min-h-12 h-auto py-2 px-4 sm:px-6 rounded-full bg-gradient-to-r from-teal-400 via-cyan-300 to-teal-400 text-slate-950 font-bold shadow-[0_0_25px_rgba(34,211,238,0.45)] hover:shadow-[0_0_35px_rgba(34,211,238,0.7)] hover:scale-105 active:scale-95 transition-all duration-300 border border-cyan-100/40 cursor-pointer text-center whitespace-normal leading-snug"
                onClick={togglePlay}
              >
                <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
                  {isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 fill-slate-950 text-slate-950 shrink-0" />
                      <span data-i18n="videoModal.pause" className="text-xs uppercase tracking-wider font-extrabold">
                        {t('videoModal.pause', 'Pause')}
                      </span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 fill-slate-950 text-slate-950 ml-0.5 shrink-0 rtl-flip" />
                      <span data-i18n="videoModal.play" className="text-xs uppercase tracking-wider font-extrabold">
                        {t('videoModal.play', 'Play')}
                      </span>
                    </>
                  )}
                </div>
              </Button>
            </div>

            {/* Right Call CTA */}
            <div className="flex justify-end">
              <Button
                variant="outline"
                className="rounded-full px-3 sm:px-4 min-h-9 h-auto py-1.5 text-xs font-bold bg-white/[0.05] border-cyan-500/30 text-cyan-300 hover:text-white hover:bg-cyan-950/80 hover:border-cyan-400 transition-all duration-300 hidden sm:inline-flex items-center gap-1.5 cursor-pointer text-center whitespace-normal leading-snug"
                onClick={() => window.location.href = "tel:+13109062504"}
              >
                <Phone className="w-3.5 h-3.5 shrink-0 rtl-flip" />
                <span data-i18n="videoModal.callLive">{t('videoModal.callLive', 'Call Live')}</span>
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

