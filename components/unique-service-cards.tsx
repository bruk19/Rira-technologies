"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Globe, Database, Smartphone, Shield, CreditCard, ArrowRight, Sparkles, Zap } from "lucide-react"
import { useEffect, useRef } from "react"
import Link from "next/link"

export default function UniqueServiceCards() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const cards = container.querySelectorAll(".service-card")

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add("animate-slide-in")
              entry.target.classList.remove("opacity-0", "translate-y-8")
            }, index * 100)
          } else {
            entry.target.classList.remove("animate-slide-in")
            entry.target.classList.add("opacity-0", "translate-y-8")
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      },
    )

    cards.forEach((card) => observer.observe(card))

    return () => observer.disconnect()
  }, [])

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Decentralized Finance",
      description: "Build powerful DeFi platforms and financial applications",
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      type: "featured", // Large card
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Blockchain Development",
      description: "Custom blockchain solutions and smart contracts",
      gradient: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      type: "compact", // Small card
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Applications",
      description: "Native and cross-platform mobile development",
      gradient: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      type: "wide", // Wide card
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Smart Contracts",
      description: "Secure and efficient blockchain contracts",
      gradient: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30",
      type: "featured", // Large card
    },
    {
      icon: <CreditCard className="w-6 h-6" />,
      title: "Payment Systems",
      description: "Secure payment processing solutions",
      gradient: "from-yellow-500 to-orange-500",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      type: "compact", // Small card
    },
  ]

  return (
    <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 auto-rows-fr">
      {services.map((service, index) => {
        if (service.type === "featured") {
          return (
            <Card
              key={index}
              className={`service-card opacity-0 translate-y-8 transition-all duration-700 ease-out md:col-span-2 lg:col-span-3 bg-gray-900/50 ${service.borderColor} hover:scale-105 hover:shadow-2xl group relative overflow-hidden`}
            >
              <div
                className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <CardContent className="py-8 md:px-8 px-4 relative z-10 h-full flex flex-col">
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className={`md:w-16 md:h-16 w-12 h-12 rounded-xl bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="md:text-2xl text-lg font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                      {service.title}
                    </h3>
                    <Sparkles className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                  </div>
                </div>
                <p className="text-gray-400 group-hover:text-gray-300 transition-colors md:text-lg text-sm mb-6 flex-grow">
                  {service.description}
                </p>
                <Link href="/contact">
                  <Button
                    className={`bg-gradient-to-r ${service.gradient} hover:scale-105 text-white rounded-full transition-all duration-300 group-hover:shadow-lg`}
                  >
                    Get Started
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )
        }

        if (service.type === "wide") {
          return (
            <Card
              key={index}
              className={`service-card opacity-0 translate-y-8 transition-all duration-700 ease-out md:col-span-4 lg:col-span-6 bg-gray-900/50 ${service.borderColor} hover:scale-105 hover:shadow-2xl group relative overflow-hidden`}
            >
              <div
                className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />
              <CardContent className="py-6 md:px-6 px-4 relative z-10">
                <div className="flex md:flex-row flex-col items-center justify-between">
                  <div className="flex md:flex-row flex-col md:items-center items-start gap-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gray-100 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors md:text-[16px] text-sm">{service.description}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 md:pt-0 pt-8">
                    <Zap className="w-5 h-5 text-gray-400 group-hover:text-yellow-400 transition-colors" />
                    <Link href="/contact">
                      <Button
                        size="sm"
                        className={`bg-gradient-to-r ${service.gradient} hover:scale-105 text-white rounded-full transition-all duration-300`}
                      >
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          )
        }

        // Compact cards
        return (
          <Card
            key={index}
            className={`service-card opacity-0 translate-y-8 transition-all duration-700 ease-out md:col-span-2 lg:col-span-2 bg-gray-900/50 ${service.borderColor} hover:scale-105 hover:shadow-2xl group relative overflow-hidden`}
          >
            <div
              className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
            />
            <CardContent className="p-6 relative z-10 h-full flex flex-col">
              <div
                className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-400 group-hover:text-gray-300 transition-colors md:text-[16px] text-sm flex-grow mb-4">
                {service.description}
              </p>
              <Link href="/contact">
                <Button
                  size="sm"
                  variant="outline"
                  className={`border-2 ${service.borderColor.replace("border-", "border-")} text-gray-300 hover:text-black hover:border-transparent rounded-full transition-all duration-300 bg-transparent w-full`}
                >
                  Explore
                  <ArrowRight className="ml-2 w-3 h-3" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
