"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export function CTASection() {
  return (
    <section id="contactar" className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-vm-purple/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-vm-turquoise/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-br from-vm-black via-vm-black to-vm-purple/40 rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-vm-turquoise/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-vm-purple/30 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

          {/* Content */}
          <div className="relative z-10 space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20">
              <Sparkles className="w-4 h-4 text-vm-yellow" />
              <span className="text-sm font-medium text-white/90">¿Listo para empezar?</span>
            </div>

            {/* Title */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight text-balance">
              Convierte tus ideas en sistemas que{" "}
              <span className="bg-gradient-to-r from-vm-yellow to-vm-orange bg-clip-text text-transparent">
                generen resultados
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg text-white/70 max-w-2xl mx-auto text-pretty">
              Agenda una llamada gratuita y descubre cómo podemos ayudarte a optimizar tu negocio con tecnología de vanguardia.
            </p>

            {/* CTA Button */}
            <div className="pt-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-vm-yellow to-vm-orange text-vm-black font-semibold px-10 py-7 text-lg rounded-full shadow-lg hover:shadow-2xl hover:shadow-vm-orange/30 hover:scale-105 transition-all duration-300"
              >
                Agenda tu llamada
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
