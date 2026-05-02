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

const features = [
    {
        icon: Workflow,
        title: "Automatización de procesos",
        text: "Eliminamos tareas repetitivas para ahorrar tiempo.",
    },
    {
        icon: MessageCircle,
        title: "Respuestas automáticas",
        text: "Web, WhatsApp y email funcionando 24/7.",
    },
    {
        icon: Bot,
        title: "Chatbots inteligentes",
        text: "Atienden clientes sin intervención humana.",
    },
    {
        icon: Mail,
        title: "Seguimiento automático",
        text: "No pierdes oportunidades por falta de respuesta.",
    },
    {
        icon: BrainCircuit,
        title: "IA aplicada al negocio",
        text: "Clasifica, responde y optimiza decisiones.",
    },
    {
        icon: Cpu,
        title: "Sistema escalable",
        text: "Tu negocio crece sin aumentar carga de trabajo.",
    },
];

export function ServicePackThree() {
    return (
        <section className="service-pack-section">
            <div className="service-pack-container">

                {/* HERO */}
                <div className="service-hero">

                    {/* TEXTO */}
                    <div className="service-hero-content">
                        <span className="service-badge">PACK 3</span>

                        <h2 className="service-title heading-h2">
                            Automatización <span>e IA</span>
                        </h2>

                        <p className="service-description text-body">
                            El sistema trabaja por ti mientras tú escalas.
                            Automatizamos procesos, mejoramos la atención y aplicamos IA
                            para que tu negocio funcione incluso cuando no estás.
                        </p>
                    </div>

                    {/* IMAGEN */}
                    <div className="service-image">
                        <img
                            src="/images/automatizaciones_ia.png"
                            alt="Automatización e IA"
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
                        <span>PACK 3</span>
                        <h2 className="heading-h3">Automatización e IA</h2>

                        <ul>
                            <li><Check /> Automatiza tu negocio 24/7</li>
                            <li><Check /> Reduce carga de trabajo manual</li>
                            <li><Check /> Escala sin aumentar costes</li>
                        </ul>

                        <div className="service-price">
                            <small>Desde</small>
                            <strong>1299€</strong>
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
                                ¿Quieres que tu negocio funcione solo?
                            </h3>
                            <p className="text-body">
                                Diseñamos sistemas automáticos que trabajan por ti.
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