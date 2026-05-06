"use client"

import Link from "next/link"
import { Twitter, Linkedin, Instagram, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { useTranslations } from "next-intl"
import "@/components/css/footer.css"

const socialLinks = [
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Instagram, href: "#", label: "Instagram" },
]

export function Footer() {
  const t = useTranslations("Footer")

  const quickLinks = [
    { href: "#home", label: t("links.home") },
    { href: "#servicios", label: t("links.servicios") },
    { href: "#proyectos", label: t("links.proyectos") },
    { href: "#contactar", label: t("links.contactar") },
    { href: "#faq", label: t("links.faq") },
  ]

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
                <span className="footer-logo-agency">Agencia</span>
              </Link>

              <p className="footer-brand-text">
                {t("brand")}
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
                <h4 className="footer-title">{t("titles.links")}</h4>
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
                <h4 className="footer-title">{t("titles.legal")}</h4>
                <ul className="footer-list"></ul>
              </div>

              <div className="footer-column">
                <h4 className="footer-title">{t("titles.contact")}</h4>

                <ul className="footer-contact-list">
                  <li className="footer-contact-item">
                    <a href="mailto:hola@vmagency.com" className="footer-contact-link">
                      <div className="footer-contact-icon-wrap">
                        <Mail className="footer-contact-icon" />
                      </div>
                      <span className="footer-contact-text">vmmarketing.ia@gmail.com</span>
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
                        <MapPin className="footer-contact-icon" />
                      </div>
                      <span className="footer-contact-text">{t("location")}</span>
                    </a>
                  </li>
                </ul>

                <Link href="#contactar" className="footer-cta-link desktop-only">
                  {t("cta.title")}
                  <ArrowUpRight className="footer-cta-arrow" />
                </Link>

                <Link href="#contactar" className="footer-cta-card mobile-only">
                  <div className="footer-cta-content">
                    <span className="footer-cta-title">{t("cta.title")}</span>
                    <span className="footer-cta-sub">{t("cta.subtitle")}</span>
                  </div>
                  <ArrowUpRight className="footer-cta-icon" />
                </Link>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p className="footer-copy">
              © {new Date().getFullYear()} VM Agencia. {t("copy")}
            </p>
          </div>
        </div>
      </footer>
  )
}