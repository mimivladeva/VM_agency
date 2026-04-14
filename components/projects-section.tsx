"use client"

import { ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Web Corporativa",
    category: "Desarrollo Web",
    description: "Diseño y desarrollo de una web corporativa moderna para una empresa de consultoría financiera. Incluye CMS personalizado y optimización SEO.",
    tags: ["Next.js", "Tailwind", "CMS"],
    color: "from-vm-purple to-vm-turquoise",
  },
  {
    title: "Automatización de Leads",
    category: "IA & Automatización",
    description: "Sistema de captura y cualificación automática de leads usando IA. Integración con CRM y notificaciones en tiempo real.",
    tags: ["OpenAI", "Zapier", "CRM"],
    color: "from-vm-turquoise to-vm-turquoise-soft",
  },
  {
    title: "Dashboard & App Interna",
    category: "Apps a Medida",
    description: "Aplicación interna de gestión con dashboard analítico para una startup de logística. Control de inventario y métricas en tiempo real.",
    tags: ["React", "Node.js", "Analytics"],
    color: "from-vm-turquoise-soft to-vm-purple",
  },
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 lg:py-32 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-vm-purple uppercase tracking-wider mb-4">
            Nuestro Trabajo
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Proyectos que generan impacto
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Descubre cómo hemos ayudado a empresas a transformar sus procesos y aumentar sus resultados.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="group relative bg-card border-border/50 hover:border-vm-purple/30 transition-all duration-500 hover:shadow-2xl hover:shadow-vm-purple/10 overflow-hidden"
            >
              {/* Gradient Header */}
              <div className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/10" />
                <div className="absolute bottom-4 left-6 right-6">
                  <span className="inline-block px-3 py-1 text-xs font-medium text-white/90 bg-white/20 backdrop-blur-sm rounded-full">
                    {project.category}
                  </span>
                </div>
                {/* Hover arrow */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                  <ArrowUpRight className="w-5 h-5 text-white" />
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-vm-purple transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {project.description}
                </p>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium text-muted-foreground bg-secondary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
