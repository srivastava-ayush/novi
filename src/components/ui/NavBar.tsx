'use client'

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import ThemeToggle from "./ThemeToggle"

const navItems = [
  { label: "How It Works", href: "/#how-it-works" },
  { label: "For Students", href: "/#for-students" },
  { label: "For Parents", href: "/for-parents" },
  { label: "Universities", href: "/#universities" },
  { label: "About Us", href: "/#about-us" },
]

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handler)
    return () => window.removeEventListener("scroll", handler)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "py-3 bg-background/80 backdrop-blur-xl border-b border-foreground/10" : "bg-transparent py-5"}`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center transition-transform duration-300 group-hover:scale-105 shadow-lg shadow-purple-500/30">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span
            className="text-xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Novi
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href === "/for-parents" && pathname?.startsWith("/for-parents"))
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`text-sm font-medium transition-colors relative group ${
                  isActive 
                    ? "text-purple-600 dark:text-purple-400 font-semibold" 
                    : "text-foreground/60 hover:text-foreground"
                }`}
              >
                {item.label}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} 
                />
              </Link>
            )
          })}
        </div>

        <div className="flex items-center gap-3">
          <ThemeToggle />

          <Link
            href="/signin"
            className="hidden sm:inline-flex text-sm font-medium text-foreground/70 hover:text-foreground transition-colors px-4 py-2"
          >
            Log In
          </Link>

          <Link
            href="/careers"
            className="btn-primary !py-2.5 !px-5 !text-sm relative group overflow-hidden"
          >
            <span className="relative z-10">Get Started</span>
            <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

