import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProjectsSection } from "@/components/projects-section"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"
import ParticlesBackground from "@/components/ParticlesBackground"
import AutomationProgramSection from "@/components/system";
import  ServicesLadder from "@/components/services";
import BusinessConversionSection from "@/components/BusinessConversionSection";
import BackgroundImage from "@/components/BackgroundImage"
import { LanguageProvider } from "@/lib/LanguageContext"



export default function Home() {
    return (
        <LanguageProvider>
            <main className="relative min-h-screen">

                <div className="fixed inset-0 bg-background/60 -z-10"/>

                <div className="relative z-10">
                    <Navbar/>
                    <HeroSection/>
                    <ServicesLadder/>
                    <BackgroundImage />
                    <BusinessConversionSection/>
                    <AutomationProgramSection/>
                    <ProjectsSection/>
                    <CTASection/>
                    <Footer/>
                </div>

            </main>
        </LanguageProvider>
    )
}