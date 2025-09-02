import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function SmoothHero() {
  return (
    <section className="pt-32 pb-20 px-4 relative z-10">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gray-800 border border-gray-700 mb-8">
            <span className="text-gray-300 text-sm font-medium">Ethiopia's Technology Partner</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl font-semibold mb-6 leading-tight text-gray-100">Rira Technologies</h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-400 mb-8 leading-relaxed">
            Building the future with Web3 innovation and reliable Web2 solutions
          </p>

          {/* Description */}
          <p className="text-lg text-gray-500 mb-12 max-w-3xl mx-auto leading-relaxed">
            We specialize in blockchain development, decentralized applications, and Web2 solutions including
            management systems, payment platforms, mobile apps, and modern websites.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Link href="/contact">
              <Button className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 text-lg rounded-lg transition-colors duration-300">
                Start Your Project
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/portfolio">
              <Button
                variant="outline"
                className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 text-lg rounded-lg transition-colors duration-300 bg-transparent"
              >
                View Our Work
              </Button>
            </Link>
          </div>

          {/* Simple Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
            {[
              { number: "10+", label: "Projects" },
              { number: "15+", label: "Clients" },
              { number: "Web3", label: "Pioneer" },
              { number: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl font-semibold text-gray-200 mb-1">{stat.number}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
