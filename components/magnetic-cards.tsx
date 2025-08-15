"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Globe, Shield, Zap, Cpu } from "lucide-react"

export default function MagneticCards() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const cards = [
    {
      icon: <Globe className="md:w-8 md:h-8 w-5 h-5" />,
      title: "Decentralization",
      description: "No single entity controls the system",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Shield className="md:w-8 md:h-8 w-5 h-5" />,
      title: "Security",
      description: "Encrypted and tamper-proof data",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      icon: <Zap className="md:w-8 md:h-8 w-5 h-5" />,
      title: "Transparency",
      description: "Public accountable transactions",
      gradient: "from-yellow-500 to-orange-500",
    },
    {
      icon: <Cpu className="md:w-8 md:h-8 w-5 h-5" />,
      title: "Efficiency",
      description: "Faster, cost-effective processes",
      gradient: "from-purple-500 to-pink-500",
    },
  ]

  return (
    <div ref={containerRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <MagneticCard key={index} card={card} mousePosition={mousePosition} index={index} />
      ))}
    </div>
  )
}

function MagneticCard({
  card,
  mousePosition,
  index,
}: { card: any; mousePosition: { x: number; y: number }; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const cardElement = cardRef.current
    if (!cardElement || !isHovered) return

    const rect = cardElement.getBoundingClientRect()
    const cardCenterX = rect.left + rect.width / 2
    const cardCenterY = rect.top + rect.height / 2

    const deltaX = (mousePosition.x - cardCenterX) * 0.1
    const deltaY = (mousePosition.y - cardCenterY) * 0.1

    cardElement.style.transform = `translate(${deltaX}px, ${deltaY}px) rotateX(${deltaY * 0.1}deg) rotateY(${deltaX * 0.1}deg) scale(1.05)`
  }, [mousePosition, isHovered])

  return (
    <Card
      ref={cardRef}
      className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 group h-full cursor-pointer perspective-1000"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false)
        if (cardRef.current) {
          cardRef.current.style.transform = "translate(0px, 0px) rotateX(0deg) rotateY(0deg) scale(1)"
        }
      }}
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      <CardContent className="md:p-8 p-4 text-center h-full flex flex-col relative overflow-hidden">
        {/* Animated background */}
        <div
          className={`absolute inset-0 bg-gradient-to-r ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
        ></div>

        {/* Floating icon */}
        <div className="mb-6 text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex justify-center relative z-10">
          <div
            className={`p-4 rounded-xl bg-gradient-to-r ${card.gradient} text-white group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
          >
            {card.icon}
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-4 text-gray-100 group-hover:text-white transition-colors relative z-10">
          {card.title}
        </h3>

        <p className="md:text-[14px] text-sm text-gray-400 group-hover:text-gray-300 transition-colors flex-grow relative z-10">
          {card.description}
        </p>

        {/* Particle effect */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {[...Array(5)].map((_, i) => (
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
      </CardContent>
    </Card>
  )
}
