"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight, Globe, Zap, BarChart3 } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import "@/components/css/ProjectsSection.css"
import { useEffect, useRef } from "react";

const projects = [
  {
    id: 1,
    title: "VG Detailing",
    category: "Web Corporativa",
    icon: Globe,
    description:
        "Sitio web profesional para estudio de detailing con enfoque premium, reserva de citas y presentación clara de servicios.",
    type: "video",
    laptop: "/images/vgdetailing-laptop.mp4",
    mobile: "/images/vgdetailing-mobile.png",
  },
  {
    id: 2,
    title: "Automatización de Leads",
    category: "IA & Automatización",
    icon: Zap,
    description:
        "Sistema de captura y cualificación automática de leads con IA e integración con CRM.",
    type: "video",
    laptop: "/images/videoIA.mp4",
    mobile: "/images/dashboard.png",
  },
  {
    id: 3,
    title: "Dashboard Interno",
    category: "App a Medida",
    icon: BarChart3,
    description:
        "Dashboard de analítica y control de operaciones en tiempo real para empresa logística.",
    type: "image",
    laptop: "/images/project3-laptop.png",
    mobile: "/images/project3-mobile.png",
  },
]

function DeviceMockup({ project }: { project: (typeof projects)[0] }) {

  return (
      <AnimatePresence mode="wait">
        <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="projects-mockup"
        >
          <div className="projects-mockup-glow" />

          <div className="projects-laptop-wrap">
            <div className="projects-laptop-shell">
              <div className="projects-laptop-screen">
                <div className="projects-laptop-topbar">
                  <div className="projects-dot projects-dot-red" />
                  <div className="projects-dot projects-dot-yellow" />
                  <div className="projects-dot projects-dot-green" />
                </div>

                <div className="projects-laptop-media">
                  {project.type === "video" ? (
                      <video
                          src={project.laptop}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="projects-media-fit"
                      />
                  ) : (
                      <Image
                          src={project.laptop}
                          alt={project.title}
                          fill
                          className="projects-media-fit"
                      />
                  )}
                </div>
              </div>
            </div>
          </div>

          <motion.div
              initial={{ opacity: 0, x: -40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.2 }}
              className="projects-phone-wrap"
          >
            <div className="projects-phone-shell">
              <div className="projects-phone-screen">
                <Image
                    src={project.mobile}
                    alt={`${project.title} mobile`}
                    fill
                    className="projects-media-fit"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
  )
}

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<(typeof projects)[0] | null>(null)


  const previewRef = useRef<HTMLDivElement | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
      <section className="projects-section">
        <div className="projects-container">
          <div className="projects-header">
            <h2 className="projects-title">
              Proyectos que{" "}
              <span className="projects-title-gradient">convierten</span>
            </h2>

            <p className="projects-subtitle">
              Selecciona un proyecto para ver cómo se ve realmente en dispositivos.
            </p>
          </div>

          <div
              className={`projects-content ${
                  activeProject ? "projects-content-active" : "projects-content-idle"
              }`}
          >
            <div
                className={`projects-cards ${
                    activeProject ? "projects-cards-stacked" : "projects-cards-inline"
                }`}
            >
              {projects.map((project) => {
                const isActive = activeProject?.id === project.id

                return (
                    <Card
                        key={project.id}
                        onMouseEnter={() => setActiveProject(project)}
                        onClick={() => {
                          setActiveProject(project);

                          if (isMobile) {
                            setTimeout(() => {
                              previewRef.current?.scrollIntoView({
                                behavior: "smooth",
                                block: "center",
                              });
                            }, 100);
                          }
                        }}
                        className={`projects-card group ${
                            activeProject ? "projects-card-full" : "projects-card-fixed"
                        } ${isActive ? "projects-card-active" : "projects-card-idle"}`}
                    >
                      <div className="projects-card-glow" />

                      <CardContent className="projects-card-content">
                        <div className="projects-icon-box">
                          <project.icon className="projects-icon" />
                        </div>

                        <span className="projects-category">{project.category}</span>

                        <h3 className="projects-card-title">
                      <span className="projects-card-title-gradient">
                        {project.title}
                      </span>
                        </h3>

                        <p className="projects-description">{project.description}</p>

                        <div className="projects-card-footer">
                          <span className="projects-card-cta">Ver proyecto</span>
                          <ArrowUpRight className="projects-card-arrow" />
                        </div>
                      </CardContent>
                    </Card>
                )
              })}
            </div>

            {activeProject && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="projects-preview"
                    ref={previewRef}
                >
                  <DeviceMockup project={activeProject} />
                </motion.div>
            )}
          </div>
        </div>
      </section>
  )
}