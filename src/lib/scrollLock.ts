/**
 * iOS-Safe Scroll Lock Utility
 * 
 * Standard document.body.style.overflow = 'hidden' causes severe layout thrashing
 * and freezes on iOS WebKit due to rubber-banding.
 * 
 * This utility implements the iOS Fixed Body pattern:
 * - Records window.scrollY
 * - Sets body to position: fixed; width: 100%; top: -${scrollY}px
 * - Restores position and scroll position smoothly upon release.
 */

let scrollY = 0;
let activeLocks = 0;

export function unlockScroll() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  
  if (activeLocks > 0) {
    activeLocks--;
  }
  
  if (activeLocks > 0) return; // Other modals still open

  const body = document.body;
  const docEl = document.documentElement;

  let targetScrollY = scrollY;
  if (body && body.style.top) {
    const parsed = parseInt(body.style.top, 10);
    if (!isNaN(parsed)) {
      targetScrollY = Math.abs(parsed);
    }
  }

  if (body) {
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";
    body.style.overflow = "";
    body.style.touchAction = "";
    
    // 🔴 THE FIX: FORCE iOS TO ALLOW CLICKS AGAIN
    body.style.pointerEvents = "auto"; 
    body.style.cursor = "auto";

    if (body.hasAttribute("data-scroll-locked")) {
      body.removeAttribute("data-scroll-locked");
    }
  }

  if (docEl) {
    docEl.style.overflow = "";
    // 🔴 THE FIX: UNLOCK THE HTML ROOT
    docEl.style.pointerEvents = "auto";
    if (docEl.hasAttribute("data-scroll-locked")) {
      docEl.removeAttribute("data-scroll-locked");
    }
  }

  // Restore scroll position
  window.scrollTo(0, targetScrollY);
}