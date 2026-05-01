"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { translations, Lang } from "@/lib/i18n"
import { useLanguage } from "@/lib/LanguageContext"



export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState<string | null>(null)
  const { lang, setLang } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // ✅ AHORA sí funciona porque lang existe aquí
  const navLinks = [
    { href: "#home", label: translations[lang].home },
    { href: "#proyectos", label: translations[lang].proyectos },
    { href: "#servicios", label: translations[lang].servicios },
    { href: "#contactar", label: translations[lang].contactar },
    { href: "#faq", label: translations[lang].faq },
  ]

  return (
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div
            className={`
          transition-all duration-500
          ${
                isOpen
                    ? "bg-gradient-to-b from-[#08bacc] via-[#08bacc]/80 via-[#08bacc]/50 to-[#08bacc]/20 backdrop-blur-xl"
                    : scrolled
                        ? "bg-gradient-to-b from-[#08bacc]/80 via-[#08bacc]/40 to-transparent backdrop-blur-xl"
                        : "bg-transparent"
            }
        `}
        >
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
            <div className="flex items-center justify-between h-16 lg:h-20">

              {/* LOGO */}
              <Link href="/" className="flex items-center gap-2">
                <div className="relative inline-block group">
                  <div className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-[#FDE259] to-[#F88A4B]" />

                  <Image
                      src="/images/VMlogo.png"
                      alt="VM Agency logo"
                      width={55}
                      height={55}
                      className="relative z-10 object-contain transition duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>

              {/* DESKTOP NAV */}
              <div className="hidden md:flex items-center gap-10">
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className="text-base font-semibold text-white/90 transition-all duration-300 tracking-wide drop-shadow-md hover:text-white hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)] hover:scale-105"
                    >
                      {link.label}
                    </Link>
                ))}
              </div>

              {/* LANG SELECTOR */}
              <div className="hidden md:flex items-center gap-2">
                {["es", "en", "bg"].map((lng) => (
                    <button
                        key={lng}
                        onClick={() => setLang(lng as Lang)}
                        className={`
                    text-sm font-semibold px-2 py-1 rounded transition
                    ${
                            lang === lng
                                ? "bg-white text-black"
                                : "text-white/80 hover:text-white"
                        }
                  `}
                    >
                      {lng.toUpperCase()}
                    </button>
                ))}
              </div>

              {/* MOBILE BUTTON */}
              <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white hover:bg-white/10"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>

          {/* MOBILE MENU */}
          {isOpen && (
              <div className="md:hidden">
                <div className="px-5 pt-6 pb-16 space-y-6">

                  {/* LANG MOBILE */}
                  <div className="flex justify-center gap-3 mb-4">
                    {["es", "en", "bg"].map((lng) => (
                        <button
                            key={lng}
                            onClick={() => setLang(lng as Lang)}
                            className={`px-3 py-1 rounded ${
                                lang === lng
                                    ? "bg-white text-black"
                                    : "text-white/80"
                            }`}
                        >
                          {lng.toUpperCase()}
                        </button>
                    ))}
                  </div>

                  {navLinks.map((link) => (
                      <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => {
                            setIsOpen(false)
                            setActiveLink(link.href)
                          }}
                          className={`
                    block text-center text-lg font-semibold tracking-wide transition-all duration-300
                    ${
                              activeLink === link.href
                                  ? "bg-gradient-to-r from-[#ffde59] to-[#FF914D] bg-clip-text text-transparent scale-105"
                                  : "text-white hover:translate-x-1"
                          }
                  `}
                      >
                        {link.label}
                      </Link>
                  ))}
                </div>
              </div>
          )}
        </div>
      </nav>
  )
}