"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Sparkles } from "lucide-react"
import Link from "next/link"

export default function LegendaryHero() {
  const [currentText, setCurrentText] = useState(0)
  const [isTyping, setIsTyping] = useState(true)

  const heroTexts = ["BUILDING THE FUTURE", "CRAFTING LEGENDS", "REVOLUTIONIZING WEB3", "DOMINATING BLOCKCHAIN"]

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(false)
      setTimeout(() => {
        setCurrentText((prev) => (prev + 1) % heroTexts.length)
        setIsTyping(true)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4 relative z-10 min-h-screen flex items-center">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center relative">
          {/* Floating Badge */}
          <div className="inline-flex items-center px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 border-2 border-cyan-500/30 mb-12 animate-pulse backdrop-blur-xl">
            <Star className="w-6 h-6 mr-3 text-cyan-400 animate-spin" />
            <span className="text-cyan-400 font-black text-xl tracking-wider">🚀 ETHIOPIA'S FIRST WEB3 LEGENDS</span>
            <Sparkles className="w-6 h-6 ml-3 text-purple-400 animate-pulse" />
          </div>

          {/* Main Legendary Heading */}
          <div className="mb-12">
            <h1 className="text-7xl md:text-9xl lg:text-[12rem] font-black mb-8 leading-none tracking-tighter">
              <span className="block bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
                RIRA
              </span>
              <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                TECH
              </span>
            </h1>

            {/* Dynamic Typing Text */}
            <div className="h-24 flex items-center justify-center">
              <h2
                className={`text-4xl md:text-6xl font-black transition-all duration-500 ${isTyping ? "opacity-100 scale-100" : "opacity-50 scale-95"}`}
              >
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {heroTexts[currentText]}
                </span>
              </h2>
            </div>
          </div>

          {/* Epic Subtitle */}
          <p className="text-2xl md:text-3xl text-gray-300 mb-16 max-w-5xl mx-auto leading-relaxed font-medium">
            Pioneering <span className="text-cyan-400 font-bold">Web3 solutions</span> in Ethiopia. We create{" "}
            <span className="text-purple-400 font-bold">legendary</span> decentralized applications, smart contracts,
            and bridge traditional businesses into the
            <span className="text-pink-400 font-bold"> blockchain revolution</span>.
          </p>

          {/* Legendary CTA Buttons */}
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-20">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl font-black rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 group relative overflow-hidden">
                <span className="relative z-10 flex items-center">
                  🚀 START LEGENDARY JOURNEY
                  <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-700 to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Button>
            </Link>

            <Button
              variant="outline"
              className="border-4 border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 px-12 py-6 text-xl font-black rounded-full transition-all duration-500 hover:scale-110 group bg-transparent backdrop-blur-sm hover:bg-cyan-500/10"
            >
              <Play className="mr-4 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />⚡ WATCH EPIC
              DEMO
            </Button>
          </div>

          {/* Floating Achievement Badges */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[
              { number: "100+", label: "Legendary Projects", icon: "🏆" },
              { number: "50+", label: "Epic Clients", icon: "⭐" },
              { number: "100%", label: "Web3 Mastery", icon: "🔥" },
              { number: "24/7", label: "Legendary Support", icon: "⚡" },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center group hover:scale-125 transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="text-6xl mb-2 animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                  {stat.icon}
                </div>
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:animate-pulse">
                  {stat.number}
                </div>
                <div className="text-gray-400 group-hover:text-gray-200 transition-colors font-bold text-lg">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
