import { ServicePackTwo } from "@/components/services/pack2";
import {Navbar} from "@/components/navbar";
import BackgroundImage from "@/components/BackgroundImage";
import {FAQSection} from "@/components/FAQSection";
import {Footer} from "@/components/footer";
import { LanguageProvider } from "@/lib/LanguageContext"
import { ServicePackFour} from "@/components/services/pack4";

export default function Pack1Page() {
    return (
        <LanguageProvider>
            <main className="relative min-h-screen">

                {/* CONTENIDO */}
                <div className="relative z-10">
                    <Navbar forceActive={true} />
                    <BackgroundImage />
                    < ServicePackFour/>
                    <Footer/>
                </div>

            </main>
        </LanguageProvider>
    )
}
