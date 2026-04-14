"use client"

import { motion } from "framer-motion"

export function EnergyBall() {
    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.5 }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
        >
            <div
                className="relative w-[360px] h-[360px]"
                style={{
                    mixBlendMode: "screen",
                    filter: "brightness(1.3)"
                }}
            >

                {/* 🔥 AURA ORGÁNICA */}
                <motion.svg
                    viewBox="0 0 500 500"
                    className="absolute inset-0 w-full h-full"
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                >
                    <defs>
                        <filter id="glow-energy">
                            <feGaussianBlur stdDeviation="20" result="coloredBlur" />
                            <feMerge>
                                <feMergeNode in="coloredBlur" />
                                <feMergeNode in="SourceGraphic" />
                            </feMerge>
                        </filter>
                    </defs>

                    <path
                        d="M250,80
                           C320,100 400,180 380,260
                           C360,340 280,400 200,380
                           C120,360 80,280 100,200
                           C120,120 180,60 250,80 Z"
                        fill="none"
                        stroke="#52d3d8"
                        strokeWidth="2"
                        filter="url(#glow-energy)"
                    />
                </motion.svg>

                {/* 🔹 DISTORSIÓN */}
                <motion.div
                    animate={{
                        borderRadius: [
                            "50%",
                            "45% 55% 60% 40% / 40% 60% 50% 50%",
                            "50%"
                        ]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 blur-[70px]"
                    style={{
                        background:
                            "radial-gradient(circle, rgba(82,211,216,0.6), transparent 70%)"
                    }}
                />

                {/* 🔹 NÚCLEO */}
                <motion.div
                    animate={{
                        scale: [1, 1.08, 1],
                        opacity: [0.8, 1, 0.8]
                    }}
                    transition={{
                        duration: 2.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 blur-[20px]"
                    style={{
                        background: `
                        radial-gradient(circle at 50% 50%, #ffffff 0%, #ffffff 10%, rgba(255,255,255,0.6) 25%, transparent 50%)
                        `
                    }}
                />

                {/* 🔹 CAPA AZUL */}
                <motion.div
                    animate={{
                        scale: [1, 1.18, 1],
                        opacity: [0.6, 0.9, 0.6]
                    }}
                    transition={{
                        duration: 3.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full blur-[60px]"
                    style={{
                        background: `
                        radial-gradient(circle at 40% 40%, #52d3d8, transparent 60%),
                        radial-gradient(circle at 60% 60%, rgba(103,232,249,0.6), transparent 70%)
                        `
                    }}
                />

                {/* 🔹 AURA EXTERIOR */}
                <motion.div
                    animate={{
                        scale: [1, 1.25, 1],
                        opacity: [0.5, 0.9, 0.5]
                    }}
                    transition={{
                        duration: 6,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute inset-0 rounded-full"
                    style={{
                        filter: "blur(90px)",
                        background: `
                        radial-gradient(circle at 30% 30%, rgba(82,211,216,0.7), transparent 60%),
                        radial-gradient(circle at 70% 70%, rgba(103,232,249,0.5), transparent 70%),
                        radial-gradient(circle, rgba(82,211,216,0.3), transparent 80%)
                        `
                    }}
                />

                {/* 🔹 RUIDO */}
                <div
                    className="absolute inset-0 opacity-25"
                    style={{
                        backgroundImage:
                            "url('https://grainy-gradients.vercel.app/noise.svg')",
                        mixBlendMode: "overlay"
                    }}
                />

                {/* 🔹 PARTÍCULAS */}
                {[...Array(8)].map((_, i) => (
                    <motion.div
                        key={i}
                        animate={{
                            x: [0, Math.random() * 120 - 60],
                            y: [0, Math.random() * 120 - 60],
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.2, 0.5]
                        }}
                        transition={{
                            duration: 3 + Math.random() * 2,
                            repeat: Infinity,
                            delay: i * 0.3
                        }}
                        className="absolute w-2 h-2 bg-[#67e8f9] rounded-full blur-sm"
                        style={{
                            top: "50%",
                            left: "50%"
                        }}
                    />
                ))}

            </div>
        </motion.div>
    )
}