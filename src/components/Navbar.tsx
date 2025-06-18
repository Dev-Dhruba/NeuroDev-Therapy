'use client'

import Link from "next/link"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Brain } from "lucide-react"

const navLinks = [
  { href: "/autism", label: "Autism" },
  { href: "/dyslexia", label: "Dyslexia" },
  { href: "/detection", label: "Detection Test" },
  { href: "/about", label: "About Us" },
]

export default function Navbar() {
  const [show, setShow] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY < 10) {
        setShow(true)
        setLastScrollY(window.scrollY)
        return
      }
      if (window.scrollY < lastScrollY) {
        setShow(true)
      } else if (window.scrollY > lastScrollY) {
        setShow(false)
      }
      setLastScrollY(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  return (
    <header className={`sticky top-0 z-50 transition-transform duration-300 ${show ? "translate-y-0" : "-translate-y-full"}`}>
      <div className="w-full flex justify-center">
        <div className="flex h-16 items-center gap-8 px-4 md:px-6 mx-auto rounded-xl shadow bg-white/90 mt-2">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Brain className="h-6 w-6" />
            <span>NeuroDev Therapy</span>
          </Link>
          <nav className="hidden md:flex gap-6">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`group relative text-sm font-medium transition-colors duration-200 ${pathname.startsWith(link.href) ? "text-black" : "text-gray-700"}`}
              >
                {link.label}
                <span
                  className={`absolute left-0 -bottom-1 h-0.5 w-full rounded bg-black transition-all duration-300 scale-x-0 group-hover:scale-x-100 ${pathname.startsWith(link.href) ? "scale-x-100" : ""}`}
                />
              </Link>
            ))}
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            Contact Us
          </Button>
          <Button variant="outline" size="icon" className="md:hidden ml-2">
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </div>
    </header>
  )
} 