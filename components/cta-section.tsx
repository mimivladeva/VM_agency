"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"
import "@/components/css/CTASection.css"
import "@/components/css/typography.css"
import { HeroBackground } from "@/components/hero/HeroBackground"
import NeuralStatic from "@/components/hero/NeuralStatic"
import GlowButton from "@/components/hero/GlowButton";

export function CTASection() {
  return (
      <section id="contactar" className="cta-section">
        <div className="cta-section-bg">
          <div className="cta-section-glow cta-section-glow-top" />
          <div className="cta-section-glow cta-section-glow-bottom" />
        </div>

        <div className="cta-section-container">
          <div className="cta-card">
            {/* CAPAS DE FONDO */}
            <div className="cta-card-bg">
              <HeroBackground/>
              <NeuralStatic/>
              <div className="cta-card-overlay"/>
            </div>
            {/* CAPAS DE logo */}
            <div className="cta-logo">
              <img src="/images/VMlogo.png" alt="VM Agency" className="cta-logo-image"/>
            </div>

            {/* DECORACIONES EXTRA */}
            <div className="cta-card-deco cta-card-deco-right"/>
            <div className="cta-card-deco cta-card-deco-left"/>

            {/* CONTENIDO */}
            <div className="cta-content">
              {/*  <div className="cta-badge">
                <Sparkles className="cta-badge-icon"/>
                <span>¿Listo para empezar?</span>
              </div> */}

              <h2 className="cta-title heading-h2">
                Convierte tus ideas en sistemas que <span>generen resultados</span>
              </h2>

              <p className="cta-description">
                Agenda una llamada gratuita y descubre cómo podemos ayudarte a
                optimizar tu negocio con tecnología de vanguardia.
              </p>

              <div className="hero-button-wrapper">
                <GlowButton/>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}