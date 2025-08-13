"use client"

import { useEffect, useState } from "react"

export default function FloatingNavDots() {
  const [activeSection, setActiveSection] = useState(0)

  const sections = [
    { id: "hero", label: "Hero" },
    { id: "why-blockchain", label: "Why Blockchain" },
    { id: "services", label: "Services" },
    { id: "products", label: "Products" },
    { id: "expertise", label: "Expertise" },
    { id: "solutions", label: "Solutions" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100

      sections.forEach((section, index) => {
        const element = document.getElementById(section.id)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(index)
          }
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 hidden lg:block">
      <div className="flex flex-col space-y-4">
        {sections.map((section, index) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`group relative w-4 h-4 rounded-full transition-all duration-300 ${
              activeSection === index
                ? "bg-gradient-to-r from-cyan-400 to-purple-400 scale-125"
                : "bg-gray-600 hover:bg-gray-500"
            }`}
          >
            {/* Tooltip */}
            <span className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
              {section.label}
            </span>

            {/* Glow effect for active dot */}
            {activeSection === index && (
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-purple-400 opacity-50 blur-sm animate-pulse"></div>
            )}
          </button>
        ))}
      </div>
    </div>
  )
}
