import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { BenefitsSection } from "@/components/benefits-section"
import { ProjectsSection } from "@/components/projects-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import ParticlesBackground from "@/components/ParticlesBackground"

export default function Home() {
    return (
        <main className="relative min-h-screen">

            {/* FONDO DE PARTÍCULAS */}
            <ParticlesBackground />

            {/* OVERLAY PARA QUE SE VEA BIEN */}
            <div className="fixed inset-0 bg-background/60 -z-10" />

            {/* CONTENIDO */}
            <div className="relative z-10">
                <Navbar />
                <HeroSection />
                <ServicesSection />
                <BenefitsSection />
                <ProjectsSection />
                <CTASection />
                <Footer />
            </div>

        </main>
    )
}