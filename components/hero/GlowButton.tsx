"use client"

import { JSX } from "react"
import "./GlowButton.css"
import { useTranslations } from "next-intl"

export default function GlowButton(): JSX.Element {
    const t = useTranslations("Hero")

    return (
        <div className="glow-wrapper">
            <div className="glow-aura" />
            <div className="glow-border" />

            <button className="glow-button">
                <span>{t("cta")}</span>
                <span className="glow-shine" />
            </button>
        </div>
    )
}