"use client"

import { useState, useEffect } from "react"

interface MorphingTextProps {
  texts: string[]
  className?: string
}

export default function MorphingText({ texts, className = "" }: MorphingTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentText = texts[currentIndex]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayText.length < currentText.length) {
            setDisplayText(currentText.slice(0, displayText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayText.length > 0) {
            setDisplayText(displayText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentIndex((prev) => (prev + 1) % texts.length)
          }
        }
      },
      isDeleting ? 50 : 100,
    )

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentIndex, texts])

  return (
    <span className={`${className} relative`}>
      {displayText}
      <span className="animate-pulse">|</span>

      {/* Glitch effect */}
      <span
        className="absolute inset-0 text-cyan-400 opacity-70 animate-pulse"
        style={{
          transform: "translate(1px, 0)",
          clipPath: "polygon(0 0, 100% 0, 100% 45%, 0 45%)",
        }}
      >
        {displayText}
      </span>

      <span
        className="absolute inset-0 text-pink-400 opacity-70 animate-pulse"
        style={{
          transform: "translate(-1px, 0)",
          clipPath: "polygon(0 55%, 100% 55%, 100% 100%, 0 100%)",
        }}
      >
        {displayText}
      </span>
    </span>
  )
}
