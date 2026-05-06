import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { FAQSection } from "@/components/FAQSection"
import BackgroundImage from "@/components/BackgroundImage"

export default function FAQPage() {
    return (
        <main className="relative min-h-screen">

            <div className="relative z-10">
                <Navbar />
                <BackgroundImage />
                <FAQSection />
                <Footer />
            </div>

        </main>
    )
}