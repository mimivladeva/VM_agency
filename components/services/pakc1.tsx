"use client";

import {
    Globe,
    TrendingUp,
    Users,
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

const features = [
    {
        icon: Layout,
        title: "Página web profesional",
        text: "Diseño moderno, responsive y adaptado a tu negocio.",
    },
    {
        icon: Search,
        title: "SEO básico",
        text: "Optimización de títulos, descripciones y estructura.",
    },
    {
        icon: Zap,
        title: "Carga rápida",
        text: "Web optimizada para cargar rápido y mejorar la experiencia.",
    },
    {
        icon: Smartphone,
        title: "100% Responsive",
        text: "Se ve perfecta en móviles, tablets y ordenadores.",
    },
    {
        icon: PenLine,
        title: "Copywriting con sentido",
        text: "Textos claros para explicar mejor lo que ofreces.",
    },
    {
        icon: ShieldCheck,
        title: "Segura y confiable",
        text: "Buenas prácticas básicas de seguridad y confianza.",
    },
];

export function ServicePackOne() {
    return (
        <section className="service-pack-section">

            <div className="service-pack-container">
                <div className="service-hero">
                    <div className="service-hero-content">
                        <span className="service-badge">PACK 1</span>

                        <h2 className="service-title heading-h2">
                            Servicio <span>Web + SEO Básico</span>
                        </h2>

                        <p className="service-description text-body">
                            Creamos tu página web profesional y la optimizamos con SEO básico
                            para que te encuentren más fácilmente en Google.
                        </p>

                        <div className="service-benefits">

                        </div>
                    </div>

                    <div className="service-mockup">
                        <div className="service-laptop">
                            <div className="service-screen">
                                <div className="mockup-nav">
                                    <strong>Tu Negocio</strong>
                                    <span>Inicio</span>
                                    <span>Servicios</span>
                                    <span>Contacto</span>

                                </div>

                                <div className="mockup-content">
                                    <h3>
                                        <span>Soluciones</span> que impulsan tu negocio
                                    </h3>
                                    <p>
                                        Ayudamos a negocios como el tuyo a crecer con soluciones
                                        digitales a medida.
                                    </p>
                                    <button>Solicitar información</button>
                                </div>
                            </div>
                        </div>

                        <div className="service-phone">
                            <div className="phone-screen">
                                <div className="phone-menu" />
                                <h4>
                                    <span>Soluciones</span> que impulsan tu negocio
                                </h4>
                                <p>Tu web lista para convertir visitas en clientes.</p>
                                <button> Contactar </button>
                            </div>
                        </div>
                    </div>
                </div>

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
                                            <Icon/>
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
                        <h2 className="heading-h3">Web + SEO Básico</h2>
                    <ul>
                            <li>
                                <Check /> Ideal para negocios que empiezan
                            </li>
                            <li>
                                <Check /> Mejora tu visibilidad en Google
                            </li>
                            <li>
                                <Check /> Atrae más clientes de forma orgánica
                            </li>
                        </ul>

                        <div className="service-price">
                            <small>Desde</small>
                            <strong>499€</strong>
                            <small>pago único</small>
                        </div>

                        <a href="#contacto" className="service-main-button">
                            Quiero este pack
                        </a>

                        <p className="service-note">Sin mensualidades · Sin permanencia</p>
                    </aside>
                </div>

                <div className="service-bottom-cta">
                    <div className="service-bottom-left">
                        <div className="bottom-icon">
                            <CalendarDays />
                        </div>

                        <div>
                            <h3 className="heading-h3">¿Tienes dudas o quieres empezar?</h3>
                            <p>
                                Hablemos y te ayudamos a elegir la mejor solución para tu
                                negocio.
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