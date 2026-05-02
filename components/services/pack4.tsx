"use client";

import {
    BarChart3,
    TrendingUp,
    Cpu,
    AppWindow,
    CalendarDays,
    Phone,
    Check,
} from "lucide-react";

import "../css/ServicePackOne.css";
import "../css/ServicePackTwo.css";
import "../css/typography.css";

const features = [
    {
        icon: BarChart3,
        title: "Análisis de datos",
        text: "Entiende qué está pasando en tu negocio.",
    },
    {
        icon: TrendingUp,
        title: "Optimización de conversiones",
        text: "Mejoramos resultados sin aumentar tráfico.",
    },
    {
        icon: Cpu,
        title: "Integraciones con IA",
        text: "Automatiza decisiones basadas en datos reales.",
    },
    {
        icon: AppWindow,
        title: "Apps a medida",
        text: "Soluciones personalizadas para tu negocio.",
    },
    {
        icon: BarChart3,
        title: "Dashboards inteligentes",
        text: "Visualiza métricas clave en tiempo real.",
    },
    {
        icon: TrendingUp,
        title: "Mejora continua",
        text: "Optimizamos constantemente tu sistema.",
    },
];

export function ServicePackFour() {
    return (
        <section className="service-pack-section">
            <div className="service-pack-container">

                {/* HERO */}
                <div className="service-hero">

                    {/* TEXTO */}
                    <div className="service-hero-content">
                        <span className="service-badge">PACK 4</span>

                        <h2 className="service-title heading-h2">
                            Análisis <span>y optimización</span>
                        </h2>

                        <p className="service-description text-body">
                            Decisiones basadas en datos para crecer sin fricción.
                            Analizamos, optimizamos y mejoramos continuamente tu negocio
                            para maximizar resultados.
                        </p>
                    </div>

                    {/* IMAGEN */}
                    <div className="service-image">
                        <img
                            src="/images/analisis.png"
                            alt="Análisis y optimización"
                        />
                    </div>

                </div>

                {/* CONTENT */}
                <div className="service-content-grid">

                    <div className="service-includes">
                        <h2 className="heading-h2">
                            ¿Qué <span>incluye</span> este pack?
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

                    {/* PRICE */}
                    <aside className="service-price-card">
                        <span>PACK 4</span>
                        <h2 className="heading-h3">Análisis y optimización</h2>

                        <ul>
                            <li><Check /> Mejora decisiones con datos</li>
                            <li><Check /> Optimiza sin aumentar costes</li>
                            <li><Check /> Escala con control total</li>
                        </ul>

                        <div className="service-price">
                            <small>Desde</small>
                            <strong>1499€</strong>
                            <small>pago único</small>
                        </div>

                        <a href="#contacto" className="service-main-button">
                            Quiero este pack
                        </a>

                        <p className="service-note">
                            Sin mensualidades · Sin permanencia
                        </p>
                    </aside>

                </div>

                {/* CTA */}
                <div className="service-bottom-cta">
                    <div className="service-bottom-left">
                        <div className="bottom-icon">
                            <CalendarDays />
                        </div>

                        <div>
                            <h3 className="heading-h3">
                                ¿Quieres tomar mejores decisiones?
                            </h3>
                            <p className="text-body">
                                Convertimos datos en crecimiento real para tu negocio.
                            </p>
                        </div>
                    </div>

                    <a href="#contacto" className="service-secondary-button">
                        Solicitar llamada gratuita <Phone />
                    </a>
                </div>

            </div>
        </section>
    );
}