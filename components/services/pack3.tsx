"use client";

import {
    Bot,
    Workflow,
    MessageCircle,
    Mail,
    BrainCircuit,
    Cpu,
    CalendarDays,
    Phone,
    Check,
} from "lucide-react";

import "../css/ServicePackOne.css";
import "../css/ServicePackTwo.css";
import "../css/typography.css";
import { useTranslations } from "next-intl";

export function ServicePackThree() {
    const t = useTranslations("Pack3");

    const features = [
        {
            icon: Workflow,
            title: t("features.0.title"),
            text: t("features.0.text"),
        },
        {
            icon: MessageCircle,
            title: t("features.1.title"),
            text: t("features.1.text"),
        },
        {
            icon: Bot,
            title: t("features.2.title"),
            text: t("features.2.text"),
        },
        {
            icon: Mail,
            title: t("features.3.title"),
            text: t("features.3.text"),
        },
        {
            icon: BrainCircuit,
            title: t("features.4.title"),
            text: t("features.4.text"),
        },
        {
            icon: Cpu,
            title: t("features.5.title"),
            text: t("features.5.text"),
        },
    ];

    return (
        <section className="service-pack-section">
            <div className="service-pack-container">

                <div className="service-hero">
                    <div className="service-hero-content">
                        <span className="service-badge">PACK 3</span>

                        <h2 className="service-title heading-h2">
                            {t("title")} <span>{t("highlight")}</span>
                        </h2>

                        <p className="service-description text-body">
                            {t("description")}
                        </p>
                    </div>

                    <div className="service-image">
                        <img src="/images/automatizaciones_ia.png" alt={t("imageAlt")} />
                    </div>
                </div>

                <div className="service-content-grid">

                    <div className="service-includes">
                        <h2 className="heading-h2">
                            {t("includes")} <span>{t("includesHighlight")}</span>
                        </h2>

                        <div className="features-grid">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;

                                return (
                                    <article className="feature-card" key={index}>
                                        <div className={`feature-icon feature-icon-${index + 1}`}>
                                            <Icon />
                                        </div>
                                        <h3 className="heading-h3">{feature.title}</h3>
                                        <p className="text-body">{feature.text}</p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>

                    <aside className="service-price-card">
                        <span>PACK 3</span>
                        <h2 className="heading-h3">{t("price.title")}</h2>

                        <ul>
                            <li><Check /> {t("price.points.0")}</li>
                            <li><Check /> {t("price.points.1")}</li>
                            <li><Check /> {t("price.points.2")}</li>
                        </ul>

                        <div className="service-price">
                            <small>{t("price.from")}</small>
                            <strong>{t("price.value")}</strong>
                            <small>{t("price.type")}</small>
                        </div>

                        <a href="#contacto" className="service-main-button">
                            {t("price.cta")}
                        </a>

                        <p className="service-note">{t("price.note")}</p>
                    </aside>

                </div>

                <div className="service-bottom-cta">
                    <div className="service-bottom-left">
                        <div className="bottom-icon">
                            <CalendarDays />
                        </div>

                        <div>
                            <h3 className="heading-h3">{t("bottom.title")}</h3>
                            <p className="text-body">{t("bottom.desc")}</p>
                        </div>
                    </div>

                    <a href="#contacto" className="service-secondary-button">
                        {t("bottom.cta")} <Phone />
                    </a>
                </div>

            </div>
        </section>
    );
}