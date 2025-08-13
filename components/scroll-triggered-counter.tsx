"use client"

import { useEffect, useRef, useState } from "react"

interface CounterProps {
  end: number
  duration?: number
  suffix?: string
  className?: string
}

export default function ScrollTriggeredCounter({ end, duration = 2000, suffix = "", className = "" }: CounterProps) {
  const [count, setCount] = useState(0)
  const [hasStarted, setHasStarted] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true)

            const startTime = Date.now()
            const startValue = 0

            const animate = () => {
              const now = Date.now()
              const progress = Math.min((now - startTime) / duration, 1)

              // Easing function for smooth animation
              const easeOutQuart = 1 - Math.pow(1 - progress, 4)
              const currentValue = Math.floor(startValue + (end - startValue) * easeOutQuart)

              setCount(currentValue)

              if (progress < 1) {
                requestAnimationFrame(animate)
              }
            }

            animate()
          }
        })
      },
      { threshold: 0.5 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => observer.disconnect()
  }, [end, duration, hasStarted])

  return (
    <div ref={counterRef} className={`${className} relative`}>
      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
        {count}
        {suffix}
      </span>

      {/* Glow effect */}
      <span className="absolute inset-0 font-bold text-cyan-400 opacity-30 blur-sm">
        {count}
        {suffix}
      </span>
    </div>
  )
}
