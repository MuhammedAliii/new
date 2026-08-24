/**
 * iOS-Safe Scroll Lock Utility
 * 
 * Standard document.body.style.overflow = 'hidden' causes severe layout thrashing
 * and freezes on iOS WebKit due to rubber-banding.
 */

let scrollY = 0;

export function lockScroll() {
  if (typeof window === "undefined" || typeof document === "undefined") return;
  
  const body = document.body;
  const docEl = document.documentElement;

  // 🔴 FIX 1: Read the actual HTML DOM instead of a fake JS counter. 
  // This guarantees it never gets permanently out of sync with the GhostLockDestroyer.
  if (body.hasAttribute("data-scroll-locked")) return; 

  scrollY = window.scrollY || window.pageYOffset || document.documentElement.scrollTop || 0;
  
  // 🔴 FIX 2: Calculate the scrollbar width so the website doesn't jump horizontally!
  const scrollBarWidth = window.innerWidth - docEl.clientWidth;

  if (body) {
    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
    
    // Apply padding to replace the missing scrollbar
    if (scrollBarWidth > 0) {
      body.style.paddingRight = `${scrollBarWidth}px`;
    }
    
    body.setAttribute("data-scroll-locked", "true");
  }
  if (docEl) {
    docEl.style.overflow = "hidden";
    docEl.setAttribute("data-scroll-locked", "true");
  }
}

export function unlockScroll() {
  executeUnlock(false);
}

export function clearAllScrollLocks(skipScrollRestore = true) {
  executeUnlock(skipScrollRestore);
}

// The core unlock logic separated so it can be called safely
function executeUnlock(skipScrollRestore: boolean) {
  if (typeof window === "undefined" || typeof document === "undefined") return;

  const body = document.body;
  const docEl = document.documentElement;

  // If it's not actually locked, do nothing.
  if (!body || !body.hasAttribute("data-scroll-locked")) return;

  let targetScrollY = scrollY;
  if (body.style.top) {
    const parsed = parseInt(body.style.top, 10);
    if (!isNaN(parsed)) {
      targetScrollY = Math.abs(parsed);
    }
  }

  // 🔴 FIX 3: Completely clear all inline styles, including the scrollbar padding.
  if (body) {
    body.style.position = "";
    body.style.top = "";
    body.style.left = "";
    body.style.right = "";
    body.style.width = "";
    body.style.overflow = "";
    body.style.touchAction = "";
    body.style.pointerEvents = ""; 
    body.style.cursor = "";
    body.style.paddingRight = ""; // Wipe the layout jump compensation
    body.removeAttribute("data-scroll-locked");
  }

  if (docEl) {
    docEl.style.overflow = "";
    docEl.style.pointerEvents = "";
    docEl.removeAttribute("data-scroll-locked");
  }

  // Only restore the scroll position if we are NOT changing pages
  if (!skipScrollRestore) {
    window.scrollTo({ top: targetScrollY, behavior: 'instant' });
  }
}