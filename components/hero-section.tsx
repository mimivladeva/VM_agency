"use client"

import "@/components/css/hero.css"
import { HeroBackground } from "@/components/hero/HeroBackground"
import GlowButton from "@/components/hero/GlowButton"
import {HeroVisual} from "@/components/hero/HeroVisual";
import NeuralStatic from "@/components/hero/NeuralStatic"
import { useLanguage } from "@/lib/LanguageContext"

export function HeroSection() {

    return (
        <section className="hero-section">
            {/* Capa degradado superior */}
            <div className="hero-top-gradient" />

            {/* Background */}
            <HeroBackground />
            {/* Elementos visuales (manos + bola) */}

            <NeuralStatic />
            <HeroVisual />

            {/* Overlay general */}
            <div className="hero-overlay" />

            {/* Contenido */}
            <div className="hero-content">
                <h1 className="hero-title">
                    Diseñamos un{" "}
                    <span className="hero-title-system">
                        sistema
                    </span>{" "}
                    que{" "}
                    <span className="hero-title-impulsa">
                        impulsa
                    </span>{" "}
                    tu negocio
                </h1>

                <p className="hero-subtitle">
                    Creamos páginas web, apps y automatizaciones para ahorrar tiempo y aumentar ventas
                </p>

                <div className="hero-button-wrapper">
                    <GlowButton />
                </div>
            </div>
        </section>
    )
}