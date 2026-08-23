"use client"

import React, { useEffect, useRef } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
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
    radius: 180,
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

    // Palette with glowing white, soft neon cyan, electric sky, and luminous teal
    const colors = [
      "255, 255, 255", // Pure Glowing White
      "56, 189, 248",  // Electric Sky Neon
      "34, 211, 238",  // Soft Neon Cyan
      "125, 211, 252", // Luminous Frost Ice
      "45, 212, 191",  // Bright Aqua Mint
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
      // Density calculation: ~1 particle per 25,000 px^2 on desktop, minimum 25, capped at 65
      const area = width * height
      const count = Math.min(Math.max(Math.floor(area / 28000), 28), 65)

      for (let i = 0; i < count; i++) {
        const color = colors[Math.floor(Math.random() * colors.length)]
        const baseRadius = Math.random() * 2 + 1.2
        const baseAlpha = Math.random() * 0.45 + 0.25
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          vx: (Math.random() - 0.5) * 0.55,
          vy: (Math.random() - 0.5) * 0.55,
          radius: baseRadius,
          baseRadius,
          color,
          alpha: baseAlpha,
          baseAlpha,
          pulseSpeed: Math.random() * 0.02 + 0.01,
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
      time += 0.016
      ctx.clearRect(0, 0, width, height)

      const mouse = mouseRef.current
      // Smooth interpolation (lerp) for liquid fluid cursor movement
      if (mouse.isActive) {
        mouse.x += (mouse.targetX - mouse.x) * 0.12
        mouse.y += (mouse.targetY - mouse.y) * 0.12
      } else {
        // Slowly drift away when inactive
        mouse.x += (-1000 - mouse.x) * 0.05
        mouse.y += (-1000 - mouse.y) * 0.05
      }

      // Draw subtle interactive luminous aura following the mouse
      if (mouse.x > -500 && mouse.y > -500) {
        const auraGradient = ctx.createRadialGradient(
          mouse.x,
          mouse.y,
          0,
          mouse.x,
          mouse.y,
          mouse.radius * 1.5
        )
        auraGradient.addColorStop(0, "rgba(56, 189, 248, 0.22)")
        auraGradient.addColorStop(0.35, "rgba(34, 211, 238, 0.12)")
        auraGradient.addColorStop(0.7, "rgba(255, 255, 255, 0.04)")
        auraGradient.addColorStop(1, "rgba(56, 189, 248, 0)")

        ctx.fillStyle = auraGradient
        ctx.beginPath()
        ctx.arc(mouse.x, mouse.y, mouse.radius * 1.5, 0, Math.PI * 2)
        ctx.fill()
      }

      // Update and draw particles
      const len = particles.length
      const maxDistance = 140

      for (let i = 0; i < len; i++) {
        const p = particles[i]

        // Organic ambient floating drift with slight sinusoidal wave
        p.x += p.vx + Math.sin(time + p.pulseOffset) * 0.15
        p.y += p.vy + Math.cos(time + p.pulseOffset) * 0.15

        // Boundary wrapping with margin
        if (p.x < -20) p.x = width + 20
        else if (p.x > width + 20) p.x = -20
        if (p.y < -20) p.y = height + 20
        else if (p.y > height + 20) p.y = -20

        // Subtle breathing radius/alpha pulse
        p.alpha = p.baseAlpha + Math.sin(time * 2 + p.pulseOffset) * 0.15

        // Mouse interaction: Gentle attraction / deflection physics
        const dx = mouse.x - p.x
        const dy = mouse.y - p.y
        const dist = Math.sqrt(dx * dx + dy * dy)

        if (dist < mouse.radius && mouse.isActive) {
          const force = (1 - dist / mouse.radius) * 1.5
          const angle = Math.atan2(dy, dx)
          
          // Particles subtly orbit and accelerate around the cursor
          p.x += Math.cos(angle + Math.PI / 4) * force * 1.2
          p.y += Math.sin(angle + Math.PI / 4) * force * 1.2
          p.radius = p.baseRadius * (1 + force * 0.7)
          p.alpha = Math.min(p.baseAlpha + force * 0.5, 0.95)

          // Direct dynamic connection line to cursor with soft neon cyan glow
          ctx.strokeStyle = `rgba(56, 189, 248, ${(1 - dist / mouse.radius) * 0.45})`
          ctx.lineWidth = (1 - dist / mouse.radius) * 1.4
          ctx.beginPath()
          ctx.moveTo(p.x, p.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.stroke()
        } else {
          p.radius = p.baseRadius
        }

        // Draw individual glowing node
        ctx.fillStyle = `rgba(${p.color}, ${p.alpha})`
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fill()

        // Subtle outer glow halo for nodes
        if (p.radius > 1.8) {
          ctx.fillStyle = `rgba(${p.color}, ${p.alpha * 0.35})`
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2)
          ctx.fill()
        }

        // Inter-particle network connection lines (voice / neural mesh)
        for (let j = i + 1; j < len; j++) {
          const p2 = particles[j]
          const pjDx = p.x - p2.x
          const pjDy = p.y - p2.y
          const pjDist = Math.sqrt(pjDx * pjDx + pjDy * pjDy)

          if (pjDist < maxDistance) {
            const lineAlpha = (1 - pjDist / maxDistance) * 0.28
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`
            ctx.lineWidth = (1 - pjDist / maxDistance) * 1.0
            ctx.beginPath()
            ctx.moveTo(p.x, p.y)
            ctx.lineTo(p2.x, p2.y)
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
        className="w-full h-full block opacity-95"
        style={{ pointerEvents: "none" }}
      />
    </div>
  )
}
