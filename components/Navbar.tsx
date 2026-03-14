"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

export default function Navbar() {
  const pathname = usePathname()
  const [menuOpen, setMenuOpen] = useState(false)

  const navItems = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "EVENTS", href: "/events" },
    { name: "BOARD", href: "/board" },
    { name: "CONTACT", href: "/contact" },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/85 backdrop-blur-md border-b border-mist w-full">
      <div className="container mx-auto py-4 px-6">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image src="/images/maiss_logo.png" alt="MAISS Logo" width={60} height={35} className="rounded-full" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex justify-end space-x-10 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative text-xs font-semibold tracking-[0.2em] transition-colors group ${
                  pathname === item.href ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-brand-pink via-brand-lavender to-brand-blue transition-all duration-300 group-hover:w-full ${
                    pathname === item.href ? "w-full" : ""
                  }`}
                ></span>
              </Link>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden text-muted hover:text-ink"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden mt-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)} // Close menu on click
                className={`block text-xs font-semibold tracking-[0.2em] ${
                  pathname === item.href ? "text-ink" : "text-muted hover:text-ink"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  )
}
