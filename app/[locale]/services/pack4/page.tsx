import { ServicePackFour } from "@/components/services/pack4"
import { Navbar } from "@/components/navbar"
import BackgroundImage from "@/components/BackgroundImage"
import { Footer } from "@/components/footer"

export default function Pack4Page() {
    return (
        <main className="relative min-h-screen">
            <div className="relative z-10">
                <Navbar forceActive={true} />
                <BackgroundImage />
                <ServicePackFour />
                <Footer />
            </div>
        </main>
    )
}