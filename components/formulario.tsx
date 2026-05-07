"use client";

import { useState, useEffect } from "react";

type Answer = {
    value: string | null;
    qualifies: boolean | null;
};

export default function ConsultoriaVMPage() {
    const [currentPage, setCurrentPage] = useState("welcome");
    const [countdown, setCountdown] = useState(5);

    const [answers, setAnswers] = useState<Record<string, Answer>>({
        q1: { value: null, qualifies: null },
        q2: { value: null, qualifies: null },
        q3: { value: null, qualifies: null },
        q4: { value: null, qualifies: null },
        q5: { value: null, qualifies: null },
    });

    useEffect(() => {
        if (currentPage === "success") {
            const interval = setInterval(() => {
                setCountdown((prev) => {
                    if (prev <= 1) {
                        clearInterval(interval);
                        window.open(
                            "https://calendly.com/vmmarketing-ia/30min",
                            "_blank"
                        );
                        return 0;
                    }

                    return prev - 1;
                });
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [currentPage]);

    const showPage = (id: string) => {
        setCurrentPage(id);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const selectOption = (
        key: string,
        value: string,
        qualifies: boolean
    ) => {
        setAnswers((prev) => ({
            ...prev,
            [key]: {
                value,
                qualifies,
            },
        }));
    };

    const submitForm = () => {
        const allQualified = Object.values(answers).every(
            (a) => a.qualifies === true
        );

        if (allQualified) {
            showPage("success");
        } else {
            showPage("exit-a");
        }
    };

    const isAnswered = (key: string) =>
        answers[key].value !== null;

    const renderOption = (
        questionKey: string,
        value: string,
        qualifies: boolean,
        label: string
    ) => {
        const selected = answers[questionKey].value === value;

        return (
            <button
                onClick={() =>
                    selectOption(questionKey, value, qualifies)
                }
                className={`option-btn ${selected ? "selected" : ""}`}
            >
                {label}
            </button>
        );
    };

    return (
        <>
            <style jsx>{`
                * {
                    margin: 0;
                    padding: 0;
                    box-sizing: border-box;
                }

                body {
                    margin: 0;
                }

                .page-wrapper {
                    font-family: "Segoe UI", Roboto, sans-serif;

                    background: radial-gradient(
                            circle at top,
                            rgba(104, 44, 223, 0.16),
                            transparent 30%
                    ),
                    linear-gradient(
                            135deg,
                            #0a0a16 0%,
                            #111126 45%,
                            #17172d 100%
                    );

                    color: #fff;

                    min-height: 100vh;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    padding: 20px;
                }

                .container {
                    max-width: 640px;
                    width: 100%;

                    background: rgba(24, 24, 44, 0.88);

                    border: 1px solid rgba(104, 44, 223, 0.18);

                    border-radius: 22px;

                    padding: 44px;

                    backdrop-filter: blur(18px);

                    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.38),
                    0 0 80px rgba(104, 44, 223, 0.08);
                }

                .logo-header {
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    margin-bottom: 28px;
                }

                .logo-header img {
                    width: 110px;
                    height: auto;

                    object-fit: contain;
                    display: block;

                    filter: drop-shadow(0 0 20px rgba(255, 145, 77, 0.24)) drop-shadow(0 0 40px rgba(255, 145, 77, 0.12));
                }

                h1 {
                    font-size: 2rem;
                    font-weight: 700;

                    line-height: 1.2;

                    margin-bottom: 14px;

                    color: #ffffff;

                    text-align: center;

                    letter-spacing: -0.03em;
                }

                .subtitle {
                    color: #b6b7d0;

                    font-size: 1rem;
                    line-height: 1.7;

                    margin-bottom: 34px;

                    text-align: center;
                }

                .question-label {
                    font-size: 1.2rem;
                    font-weight: 700;

                    margin-bottom: 22px;

                    display: block;

                    color: #ffffff;

                    line-height: 1.4;
                }

                .required {
                    color: #ff914d;
                }

                .options {
                    display: flex;
                    flex-direction: column;

                    gap: 14px;

                    margin-bottom: 28px;
                }

                .option-btn {
                    width: 100%;

                    background: rgba(34, 34, 58, 0.72);

                    border: 1px solid rgba(104, 44, 223, 0.18);

                    color: #ffffff;

                    padding: 16px 18px;

                    border-radius: 14px;

                    cursor: pointer;

                    font-size: 15px;
                    font-weight: 500;
                    line-height: 1.4;

                    text-align: left;

                    transition: all 0.25s ease;

                    backdrop-filter: blur(8px);

                    display: flex;
                    align-items: center;
                    justify-content: flex-start;

                    position: relative;

                    box-shadow: 0 4px 14px rgba(0, 0, 0, 0.18),
                    inset 0 1px 0 rgba(255, 255, 255, 0.02);
                }

                .option-btn:hover {
                    border-color: rgba(82, 211, 216, 0.55);

                    background: rgba(48, 48, 78, 0.95);

                    transform: translateY(-2px);

                    box-shadow: 0 10px 24px rgba(8, 186, 204, 0.14),
                    0 0 0 1px rgba(82, 211, 216, 0.08);
                }

                .option-btn.selected {
                    border-color: #08bacc;

                    background: linear-gradient(
                            135deg,
                            rgba(104, 44, 223, 0.28),
                            rgba(8, 186, 204, 0.18)
                    );

                    box-shadow: 0 10px 30px rgba(8, 186, 204, 0.18),
                    0 0 0 1px rgba(82, 211, 216, 0.16);

                    transform: translateY(-1px);
                }

                .option-btn.selected::before {
                    content: "";

                    position: absolute;

                    left: 0;
                    top: 0;

                    width: 4px;
                    height: 100%;

                    border-radius: 14px 0 0 14px;

                    background: linear-gradient(
                            to bottom,
                            #682cdf,
                            #08bacc
                    );
                }

                .btn-next {
                    width: 100%;

                    border: none;

                    border-radius: 14px;

                    padding: 16px 28px;

                    font-size: 16px;
                    font-weight: 700;

                    color: white;

                    cursor: pointer;

                    transition: all 0.25s ease;

                    background: linear-gradient(
                            135deg,
                            #682cdf,
                            #7d35ff
                    );

                    box-shadow: 0 12px 30px rgba(104, 44, 223, 0.28);
                }

                .btn-next:hover {
                    transform: translateY(-2px);

                    background: linear-gradient(
                            135deg,
                            #08bacc,
                            #52d3d8
                    );

                    box-shadow: 0 14px 32px rgba(8, 186, 204, 0.26);
                }

                .btn-next:disabled {
                    opacity: 0.35;

                    cursor: not-allowed;

                    transform: none;

                    box-shadow: none;
                }

                .progress {
                    width: 100%;

                    height: 4px;

                    background: rgba(255, 255, 255, 0.06);

                    border-radius: 999px;

                    overflow: hidden;

                    margin-bottom: 34px;
                }

                .progress-bar {
                    height: 100%;

                    border-radius: 999px;

                    background: linear-gradient(
                            90deg,
                            #682cdf,
                            #08bacc
                    );

                    transition: width 0.3s ease;
                }

                .success-page,
                .exit-page {
                    text-align: center;
                }

                .calendly-btn {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;

                    background: linear-gradient(
                            135deg,
                            #682cdf,
                            #08bacc
                    );

                    color: white;

                    padding: 16px 38px;

                    border-radius: 14px;

                    font-weight: 700;

                    text-decoration: none;

                    margin-top: 18px;

                    transition: all 0.25s ease;

                    box-shadow: 0 14px 34px rgba(104, 44, 223, 0.28);
                }

                .calendly-btn:hover {
                    transform: translateY(-2px);

                    box-shadow: 0 16px 38px rgba(8, 186, 204, 0.26);
                }

                @media (max-width: 640px) {
                    .container {
                        padding: 28px 22px;
                        border-radius: 18px;
                    }

                    h1 {
                        font-size: 1.6rem;
                    }

                    .question-label {
                        font-size: 1.05rem;
                    }

                    .option-btn {
                        font-size: 14px;
                        padding: 15px 14px;
                    }

                    .btn-next {
                        padding: 15px 20px;
                    }

                    .logo-header img {
                        width: 92px;
                    }
                }
            `}</style>
            <div className="page-wrapper">
                <div className="container">
                    <div className="logo-header">
                        <img
                            src="/images/VMlogo.png"
                            alt="VM Agency Logo"
                        />
                    </div>

                    {currentPage === "welcome" && (
                        <>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    style={{width: "0%"}}
                                />
                            </div>

                            <h1>
                                Acceso Exclusivo: Sesión Estratégica VM
                            </h1>

                            <p className="subtitle">
                                Espacio reservado para dueños de negocios
                                que buscan resultados reales con web, IA y
                                automatización.
                            </p>

                            <button
                                className="btn-next"
                                onClick={() => showPage("q1")}
                            >
                                Comenzar Evaluación
                            </button>
                        </>
                    )}

                    {currentPage === "q1" && (
                        <>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    style={{width: "20%"}}
                                />
                            </div>

                            <label className="question-label">
                                1. ¿Cuál es el perfil de tu negocio?{" "}
                                <span className="required">*</span>
                            </label>

                            <div className="options">
                                {renderOption(
                                    "q1",
                                    "local",
                                    true,
                                    "0-10 empleados (negocio local)"
                                )}

                                {renderOption(
                                    "q1",
                                    "big",
                                    true,
                                    "Más de 10 empleados"
                                )}

                                {renderOption(
                                    "q1",
                                    "no-business",
                                    false,
                                    "Aún no tengo negocio (fase idea)"
                                )}

                                {renderOption(
                                    "q1",
                                    "personal",
                                    true,
                                    "Proyecto personal"
                                )}
                            </div>

                            <button
                                className="btn-next"
                                disabled={!isAnswered("q1")}
                                onClick={() => showPage("q2")}
                            >
                                Siguiente
                            </button>
                        </>
                    )}

                    {currentPage === "q2" && (
                        <>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    style={{width: "40%"}}
                                />
                            </div>

                            <label className="question-label">
                                2. ¿Presupuesto para setup digital?{" "}
                                <span className="required">*</span>
                            </label>

                            <div className="options">
                                {renderOption(
                                    "q2",
                                    "low",
                                    false,
                                    "Menos de 499€"
                                )}

                                {renderOption(
                                    "q2",
                                    "mid",
                                    true,
                                    "Entre 499€ y 999€"
                                )}

                                {renderOption(
                                    "q2",
                                    "high",
                                    true,
                                    "Más de 999€"
                                )}

                                {renderOption(
                                    "q2",
                                    "none",
                                    true,
                                    "Tengo presupuesto abierto"
                                )}
                            </div>

                            <button
                                className="btn-next"
                                disabled={!isAnswered("q2")}
                                onClick={() => showPage("q3")}
                            >
                                Siguiente
                            </button>
                        </>
                    )}

                    {currentPage === "q3" && (
                        <>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    style={{width: "60%"}}
                                />
                            </div>

                            <label className="question-label">
                                3. ¿Cuándo necesitas tu presencia digital
                                operativa?
                            </label>

                            <div className="options">
                                {renderOption(
                                    "q3",
                                    "immediate",
                                    true,
                                    "Inmediato (1-2 semanas)"
                                )}

                                {renderOption(
                                    "q3",
                                    "soon",
                                    true,
                                    "En 1-3 meses"
                                )}

                                {renderOption(
                                    "q3",
                                    "curious",
                                    false,
                                    "Solo estoy curioseando"
                                )}

                                {renderOption(
                                    "q3",
                                    "late",
                                    false,
                                    "En más de 3 meses"
                                )}
                            </div>

                            <button
                                className="btn-next"
                                disabled={!isAnswered("q3")}
                                onClick={() => showPage("q4")}
                            >
                                Siguiente
                            </button>
                        </>
                    )}

                    {currentPage === "q4" && (
                        <>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    style={{width: "80%"}}
                                />
                            </div>

                            <label className="question-label">
                                4. ¿Tienes Web y Google Business?
                            </label>

                            <div className="options">
                                {renderOption(
                                    "q4",
                                    "none",
                                    true,
                                    "No tengo nada"
                                )}

                                {renderOption(
                                    "q4",
                                    "basic",
                                    true,
                                    "Web básica sin Google Business"
                                )}

                                {renderOption(
                                    "q4",
                                    "partial",
                                    true,
                                    "Google Business pero sin web"
                                )}

                                {renderOption(
                                    "q4",
                                    "complete",
                                    true,
                                    "Ya tengo Web + Automatización"
                                )}
                            </div>

                            <button
                                className="btn-next"
                                disabled={!isAnswered("q4")}
                                onClick={() => showPage("q5")}
                            >
                                Siguiente
                            </button>
                        </>
                    )}

                    {currentPage === "q5" && (
                        <>
                            <div className="progress">
                                <div
                                    className="progress-bar"
                                    style={{width: "100%"}}
                                />
                            </div>

                            <label className="question-label">
                                5. ¿Quieres automatizar tareas con IA?
                            </label>

                            <div className="options">
                                {renderOption(
                                    "q5",
                                    "yes",
                                    true,
                                    "Sí, 100% comprometido"
                                )}

                                {renderOption(
                                    "q5",
                                    "maybe",
                                    true,
                                    "Sí, pero necesito ver cómo funciona"
                                )}

                                {renderOption(
                                    "q5",
                                    "manual",
                                    false,
                                    "Prefiero seguir manual"
                                )}

                                {renderOption(
                                    "q5",
                                    "no",
                                    true,
                                    "No me interesa la automatización"
                                )}
                            </div>

                            <button
                                className="btn-next"
                                disabled={!isAnswered("q5")}
                                onClick={submitForm}
                            >
                                Enviar y Acceder a la Agenda
                            </button>
                        </>
                    )}

                    {currentPage === "exit-a" && (
                        <div className="exit-page">
                            <h1>
                                Tu perfil no califica actualmente
                            </h1>

                            <p className="subtitle">
                                Buscamos negocios listos para invertir en
                                digitalización con IA y automatización.
                            </p>
                        </div>
                    )}

                    {currentPage === "success" && (
                        <div className="success-page">
                            <h1>¡Has sido calificado!</h1>

                            <p className="subtitle">
                                Tu perfil encaja con nuestro cliente ideal.
                            </p>

                            <p
                                style={{
                                    fontSize: "14px",
                                    color: "#888",
                                    marginBottom: "24px",
                                }}
                            >
                                Redirección automática en {countdown} segundos.
                            </p>

                            <a
                                href="https://calendly.com/vmmarketing-ia/30min"
                                className="calendly-btn"
                                target="_blank"
                            >
                                Reservar en Calendly
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}