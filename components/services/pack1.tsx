"use client";

import {
    Layout,
    Search,
    Zap,
    Smartphone,
    PenLine,
    ShieldCheck,
    CalendarDays,
    Phone,
    Check,
} from "lucide-react";

import "../css/ServicePackOne.css";
import "../css/typography.css";
import { useTranslations } from "next-intl";

export function ServicePackOne() {
    const t = useTranslations("Pack1");

    const features = [
        {
            icon: Layout,
            title: t("features.0.title"),
            text: t("features.0.text"),
        },
        {
            icon: Search,
            title: t("features.1.title"),
            text: t("features.1.text"),
        },
        {
            icon: Zap,
            title: t("features.2.title"),
            text: t("features.2.text"),
        },
        {
            icon: Smartphone,
            title: t("features.3.title"),
            text: t("features.3.text"),
        },
        {
            icon: PenLine,
            title: t("features.4.title"),
            text: t("features.4.text"),
        },
        {
            icon: ShieldCheck,
            title: t("features.5.title"),
            text: t("features.5.text"),
        },
    ];

    return (
        <section className="service-pack-section">
            <div className="service-pack-container">
                <div className="service-hero">
                    <div className="service-hero-content">
                        <span className="service-badge">PACK 1</span>

                        <h2 className="service-title heading-h2">
                            {t("title")} <span>{t("highlight")}</span>
                        </h2>

                        <p className="service-description text-body">
                            {t("description")}
                        </p>
                    </div>

                    <div className="service-mockup">
                        <div className="service-laptop">
                            <div className="service-screen">
                                <div className="mockup-nav">
                                    <strong>{t("mockup.business")}</strong>
                                    <span>{t("mockup.nav.home")}</span>
                                    <span>{t("mockup.nav.services")}</span>
                                    <span>{t("mockup.nav.contact")}</span>
                                </div>

                                <div className="mockup-content">
                                    <h3>
                                        <span>{t("mockup.titleHighlight")}</span> {t("mockup.title")}
                                    </h3>
                                    <p>{t("mockup.subtitle")}</p>
                                    <button>{t("mockup.cta")}</button>
                                </div>
                            </div>
                        </div>

                        <div className="service-phone">
                            <div className="phone-screen">
                                <div className="phone-menu" />
                                <h4>
                                    <span>{t("mockup.titleHighlight")}</span> {t("mockup.title")}
                                </h4>
                                <p>{t("mockup.mobileText")}</p>
                                <button>{t("mockup.contact")}</button>
                            </div>
                        </div>
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
                        <span>PACK 1</span>
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
                            <p>{t("bottom.desc")}</p>
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