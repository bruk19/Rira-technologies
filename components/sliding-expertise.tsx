"use client"

import { useEffect, useRef } from "react"
import { Globe, Database, Shield, Smartphone, CreditCard, Zap } from "lucide-react"
import ScaleOnScroll from "./scale-on-scroll"

export default function SlidingExpertise() {
  const containerRef = useRef<HTMLDivElement>(null)

  const services = [
    {
      name: "Decentralized Finance",
      icon: <Globe className="w-8 h-8" />,
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      name: "Blockchain Development",
      icon: <Database className="w-8 h-8" />,
      gradient: "from-purple-500 to-pink-500",
    },
    {
      name: "Smart Contracts",
      icon: <Shield className="w-8 h-8" />,
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      name: "Mobile Applications",
      icon: <Smartphone className="w-8 h-8" />,
      gradient: "from-orange-500 to-red-500",
    },
    {
      name: "Payment Systems",
      icon: <CreditCard className="w-8 h-8" />,
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      name: "Web3 Solutions",
      icon: <Zap className="w-8 h-8" />,
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let animationId: number
    let scrollX = 0

    const animate = () => {
      scrollX += 1
      if (container) {
        const totalWidth = container.scrollWidth / 2
        container.style.transform = `translateX(-${scrollX % totalWidth}px)`
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
    <section className="md:py-20 py-4 px-4 relative z-10 bg-black">
      <div className="container mx-auto max-w-6xl">
        <ScaleOnScroll>
          <div className="text-center mb-16">
            <h2 className="md:text-4xl text-2xl font-semibold mb-6 text-white">Our Expertise</h2>
            <p className="md:text-lg text-sm text-gray-400 max-w-2xl mx-auto">
              Cutting-edge technologies and frameworks we master to deliver exceptional results
            </p>
          </div>
        </ScaleOnScroll>

        {/* Sliding Logos Container */}
<div className="overflow-hidden md:py-8 py-2">
  <div className="logo-container overflow-hidden">
    <div ref={containerRef} className="flex md:gap-12 gap-4 items-center whitespace-nowrap">
      {/* First set of logos */}
      {services.map((service, index) => (
        <div
          key={`first-${index}`}
          className="flex items-center gap-4 bg-gray-900/50 md:px-8 px-4 py-4 rounded-full border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 group flex-shrink-0"
        >
          <div
            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
          >
            {service.icon}
          </div>
          <span className="text-white font-semibold text-lg group-hover:text-gray-300 transition-colors">
            {service.name}
          </span>
        </div>
      ))}
      {/* Duplicate set for seamless loop */}
      {services.map((service, index) => (
        <div
          key={`second-${index}`}
          className="flex items-center gap-4 bg-gray-900/50 px-8 py-4 rounded-full border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:scale-105 group flex-shrink-0"
        >
          <div
            className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
          >
            {service.icon}
          </div>
          <span className="text-white font-semibold text-lg group-hover:text-gray-300 transition-colors">
            {service.name}
          </span>
        </div>
      ))}
    </div>
  </div>
</div>
      </div>
    </section>
  )
}
