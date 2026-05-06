import { ServicePackThree } from "@/components/services/pack3"
import { Navbar } from "@/components/navbar"
import BackgroundImage from "@/components/BackgroundImage"
import { Footer } from "@/components/footer"

export default function Pack3Page() {
    return (
        <main className="relative min-h-screen">
            <div className="relative z-10">
                <Navbar forceActive={true} />
                <BackgroundImage />
                <ServicePackThree />
                <Footer />
            </div>
        </main>
    )
}