"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import "./css/FAQSection.css";

const faqs = [
    {
        question: "Ya me conocen por el boca a boca, ¿para qué necesito esto?",
        answer:
            "El boca a boca es excelente, pero es inestable. Si dependes solo de eso, no tienes control sobre cuántos clientes nuevos entran cada semana. Creamos un sistema de captación que trabaja en paralelo para que tengas un flujo más constante y una imagen online profesional.",
    },
    {
        question: "No tengo tiempo para aprender a usar nuevas tecnologías o IAs.",
        answer:
            "Precisamente por eso no te vendemos tecnología, sino tiempo y control. Nosotros nos encargamos de la parte técnica: web, automatizaciones y sistemas digitales, para que tú solo veas los resultados sin tener que aprender herramientas nuevas.",
    },
    {
        question:
            "Mi negocio es pequeño, ¿esto no es para empresas más grandes?",
        answer:
            "Al contrario. Los negocios pequeños son los que más se benefician de automatizar. Cada hora que ahorras en respuestas, seguimiento o tareas repetitivas es una hora que puedes dedicar a gestionar mejor tu negocio o recuperar tiempo libre.",
    },
    {
        question: "Ya tengo una página web o redes sociales y no me traen clientes.",
        answer:
            "Tener presencia online no significa tener un sistema que convierte. Nosotros no solo diseñamos una web bonita: creamos una estrategia básica de captación para que el cliente pase de verte online a confiar en ti y contratar tu servicio.",
    },
    {
        question: "He tenido malas experiencias con agencias de marketing antes.",
        answer:
            "Lo entendemos. Muchas agencias venden humo, tecnicismos o métricas que no se traducen en resultados reales. En VM Agencia nos enfocamos en una transformación clara: más profesionalidad, más confianza y más oportunidades reales para tu negocio.",
    },
    {
        question: "¿Es muy caro implementar estos sistemas?",
        answer:
            "Lo caro es perder clientes por no transmitir confianza, no responder a tiempo o depender solo del boca a boca. No lo planteamos como un gasto en tecnología, sino como una inversión para profesionalizar tu negocio, ahorrar tiempo y estabilizar tus ingresos.",
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? -1 : index);
    };

    return (
        <section className="faq-section" id="faq">
            <div className="faq-bg faq-bg-left" />
            <div className="faq-bg faq-bg-right" />

            <div className="faq-container">
                <div className="faq-header">
                    <h2>
                        Preguntas <span>Frecuentes</span>
                    </h2>
                    <p>
                        Resolvemos tus dudas para que tomes decisiones con confianza.
                    </p>
                </div>

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

                                    <span className="faq-question-text">{faq.question}</span>

                                    <span className="faq-arrow">
                    {isOpen ? "⌃" : "⌄"}
                  </span>
                                </button>

                                <div className="faq-answer">
                                    <p>{faq.answer}</p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}