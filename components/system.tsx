"use client"

import "@/components/css/system.css"
import "@/components/css/typography.css"
import { motion } from "framer-motion"
import { Search, Globe, Bot, Workflow, ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

const steps = [
    {
        number: "1",
        title: "Diagnósticamos y analizamos tu Negocio",
        description:
            "Antes de tocar diseño o tecnología, analizamos tu negocio y detectamos si podemos trabajar juntos",
        bullets: [
            "¿Cómo estás captando clientes ahora?",
            "¿Cuánto dinero estas perdiendo por no tener presencia digital?",
            "¿Dónde abandona tu cliente?",
            "¿Podemos trabajar contigo?",
        ],
        icon: Search,
        side: "right",
    },
    {
        number: "2",
        title: "Diseñamos el VM Sistema",
        description:
            "Definimos una estructura clara: embudo, automatizaciones y experiencia para que todo trabaje en conjunto, no por separado.",
        bullets: [
            "Embudo de conversión",
            "Estrategia de captación",
            "Automatizaciones clave",
            "Flujo completo del cliente",
        ],
        icon: Globe,
        side: "left",
    },
    {
        number: "3",
        title: "Construimos una web que convierte",
        description:
            "Desarrollamos una web pensada para guiar, convencer y convertir, conectada desde el primer momento con todo el sistema.",
        bullets: [
            "Estructura orientada a ventas",
            "Copy que guía decisiones",
            "Diseño claro y responsive",
            "Preparada para escalar",
        ],
        icon: Workflow,
        side: "right",
    },
    {
        number: "4",
        title: "Automatizamos y optimizamos",
        description:
            "Integramos IA y automatizaciones para reducir trabajo manual y mejorar resultados sin depender constantemente de ti.",
        bullets: [
            "Respuestas automáticas",
            "Seguimiento de leads",
            "Integración con CRM y herramientas",
            "Optimización continua",
        ],
        icon: Bot,
        side: "left",
    },
]

function FadeInSection({
                           children,
                           delay = 0,
                       }: {
    children: ReactNode
    delay?: number
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7, delay, ease: "easeOut" }}
        >
            {children}
        </motion.div>
    )
}

export default function RoadmapSection() {
    return (
        <section className="roadmap-section">
            <div className="roadmap-bg">
                <div className="roadmap-glow roadmap-glow-purple" />
                <div className="roadmap-glow roadmap-glow-cyan" />
                <div className="roadmap-glow roadmap-glow-teal" />
                <div className="roadmap-glow roadmap-glow-orange" />
            </div>

            <div className="roadmap-container">
                <FadeInSection>
                    <div className="roadmap-heading">

                        <h2 className="roadmap-title heading-h2">
                            Así construimos tu sistema{" "}
                            <span className="text-cyan">paso a paso</span>
                        </h2>

                        <p className="roadmap-subtitle">
                            No es una web suelta ni automatizaciones sin sentido.
                            Construimos un sistema completo donde cada parte trabaja para generar clientes y hacer crecer tu negocio.
                        </p>
                    </div>
                </FadeInSection>

                <div className="roadmap-timeline-wrapper">
                    <div className="roadmap-line" />

                    <div className="roadmap-steps">
                        {steps.map((step, index) => {
                            const Icon = step.icon
                            const isLeft = step.side === "left"

                            return (
                                <FadeInSection key={step.number} delay={index * 0.08}>
                                    <div className="roadmap-step">
                                        <div
                                            className={`roadmap-step-content ${
                                                isLeft ? "content-left" : "content-right"
                                            }`}
                                        >
                                            <div className="roadmap-card">

                                                <div className="roadmap-card-header">
                                                    <div className="roadmap-icon">
                                                        <Icon size={28} strokeWidth={2.1}/>
                                                    </div>

                                                    <h3 className="roadmap-card-title heading-h3">{step.title}</h3>
                                                </div>

                                                <p className="roadmap-card-description text-md">
                                                    {step.description}
                                                </p>

                                                <div className="roadmap-bullets">
                                                    {step.bullets.map((bullet) => (
                                                        <div className="roadmap-bullet" key={bullet}>
                                                            <span className="roadmap-bullet-dot" />
                                                            <span>{bullet}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="roadmap-step-empty" />

                                        <div className="roadmap-number">{step.number}</div>
                                    </div>
                                </FadeInSection>
                            )
                        })}
                    </div>
                </div>

                <FadeInSection>
                    <div className="roadmap-result-wrapper">
                        <div className="roadmap-result-card">
                            <span className="roadmap-result-badge">Resultado</span>

                            <p className="roadmap-result-text">
                                Un sistema que atrae clientes, los convierte y organiza tu negocio
                                para que puedas crecer sin depender de apagar fuegos constantemente.
                            </p>

                            <button className="roadmap-result-button">
                                Ver cómo lo aplicaríamos a tu negocio
                                <ArrowRight className="roadmap-button-arrow" size={18} />
                            </button>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </section>
    )
}