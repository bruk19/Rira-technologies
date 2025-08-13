"use client"

import { useEffect, useState } from "react"
import { Zap, Star, Sparkles, Code, Globe, Shield } from "lucide-react"

export default function FloatingElements() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const icons = [Zap, Star, Sparkles, Code, Globe, Shield]

  return (
    <div className="fixed inset-0 pointer-events-none z-5">
      {/* Floating Icons */}
      {[...Array(20)].map((_, i) => {
        const Icon = icons[Math.floor(Math.random() * icons.length)]
        return (
          <div
            key={i}
            className="absolute animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <Icon
              className="w-6 h-6 text-cyan-400/30 animate-spin"
              style={{
                animationDuration: `${5 + Math.random() * 10}s`,
                animationDirection: Math.random() > 0.5 ? "normal" : "reverse",
              }}
            />
          </div>
        )
      })}

      {/* Floating Geometric Shapes */}
      {[...Array(15)].map((_, i) => (
        <div
          key={`shape-${i}`}
          className="absolute animate-bounce"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${4 + Math.random() * 6}s`,
          }}
        >
          <div
            className={`w-4 h-4 ${
              Math.random() > 0.5 ? "rounded-full" : "rotate-45"
            } bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-cyan-500/30`}
          />
        </div>
      ))}

      {/* Large Floating Orbs */}
      <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute top-2/3 right-1/6 w-80 h-80 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-pink-500/5 to-cyan-500/5 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "2s" }}
      />
    </div>
  )
}
