"use client"

import { useEffect, useRef, type ReactNode } from "react"

interface ScrollRevealProps {
  children: ReactNode
  delay?: number
  className?: string
}

export default function ScrollReveal({ children, delay = 0, className = "" }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-fade-in-up")
              entry.target.classList.remove("opacity-0", "translate-y-8")
            }, delay * 1000)
          } else {
            entry.target.classList.remove("animate-fade-in-up")
            entry.target.classList.add("opacity-0", "translate-y-8")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [delay])

  return (
    <div ref={elementRef} className={`opacity-0 translate-y-8 transition-all duration-700 ease-out ${className}`}>
      {children}
    </div>
  )
}
