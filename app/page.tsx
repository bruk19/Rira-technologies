import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Database, Wallet, Coins, TrendingUp, BarChart3, Building } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import CleanBackground from "@/components/clean-background"
import ScrollReveal from "@/components/scroll-reveal"
import ProductCards from "@/components/product-cards"
import DarkTransition from "@/components/dark-transition"
import EnhancedFooter from "@/components/enhanced-footer"
import ScaleOnScroll from "@/components/scale-on-scroll"
import UniqueServiceCards from "@/components/unique-service-cards"
import SlidingExpertise from "@/components/sliding-expertise"
import DualScrollVelocity from "@/components/dual-scroll-velocity"
import DynamicHero from "@/components/dynamic-hero"
import MagneticCards from "@/components/magnetic-cards"
import MorphingText from "@/components/morphing-text"
import ScrollTriggeredCounter from "@/components/scroll-triggered-counter"
import LiquidButton from "@/components/liquid-button"
import FloatingNavDots from "@/components/floating-nav-dots"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-x-hidden">
      <CleanBackground />
      <Navigation />
      <FloatingNavDots />

      {/* Original Dynamic Hero Section */}
      <section id="hero">
        <DynamicHero />
      </section>

      {/* Why Blockchain Section with Magnetic Cards */}
      <section id="why-blockchain" className="md:py-20 py-6 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center md:mb-16 mb-8">
              <h2 className="md:text-4xl text-2xl font-semibold md:mb-6 mb-2 text-gray-100">
                Why{" "}
                <MorphingText
                  texts={["Blockchain?", "Web3?", "Decentralization?", "Innovation?"]}
                  className="text-cyan-400"
                />
              </h2>
              <p className="md:text-lg text-sm text-gray-400 max-w-2xl mx-auto">
                Blockchain is revolutionizing trust in the digital world. Here's why it matters:
              </p>
            </div>
          </ScaleOnScroll>

          <MagneticCards />
        </div>
      </section>

      {/* Why Blockchain Matters with Photo */}
      <section className="md:py-20 py-2 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScaleOnScroll>
              <div>
                <h2 className="md:text-3xl text-xl font-semibold mb-6 text-gray-100">Why Blockchain Matters?</h2>
                <p className="md:text-lg text-sm text-gray-400 mb-8 leading-relaxed">
                  Blockchain technology enhances security and transparency by providing a decentralized,
                  tamper-resistant ledger for transactions. It eliminates intermediaries, reduces costs, and enables
                  traceability, making it easier to verify authenticity.
                </p>
                <p className="md:text-lg text-sm text-gray-400 mb-8 leading-relaxed">
                  Our expertise in blockchain development ensures your projects leverage the full potential of this
                  revolutionary technology, from smart contracts to decentralized applications.
                </p>
                <Link href="/about">
                  <LiquidButton>Learn More</LiquidButton>
                </Link>
              </div>
            </ScaleOnScroll>
            <ScrollReveal delay={0.2}>
              <div className="rounded-lg">
                <img
                  src="/nn-unscreen.gif"
                  alt="Blockchain Network Visualization"
                  className="w-full md:h-[400px] h-[300px] object-cover rounded-lg"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Dual Scroll Velocity Text */}
      <DualScrollVelocity
        topTexts={[
          "Innovation • Security • Accessibility • Enhanced Privacy • Decentralization • ",
          "Transparency • Cost Efficiency • Speed • Traceability • Innovation • ",
        ]}
        bottomTexts={[
          "Security • Accessibility • Enhanced Privacy • Decentralization • ",
          "Efficiency • Speed • Traceability • Innovation • ",
        ]}
        className="text-2xl md:text-4xl font-medium"
      />

      {/* Services We Provide Section */}
      <section id="services" className="md:py-20 py-10 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-16">
              <h2 className="md:text-4xl text-2xl font-semibold mb-6 text-gray-100">Services We Provide</h2>
              <p className="md:text-lg text-sm text-gray-400 max-w-2xl mx-auto">
                Comprehensive technology solutions for both Web3 and traditional development
              </p>
            </div>
          </ScaleOnScroll>

          <UniqueServiceCards />
        </div>
      </section>

      {/* Dark Transition */}
      <DarkTransition />

      {/* Products Section */}
      <section id="products" className="py-20 px-4 relative z-10 bg-black">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold mb-6 text-white">
                Explore our products for Web3 development and growth
              </h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                Unlock the potential of your Web3 projects with our offerings that prioritize cost-effectiveness,
                user-friendliness, and reliable access to blockchain networks.
              </p>
            </div>
          </ScaleOnScroll>

          <ProductCards />
        </div>
      </section>

      {/* Our Expertise */}
      <section id="expertise">
        <SlidingExpertise />
      </section>

      {/* Web3 Solutions Use Cases */}
      <section id="solutions" className="py-20 px-4 relative z-10 bg-black">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-semibold mb-6 text-white">Web3 Solutions for Every Use Case</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Blockchain solutions that guarantee high uptime, cost-effective access, and low latency for different
                blockchain-based projects
              </p>
            </div>
          </ScaleOnScroll>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: <Database className="w-8 h-8" />,
                title: "Blockchain Node Services",
                description:
                  "We provide reliable blockchain nodes ensuring high uptime, cost-effective access, and low latency for various blockchain projects.",
              },
              {
                icon: <Wallet className="w-8 h-8" />,
                title: "Multi-Chain Wallets",
                description:
                  "We offer creation of multi-chain wallets, enabling seamless interaction and transaction validation across different blockchain networks.",
              },
              {
                icon: <Coins className="w-8 h-8" />,
                title: "NFT Services",
                description:
                  "We help build applications with comprehensive data on NFT collections, including metadata, holders, transaction history, and token value.",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "DeFi Solutions",
                description:
                  "Manage high transaction volumes and enable data access and smart contract interactions, enhancing security for decentralized finance applications.",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Trading Integrations",
                description:
                  "Empower traders by integrating RPC nodes with trading bots and analytical tools to take advantage of price movements.",
              },
              {
                icon: <Building className="w-8 h-8" />,
                title: "DAO Support",
                description:
                  "We facilitate real-time data access and transaction processing, critical for the autonomous operation of decentralized autonomous organizations.",
              },
            ].map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-105 group h-full">
                  <CardContent className="p-8 h-full">
                    <div className="flex items-start gap-4 h-full">
                      <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 flex-shrink-0 mt-1">
                        {item.icon}
                      </div>
                      <div className="flex flex-col h-full">
                        <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-gray-100 transition-colors">
                          {item.title}
                        </h3>
                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed flex-grow">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section with Animated Counters */}
      <section className="py-20 px-4 relative z-10 bg-black">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-semibold mb-6 text-white">Our Commitment to Your Success</h2>
              <p className="text-lg text-gray-400">Discover the impact of our work:</p>
            </div>
          </ScaleOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: 10, label: "Diverse Blockchain Solutions", icon: "🔗", suffix: "+" },
              { number: 99.9, label: "Service Availability", icon: "⚡", suffix: "%" },
              { number: 24, label: "Support Service", icon: "🛠️", suffix: "/7" },
              { number: 50, label: "Projects Completed", icon: "✅", suffix: "+" },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="bg-gray-900 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="text-3xl mb-2">{stat.icon}</div>
                    <div className="text-3xl font-bold mb-2">
                      <ScrollTriggeredCounter end={stat.number} suffix={stat.suffix} className="text-3xl" />
                    </div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.4}>
            <p className="text-center mt-12 text-gray-400 text-lg">
              We Are Committed to Ensuring Your Project's Success with Unmatched Reliability and Expertise
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <ScaleOnScroll>
            <div className="bg-gray-900 rounded-lg p-12 border border-gray-800">
              <h2 className="text-4xl font-semibold mb-6 text-white">Ready to Start Your Project?</h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help bring your ideas to life with our expertise in both Web3 and traditional
                development
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <LiquidButton>Get Started</LiquidButton>
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
            </div>
          </ScaleOnScroll>
        </div>
      </section>

      {/* Footer */}
      <EnhancedFooter />
    </div>
  )
}
