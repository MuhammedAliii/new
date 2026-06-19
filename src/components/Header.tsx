
"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { BookingDialog } from "./BookingDialog"
import { VideoDialog } from "./VideoDialog"
import Image from "next/image"
import myLogo from "@/assets/3.png"

export function Header() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLogoClick = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header 
      className="fixed top-0 left-0 right-0 w-full z-50 py-4 md:py-6 transition-all duration-300 ease-in-out bg-background/98 backdrop-blur-xl border-b border-border/10 shadow-sm ring-1 ring-black/[0.01]"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex flex-col items-center gap-3 md:gap-6 transition-all duration-500">
        {/* Logo - Centered at Top */}
        <div className={`transition-all duration-700 ease-out transform ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <Link 
            href="/" 
            onClick={handleLogoClick}
            className="group relative block transition-all duration-500 hover:scale-[1.02] active:scale-95"
          >
            <div className="relative w-[160px] h-[46px] md:w-[220px] md:h-[64px]">
              <Image 
                src={myLogo} 
                alt="Better Call Hana" 
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>
        </div>

        {/* Navigation - Centered Underneath */}
        <div className={`flex items-center gap-4 md:gap-8 transition-all duration-700 delay-200 transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <nav className="hidden lg:flex items-center gap-10">
            <Link href="/#how-it-works" className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-all">
              Process
            </Link>
            <button 
              onClick={() => setIsVideoOpen(true)}
              className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-all"
            >
              Live Demo
            </button>
            <Link href="/#business-impact" className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-all">
              Impact
            </Link>
            <Link href="/#contact" className="text-[11px] font-bold uppercase tracking-[0.2em] text-foreground/70 hover:text-primary transition-all">
              Contact
            </Link>
          </nav>
          
          <div className="hidden lg:block w-px h-5 bg-border/60 mx-1" />
          
          <Button 
            className="rounded-full px-5 md:px-6 h-9 md:h-10 text-[10px] md:text-[11px] font-bold uppercase tracking-[0.2em] bg-primary text-white hover:scale-105 active:scale-95 transition-all shadow-lg shadow-primary/20"
            onClick={() => setIsBookingOpen(true)}
          >
            Book Demo
          </Button>
        </div>
      </div>
      <BookingDialog open={isBookingOpen} onOpenChange={setIsBookingOpen} />
      <VideoDialog open={isVideoOpen} onOpenChange={setIsVideoOpen} />
    </header>
  )
}
