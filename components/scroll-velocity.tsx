"use client"

import { useEffect, useRef } from "react"

interface ScrollVelocityProps {
  texts: string[]
  className?: string
}

export default function ScrollVelocity({ texts, className = "" }: ScrollVelocityProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationId: number
    let scrollY = 0

    const animate = () => {
      scrollY += 0.5
      if (container) {
        container.style.transform = `translateX(-${scrollY % (container.scrollWidth / 2)}px)`
      }
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [])

  return (
    <div className="overflow-hidden whitespace-nowrap py-8 border-y border-gray-800">
      <div ref={containerRef} className={`inline-flex gap-8 ${className}`}>
        {texts.concat(texts).map((text, index) => (
          <span key={index} className="flex-shrink-0">
            {text}
          </span>
        ))}
      </div>
    </div>
  )
}
