"use client"

import { motion } from "framer-motion"

export function HeroBackground() {
    return (
        <div className="absolute inset-0 z-0 overflow-hidden">

            {/* Gradiente principal */}
            <motion.div
                className="absolute inset-0"
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2 }}
                style={{
                    background: `
      radial-gradient(circle at 50% 60%, rgba(0, 255, 255, 0.25) 0%, rgba(0, 255, 255, 0.12) 12%, rgba(0,0,0,0) 30%),
      radial-gradient(circle at 50% 60%, rgba(80, 120, 255, 0.25) 0%, rgba(0,0,0,0) 35%),
      linear-gradient(to bottom, #0f2f33 0%, #081c31 25%, #040d16 60%, #00070d 100%)
    `,
                }}
            />
            {/* background antiguo */}
            {/* "radial-gradient(circle at center, #52D3D8 0%, #e0f2fe 40%, #C5D0D1 100%)" */}

            {/* Blobs */}
            <div className="absolute inset-0">
                <div className="absolute w-[400px] h-[400px] bg-[#52D3D8]/20 rounded-full blur-[100px] top-[-150px] left-[-150px]" />
                <div className="absolute w-[350px] h-[350px] bg-blue-300/15 rounded-full blur-[90px] bottom-[-150px] right-[-150px]" />
            </div>

            {/* Niebla */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent backdrop-blur-[2px]" />


            {/* 🔹 VIGNETTE (BORDES OSCUROS) */}
            <div className="absolute inset-0 z-10 bg-black/20 [mask-image:radial-gradient(circle,transparent_40%,black_100%)]" />

        </div>
    )
}