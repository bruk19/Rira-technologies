"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScaleOnScrollProps {
  children: ReactNode
  className?: string
}

export default function ScaleOnScroll({ children, className = "" }: ScaleOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Calculate the intersection ratio for scaling effect
            const ratio = entry.intersectionRatio
            const scale = 0.8 + ratio * 0.2 // Scale from 0.8 to 1.0
            const opacity = Math.min(ratio * 2, 1) // Fade in effect

            entry.target.style.transform = `scale(${scale})`
            entry.target.style.opacity = opacity.toString()
          } else {
            // Reset when out of view
            entry.target.style.transform = "scale(0.8)"
            entry.target.style.opacity = "0.3"
          }
        })
      },
      {
        threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
        rootMargin: "-10% 0px -10% 0px",
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={elementRef} className={`transition-all duration-500 ease-out transform scale-80 opacity-30 ${className}`}>
      {children}
    </div>
  )
}
