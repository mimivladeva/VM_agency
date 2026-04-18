"use client"

import Link from "next/link"
import { Twitter, Linkedin, Instagram, Mail, MapPin, ArrowUpRight } from "lucide-react"
import "@/components/css/footer.css"

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
      <footer className="footer">
        <div className="footer-glow footer-glow-purple" />
        <div className="footer-glow footer-glow-cyan" />
        <div className="footer-glow footer-glow-orange" />

        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-brand-card">
              <Link href="/" className="footer-logo">
                <span className="footer-logo-vm">VM</span>
                <span className="footer-logo-agency">Agency</span>
              </Link>

              <p className="footer-brand-text">
                Transformamos negocios con tecnología, diseño y automatización.
                Creamos sistemas digitales pensados para atraer, convertir y escalar.
              </p>

              <div className="footer-socials">
                {socialLinks.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="footer-social-link"
                    >
                      <social.icon className="footer-social-icon" />
                    </a>
                ))}
              </div>
            </div>

            <div className="footer-links-area">
              <div className="footer-column">
                <h4 className="footer-title">Enlaces</h4>
                <ul className="footer-list">
                  {quickLinks.map((link, index) => (
                      <li key={index}>
                        <Link href={link.href} className="footer-link">
                          {link.label}
                        </Link>
                      </li>
                  ))}
                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-title">Legal</h4>
                <ul className="footer-list">


                </ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-title">Contacto</h4>
                <ul className="footer-contact-list">
                  <li className="footer-contact-item">
                    <a href="mailto:hola@vmagency.com" className="footer-contact-link">
                      <div className="footer-contact-icon-wrap">
                        <Mail className="footer-contact-icon"/>
                      </div>
                      <span className="footer-contact-text">hola@vmagency.com</span>
                    </a>
                  </li>

                  <li className="footer-contact-item">
                    <a
                        href="https://maps.google.com/?q=Madrid,España"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-contact-link"
                    >
                      <div className="footer-contact-icon-wrap">
                        <MapPin className="footer-contact-icon"/>
                      </div>
                      <span className="footer-contact-text">Madrid, España</span>
                    </a>
                  </li>
                </ul>

                <Link href="#contactar" className="footer-cta-link">
                  Hablemos de tu proyecto
                  <ArrowUpRight className="footer-cta-arrow"/>
                </Link>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              © {new Date().getFullYear()} VM Agency. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
  )
}