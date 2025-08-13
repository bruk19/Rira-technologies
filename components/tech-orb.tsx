"use client"

import type { ReactNode } from "react"

interface TechOrbProps {
  name: string
  gradient: string
  size?: "small" | "medium" | "large"
  icon?: ReactNode
  delay?: number
  className?: string
}

export default function TechOrb({ name, gradient, size = "medium", icon, delay = 0, className = "" }: TechOrbProps) {
  const sizeClasses = {
    small: "w-16 h-16 text-xs",
    medium: "w-24 h-24 text-sm",
    large: "w-32 h-32 text-lg",
  }

  return (
    <div className={`relative group cursor-pointer ${className}`} style={{ animationDelay: `${delay}s` }}>
      <div
        className={`${sizeClasses[size]} bg-gradient-to-r ${gradient} rounded-full flex items-center justify-center text-white font-bold transition-all duration-500 hover:scale-125 hover:rotate-12 group-hover:shadow-2xl relative overflow-hidden`}
      >
        {/* Glowing effect */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${gradient} rounded-full blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-500 scale-150`}
        ></div>

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center">
          {icon && <div className="mb-1 group-hover:animate-spin">{icon}</div>}
          <span className="text-center leading-tight">{name}</span>
        </div>

        {/* Rotating border */}
        <div className="absolute inset-0 rounded-full border-2 border-white/20 group-hover:border-white/50 transition-all duration-500 group-hover:animate-spin"></div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-ping"
            style={{
              left: `${20 + Math.random() * 60}%`,
              top: `${20 + Math.random() * 60}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}
