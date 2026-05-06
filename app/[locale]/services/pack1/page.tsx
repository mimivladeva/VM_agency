import { Navbar } from "@/components/navbar"
import BackgroundImage from "@/components/BackgroundImage"
import { ServicePackOne } from "@/components/services/pack1"
import { Footer } from "@/components/footer"

export default function Pack1Page() {
    return (
        <main className="relative min-h-screen">
            <div className="relative z-10">
                <Navbar forceActive={true} />
                <BackgroundImage />
                <ServicePackOne />
                <Footer />
            </div>
        </main>
    )
}