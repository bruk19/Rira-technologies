"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Sparkles, Zap } from "lucide-react"
import Link from "next/link"

export default function ParallaxHero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const particlesRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.pageYOffset
      const hero = heroRef.current
      const background = backgroundRef.current
      const text = textRef.current
      const particles = particlesRef.current

      if (hero && background && text && particles) {
        const heroRect = hero.getBoundingClientRect()
        const heroHeight = heroRect.height
        const scrollProgress = Math.min(scrolled / heroHeight, 1)

        // Parallax background movement
        background.style.transform = `translateY(${scrolled * 0.5}px) scale(${1 + scrollProgress * 0.2})`
        background.style.opacity = (1 - scrollProgress * 0.3).toString()

        // Text parallax and fade
        text.style.transform = `translateY(${scrolled * 0.3}px)`
        text.style.opacity = (1 - scrollProgress * 0.8).toString()

        // Particles movement
        particles.style.transform = `translateY(${scrolled * 0.7}px) rotate(${scrollProgress * 45}deg)`
        particles.style.opacity = (1 - scrollProgress * 0.5).toString()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div ref={backgroundRef} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/30 to-pink-900/20"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute top-3/4 right-1/4 w-80 h-80 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 z-1">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`,
            }}
          >
            <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full opacity-60"></div>
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div ref={textRef} className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8 backdrop-blur-sm">
          <Sparkles className="w-5 h-5 mr-2 text-cyan-400 animate-spin" />
          <span className="text-cyan-400 font-semibold text-lg">Ethiopia's First Web3 Agency</span>
          <Zap className="w-5 h-5 ml-2 text-purple-400 animate-pulse" />
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
          <span className="block bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
            RIRA
          </span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
            TECH
          </span>
        </h1>

        <p className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
          Building the <span className="text-cyan-400 font-bold">decentralized future</span> with innovative Web3
          solutions
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Link href="/contact">
            <Button className="bg-gradient-to-r from-cyan-500 via-purple-600 to-pink-600 hover:from-cyan-600 hover:via-purple-700 hover:to-pink-700 text-white px-12 py-6 text-xl font-bold rounded-full transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-cyan-500/50 group relative overflow-hidden">
              <span className="relative z-10 flex items-center">
                🚀 START YOUR JOURNEY
                <ArrowRight className="ml-4 w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </span>
            </Button>
          </Link>

          <Button
            variant="outline"
            className="border-2 border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 px-12 py-6 text-xl font-bold rounded-full transition-all duration-500 hover:scale-110 group bg-transparent backdrop-blur-sm"
          >
            <Play className="mr-4 w-6 h-6 group-hover:scale-125 transition-transform duration-300" />
            WATCH DEMO
          </Button>
        </div>
      </div>
    </section>
  )
}
