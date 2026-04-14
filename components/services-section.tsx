"use client"

import { Bot, Globe, Smartphone, Cog, LucideIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

interface Service {
  icon: LucideIcon
  title: string
  description: string
  iconBg: string
  iconColor: string
  accentGradient: string
}

const services: Service[] = [
  {
    icon: Bot,
    title: "Automatización con IA",
    description: "¿Pierdes horas en tareas repetitivas? Automatizamos tu negocio con IA para que ahorres tiempo, reduzcas errores y te enfoques en crecer.",
    iconBg: "bg-[#682cdf]/10",
    iconColor: "text-[#682cdf]",
    accentGradient: "from-[#FDE259] to-[#F88A4B]",
  },
  {
    icon: Globe,
    title: "Desarrollo Web",
    description: "¿Tu web no genera clientes? Creamos páginas rápidas, modernas y optimizadas para convertir visitas en oportunidades reales.",
    iconBg: "bg-[#52d3d8]/10",
    iconColor: "text-[#52d3d8]",
    accentGradient: "from-[#FDE259] to-[#F88A4B]",
  },
  {
    icon: Smartphone,
    title: "Apps a Medida",
    description: "¿Necesitas una solución específica? Desarrollamos aplicaciones adaptadas a tu negocio para mejorar la experiencia y la eficiencia.",
    iconBg: "bg-[#52d3d8]/10",
    iconColor: "text-[#52d3d8]",
    accentGradient: "from-[#FDE259] to-[#F88A4B]",
  },
  {
    icon: Cog,
    title: "Optimización de Procesos",
    description: "¿Tu negocio depende de procesos manuales? Analizamos y optimizamos tus flujos para reducir costes y aumentar la productividad.",
    iconBg: "bg-[#682cdf]/10",
    iconColor: "text-[#682cdf]",
    accentGradient: "from-[#FDE259] to-[#F88A4B]",
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="py-16 lg:py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-13">
          <span className="inline-block text-sm font-semibold text-vm-purple uppercase tracking-wider mb-4">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-4xl font-bold text-foreground mb-6">
            Deja de perder tiempo y clientes por procesos ineficientes
          </h2>

          <p className="text-lg text-muted-foreground">
            Transformamos tu negocio con webs, automatización e inteligencia artificial que realmente generan
            resultados.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {services.map((service, index) => (
              <Card
                  key={index}
                  className="group relative bg-card border-border/50 hover:border-[#FDE259]/50 transition-all duration-300 hover:-translate-y-1 overflow-hidden hover:shadow-[0_0_40px_rgba(253,226,89,0.3)]"
              >
              <CardContent className="p-5 lg:p-5">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${service.iconBg} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className={`w-7 h-7 ${service.iconColor}`} />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>

                {/* Hover accent */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.accentGradient} scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`} />
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
