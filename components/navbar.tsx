"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { useTranslations, useLocale } from "next-intl"
import { useRouter, usePathname } from "next/navigation"

export function Navbar({ forceActive = false }: { forceActive?: boolean }) {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState<string | null>(null)

  const t = useTranslations("Navbar")
  const locale = useLocale()

  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (forceActive) {
      setScrolled(true)
      return
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [forceActive])

  // 🔥 LINKS CON LOCALE
  const navLinks = [
    { href: `/${locale}#home`, label: t("home") },
    { href: `/${locale}#servicios`, label: t("servicios") },
    { href: `/${locale}#proyectos`, label: t("proyectos") },
    { href: `/${locale}#contactar`, label: t("contactar") },
    { href: `/${locale}/faq`, label: t("faq") }
  ]

  // 🔥 CAMBIO DE IDIOMA REAL
  const changeLanguage = (newLocale: "es" | "en" | "bg") => {
    const segments = pathname.split("/")

    if (["es", "en", "bg"].includes(segments[1])) {
      segments[1] = newLocale
    } else {
      segments.splice(1, 0, newLocale)
    }

    router.push(segments.join("/"))
  }

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
              <Link href={`/${locale}`} className="flex items-center gap-2">
                <div className="relative inline-block group">
                  <div className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300 bg-gradient-to-r from-[#FDE259] to-[#F88A4B]" />

                  <Image
                      src="/images_webp/VMlogo.webp"
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
                        onClick={() => changeLanguage(lng as any)}
                        className={`
                    text-sm font-semibold px-2 py-1 rounded transition
                    ${
                            locale === lng
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
                            onClick={() => changeLanguage(lng as any)}
                            className={`px-3 py-1 rounded ${
                                locale === lng
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