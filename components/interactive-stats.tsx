"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, Zap, Award } from "lucide-react"

export default function InteractiveStats() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  const stats = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      number: "500%",
      label: "Growth Rate",
      description: "Explosive growth in Web3 adoption",
      gradient: "from-green-400 to-emerald-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      number: "10K+",
      label: "Community",
      description: "Active Web3 developers worldwide",
      gradient: "from-blue-400 to-cyan-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      number: "99.9%",
      label: "Uptime",
      description: "Legendary reliability standards",
      gradient: "from-yellow-400 to-orange-600",
    },
    {
      icon: <Award className="w-8 h-8" />,
      number: "#1",
      label: "In Ethiopia",
      description: "Leading Web3 innovation hub",
      gradient: "from-purple-400 to-pink-600",
    },
  ]

  return (
    <section className="py-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-gray-900/30 backdrop-blur-xl border-gray-700 hover:border-cyan-500 transition-all duration-500 hover:scale-110 group cursor-pointer relative overflow-hidden"
              onMouseEnter={() => setHoveredStat(index)}
              onMouseLeave={() => setHoveredStat(null)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
              ></div>

              <CardContent className="p-8 text-center relative z-10">
                <div
                  className={`mb-6 text-cyan-400 group-hover:text-white transition-all duration-500 flex justify-center group-hover:scale-125 ${hoveredStat === index ? "animate-bounce" : ""}`}
                >
                  {stat.icon}
                </div>

                <div
                  className={`text-4xl font-black mb-2 bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-500`}
                >
                  {stat.number}
                </div>

                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-500">
                  {stat.label}
                </h3>

                <p
                  className={`text-gray-400 group-hover:text-gray-200 transition-all duration-500 ${hoveredStat === index ? "opacity-100" : "opacity-70"}`}
                >
                  {stat.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
