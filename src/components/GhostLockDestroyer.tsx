"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function GhostLockDestroyer() {
  const pathname = usePathname();

  const destroyLocks = () => {
    // 1. Wipe the CSS Scroll Locks
    document.body.style.pointerEvents = "";
    document.body.style.overflow = "";
    document.body.style.position = "";
    document.body.style.touchAction = "";
    
    // 2. 🔴 CRITICAL FIX: Wipe the Radix UI layout-shift compensation margin!
    // If we don't clear this, the whole website shifts 15px to the left when unlocked.
    document.body.style.marginRight = "";
    document.body.style.paddingRight = "";
    
    // 3. Wipe the Radix tracking attributes
    document.body.removeAttribute("data-scroll-locked");
    
    // 4. Wipe the HTML root locks
    document.documentElement.style.pointerEvents = "";
    document.documentElement.style.overflow = "";
    document.documentElement.style.position = "";
    document.documentElement.style.touchAction = "";
  };

  // Nuke the lock every time you navigate to a new page
  useEffect(() => {
    destroyLocks();
  }, [pathname]);

  // Aggressive iPhone Touch Watchdog
  useEffect(() => {
    const handleTouch = () => {
      // 🔴 CRITICAL FIX: A tiny 50ms delay allows Radix closing animations to finish 
      // before we aggressively wipe the locks, preventing animation stutter.
      setTimeout(() => {
        // Check if a modal is actually open (Checking for 'dialog' or Radix 'data-state')
        const hasOpenModal = 
          document.querySelector('[role="dialog"]') !== null || 
          document.querySelector('[data-radix-focus-guard]') !== null;
        
        const isBodyLocked = 
          document.body.style.pointerEvents === 'none' || 
          document.body.style.overflow === 'hidden' || 
          document.body.hasAttribute('data-scroll-locked');

        // If the body is locked but NO modal is open, nuke the lock instantly.
        if (!hasOpenModal && isBodyLocked) {
          destroyLocks();
        }
      }, 50);
    };

    window.addEventListener("touchstart", handleTouch, { passive: true });
    window.addEventListener("touchend", handleTouch, { passive: true });
    
    return () => {
      window.removeEventListener("touchstart", handleTouch);
      window.removeEventListener("touchend", handleTouch);
    };
  }, []);

  return null;
}