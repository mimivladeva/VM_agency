"use client"

import { useEffect, useRef } from "react"

export default function ParticlesBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null)

    useEffect(() => {
        const canvas = canvasRef.current!
        const ctx = canvas.getContext("2d")!

        let particles: any[] = []

        const resize = () => {
            canvas.width = window.innerWidth
            canvas.height = window.innerHeight
        }

        resize()
        window.addEventListener("resize", resize)

        // Crear partículas
        particles = []
        for (let i = 0; i < 70; i++) {
            particles.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 0.6,
                vy: (Math.random() - 0.5) * 0.6,
            })
        }

        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height)

            particles.forEach((p) => {
                p.x += p.vx
                p.y += p.vy

                // Rebote
                if (p.x < 0 || p.x > canvas.width) p.vx *= -1
                if (p.y < 0 || p.y > canvas.height) p.vy *= -1

                // 🔵 GLOW AZUL
                ctx.shadowBlur = 15
                ctx.shadowColor = "#00D4FF"

                ctx.fillStyle = "#00D4FF"
                ctx.beginPath()
                ctx.arc(p.x, p.y, 3.5, 0, Math.PI * 2)
                ctx.fill()

                ctx.shadowBlur = 0

                // 🔗 CONEXIONES
                particles.forEach((p2) => {
                    const dist = Math.hypot(p.x - p2.x, p.y - p2.y)

                    if (dist < 140) {
                        const opacity = 1 - dist / 140

                        ctx.strokeStyle = `rgba(0, 212, 255, ${opacity * 0.5})`
                        ctx.lineWidth = 1

                        ctx.beginPath()
                        ctx.moveTo(p.x, p.y)
                        ctx.lineTo(p2.x, p2.y)
                        ctx.stroke()
                    }
                })
            })

            requestAnimationFrame(draw)
        }

        draw()
    }, [])

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 -z-10 pointer-events-none"
        />
    )
}