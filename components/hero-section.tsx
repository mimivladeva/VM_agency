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
                    Transformamos tu negocio{" "}
                    <span className="hero-title-system">
                        invisible
                    </span>{" "}
                    en{" "}
                    <span className="hero-title-impulsa">
                     digital
                    </span>{" "}
                    que genera clientes
                </h1>

                <p className="hero-subtitle">
                    Diseñamos Páginas Web |  Apps |  IA y Automatizaciones | para ahorrar tiempo y generar ventas
                </p>

                <div className="hero-button-wrapper">
                    <GlowButton />
                </div>
            </div>
        </section>
    )
}