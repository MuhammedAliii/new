"use client"

import React, { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  dispX: number
  dispY: number
  targetDispX: number
  targetDispY: number
  radius: number
  baseRadius: number
  color: string
  alpha: number
  baseAlpha: number
  pulseSpeed: number
  pulseOffset: number
}

export function InteractiveBackground() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const mouseRef = useRef<{
    x: number
    y: number
    targetX: number
    targetY: number
    isActive: boolean
    radius: number
  }>({
    x: -1000,
    y: -1000,
    targetX: -1000,
    targetY: -1000,
    isActive: false,
    radius: 85,
  })

  useEffect(() => {
    // 1. Completely terminate canvas animation and physics on mobile/touch devices
    if (typeof window === "undefined") return

    const isMobileOrTouch = () => {
      const isSmallScreen = window.innerWidth <= 768 || window.matchMedia("(max-width: 768px)").matches
      const isTouch = 
        'ontouchstart' in window || 
        (typeof navigator !== 'undefined' && (navigator.maxTouchPoints > 0 || (navigator as unknown as { msMaxTouchPoints?: number }).msMaxTouchPoints! > 0)) ||
        (window.matchMedia && window.matchMedia("(pointer: coarse)").matches)
      return isSmallScreen || isTouch
    }

    // Abort completely on mobile and touch screens to eliminate CPU load
    if (isMobileOrTouch()) {
      return
    }

    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let animationFrameId: number | null = null
    let width = 0
    let height = 0
    let dpr = 1
    let particles: Particle[] = []
    let isRunning = false
    let isMouseListenersAttached = false

    // Palette with luminous tones
    const colors = [
      "255, 255, 255", // Subtle Pure White
      "56, 189, 248",  // Soft Sky Blue
      "34, 211, 238",  // Ambient Cyan
      "147, 197, 253", // Serene Frost
      "45, 212, 191",  // Faint Mint
    ]

    const initParticles = () => {
      particles = []
      const area = width * height
      const count = Math.min(Math.max(Math.floor(area / 90000), 10), 20)

      for (let i = 0; i < count; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)]
        const baseRadius = Math.random() * 1.0 + 1.0
        const baseAlpha = Math.random() * 0.06 + 0.08
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.16,
          vy: (Math.random() - 0.5) * 0.16,
          dispX: 0,
          dispY: 0,
          targetDispX: 0,
          targetDispY: 0,
          radius: baseRadius,
          baseRadius,
          color,
          alpha: baseAlpha,
          baseAlpha,
          pulseSpeed: Math.random() * 0.008 + 0.004,
          pulseOffset: Math.random() * Math.PI * 2,
        })
      }
    }

    let time = 0

    const render = () => {
      // Hard JS abort on mobile/small screens
      if (typeof window !== "undefined" && (window.innerWidth < 768 || !isRunning)) {
        return
      }
      time += 0.01
      ctx.clearRect(0, 0, width, height)

      const mouse = mouseRef.current
      if (mouse.isActive) {
        mouse.x += (mouse.targetX - mouse.x) * 0.06
        mouse.y += (mouse.targetY - mouse.y) * 0.06
      } else {
        mouse.x += (-1000 - mouse.x) * 0.03
        mouse.y += (-1000 - mouse.y) * 0.03
      }

      if (mouse.x > -300 && mouse.y > -300) {
        const auraGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * 1.2
        )
        auraGradient.addColorStop(0, "rgba(56, 189, 248, 0.06)")
        auraGradient.addColorStop(0.5, "rgba(34, 211, 238, 0.02)")
        auraGradient.addColorStop(1, "rgba(56, 189, 248, 0)")

        ctx.fillStyle = auraGradient
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, mouse.radius * 1.2, 0, Math.PI * 2)
        ctx.fill()
      }

      const len = particles.length
      const maxDistance = 130

      for (let i = 0; i < len; i++) {
        const p = particles[i]

        p.x += p.vx + Math.sin(time * 0.8 + p.pulseOffset) * 0.04
        p.y += p.vy + Math.cos(time * 0.8 + p.pulseOffset) * 0.04

        if (p.x < -30) p.x = width + 30
        else if (p.x > width + 30) p.x = -30
        if (p.y < -30) p.y = height + 30
        else if (p.y > height + 30) p.y = -30

        p.alpha = p.baseAlpha + Math.sin(time + p.pulseOffset) * 0.03

        const currentRenderX = p.x + p.dispX
        const currentRenderY = p.y + p.dispY
        const dx = mouse.x - currentRenderX
        const dy = mouse.y - currentRenderY
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < mouse.radius && mouse.isActive) {
          const force = (1 - dist / mouse.radius)
          const angle = Math.atan2(dy, dx)
          
          p.targetDispX = -Math.cos(angle) * force * 18
          p.targetDispY = -Math.sin(angle) * force * 18
          p.alpha = Math.min(p.baseAlpha + force * 0.08, 0.22)

          const lineStrength = (1 - dist / mouse.radius) * 0.12
          ctx.strokeStyle = `rgba(56, 189, 248, ${lineStrength})`
          ctx.lineWidth = 0.8
          ctx.beginPath()
          ctx.moveTo(currentRenderX, currentRenderY)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        } else {
          p.targetDispX = 0
          p.targetDispY = 0
        }

        p.dispX += (p.targetDispX - p.dispX) * 0.04
        p.dispY += (p.targetDispY - p.dispY) * 0.04

        const finalX = p.x + p.dispX
        const finalY = p.y + p.dispY

        ctx.fillStyle = `rgba(${p.color}, ${Math.max(p.alpha, 0.04)})`
        ctx.beginPath()
        ctx.arc(finalX, finalY, p.radius, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = `rgba(${p.color}, ${Math.max(p.alpha * 0.25, 0.015)})`
        ctx.beginPath()
        ctx.arc(finalX, finalY, p.radius * 2.4, 0, Math.PI * 2)
        ctx.fill()

        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j]
          const p2FinalX = p2.x + p2.dispX
          const p2FinalY = p2.y + p2.dispY
          const pjDx = finalX - p2FinalX
          const pjDy = finalY - p2FinalY
          const pjDist = Math.sqrt(pjDx * pjDx + pjDy * pjDy)

          if (pjDist < maxDistance) {
            const lineAlpha = (1 - pjDist / maxDistance) * 0.06
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`
            ctx.lineWidth = 0.75
            ctx.beginPath()
            ctx.moveTo(finalX, finalY)
            ctx.lineTo(p2FinalX, p2FinalY)
            ctx.stroke()
          }
        }
      }

      if (isRunning) {
        animationFrameId = requestAnimationFrame(render)
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX
      mouseRef.current.targetY = e.clientY
      mouseRef.current.isActive = true
    }

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false
    }

    const attachMouseListeners = () => {
      if (!isMouseListenersAttached && !isMobileOrTouch()) {
        window.addEventListener("mousemove", handleMouseMove, { passive: true })
        document.addEventListener("mouseleave", handleMouseLeave, { passive: true })
        isMouseListenersAttached = true
      }
    }

    const detachMouseListeners = () => {
      if (isMouseListenersAttached) {
        window.removeEventListener("mousemove", handleMouseMove)
        document.removeEventListener("mouseleave", handleMouseLeave)
        isMouseListenersAttached = false
      }
    }

    const handleResize = () => {
      if (!canvas) return

      // Terminate loop and kill physics if screen width drops or on touch device
      if (isMobileOrTouch()) {
        if (animationFrameId !== null) {
          cancelAnimationFrame(animationFrameId)
          animationFrameId = null
        }
        isRunning = false
        particles = []
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        detachMouseListeners()
        return
      }

      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      initParticles()
      attachMouseListeners()

      if (!isRunning) {
        isRunning = true
        animationFrameId = requestAnimationFrame(render)
      }
    }

    window.addEventListener("resize", handleResize, { passive: true })
    handleResize()

    return () => {
      if (animationFrameId !== null) {
        cancelAnimationFrame(animationFrameId)
      }
      isRunning = false
      particles = []
      window.removeEventListener("resize", handleResize)
      detachMouseListeners()
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden hidden md:block" aria-hidden="true">
      <canvas
        ref={canvasRef}
        className="w-full h-full block pointer-events-none"
        style={{ pointerEvents: "none" }}
      />
    </div>
  )
}

