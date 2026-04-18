"use client"

import type { ReactNode } from "react"
import { motion, Variants } from "framer-motion"
import { MessageSquare, Globe, Search, Bot, Workflow, Sparkles } from "lucide-react"
import "@/components/css/BusinessAnalysisSection.css"

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 80,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

export default function BusinessAnalysisSection() {
    return (
        <section className="business-section">
            <div className="business-bg">
                <div className="business-glow business-glow-left" />
                <div className="business-glow business-glow-right" />
                <div className="business-glow business-glow-bottom" />
            </div>

            <div className="business-container">
                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ delay: 0 }}
                    className="business-header"
                >

                    <h2 className="business-title">
                        De un negocio con{" "}
                        <span className="business-title-gradient">
              caos, mensajes y mala presencia online
            </span>
                        <br />
                        a un sistema automatizado
                    </h2>

                    <p className="business-subtitle">
                        Analizamos cómo trabaja tu negocio, detectamos sus puntos débiles,
                        mejoramos su presencia web, aplicamos automatizaciones y SEO, y te
                        ayudamos a ahorrar tiempo y cerrar más clientes.
                    </p>
                </motion.div>

                <div className="business-grid">
                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.15 }}
                        className="business-card-wrap"
                    >
                        <div className="business-card-glow business-card-glow-human" />

                        <div className="business-card business-card-human">
                            <div className="business-card-overlay business-card-overlay-human" />
                            <div className="business-card-topline business-card-topline-human" />

                            <div className="business-card-content">
                                <div className="business-chip business-chip-human">
                                    <MessageSquare size={16} />
                                    Así llega el cliente
                                </div>

                                <h3 className="business-card-title">
                                    Mucho trabajo manual, mensajes por todos lados y una web que no vende
                                </h3>

                                <p className="business-card-text">
                                    Negocios con demasiados mensajes, procesos repetitivos, citas mal
                                    gestionadas, respuestas lentas, falta de automatización y una
                                    presencia online pobre o inexistente.
                                </p>

                                <div className="business-info-list">
                                    <InfoRow
                                        icon={<MessageSquare size={20} className="icon-orange" />}
                                        title="Demasiados mensajes"
                                        text="WhatsApp, Instagram, formularios y correos sin ordenar."
                                        glowClass="info-glow-human-1"
                                    />
                                    <InfoRow
                                        icon={<Globe size={20} className="icon-yellow" />}
                                        title="Web antigua o sin presencia online"
                                        text="Tu cliente entra y no entiende quién eres o ni siquiera te encuentra."
                                        glowClass="info-glow-human-2"
                                    />
                                    <InfoRow
                                        icon={<Search size={20} className="icon-orange" />}
                                        title="Sin SEO ni estrategia"
                                        text="No apareces bien en búsquedas ni conviertes visitas en oportunidades."
                                        glowClass="info-glow-human-3"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        variants={fadeUp}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ delay: 0.3 }}
                        className="business-card-wrap"
                    >
                        <div className="business-card-glow business-card-glow-ai" />

                        <div className="business-card business-card-ai">
                            <div className="business-card-overlay business-card-overlay-ai" />
                            <div className="business-card-topline business-card-topline-ai" />

                            <div className="business-card-content">
                                <div className="business-chip business-chip-ai">
                                    <Bot size={16} />
                                    Así entra Zyndra / IA
                                </div>

                                <h3 className="business-card-title">
                                    Automatizamos, reorganizamos y construimos una presencia digital potente
                                </h3>

                                <p className="business-card-text">
                                    Convertimos tareas repetitivas en sistemas automáticos, diseñamos una
                                    web moderna que sí representa tu negocio y mejoramos cómo te encuentran
                                    y cómo conviertes.
                                </p>

                                <div className="business-info-list">
                                    <InfoRow
                                        icon={<Workflow size={20} className="icon-cyan" />}
                                        title="Automatización real"
                                        text="Respuestas automáticas, gestión de leads, reservas, seguimiento y flujos internos."
                                        glowClass="info-glow-ai-1"
                                    />
                                    <InfoRow
                                        icon={<Globe size={20} className="icon-blue" />}
                                        title="Web profesional"
                                        text="Una presencia online clara, moderna y pensada para vender y transmitir confianza."
                                        glowClass="info-glow-ai-2"
                                    />
                                    <InfoRow
                                        icon={<Search size={20} className="icon-purple" />}
                                        title="SEO y posicionamiento"
                                        text="Te ayudamos a ser visible para que los clientes correctos te encuentren antes."
                                        glowClass="info-glow-ai-3"
                                    />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

function InfoRow({
                     icon,
                     title,
                     text,
                     glowClass,
                 }: {
    icon: ReactNode
    title: string
    text: string
    glowClass: string
}) {
    return (
        <div className="info-row-group">
            <div className={`info-row-glow ${glowClass}`} />
            <div className="info-row">
                <div className="info-row-icon">{icon}</div>
                <div>
                    <h4 className="info-row-title">{title}</h4>
                    <p className="info-row-text">{text}</p>
                </div>
            </div>
        </div>
    )
}