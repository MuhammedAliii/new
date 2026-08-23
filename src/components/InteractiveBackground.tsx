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
    radius: 85, // Refined, focused interaction radius (reduced by over 50%)
  })

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d", { alpha: true })
    if (!ctx) return

    let animationFrameId: number
    let width = 0
    let height = 0
    let dpr = 1
    let particles: Particle[] = []

    // Palette with refined, serene luminous tones
    const colors = [
      "255, 255, 255", // Subtle Pure White
      "56, 189, 248",  // Soft Sky Blue
      "34, 211, 238",  // Ambient Cyan
      "147, 197, 253", // Serene Frost
      "45, 212, 191",  // Faint Mint
    ]

    const handleResize = () => {
      if (!canvas) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight
      canvas.width = width * dpr
      canvas.height = height * dpr
      ctx.scale(dpr, dpr)
      initParticles()
    }

    const initParticles = () => {
      particles = []
      // Breathable, low density: ~1 particle per 90,000 px^2 (60-70% reduction)
      const area = width * height
      const count = Math.min(Math.max(Math.floor(area / 90000), 10), 20)

      for (let i = 0; i < count; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)]
        const baseRadius = Math.random() * 1.0 + 1.0 // Faint, subtle diameter (1.0px - 2.0px)
        const baseAlpha = Math.random() * 0.06 + 0.08 // Faint watermark opacity (0.08 - 0.14)
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.16, // Ultra-slow, calm drifting speed
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

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.targetX = e.clientX
      mouseRef.current.targetY = e.clientY
      mouseRef.current.isActive = true
    }

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        mouseRef.current.targetX = e.touches[0].clientX
        mouseRef.current.targetY = e.touches[0].clientY
        mouseRef.current.isActive = true
      }
    }

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false
    }

    window.addEventListener("resize", handleResize, { passive: true })
    window.addEventListener("mousemove", handleMouseMove, { passive: true })
    window.addEventListener("touchmove", handleTouchMove, { passive: true })
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true })

    handleResize()

    let time = 0

    const render = () => {
      time += 0.01
      ctx.clearRect(0, 0, width, height)

      const mouse = mouseRef.current
      // Smooth easing (lerp) for cursor interpolation
      if (mouse.isActive) {
        mouse.x += (mouse.targetX - mouse.x) * 0.06
        mouse.y += (mouse.targetY - mouse.y) * 0.06
      } else {
        mouse.x += (-1000 - mouse.x) * 0.03
        mouse.y += (-1000 - mouse.y) * 0.03
      }

      // Very soft, ambient mouse aura (watermark subtlety)
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

      // Update and draw particles
      const len = particles.length
      const maxDistance = 130

      for (let i = 0; i < len; i++) {
        const p = particles[i]

        // Organic, very slow ambient drift with gentle wave oscillation
        p.x += p.vx + Math.sin(time * 0.8 + p.pulseOffset) * 0.04
        p.y += p.vy + Math.cos(time * 0.8 + p.pulseOffset) * 0.04

        // Screen boundary wrapping
        if (p.x < -30) p.x = width + 30
        else if (p.x > width + 30) p.x = -30
        if (p.y < -30) p.y = height + 30
        else if (p.y > height + 30) p.y = -30

        // Gentle, slow breathing opacity
        p.alpha = p.baseAlpha + Math.sin(time + p.pulseOffset) * 0.03

        // Calculate distance from cursor
        const currentRenderX = p.x + p.dispX
        const currentRenderY = p.y + p.dispY
        const dx = mouse.x - currentRenderX
        const dy = mouse.y - currentRenderY
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < mouse.radius && mouse.isActive) {
          // Subtle soft deflection with friction
          const force = (1 - dist / mouse.radius)
          const angle = Math.atan2(dy, dx)
          
          // Target displacement: smooth drift away from cursor without abrupt jumps
          p.targetDispX = -Math.cos(angle) * force * 18
          p.targetDispY = -Math.sin(angle) * force * 18
          p.alpha = Math.min(p.baseAlpha + force * 0.08, 0.22)

          // Delicate, whisper-thin connection line to cursor
          const lineStrength = (1 - dist / mouse.radius) * 0.12
          ctx.strokeStyle = `rgba(56, 189, 248, ${lineStrength})`
          ctx.lineWidth = 0.8
          ctx.beginPath()
          ctx.moveTo(currentRenderX, currentRenderY)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        } else {
          // Return gently to original trajectory
          p.targetDispX = 0
          p.targetDispY = 0
        }

        // Apply friction / lerp easing to displacement
        p.dispX += (p.targetDispX - p.dispX) * 0.04
        p.dispY += (p.targetDispY - p.dispY) * 0.04

        const finalX = p.x + p.dispX
        const finalY = p.y + p.dispY

        // Draw individual soft node
        ctx.fillStyle = `rgba(${p.color}, ${Math.max(p.alpha, 0.04)})`
        ctx.beginPath()
        ctx.arc(finalX, finalY, p.radius, 0, Math.PI * 2)
        ctx.fill()

        // Watermark halo glow for subtle depth
        ctx.fillStyle = `rgba(${p.color}, ${Math.max(p.alpha * 0.25, 0.015)})`
        ctx.beginPath()
        ctx.arc(finalX, finalY, p.radius * 2.4, 0, Math.PI * 2)
        ctx.fill()

        // Faint inter-particle connection lines (neural mesh watermark)
        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j]
          const p2FinalX = p2.x + p2.dispX
          const p2FinalY = p2.y + p2.dispY
          const pjDx = finalX - p2FinalX
          const pjDy = finalY - p2FinalY
          const pjDist = Math.sqrt(pjDx * pjDx + pjDy * pjDy)

          if (pjDist < maxDistance) {
            const lineAlpha = (1 - pjDist / maxDistance) * 0.06 // Ultra-subtle watermark line (max 0.06)
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`
            ctx.lineWidth = 0.75
            ctx.beginPath()
            ctx.moveTo(finalX, finalY)
            ctx.lineTo(p2FinalX, p2FinalY)
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    animationFrameId = requestAnimationFrame(render)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("touchmove", handleTouchMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[60] overflow-hidden">
      <canvas
        ref={canvasRef}
        className="w-full h-full block"
        style={{ pointerEvents: "none" }}
      />
    </div>
  )
}

