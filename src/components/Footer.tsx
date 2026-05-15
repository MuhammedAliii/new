"use client"

import NextLink from "next/link"
import { Heart } from "lucide-react"
import Image from "next/image"
import myLogo from "@/assets/4.png"

export function Footer() {
  const handleLogoClick = (e: React.MouseEvent) => {
    if (typeof window !== 'undefined' && window.location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="py-20 border-t border-border bg-white flex flex-col items-center text-center px-6">
      <div className="mb-10 relative group">
        <NextLink 
          href="/" 
          onClick={handleLogoClick}
          className="block transition-all duration-500 hover:scale-[1.05] active:scale-95"
        >
          <div className="flex flex-col items-center">
            <div className="relative">
              <Image 
                src={myLogo} 
                alt="Better Call Hana" 
                width={140} 
                height={40} 
                className="object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
              />
            </div>
          </div>
        </NextLink>
      </div>
      <div className="space-y-4">
        <p className="text-muted-foreground font-medium">Better Call Hana © 2026</p>
        <p className="text-sm text-muted-foreground/60 max-w-xs mx-auto">
          The premium AI voice solution for professional businesses.
        </p>
        <div className="flex gap-6 justify-center pt-4">
          <NextLink href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Privacy Policy
          </NextLink>
          <NextLink href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors">
            Terms of Service
          </NextLink>
        </div>
        <p className="text-[10px] text-muted-foreground/40 font-semibold uppercase tracking-widest pt-8 flex items-center justify-center gap-1.5">
          Made with <Heart className="w-3 h-3 fill-red-500 text-red-500" /> in Barcelona
        </p>
      </div>
    </footer>
  )
}
