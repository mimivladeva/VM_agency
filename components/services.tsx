"use client";

import "./css/ServicesLadder.css";
import "./css/typography.css";
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function ServicesLadder() {
  const t = useTranslations("Services");

  const services = [
    {
      id: 1,
      title: t("pack1.title"),
      desc: t("pack1.desc"),
      link: "/services/pack1",
      items: [
        t("pack1.items.0"),
        t("pack1.items.1"),
        t("pack1.items.2"),
      ],
    },
    {
      id: 2,
      title: t("pack2.title"),
      desc: t("pack2.desc"),
      link: "/services/pack2",
      items: [
        t("pack2.items.0"),
        t("pack2.items.1"),
        t("pack2.items.2"),
        t("pack2.items.3"),
      ],
    },
    {
      id: 3,
      title: t("pack3.title"),
      desc: t("pack3.desc"),
      link: "/services/pack3",
      items: [
        t("pack3.items.0"),
        t("pack3.items.1"),
        t("pack3.items.2"),
        t("pack3.items.3"),
        t("pack3.items.4"),
      ],
    },
    {
      id: 4,
      title: t("pack4.title"),
      desc: t("pack4.desc"),
      link: "/services/pack4",
      items: [
        t("pack4.items.0"),
        t("pack4.items.1"),
        t("pack4.items.2"),
        t("pack4.items.3"),
      ],
    },
  ];

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

  useEffect(() => {
    if (isMobile) return;
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % services.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [isMobile, services.length]);

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

  useEffect(() => {
    const el = cardRefs.current[active];
    const wrapper = document.querySelector(".ladder-wrapper");

    if (!el || !wrapper) return;

    const rect = el.getBoundingClientRect();
    const parentRect = wrapper.getBoundingClientRect();

    setCursorPos({
      x: rect.left - parentRect.left + rect.width / 2,
      y: rect.top - parentRect.top + rect.height / 2,
    });
  }, [active]);

  return (
      <section className="services-ladder">
        <div className="services-container">
          <h2 className="services-title heading-h2">
            <span>{t("title")}</span>
          </h2>

          <div className="ladder-wrapper">
            {!isMobile && (
                <div
                    className="cursor"
                    style={{
                      left: cursorPos.x,
                      top: cursorPos.y,
                      transform: "translate(-50%, -50%)",
                    }}
                >
                  <div className="cursor-icon">🖱️</div>
                  <div className="click-ring" />
                </div>
            )}

            <div className="ladder">
              {services.map((service, index) => {
                const card = (
                    <div
                        ref={(el) => {
                          cardRefs.current[index] = el;
                        }}
                        className={`ladder-card ${
                            active === index ? "active" : ""
                        }`}
                        style={{
                          marginTop: `${(services.length - index - 1) * 60}px`,
                        }}
                    >
                      <div className="card-badge">
                        {t("pack")} {service.id}
                      </div>

                      <h3 className="card-title">{service.title}</h3>
                      <p className="card-desc">{service.desc}</p>

                      <ul>
                        {service.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                );

                return service.link ? (
                    <Link key={service.id} href={service.link} className="ladder-link">
                      {card}
                    </Link>
                ) : (
                    <div key={service.id} className="ladder-link">
                      {card}
                    </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
  );
}