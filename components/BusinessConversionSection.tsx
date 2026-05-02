"use client"

import { motion, Variants } from "framer-motion"
import {
    AlertTriangle,
    Clock3,
    MessageCircleMore,
    SearchX,
    Globe2,
    Frown,
    Bot,
    Workflow,
    ChartNoAxesCombined,
    Sparkles,
    ArrowRight,
} from "lucide-react"
import "@/components/css/typography.css"
import "@/components/css/BusinessConversionSection.css"

const containerVariants: Variants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
        },
    },
}

const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

const slideLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -50,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

const slideRight: Variants = {
    hidden: {
        opacity: 0,
        x: 50,
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.85,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

const itemFade = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay },
})

const chaosItems = [
    {
        icon: MessageCircleMore,
        title: "Los mensajes se acumulan",
        text: "Respondes tarde y cada minuto enfría una venta. WhatsApp, Instagram y email por todas partes.",
    },
    {
        icon: Clock3,
        title: "El desorden te está costando dinero",
        text: "Nada avanza si tú no lo validas cada pequeño paso y eso genera retrasos no puedes hacer todo.",
    },
    {
        icon: SearchX,
        title: "Pérdida de Oportunidades",
        text: "Entran contactos, pero no hay filtro, seguimiento ni control real de las oportunidades.",
    },
    {
        icon: Globe2,
        title: "Negocio Sin WEB",
        text: "Si no estas en internet no existes para el cliente, dependes solo del boca a boca",
    },
]

const solutionItems = [
    {
        icon: Bot,
        title: "La IA responde y filtra por ti",
        text: "Atención más rápida, clasificación automática y menos fugas de clientes.",
    },
    {
        icon: Workflow,
        title: "Tus procesos dejan de ser manuales",
        text: "Menos caos operativo y más tiempo para vender, dirigir y crecer.",
    },
    {
        icon: ChartNoAxesCombined,
        title: "Cada cliente entra en un sistema",
        text: "Captación, seguimiento y control en un flujo claro y medible.",
    },
    {
        icon: Sparkles,
        title: "Tu WEB empieza a convertir",
        text: "Una presencia digital genera confianza, estratégica y enfocada en generar resultados.",
    },
]

export default function BusinessConversionSection() {
    return (
        <section className="business-conversion-section">
            <div className="business-conversion-bg">
                <div className="business-conversion-glow business-conversion-glow-left" />
                <div className="business-conversion-glow business-conversion-glow-right" />
                <div className="business-conversion-grid" />
            </div>

            <div className="business-conversion-container">
                <motion.div
                    className="business-conversion-header"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.25 }}
                >
                    <motion.div className="business-conversion-eyebrow" variants={fadeUp}>
                        <AlertTriangle size={16} />
                        <span>Sin presencia digital no existes</span>
                    </motion.div>

                    <motion.h2
                        className="business-conversion-title heading-h2"
                        variants={fadeUp}
                    >
                        
                        <br />
                        <span>¿Tu negocio es una carga o un sistema?</span>
                    </motion.h2>

                    <motion.p className="business-conversion-subtitle" variants={fadeUp}>
                        Ayudamos a negocios locales sin presencia digital al la transformacion digital. Escalamos tu negocio, damos visibilidad, aumentamos clientes y ahorramos tiempo
                    </motion.p>
                </motion.div>

                <div className="business-conversion-main">
                    <motion.article
                        className="business-panel business-panel-chaos"
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="business-panel-top">
                            <div className="business-panel-badge business-panel-badge-chaos">
                                <Frown size={16} />
                                <span>Negocio Tradicional: caos, saturación y fuga de clientes</span>
                            </div>

                            <h3 className="business-panel-title heading-h3">
                                Vas ocupado todo el día,
                                <br />
                                <span>pero tu negocio sigue sintiéndose fuera de control.</span>
                            </h3>

                            <p className="business-panel-description">
                                Tienes movimiento, mensajes, trabajo... pero también retrasos,
                                desorden y oportunidades que desaparecen sin que te des cuenta.
                            </p>
                        </div>

                        <div className="business-points">
                            {chaosItems.map((item, index) => {
                                const Icon = item.icon

                                return (
                                    <motion.div
                                        className="business-point business-point-chaos"
                                        key={item.title}
                                        {...itemFade(index * 0.08)}
                                    >
                                        <div className="business-point-icon">
                                            <Icon size={20} />
                                        </div>

                                        <div className="business-point-content">
                                            <h4 className="card-title">{item.title}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.article>

                    <motion.div
                        className="business-conversion-divider"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className="business-conversion-divider-line" />
                        <div className="business-conversion-divider-center">
                            <ArrowRight size={18} />
                        </div>
                        <div className="business-conversion-divider-line" />
                    </motion.div>

                    <motion.article
                        className="business-panel business-panel-solution"
                        variants={slideRight}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, amount: 0.2 }}
                    >
                        <div className="business-panel-top">
                            <div className="business-panel-badge business-panel-badge-solution">
                                <Sparkles size={16} />
                                <span>Negocio VM Sistema: orden, control y crecimiento real</span>
                            </div>

                            <h3 className="business-panel-title heading-h3">
                                Tu negocio ahora tiene un sistema,
                                <br />
                                <span>Consigues mas clientes, orden, confianza y tareas automatizadas</span>
                            </h3>

                            <p className="business-panel-description">
                                Menos improvisación, menos tareas repetitivas y más control sobre cada
                                cliente, cada proceso y cada oportunidad de venta.
                            </p>
                        </div>

                        <div className="business-points">
                            {solutionItems.map((item, index) => {
                                const Icon = item.icon

                                return (
                                    <motion.div
                                        className="business-point business-point-solution"
                                        key={item.title}
                                        {...itemFade(index * 0.08)}
                                    >
                                        <div className="business-point-icon">
                                            <Icon size={20} />
                                        </div>

                                        <div className="business-point-content">
                                            <h4 className="card-title">{item.title}</h4>
                                            <p>{item.text}</p>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.article>
                </div>
            </div>
        </section>
    )
}