import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 relative z-10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8 animate-pulse">
            <span className="text-cyan-400 font-semibold">🚀 Ethiopia's First Web3 Agency</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-white via-cyan-400 to-purple-400 bg-clip-text text-transparent animate-pulse">
              Building the
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
              Decentralized
            </span>
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-white bg-clip-text text-transparent">Future</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Pioneering Web3 solutions in Ethiopia. We create innovative decentralized applications, smart contracts, and
            bridge traditional businesses into the blockchain ecosystem.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Link href="/contact">
              <Button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 group">
                Start Your Web3 Journey
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button
              variant="outline"
              className="border-2 border-gray-600 text-gray-300 hover:border-cyan-500 hover:text-cyan-400 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 group bg-transparent"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50+", label: "Projects Delivered" },
              { number: "25+", label: "Happy Clients" },
              { number: "100%", label: "Web3 Focused" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center group hover:scale-110 transition-transform duration-300">
                <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent mb-2 group-hover:animate-pulse">
                  {stat.number}
                </div>
                <div className="text-gray-400 group-hover:text-gray-300 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
