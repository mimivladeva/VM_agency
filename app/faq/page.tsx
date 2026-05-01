"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/FAQSection"
import { HeroBackground } from "@/components/hero/HeroBackground"
import NeuralStatic from "@/components/hero/NeuralStatic"
import { LanguageProvider } from "@/lib/LanguageContext"
import BackgroundImage from "@/components/BackgroundImage";

export default function FAQPage() {
    return (
        <LanguageProvider>
            <main className="relative min-h-screen">

                {/* CONTENIDO */}
                <div className="relative z-10">
                    <Navbar/>
                    <BackgroundImage />
                    <FAQSection/>
                    <Footer/>
                </div>

            </main>
        </LanguageProvider>
    )
}