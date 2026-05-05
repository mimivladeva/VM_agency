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
import { useTranslations } from "next-intl"
import "@/components/css/typography.css"
import "@/components/css/BusinessConversionSection.css"

const containerVariants: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12 } },
}

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
    },
}

const slideLeft: Variants = {
    hidden: { opacity: 0, x: -50 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
}

const slideRight: Variants = {
    hidden: { opacity: 0, x: 50 },
    show: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
    },
}

const itemFade = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, delay },
})

export default function BusinessConversionSection() {
    const t = useTranslations("Business")

    const chaosItems = [
        {
            icon: MessageCircleMore,
            title: t("chaos.items.0.title"),
            text: t("chaos.items.0.text"),
        },
        {
            icon: Clock3,
            title: t("chaos.items.1.title"),
            text: t("chaos.items.1.text"),
        },
        {
            icon: SearchX,
            title: t("chaos.items.2.title"),
            text: t("chaos.items.2.text"),
        },
        {
            icon: Globe2,
            title: t("chaos.items.3.title"),
            text: t("chaos.items.3.text"),
        },
    ]

    const solutionItems = [
        {
            icon: Bot,
            title: t("solution.items.0.title"),
            text: t("solution.items.0.text"),
        },
        {
            icon: Workflow,
            title: t("solution.items.1.title"),
            text: t("solution.items.1.text"),
        },
        {
            icon: ChartNoAxesCombined,
            title: t("solution.items.2.title"),
            text: t("solution.items.2.text"),
        },
        {
            icon: Sparkles,
            title: t("solution.items.3.title"),
            text: t("solution.items.3.text"),
        },
    ]

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
                        <span>{t("eyebrow")}</span>
                    </motion.div>

                    <motion.h2 className="business-conversion-title heading-h2" variants={fadeUp}>
                        <span>{t("title")}</span>
                    </motion.h2>

                    <motion.p className="business-conversion-subtitle" variants={fadeUp}>
                        {t("subtitle")}
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
                                <span>{t("chaos.badge")}</span>
                            </div>

                            <h3 className="business-panel-title heading-h3">
                                {t("chaos.title")}
                            </h3>

                            <p className="business-panel-description">
                                {t("chaos.description")}
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

                    <motion.div className="business-conversion-divider">
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
                                <span>{t("solution.badge")}</span>
                            </div>

                            <h3 className="business-panel-title heading-h3">
                                {t("solution.title")}
                            </h3>

                            <p className="business-panel-description">
                                {t("solution.description")}
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