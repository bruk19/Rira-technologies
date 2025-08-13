"use client"

import { useEffect, useRef } from "react"

export default function DarkTransition() {
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return

    const handleScroll = () => {
      const rect = section.getBoundingClientRect()
      const windowHeight = window.innerHeight
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / windowHeight))

      // Apply scaling effect based on scroll progress
      const scale = 0.9 + progress * 0.1
      section.style.transform = `scaleY(${scale})`
      section.style.opacity = progress.toString()
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Initial call

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div
      ref={sectionRef}
      className="h-32 bg-gradient-to-b from-gray-950 to-black transition-all duration-300 ease-out transform origin-top"
      style={{ transform: "scaleY(0.9)", opacity: "0" }}
    />
  )
}
