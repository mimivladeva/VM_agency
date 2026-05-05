import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
})

export const metadata: Metadata = {
    title: "VM Agency | Diseñamos sistemas que impulsan tu negocio",
    description:
        "Creamos páginas web, apps y automatizaciones con IA para ahorrar tiempo, optimizar procesos y aumentar ventas.",
}

export const viewport: Viewport = {
    themeColor: "#682cdf",
    width: "device-width",
    initialScale: 1,
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html>
        <body className={inter.variable}>{children}</body>
        </html>
    )
}