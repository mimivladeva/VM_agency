"use client"

import { Clock, TrendingUp, RefreshCcw, Rocket } from "lucide-react"

const benefits = [
  {
    icon: Clock,
    title: "Ahorro de tiempo",
    description: "Automatiza tareas que antes tomaban horas y dedica tu tiempo a lo que realmente importa.",
  },
  {
    icon: TrendingUp,
    title: "Mejora de conversión",
    description: "Diseños optimizados y flujos inteligentes que aumentan tus ventas y engagement.",
  },
  {
    icon: RefreshCcw,
    title: "Menos tareas repetitivas",
    description: "Elimina el trabajo manual y deja que la tecnología se encargue de los procesos rutinarios.",
  },
  {
    icon: Rocket,
    title: "Soluciones escalables",
    description: "Sistemas que crecen contigo, diseñados para adaptarse a las demandas de tu negocio.",
  },
]

export function BenefitsSection() {
  return (
    <section className="py-16 lg:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-semibold text-vm-turquoise uppercase tracking-wider mb-4">
            Por qué elegirnos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-6 text-balance">
            Tecnología que trabaja por ti
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Implementamos soluciones que generan resultados reales y medibles para tu negocio.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="group flex gap-6 p-6 rounded-2xl bg-secondary/30 hover:bg-secondary/50 transition-all duration-300"
            >
              {/* Icon */}
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-vm-purple/20 to-vm-turquoise/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <benefit.icon className="w-8 h-8 text-vm-purple" />
              </div>

              {/* Content */}
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-foreground">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
