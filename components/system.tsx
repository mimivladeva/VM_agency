"use client"

import "@/components/css/system.css"
import { motion } from "framer-motion"
import { Search, Globe, Bot, Workflow, ArrowRight } from "lucide-react"
import type { ReactNode } from "react"

const steps = [
    {
        number: "1",
        title: "Análisis del negocio",
        description:
            "Estudiamos el modelo de negocio, la propuesta de valor, el cliente ideal y los cuellos de botella que frenan ventas y crecimiento.",
        bullets: [
            "Posicionamiento y oferta",
            "Puntos flojos del negocio",
            "Canales de captación actuales",
            "Embudo comercial y conversión",
        ],
        icon: Search,
        side: "right",
    },
    {
        number: "2",
        title: "Auditoría digital",
        description:
            "Revisamos si la empresa tiene presencia online, qué transmite su marca y cómo está funcionando actualmente su web o ecosistema digital.",
        bullets: [
            "Web actual o ausencia digital",
            "UX, estructura y mensaje",
            "Velocidad, SEO y confianza",
            "Oportunidades de mejora inmediatas",
        ],
        icon: Globe,
        side: "left",
    },
    {
        number: "3",
        title: "Web nueva o rediseño",
        description:
            "Creamos una página web enfocada en conversión, claridad y autoridad, diseñada para vender mejor y sostener automatizaciones futuras.",
        bullets: [
            "Arquitectura orientada a objetivos",
            "Copy estratégico",
            "Diseño responsive",
            "Preparada para captación y escalado",
        ],
        icon: Workflow,
        side: "right",
    },
    {
        number: "4",
        title: "Automatización inteligente",
        description:
            "Detectamos tareas repetitivas y procesos manuales para automatizarlos con IA, integraciones y flujos que ahorran tiempo y aumentan resultados.",
        bullets: [
            "Leads y formularios",
            "Seguimiento comercial",
            "Emails, CRM y agendas",
            "Procesos internos con IA",
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


                        <h2 className="roadmap-title">
                            Cómo transformamos un negocio con{" "}
                            <span className="text-cyan">web</span>,{" "}
                            <span className="text-teal">IA</span> y{" "}
                            <span className="text-orange">automatización</span>
                        </h2>

                        <p className="roadmap-subtitle">
                            No empezamos diseñando por diseñar. Primero entendemos el negocio,
                            detectamos lo que está frenando resultados y luego construimos una
                            solución digital que tenga sentido.
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

                                                    <h3 className="roadmap-card-title">{step.title}</h3>
                                                </div>
                                                <p className="roadmap-card-description">
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
                                Una presencia digital sólida, una web pensada para convertir y
                                un sistema de automatización que reduce tareas manuales y
                                acelera el crecimiento.
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