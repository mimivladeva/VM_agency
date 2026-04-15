"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, Zap, BarChart3 } from "lucide-react"
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

// =======================
// MOCKUP
// =======================
function DeviceMockup({ project }: { project: (typeof projects)[0] }) {
  return (
      <AnimatePresence mode="wait">
        <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-4xl mx-auto"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 to-indigo-500/20 blur-3xl rounded-full scale-90" />

          {/* Laptop */}
          <div className="relative mx-auto w-full max-w-3xl">
            <div className="rounded-[28px] bg-neutral-900 p-3 shadow-xl border border-white/10">
              <div className="rounded-[20px] overflow-hidden bg-black">

                <div className="h-8 bg-neutral-800 flex items-center px-4 gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                </div>

                <div className="relative aspect-[16/9]">
                  {project.type === "video" ? (
                      <video
                          src={project.laptop}
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="w-full h-full object-contain"
                      />
                  ) : (
                      <Image
                          src={project.laptop}
                          alt=""
                          fill
                          className="object-contain"
                      />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile */}
          <motion.div
              initial={{ opacity: 0, x: -40, y: 40 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ delay: 0.2 }}
              className="absolute bottom-0 left-0 w-[120px]"
          >
            <div className="rounded-[24px] bg-black p-[5px] shadow-2xl">
              <div className="relative rounded-[20px] overflow-hidden aspect-[9/19]">
                <Image
                    src={project.mobile}
                    alt=""
                    fill
                    className="object-contain"
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
  )
}

// =======================
// SECTION
// =======================
export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<typeof projects[0] | null>(null)

  return (
      <section className="relative py-24 bg-[#f7f7f8]">

        <div className="max-w-7xl mx-auto px-4">

          {/* 🔥 HEADER CENTRADO */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2
              className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
            Proyectos que{" "}
            <span className="bg-gradient-to-r from-[#f1de59] via-[#ffb347] to-[#ff914d] bg-clip-text text-transparent">
    convierten
  </span>
          </h2>
            <p className="text-slate-600">
              Selecciona un proyecto para ver cómo se ve realmente en dispositivos.
            </p>
          </div>

          {/* 🔥 CONTENIDO */}
          <div className={`transition-all duration-500 ${
              activeProject
                  ? "grid lg:grid-cols-2 gap-16 items-center"
                  : "flex justify-center"
          }`}>

            {/* CARDS */}
            <div
                className={`transition-all duration-500 ${
                    activeProject
                        ? "space-y-4 max-w-md"
                        : "flex gap-6"
                }`}
            >
              {projects.map((project) => {
                const isActive = activeProject?.id === project.id

                return (
                    <Card
                        key={project.id}
                        onMouseEnter={() => setActiveProject(project)}
                        onClick={() => setActiveProject(project)}
                        className={`group relative overflow-hidden cursor-pointer transition-all duration-500 ${
                            activeProject ? "w-full" : "w-[300px]"
                        } ${
                            isActive
                                ? "border-transparent shadow-2xl scale-105"
                                : "border-slate-200 hover:scale-105"
                        }`}
                    >
                      {/* 🔥 GLOW CON TUS COLORES */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-[#f1de59]/10 to-[#ff914d]/10 blur-2xl" />

                      <CardContent className="relative p-6 flex flex-col h-full">

                        {/* 🔥 ICONO CORPORATIVO */}
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-4
      bg-gradient-to-br from-[#f1de59]/30 to-[#ff914d]/30
      group-hover:scale-110 transition">

                          <project.icon className="w-6 h-6 text-[#ff914d]" />
                        </div>

                        {/* CATEGORY */}
                        <span className="text-xs font-semibold tracking-wide text-[#ff914d] uppercase">
      {project.category}
    </span>

                        {/* 🔥 TITULO CON TU GRADIENTE */}
                        <h3 className="text-2xl font-bold mt-2 leading-tight">
      <span className="bg-gradient-to-r from-[#f1de59] to-[#ff914d] bg-clip-text text-transparent">
        {project.title}
      </span>
                        </h3>
                        {/* DESCRIPCIÓN */}
                        <p className="text-sm text-slate-500 mt-3 leading-relaxed flex-grow">
                          {project.description}
                        </p>

                        {/* CTA */}
                        <div className="flex items-center justify-between mt-6">
      <span className="text-sm font-medium text-slate-400 group-hover:text-[#ff914d] transition">
        Ver proyecto
      </span>

                          <ArrowUpRight className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[#ff914d]" />
                        </div>

                      </CardContent>
                    </Card>
                )
              })}
            </div>

            {/* MOCKUP */}
            {activeProject && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                  <DeviceMockup project={activeProject} />
                </motion.div>
            )}

          </div>
        </div>
      </section>
  )
}