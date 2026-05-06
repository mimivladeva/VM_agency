"use client"

import "@/components/css/hero.css"
import { HeroBackground } from "@/components/hero/HeroBackground"
import GlowButton from "@/components/hero/GlowButton"
import { HeroVisual } from "@/components/hero/HeroVisual"
import NeuralStatic from "@/components/hero/NeuralStatic"
import { useTranslations } from "next-intl"
import { useLocale } from "next-intl"

export function HeroSection() {
    const t = useTranslations("Hero")
    const locale = useLocale()

    const isBulgarian = locale === "bg"

    return (
        <section className="hero-section">
            <div className="hero-top-gradient" />

            <HeroBackground />
            <NeuralStatic />
            <HeroVisual />

            <div className="hero-overlay" />

            <div className="hero-content">
                <h1 className={`hero-title ${isBulgarian ? "hero-title-bg" : ""}`}>
                    {t("line1")}{" "}
                    <span className="hero-title-system">
                        {t("highlight1")}
                    </span>{" "}
                    {t("line2")}{" "}
                    <span className="hero-title-impulsa">
                        {t("highlight2")}
                    </span>{" "}
                    {t("line3")}
                </h1>

                <p className="hero-subtitle">
                    {t("subtitle")}
                </p>

                <div className="hero-button-wrapper">
                    <GlowButton />
                </div>
            </div>
        </section>
    )
}