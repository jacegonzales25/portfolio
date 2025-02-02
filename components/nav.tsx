"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "About", number: "01", href: "#about" },
  { name: "Experience", number: "02", href: "#experience" },
  { name: "Projects", number: "03", href: "#projects" },
  { name: "Certifications", number: "04", href: "#certifications" },
  { name: "Contact", number: "05", href: "#contact" },
]

export function Nav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full top-0 z-50 bg-background/80 backdrop-blur-sm">
      <nav className="flex items-center justify-between p-4 max-w-7xl mx-auto">
        <Link href="/" className="text-primary font-bold text-2xl">
          YP
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link key={item.name} href={item.href} className="nav-link" data-number={item.number + "."}>
              {item.name}
            </Link>
          ))}
          <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
            Resume
          </Button>
        </div>

        {/* Mobile Navigation */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 w-full p-4 bg-background/95 backdrop-blur-sm md:hidden">
            <div className="flex flex-col items-center gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="nav-link"
                  data-number={item.number + "."}
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <Button variant="outline" className="border-primary text-primary hover:bg-primary/10">
                Resume
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

