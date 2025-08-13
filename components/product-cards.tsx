"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, BarChart3, Blocks } from "lucide-react"
import Link from "next/link"
import ScrollReveal from "./scroll-reveal"


export default function ProductCards() {
  return (
    <div className="grid lg:grid-cols-2 gap-8">
      {/* Left Column */}
      <div className="space-y-8">
        {/* Main Product Card */}
        <ScrollReveal>
          <Card className="bg-white text-black overflow-hidden rounded-3xl">
            <CardContent className="pt-8">
              <div className="">
                <h3 className="text-3xl font-bold mb-4 leading-tight">
                  Your Partner in Building dApps, Tokens, and NFTs
                </h3>
                <p className="text-gray-600 mb-6">
                  We specialize in creating innovative decentralized applications (dApps), custom tokens, and unique
                  NFTs.
                </p>
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-[16px] text-white px-6 py-5 rounded-lg">
                    Get Started with Your Project
                    <ArrowRight className="ml-2 w-6 h-6" />
                  </Button>
                </Link>
              </div>
              <div className="w-full" style={{
              backgroundImage: 'url(/dap.png)', 
              backgroundSize: 'cover',
              height: '500px', 
              width: '100%',
              position: 'relative', 
            }}></div>
            </CardContent>
          </Card>
        </ScrollReveal>

        {/* Performance Monitoring Card */}
        <ScrollReveal delay={0.2}>
          <Card className="bg-white text-black rounded-3xl">
            <CardContent className="p-8">
              <BarChart3 className="w-16 h-16 text-blue-700" />
              <h3 className="text-2xl font-bold mb-4 mt-2">Performance Monitoring & Analytics</h3>
              <p className="text-gray-600 mb-6">
                Monitor your dApp's performance with our user-friendly dashboard for usage analysis and optimization.
              </p>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 text-[16px] hover:bg-blue-50 px-6 py-3 rounded-lg bg-transparent mt-8"
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
          <Card className="bg-white text-black rounded-3xl">
            <CardContent className="p-8">
              <Blocks className="w-16 h-16 text-blue-700" />
              <h3 className="text-2xl font-bold mb-4 mt-2">Custom Solutions for Blockchain Projects</h3>
              <p className="text-gray-600 mb-6">
                Develop dApps that interact with leading blockchains for efficient management of balances, transactions,
                tokens, and smart contracts.
              </p>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="border-blue-600 text-blue-600 text-[16px] hover:bg-blue-50 px-6 py-3 rounded-lg bg-transparent mt-6"
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
            className="bg-gradient-to-br border-gray-600 from-blue-900 to-purple-900 text-white overflow-hidden rounded-3xl"
            style={{
              backgroundImage: 'url(/bgfull.jpg)', 
              backgroundSize: 'cover',
              height: '700px', 
              width: '100%',
              position: 'relative', 
            }}
          >
            <CardContent className="p-14 relative">
              <div className="absolute inset-0"></div>
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4 leading-tight">Tailored Solutions for Tokens and NFTs</h3>
                <p className="text-gray-200 mb-32">
                  Utilize our expertise in creating custom tokens and NFTs on a robust, scalable infrastructure.
                </p>
                <div className="h-[300px]"></div>
                <Link href="/contact">
                  <Button className="bg-white text-[18px] text-black hover:bg-gray-100 px-6 py-5 rounded-xl">
                    Start Your Project Today
                    <ArrowRight className="ml-2 w-6 h-6" />
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
