"use client"

import Link from "next/link"
import { Twitter, Linkedin, Instagram, Mail, MapPin } from "lucide-react"

const quickLinks = [
  { href: "#home", label: "Home" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#contactar", label: "Contactar" },
  { href: "#faq", label: "FAQ" },
]

const services = [
  "Automatización con IA",
  "Desarrollo Web",
  "Apps a Medida",
  "Optimización de Procesos",
]

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  return (
    <footer className="bg-vm-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 lg:py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1 space-y-6">
            <Link href="/" className="flex items-center gap-1">
              <span className="text-2xl font-bold bg-gradient-to-r from-vm-yellow to-vm-orange bg-clip-text text-transparent">
                VM
              </span>
              <span className="text-2xl font-bold text-white">Agency</span>
            </Link>
            <p className="text-white/60 leading-relaxed">
              Transformamos negocios con tecnología de vanguardia. IA, desarrollo web y automatización para impulsar tu crecimiento.
            </p>
            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-vm-purple transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Enlaces Rápidos</h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-vm-turquoise transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-4">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-white/60">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-vm-turquoise flex-shrink-0 mt-0.5" />
                <span className="text-white/60">hola@vmagency.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-vm-turquoise flex-shrink-0 mt-0.5" />
                <span className="text-white/60">Madrid, España</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white/40 text-sm">
              © {new Date().getFullYear()} VM Agency. Todos los derechos reservados.
            </p>
            <div className="flex gap-6">
              <Link href="#" className="text-white/40 text-sm hover:text-white/60 transition-colors">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-white/40 text-sm hover:text-white/60 transition-colors">
                Términos de Servicio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
