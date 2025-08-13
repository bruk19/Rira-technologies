"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import ScrollReveal from "./scroll-reveal"

export default function ProductCards() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Left Column */}
      <div className="space-y-8">
        {/* Main Product Card */}
        <ScrollReveal>
          <Card className="bg-white text-black overflow-hidden">
            <CardContent className="p-8">
              <div className="mb-8">
                <h3 className="text-3xl font-bold mb-4 leading-tight">
                  Your Partner in Building dApps, Tokens, and NFTs
                </h3>
                <p className="text-gray-600 mb-6">
                  We specialize in creating innovative decentralized applications (dApps), custom tokens, and unique
                  NFTs.
                </p>
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg">
                    Get Started with Your Project
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
              <img
                src="/placeholder.svg?height=300&width=500"
                alt="dApp Development"
                className="w-full h-64 object-cover rounded-lg"
              />
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Performance Monitoring Card */}
        <ScrollReveal delay={0.2}>
          <Card className="bg-white text-black">
            <CardContent className="p-8">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Performance Icon"
                className="w-16 h-16 mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-bold mb-4">Performance Monitoring & Analytics</h3>
              <p className="text-gray-600 mb-6">
                Monitor your dApp's performance with our user-friendly dashboard for usage analysis and optimization.
              </p>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg bg-transparent"
                >
                  Start Monitoring
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>

      {/* Right Column */}
      <div className="space-y-8">
        {/* Custom Solutions Card */}
        <ScrollReveal delay={0.1}>
          <Card className="bg-white text-black">
            <CardContent className="p-8">
              <img
                src="/placeholder.svg?height=80&width=80"
                alt="Solutions Icon"
                className="w-16 h-16 mb-4 rounded-lg"
              />
              <h3 className="text-2xl font-bold mb-4">Custom Solutions for Blockchain Projects</h3>
              <p className="text-gray-600 mb-6">
                Develop dApps that interact with leading blockchains for efficient management of balances, transactions,
                tokens, and smart contracts.
              </p>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-6 py-3 rounded-lg bg-transparent"
                >
                  Start Building
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Tokens and NFTs Card */}
        <ScrollReveal delay={0.3}>
          <Card
            className="bg-gradient-to-br from-blue-900 to-purple-900 text-white overflow-hidden"
            style={{
              backgroundImage: 'url("/placeholder.svg?height=400&width=600")',
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <CardContent className="p-8 relative">
              <div className="bg-black/50 absolute inset-0"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 leading-tight">Tailored Solutions for Tokens and NFTs</h3>
                <p className="text-gray-200 mb-32">
                  Utilize our expertise in creating custom tokens and NFTs on a robust, scalable infrastructure.
                </p>
                <Link href="/contact">
                  <Button className="bg-white text-black hover:bg-gray-100 px-6 py-3 rounded-lg">
                    Start Your Project Today
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      </div>
    </div>
  )
}
