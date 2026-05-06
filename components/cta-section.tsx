"use client"

import "@/components/css/CTASection.css"
import "@/components/css/typography.css"
import { HeroBackground } from "@/components/hero/HeroBackground"
import NeuralStatic from "@/components/hero/NeuralStatic"
import GlowButton from "@/components/hero/GlowButton"
import { useTranslations } from "next-intl"

export function CTASection() {
  const t = useTranslations("CTA")

  return (
      <section id="contactar" className="cta-section">
        <div className="cta-section-bg">
          <div className="cta-section-glow cta-section-glow-top" />
          <div className="cta-section-glow cta-section-glow-bottom" />
        </div>

        <div className="cta-section-container">
          <div className="cta-card">
            <div className="cta-card-bg">
              <HeroBackground />
              <NeuralStatic />
              <div className="cta-card-overlay" />
            </div>

            <div className="cta-logo">
              <img src="/images/VMlogo.png" alt="VM Agency" className="cta-logo-image" />
            </div>

            <div className="cta-card-deco cta-card-deco-right" />
            <div className="cta-card-deco cta-card-deco-left" />

            <div className="cta-content">
              <h2 className="cta-title heading-h2">
                {t("title")} <span>{t("highlight")}</span>
              </h2>

              <p className="cta-description">
                {t("description")}
              </p>

              <div className="hero-button-wrapper">
                <GlowButton />
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}