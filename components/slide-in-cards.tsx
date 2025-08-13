"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface SlideInCardsProps {
  children: ReactNode
  className?: string
}

export default function SlideInCards({ children, className = "" }: SlideInCardsProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cards = container.querySelectorAll(".slide-card")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cards = entry.target.querySelectorAll("div > div")
            cards.forEach((card, index) => {
              setTimeout(() => {
                card.classList.add("animate-fade-in-up")
                card.classList.remove("opacity-0")
              }, index * 150)
            })
          } else {
            const cards = entry.target.querySelectorAll("div > div")
            cards.forEach((card) => {
              card.classList.remove("animate-fade-in-up")
              card.classList.add("opacity-0")
            })
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    observer.observe(container)

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={`slide-card ${className}`}>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.isArray(children) ? (
          children.map((child, index) => (
            <div key={index} className="opacity-0 transition-all duration-700 ease-out">
              {child}
            </div>
          ))
        ) : (
          <div className="opacity-0 transition-all duration-700 ease-out">{children}</div>
        )}
      </div>
    </div>
  )
}
