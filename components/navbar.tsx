"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"


const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#proyectos", label: "Proyectos" },
  { href: "#servicios", label: "Servicios" },
  { href: "#contactar", label: "Contactar" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeLink, setActiveLink] = useState<string | null>(null)
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
      <nav className="fixed top-0 left-0 right-0 z-50">
        {/* Transparent navbar that blends with hero gradient */}
        {/* 🔥 GRADIENTE GLOBAL (navbar + menú juntos) */}
        <div className={`
    transition-all duration-500
    ${
            isOpen
                ? "bg-gradient-to-b from-[#08bacc] via-[#08bacc]/80 via-[#08bacc]/50 to-[#08bacc]/20 backdrop-blur-xl"
                : scrolled
                    ? "bg-gradient-to-b from-[#08bacc]/80 via-[#08bacc]/40 to-transparent backdrop-blur-xl"
                    : "bg-transparent"
        }
  `}>
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
            <div className="flex items-center justify-between h-16 lg:h-20">
              {/* Logo */}
              <Link href="/" className="flex items-center gap-2">

                <div className="relative inline-block group">

                  {/* 🔹 GLOW EN HOVER */}
                  <div className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition duration-300
        bg-gradient-to-r from-[#FDE259] to-[#F88A4B]" />

                  {/* 🔹 LOGO */}
                  <Image
                      src="/images/VMlogo.png"
                      alt="VM Agency logo"
                      width={55}
                      height={55}
                      className="relative z-10 object-contain transition duration-300 group-hover:scale-105"
                  />

                </div>

              </Link>

              {/* Desktop Navigation opciones menu */}
              <div className="hidden md:flex items-center gap-15">
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

              {/* Mobile Menu Button */}
              <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden text-white hover:bg-white/10"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-5 w-5"/> : <Menu className="h-5 w-5"/>}
              </Button>
            </div>
          </div>

          {isOpen && (
              <div className="md:hidden">

                <div className="px-5 pt-6 pb-16 space-y-6">
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

      ${activeLink === link.href
                              ? "bg-gradient-to-r from-[#ffde59] to-[#FF914D] bg-clip-text text-transparent scale-105 drop-shadow-[0_0_15px_rgba(255,222,89,0.7)]"
                              : "text-white hover:translate-x-1 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.6)]"
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
