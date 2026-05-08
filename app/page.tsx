import type { Metadata } from "next"
import { NextIntlClientProvider } from "next-intl"

import es from "@/messages/es.json"

import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import AutomationProgramSection from "@/components/system"
import ServicesLadder from "@/components/services"
import BusinessConversionSection from "@/components/BusinessConversionSection"
import BackgroundImage from "@/components/BackgroundImage"

export const metadata: Metadata = {
    title: "VM Agency | Diseñamos sistemas que impulsan tu negocio",
    description:
        "Creamos páginas web, apps y automatizaciones con IA para ahorrar tiempo, optimizar procesos y aumentar ventas.",
    alternates: {
        canonical: "https://vmagencia.es/",
        languages: {
            es: "https://vmagencia.es/es/",
            en: "https://vmagencia.es/en/",
            bg: "https://vmagencia.es/bg/",
        },
    },
}

export default function HomePage() {
    return (
        <NextIntlClientProvider locale="es" messages={es}>
            <main className="relative min-h-screen">
                <div className="fixed inset-0 bg-background/60 -z-10" />

                <div className="relative z-10">
                    <Navbar />

                    <section id="home">
                        <HeroSection />
                    </section>

                    <section id="conversion">
                        <BusinessConversionSection />
                    </section>

                    <section id="servicios">
                        <ServicesLadder />
                    </section>

                    <BackgroundImage />

                    <section id="automatizacion">
                        <AutomationProgramSection />
                    </section>

                    <section id="proyectos">
                        <ProjectsSection />
                    </section>

                    <section id="contactar">
                        <CTASection />
                    </section>

                    <Footer />
                </div>
            </main>
        </NextIntlClientProvider>
    )
}