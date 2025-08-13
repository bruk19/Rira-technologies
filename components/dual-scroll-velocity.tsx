"use client"

import { useEffect, useRef } from "react"

interface DualScrollVelocityProps {
  topTexts: string[]
  bottomTexts: string[]
  className?: string
}

export default function DualScrollVelocity({ topTexts, bottomTexts, className = "" }: DualScrollVelocityProps) {
  const topContainerRef = useRef<HTMLDivElement>(null)
  const bottomContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const topContainer = topContainerRef.current
    const bottomContainer = bottomContainerRef.current
    if (!topContainer || !bottomContainer) return

    let topAnimationId: number
    let bottomAnimationId: number
    let topScrollY = 0
    let bottomScrollY = 0

    const animateTop = () => {
      topScrollY += 0.5
      if (topContainer) {
        // Top row moves right to left (negative direction)
        topContainer.style.transform = `translateX(-${topScrollY % (topContainer.scrollWidth / 2)}px)`
      }
      topAnimationId = requestAnimationFrame(animateTop)
    }

    const animateBottom = () => {
      bottomScrollY += 0.5
      if (bottomContainer) {
        // Bottom row moves left to right (positive direction) - continuous like top row
        bottomContainer.style.transform = `translateX(-${bottomContainer.scrollWidth / 2 - (bottomScrollY % (bottomContainer.scrollWidth / 2))}px)`
      }
      bottomAnimationId = requestAnimationFrame(animateBottom)
    }

    animateTop()
    animateBottom()

    return () => {
      if (topAnimationId) cancelAnimationFrame(topAnimationId)
      if (bottomAnimationId) cancelAnimationFrame(bottomAnimationId)
    }
  }, [])

  return (
    <div className="overflow-hidden border-y border-gray-800">
      {/* Top Row - Right to Left */}
      <div className="py-4">
        <div ref={topContainerRef} className={`inline-flex gap-8 ${className}`}>
          {topTexts.concat(topTexts).map((text, index) => (
            <span key={index} className="flex-shrink-0 text-gray-600">
              {text}
            </span>
          ))}
        </div>
      </div>

      {/* Bottom Row - Left to Right (Opposite Direction) */}
      <div className="py-4 border-t border-gray-800">
        <div ref={bottomContainerRef} className={`inline-flex gap-8 ${className}`}>
          {bottomTexts.concat(bottomTexts).map((text, index) => (
            <span key={index} className="flex-shrink-0 text-gray-600">
              {text}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
