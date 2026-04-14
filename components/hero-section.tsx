"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { EnergyBall } from "@/components/energy-ball"
import { HeroBackground } from "@/components/hero/HeroBackground"
import { HeroVisual } from "@/components/hero/HeroVisual"
import GlowButton from "@/components/hero/GlowButton";
export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">

            {/* 🔹 GRADIENTE NAVBAR "absolute top-0 left-0 w-full h-[120px] z-40 pointer-events-none
        bg-gradient-to-b from-[#52D3D8]/80 via-[#52D3D8]/40 to-transparent" */}

            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-transparent"/>
            {/* Background */}
            <HeroBackground/>
            {/* Elementos visuales (manos + bola) */}
            <HeroVisual/>

            {/* 🔹 BOLA ENERGÍA (ESCALA CONTROLADA) */}
            <div className="absolute top-[48%]">
                <EnergyBall/>
            </div>

            {/* 🔹 OVERLAY GENERAL */}
            <div className="absolute inset-0 bg-black/10 z-20"/>

            {/* 🔹 CONTENIDO */}
            <div className="relative z-30 max-w-4xl mx-auto px-4 text-center space-y-8">

                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white
    drop-shadow-[0_10px_30px_rgba(0,0,0,0.4)]">
                    Diseñamos un{" "}

                    <span className="bg-gradient-to-r from-[#682cdf] to-[#52d3d8] bg-clip-text text-transparent">
    sistema
  </span>{" "}

                    que{" "}

                    <span className="bg-gradient-to-r from-[#ffde59] to-[#FF914D] bg-clip-text text-transparent">
    impulsa
  </span>{" "}

                    tu negocio

                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto
    drop-shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
                    Creamos páginas web, apps y automatizaciones para ahorrar tiempo y aumentar ventas
                </p>

                <GlowButton/>

            </div>

        </section>
    )
}