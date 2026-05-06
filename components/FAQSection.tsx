"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { HeroBackground } from "@/components/hero/HeroBackground";
import NeuralStatic from "@/components/hero/NeuralStatic";
import { useTranslations } from "next-intl";
import "./css/FAQSection.css";
import "./css/typography.css";

export function FAQSection() {
    const t = useTranslations("FAQ");
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    const faqs = Array.from({ length: 6 }).map((_, i) => ({
        question: t(`items.${i}.question`),
        answer: t(`items.${i}.answer`),
    }));

    return (
        <section className="faq-section" id="faq">
            <div className="faq-hero">
                <HeroBackground />
                <NeuralStatic />
                <div className="faq-hero-overlay" />

                <div className="faq-hero-content">
                    <h2 className="heading-h2">
                        <span>{t("title1")}</span>
                        <span className="hero-title-impulsa"> {t("title2")}</span>
                    </h2>

                    <p className="text-body">{t("subtitle")}</p>
                </div>
            </div>

            <div className="faq-content-wrapper">
                <div className="faq-container">
                    <div className="faq-list">
                        {faqs.map((faq, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={`faq-item ${isOpen ? "active" : ""}`}
                                >
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleFAQ(index)}
                                        aria-expanded={isOpen}
                                    >
                                        <span className="faq-icon">
                                            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                                        </span>

                                        <span className="faq-question-text card-title">
                                            {faq.question}
                                        </span>

                                        <span className="faq-arrow">
                                            {isOpen ? "⌃" : "⌄"}
                                        </span>
                                    </button>

                                    <div className="faq-answer">
                                        <p className="text-body">{faq.answer}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}