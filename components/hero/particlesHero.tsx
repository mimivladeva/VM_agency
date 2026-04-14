"use client"

import { useEffect, useRef } from "react"

type Particle = {
    x: number
    y: number
    vx: number
    vy: number
    life: number
    size: number
}

export default function ParticlesBurst({ trigger }: { trigger: boolean }) {
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const animationRef = useRef<number | null>(null)

    useEffect(() => {
        if (!trigger) return

        const canvas = canvasRef.current
        if (!canvas) return

        const ctx = canvas.getContext("2d")
        if (!ctx) return

        const parent = canvas.parentElement
        if (!parent) return

        const resizeCanvas = () => {
            const rect = parent.getBoundingClientRect()
            canvas.width = rect.width
            canvas.height = rect.height
        }

        resizeCanvas()

        const centerX = canvas.width / 2
        const centerY = canvas.height / 2

        let particles: Particle[] = []

        for (let i = 0; i < 90; i++) {
            const angle = Math.random() * Math.PI * 2
            const speed = Math.random() * 10 + 5

            particles.push({
                x: centerX,
                y: centerY,
                vx: Math.cos(angle) * speed,
                vy: Math.sin(angle) * speed,
                life: 120,
                size: Math.random() * 2 + 2,
            })
        }

        const coreColor = "255, 222, 89"
        const glowColor = "#fff3a0"

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            // conexiones
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const p1 = particles[i]
                    const p2 = particles[j]

                    const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y)

                    if (dist < 140) {
                        const opacity =
                            (1 - dist / 140) * Math.min(p1.life, p2.life) / 120

                        ctx.strokeStyle = `rgba(${coreColor}, ${opacity * 0.4})`
                        ctx.lineWidth = 1.2
                        ctx.beginPath()
                        ctx.moveTo(p1.x, p1.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                }
            }

            particles = particles.filter((p) => p.life > 0)

            particles.forEach((p) => {
                p.x += p.vx
                p.y += p.vy
                p.life--

                ctx.shadowBlur = 25
                ctx.shadowColor = glowColor

                // núcleo
                ctx.fillStyle = `rgba(${coreColor}, ${p.life / 120})`
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
                ctx.fill()

                // aura
                ctx.beginPath()
                ctx.arc(p.x, p.y, p.size * 2.2, 0, Math.PI * 2)
                ctx.fillStyle = `rgba(${coreColor}, ${0.15 * (p.life / 120)})`
                ctx.fill()

                ctx.shadowBlur = 0
            })

            if (particles.length > 0) {
                animationRef.current = requestAnimationFrame(draw)
            }
        }

        draw()

        const handleResize = () => {
            resizeCanvas()
        }

        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
            if (animationRef.current) cancelAnimationFrame(animationRef.current)
            ctx.clearRect(0, 0, canvas.width, canvas.height)
        }
    }, [trigger])

    return (
        <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-25"
        />
    )
}