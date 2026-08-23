"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const unlockBodyScroll = () => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
    document.body.style.pointerEvents = "";
    document.body.removeAttribute("data-scroll-locked");
    document.documentElement.style.overflow = "";
  }
};

const Dialog = ({
  open,
  onOpenChange,
  children,
  ...props
}: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>) => {
  const handleOpenChange = React.useCallback(
    (nextOpen: boolean) => {
      if (!nextOpen) {
        unlockBodyScroll();
      }
      onOpenChange?.(nextOpen);
    },
    [onOpenChange]
  );

  // Instant scroll-lock cleanup when dialog closes or unmounts
  React.useEffect(() => {
    if (!open) {
      unlockBodyScroll();
      const timer = setTimeout(unlockBodyScroll, 16);
      return () => clearTimeout(timer);
    }
  }, [open]);

  React.useEffect(() => {
    return () => {
      unlockBodyScroll();
    };
  }, []);

  return (
    <DialogPrimitive.Root open={open} onOpenChange={handleOpenChange} {...props}>
      {children}
    </DialogPrimitive.Root>
  );
};

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-[#040d18]/90 md:backdrop-blur-md transition-all duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      onPointerDownOutside={(e) => {
        unlockBodyScroll();
        props.onPointerDownOutside?.(e);
      }}
      onEscapeKeyDown={(e) => {
        unlockBodyScroll();
        props.onEscapeKeyDown?.(e);
      }}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-[90vw] sm:w-[90%] max-w-[420px] translate-x-[-50%] translate-y-[-50%] gap-4 border border-cyan-500/30 bg-[#08182b] md:bg-[#08182b]/95 md:backdrop-blur-2xl p-5 sm:p-6 md:p-8 text-white shadow-[0_25px_80px_-15px_rgba(2,8,16,0.9)] duration-200 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-[24px] overflow-hidden",
        className
      )}
      {...props}
    >
      {children}
      <DialogPrimitive.Close 
        onClick={unlockBodyScroll}
        className="absolute right-4 top-4 rounded-full p-2 bg-white/[0.07] border border-white/15 text-slate-300 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-400/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:pointer-events-none z-20 cursor-pointer"
      >
        <X className="h-4 w-4" />
        <span className="sr-only">Close</span>
      </DialogPrimitive.Close>
    </DialogPrimitive.Content>
  </DialogPortal>
))
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5 text-center sm:text-left",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogFooter = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
)
DialogFooter.displayName = "DialogFooter"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "text-lg font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogClose,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
}
