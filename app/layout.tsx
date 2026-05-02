import { Inter, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import type  {Metadata ,Viewport }  from "next"
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter"
});
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'VM Agency | Diseñamos sistemas que impulsan tu negocio',
  description: 'Creamos páginas web, apps y automatizaciones con IA para ahorrar tiempo, optimizar procesos y aumentar ventas.',
  generator: 'v0.app',
  keywords: ['inteligencia artificial', 'desarrollo web', 'apps', 'automatización', 'IA', 'agencia digital'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
  },
}

export const viewport:  Viewport= {
  themeColor: '#682cdf',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}