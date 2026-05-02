"use client";

import {
    TrendingUp,
    Funnel,
    MessageCircle,
    Mail,
    Bot,
    Workflow,
    CalendarDays,
    Phone,
    Check,
} from "lucide-react";

import "../css/ServicePackOne.css";
import "../css/ServicePackTwo.css";
import "../css/typography.css";

const features = [
    {
        icon: TrendingUp,
        title: "Estrategia de marketing",
        text: "Definimos cómo atraer clientes de forma constante.",
    },
    {
        icon: Funnel,
        title: "Embudos de venta",
        text: "Convertimos visitas en oportunidades reales.",
    },
    {
        icon: Workflow,
        title: "Automatización de clientes",
        text: "Seguimiento automático sin perder oportunidades.",
    },
    {
        icon: MessageCircle,
        title: "WhatsApp integrado",
        text: "Responde y capta clientes directamente.",
    },
    {
        icon: Mail,
        title: "Email marketing",
        text: "Comunicación directa y automatizada con clientes.",
    },
    {
        icon: Bot,
        title: "Respuestas automáticas",
        text: "Sistema que responde incluso cuando no estás.",
    },
];

export function ServicePackTwo() {
    return (
        <section className="service-pack-section">
            <div className="service-pack-container">

                {/* HERO */}
                <div className="service-hero">

                    {/* TEXTO */}
                    <div className="service-hero-content">
                        <span className="service-badge">PACK 2</span>

                        <h2 className="service-title heading-h2">
                            Captación de <span>clientes</span>
                        </h2>

                        <p className="service-description text-body">
                            Creamos un sistema que convierte visitas en clientes reales,
                            automatizando procesos y optimizando cada punto de contacto.
                        </p>
                    </div>
                    {/* IMAGEN */}
                    <div className="service-image">
                        <img
                            src="/images/captacion.png"
                            alt="Sistema de captación"
                        />
                    </div>

                </div> {/* ✅ CIERRE CORRECTO DEL HERO */}

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
                        <span>PACK 2</span>
                        <h2 className="heading-h3">Captación de clientes</h2>

                        <ul>
                            <li><Check /> Convierte visitas en clientes</li>
                            <li><Check /> Automatiza procesos de venta</li>
                            <li><Check /> Aumenta tus oportunidades reales</li>
                        </ul>

                        <div className="service-price">
                            <small>Desde</small>
                            <strong>899€</strong>
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
                                ¿Quieres más clientes sin complicarte?
                            </h3>
                            <p className="text-body">
                                Te ayudamos a montar un sistema que trabaje por ti.
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