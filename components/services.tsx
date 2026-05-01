"use client";
import "./css/ServicesLadder.css";
import "./css/typography.css";
import { useEffect, useState, useRef } from "react";

const services = [
  {
    id: 1,
    title: "Presencia digital",
    desc: "Entrada básica para que tu negocio exista y se entienda online.",
    items: [
      "Página web",
      "Copywriting con sentido",
      "SEO básico",
    ],
  },
  {
    id: 2,
    title: "Captación de clientes",
    desc: "Empiezas a convertir visitas en oportunidades reales.",
    items: [
      "Estrategia de marketing",
      "Embudos de venta",
      "Automatización de clientes",
      "WhatsApp, email y formularios",
    ],
  },
  {
    id: 3,
    title: "Automatización e IA",
    desc: "El sistema trabaja por ti mientras tú escalas.",
    items: [
      "Automatización de procesos repetitivos",
      "Respuestas automáticas (web, WhatsApp, email)",
      "Chatbots inteligentes",
      "Seguimiento automático de clientes",
      "IA para clasificar y ayudar al negocio",
    ],
  },
  {
    id: 4,
    title: "Análisis y optimización",
    desc: "Decisiones basadas en datos para crecer sin fricción.",
    items: [
      "Análisis de datos",
      "Optimización de conversiones",
      "Integraciones avanzadas con IA",
      "Apps a medida",
    ],
  },
];




export default function ServicesLadder() {
  const [active, setActive] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);


  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // 🔁 ciclo automático


  useEffect(() => {
    if (isMobile) return;

    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isMobile]);

  useEffect(() => {
    if (!isMobile) return;

    const handleScroll = () => {
      cardRefs.current.forEach((el, index) => {
        if (!el) return;
        const rect = el.getBoundingClientRect();

        if (rect.top < window.innerHeight * 0.65) {
          setActive(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMobile]);

  // 📍 calcular posición REAL
  useEffect(() => {
    const el = cardRefs.current[active];
    const wrapper = document.querySelector(".ladder-wrapper");

    if (el && wrapper) {
      const rect = el.getBoundingClientRect();
      const parentRect = wrapper.getBoundingClientRect();

      setCursorPos({
        x: rect.left - parentRect.left + rect.width / 2,
        y: rect.top - parentRect.top + rect.height / 2,
      });
    }
  }, [active]);

  return (
      <section className="services-ladder">
        <div className="services-container">

          <h2 className="services-title heading-h2">
            Escala tu negocio <span>paso a paso</span>
          </h2>

          <div className="ladder-wrapper">

            {/* 🖱️ CURSOR */}
            <div
                className="cursor"
                style={{
                  left: cursorPos.x,
                  top: cursorPos.y,
                  transform: "translate(-50%, -50%)"
                }}
            >
              <div className="cursor-icon">🖱️</div>
              <div className="click-ring"></div>
            </div>

            <div className="ladder">
              {services.map((service, index) => (
                  <div
                      key={service.id}
                      ref={(el) => {
                        cardRefs.current[index] = el;
                      }}
                      className={`ladder-card ${active === index ? "active" : ""}`}
                      style={{
                        marginTop: `${(services.length - index - 1) * 60}px`
                      }}
                  >
                    <div className="card-badge">Pack {service.id}</div>

                    <h3 className="card-title">{service.title}</h3>
                    <p className="card-desc">{service.desc}</p>

                    <ul>
                      {service.items.map((item, i) => (
                          <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
              ))}
            </div>

          </div>
        </div>
      </section>
  );
}