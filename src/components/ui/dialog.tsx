"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

// 🔴 FIX 1: We create a custom tracker to bypass Radix's forced overlay deletion
const DialogStateContext = React.createContext<{ open?: boolean }>({});

const Dialog = (props: React.ComponentPropsWithoutRef<typeof DialogPrimitive.Root>) => {
  return (
    <DialogStateContext.Provider value={{ open: props.open }}>
      <DialogPrimitive.Root {...props} />
    </DialogStateContext.Provider>
  );
}

const DialogTrigger = DialogPrimitive.Trigger
const DialogPortal = DialogPrimitive.Portal
const DialogClose = DialogPrimitive.Close

// 🔴 FIX 2: THE CUSTOM OVERLAY
// Because modal={false} deletes the Radix overlay, we render our own. 
// It keeps your premium dark aesthetic but has zero ability to lock the iOS scroll wheel.
const DialogOverlay = React.forwardRef<
  HTMLDivElement,
  React.ComponentPropsWithoutRef<"div">
>(({ className, ...props }, ref) => {
  const { open } = React.useContext(DialogStateContext);
  
  // Only render visually when open, but let Tailwind handle animations
  return (
    <div
      ref={ref}
      data-state={open ? "open" : "closed"}
      className={cn(
        "fixed inset-0 z-50 bg-[#040d18]/90 md:backdrop-blur-md transition-all duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        open ? "pointer-events-auto" : "pointer-events-none",
        className
      )}
      aria-hidden="true"
      {...props}
    />
  )
})
DialogOverlay.displayName = "DialogOverlay"

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  const { open } = React.useContext(DialogStateContext);
  
  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={ref}
        data-state={open ? "open" : "closed"}
        // 🔴 FIX 3: Removed all custom manual `unlockScroll()` triggers 
        // that were fighting the iPhone processor.
        onOpenAutoFocus={(e) => {
          e.preventDefault();
          props.onOpenAutoFocus?.(e);
        }}
        onCloseAutoFocus={(e) => {
          e.preventDefault();
          props.onCloseAutoFocus?.(e);
        }}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-[90vw] sm:w-[90%] max-w-[420px] translate-x-[-50%] translate-y-[-50%] gap-4 border border-cyan-500/30 bg-[#08182b] md:bg-[#08182b]/95 md:backdrop-blur-2xl p-5 sm:p-6 md:p-8 text-white shadow-[0_25px_80px_-15px_rgba(2,8,16,0.9)] duration-200 ease-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-[24px] overflow-hidden",
          className
        )}
        {...props}
      >
        {children}
        <DialogPrimitive.Close 
          className="absolute right-4 top-4 rounded-full p-2 bg-white/[0.07] border border-white/15 text-slate-300 hover:text-white hover:bg-cyan-500/20 hover:border-cyan-400/40 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 focus:ring-offset-slate-950 disabled:pointer-events-none z-20 cursor-pointer"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
})
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