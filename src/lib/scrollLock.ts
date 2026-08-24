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

export function lockScroll() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  
  activeLocks++;
  if (activeLocks > 1) return; // Already locked by another dialog

  scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
  
  const body = document.body;
  const docEl = document.documentElement;

  if (body) {
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
    body.setAttribute("data-scroll-locked", "true");
  }
  if (docEl) {
    docEl.style.overflow = "hidden";
    docEl.setAttribute("data-scroll-locked", "true");
  }
}

export function unlockScroll() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  
  if (activeLocks > 0) {
    activeLocks--;
  }
  
  if (activeLocks > 0) return; // Other modals still open

  executeUnlock();
}

// 🔴 THE FIX: Nuclear global unlock. 
// If Next.js routing breaks the activeLocks counter, this physically forces the screen to unlock.
export function clearAllScrollLocks() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  activeLocks = 0;
  executeUnlock();
}

// The core unlock logic separated so it can be called safely
function executeUnlock() {
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
    // 🔴 THE FIX: Fully clear all inline styles instead of setting "auto"
    // This stops our JS from fighting your Tailwind CSS framework
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";
    body.style.overflow = "";
    body.style.touchAction = "";
    body.style.pointerEvents = ""; 
    body.style.cursor = "";

    if (body.hasAttribute("data-scroll-locked")) {
      body.removeAttribute("data-scroll-locked");
    }
  }

  if (docEl) {
    docEl.style.overflow = "";
    docEl.style.pointerEvents = "";
    
    if (docEl.hasAttribute("data-scroll-locked")) {
      docEl.removeAttribute("data-scroll-locked");
    }
  }

  // Restore the scroll position exactly where the user left off
  window.scrollTo(0, targetScrollY);
}