import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle, Users, Zap, Shield, Database, Globe } from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import CleanBackground from "@/components/clean-background"
import ScrollReveal from "@/components/scroll-reveal"
import ScaleOnScroll from "@/components/scale-on-scroll"
import EnhancedFooter from "@/components/enhanced-footer"
import LiquidButton from "@/components/liquid-button"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio - Rira Technologies",
  description:
    "Explore Rira Technologies' portfolio showcasing cutting-edge Web3 projects, blockchain applications, and digital solutions. Discover how we bridge Web2 and Web3 with impactful innovations for businesses and communities.",
}

const otherProjects = [
  {
    id: "crowfunding",
    title: "Crowfunding Platform",
    category: "Smart Contracts",
    description:
      "A decentralized fundraising protocol enabling supporters worldwide to fund startups and charitable initiatives using ETH. The system manages campaign lifecycle with owner-controlled fund management, secure transactions, and complete transparency through event emissions.",
    longDescription:
      "This smart contract-based platform revolutionizes fundraising by removing intermediaries and enabling direct peer-to-peer funding. Campaigns can be created with flexible goals, supporters can contribute securely, and campaign owners have full control over fund withdrawals and campaign management. Built with security audits and event-driven architecture.",
    technologies: ["Solidity", "Foundry", "Ethereum"],
    features: [
      "Campaign creation and management",
      "Secure ETH funding mechanism with reentrancy protection",
      "Owner-controlled fund withdrawal and security",
      "Campaign cancellation with refund mechanisms",
      "Real-time event tracking and transparency",
      "Gas-optimized smart contract design",
    ],
    icon: "💰",
    gradient: "from-yellow-500 to-orange-500",
    image: "/ethBlock.jpg",
    repo: "github.com/Addis-Belete/Crowd_Funding",
  },
  {
    id: "risk-exchange",
    title: "Risk Exchange Protocol",
    category: "DeFi Infrastructure",
    description:
      "A sophisticated order-book based DEX leveraging 0x Protocol for off-chain order creation and on-chain execution. Enables efficient token swaps with price discovery mechanisms and deep liquidity pools.",
    longDescription:
      "An enterprise-grade token exchange protocol combining off-chain order books with on-chain settlement. Users create orders off-chain for reduced gas costs, while the protocol manages on-chain execution with atomic settlement. Deployed and tested on Polygon Mumbai with comprehensive order management.",
    technologies: ["TypeScript", "Next.js", "Foundry", "Solidity", "Ethers.js", "0x Protocol"],
    features: [
      "Off-chain order creation for gas efficiency",
      "On-chain atomic settlement and execution",
      "ERC20 token trading with price discovery",
      "Polygon Mumbai testnet deployment",
      "Order book management and order status tracking",
      "Slippage protection and limit orders",
    ],
    icon: "📊",
    gradient: "from-blue-500 to-purple-500",
    image: "/riskExch.png",
    repo: "github.com/Addis-Belete/Risk_Protocol",
  },
  {
    id: "tender-platform",
    title: "Decentralized Tender System",
    category: "Blockchain Solutions",
    description:
      "A zero-knowledge proof-enabled tender platform ensuring privacy-preserving bidding. Organizations post tenders, bidders submit encrypted proposals with ZK proofs, and winners are selected through transparent smart contract logic.",
    longDescription:
      "Revolutionary procurement system using advanced cryptography to ensure bid privacy while maintaining transparency. Organizations can verify bid validity without revealing sensitive pricing information. Deployed on Goerli testnet with full ZK proof integration and automated winner selection.",
    technologies: ["Solidity", "Foundry", "Circom", "Snark.js", "Next.js", "JavaScript"],
    features: [
      "Decentralized tender posting and management",
      "Zero-knowledge proof implementation for bid privacy",
      "Secure bidding with cryptographic proofs",
      "Automated bid verification and validation",
      "Transparent winner selection algorithm",
      "Goerli testnet deployment with full integration",
    ],
    icon: "📋",
    gradient: "from-green-500 to-emerald-500",
    image: "/tenderPr.jpg",
    repo: "github.com/Addis-Belete/Artemis_capstoneProject",
  },
  {
    id: "eth-crawler",
    title: "Ethereum Analytics Engine",
    category: "Analytics & Data",
    description:
      "Comprehensive blockchain analytics platform for tracking Ethereum wallet transactions and token balances over time. Provides detailed transaction history, balance snapshots, and analytics with robust error handling and automatic retry mechanisms.",
    longDescription:
      "Enterprise-grade analytics platform aggregating on-chain data with sophisticated indexing and storage. The system fetches transactions from multiple sources, normalizes data, and provides paginated access to historical analytics. Built with MongoDB for scalable data storage and Jest for comprehensive testing.",
    technologies: ["Node.js", "TypeScript", "Next.js", "MongoDB", "Ethers.js", "Jest"],
    features: [
      "Wallet transaction fetching and indexing",
      "MongoDB transaction storage with indexing",
      "ETH and ERC20 token balance tracking",
      "Paginated history with efficient queries",
      "Automatic API retry with exponential backoff",
      "Historical balance snapshots and analytics",
    ],
    icon: "⛓️",
    gradient: "from-indigo-500 to-cyan-500",
    image: "/etherCrow.png",
    repo: "github.com/Addis-Belete/ethereum-transactions-crawler",
  },
]

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-x-hidden">
      <CleanBackground />
      <Navigation />
      {/* Hero Section */}
      <section className="pt-32 md:pb-6 pb-6 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-white">Our Portfolio</h1>
            <p className="md:text-xl text-lg text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Explore our innovative projects that are transforming industries and creating real impact across Ethiopia
              and beyond.
            </p>
            <p className="md:text-lg text-sm text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              From government-level digital transformation to agricultural financing solutions, we've delivered
              cutting-edge technology that bridges the gap between Web2 systems and modern innovation.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Portfolio Stats */}
      <section className="md:py-3 py-6 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "15+", label: "Projects Delivered", icon: "🚀" },
              { number: "10+", label: "Happy Clients", icon: "⭐" },
              { number: "3", label: "Industries Served", icon: "🏢" },
              { number: "100%", label: "Success Rate", icon: "✅" },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                  <CardContent className="py-6 md:px-6 px-2 text-center">
                    <div className="md:text-3xl text-xl mb-2">{stat.icon}</div>
                    <div className="md:text-2xl text-xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="md:py-20 py-8 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-blue-500/20 border border-blue-500/30 mb-6">
                <span className="md-text-lg text-sm text-blue-400 font-semibold">Featured Project</span>
              </div>
              <h2 className="md:text-4xl text-lg font-bold mb-6 text-white">
                ETH-Farm Warehouse Financing Receipt System{" "}
                <a
                  href="https://eth-farm.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-blue-500 underline"
                >
                  (Ethfarm.finance)
                </a>
              </h2>
              <p className="md:text-lg text-[15px] text-gray-300 max-w-4xl mx-auto mb-8">
                A comprehensive digital platform that revolutionizes warehouse receipt financing processes in Ethiopia,
                connecting farmers, depositors, banks, warehouses, warehouse operators, MOTRI and government
                institutions in a seamless ecosystem.
              </p>
              <p className="md:text-[16px] text-sm text-gray-400 max-w-3xl mx-auto">
                Developed for the{" "}
                <span className="text-blue-700 font-bold">Ethiopian Ministry of Trade and Regional Integration</span>,
                this system has transformed how agricultural financing works across the country, making it more
                transparent, efficient, and accessible to farmers.
              </p>
            </div>
          </ScaleOnScroll>

          {/* Project Challenge & Solution */}
          <div className="grid lg:grid-cols-2 gap-12 md:mb-16 mb-10">
            <ScrollReveal>
              <Card className="bg-red-900/20 border-red-500/30 h-full">
                <CardContent className="md:p-8 p-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-red-500/20 rounded-lg flex items-center justify-center">
                      <Shield className="w-6 h-6 text-red-400" />
                    </div>
                    <h3 className="md:text-2xl text-lg font-bold text-red-500">The Challenge</h3>
                  </div>
                  <p className="text-gray-300 md:text-[16px] text-sm mb-6 leading-relaxed">
                    Ethiopian farmers struggled with accessing financing due to complex manual processes, lack of
                    transparency, and inefficient paper-based systems. Banks were hesitant to provide loans without
                    proper collateral verification, while farmers couldn't prove the value of their stored agricultural
                    products.
                  </p>
                  <ul className="space-y-3 md:text-[16px] text-sm">
                    {[
                      "Manual, paper-based processes prone to errors",
                      "Lack of transparency between stakeholders",
                      "Difficult collateral verification for banks",
                      "Limited access to financing for farmers",
                      "Inefficient communication between parties",
                    ].map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-400">
                        <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0" />
                        <span>{challenge}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Card className="bg-green-900/20 border-green-500/30 h-full">
                <CardContent className="md:p-8 p-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-6 h-6 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-emerald-500">Our Solution</h3>
                  </div>
                  <p className="text-gray-300 md:text-[16px] text-sm mb-6 leading-relaxed">
                    We developed a comprehensive digital platform that automates the entire warehouse receipt financing
                    process. The system provides real-time visibility, secure document management, and seamless
                    communication between all stakeholders in the agricultural financing ecosystem.
                  </p>
                  <ul className="space-y-3 md:text-[16px] text-sm">
                    {[
                      "Complete digitization of all processes",
                      "Real-time dashboard for all stakeholders",
                      "Automated loan lifecycle management",
                      "Secure document storage and verification",
                      "Integration with National ID and SMS systems",
                      "Integration with E-trade to validate trade licenses",
                    ].map((solution, index) => (
                      <li key={index} className="flex items-start gap-3 text-gray-400">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                        <span>{solution}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>

          {/* Project Details */}
          <div className="grid lg:grid-cols-2 gap-12 items-center md:mb-16 mb-8">
            <ScrollReveal>
              <div>
                <h3 className="md:text-2xl text-lg font-bold md:mb-6 mb-2 text-white">
                  System Features & Capabilities
                </h3>
                <p className="text-gray-400 md:text-[16px] text-sm mb-8 leading-relaxed">
                  The ETH-Farm system is built with modern web technologies and provides a comprehensive suite of
                  features designed to streamline agricultural financing processes while ensuring security and
                  transparency.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: <Users className="w-5 h-5" />,
                      title: "Multi-Stakeholder Dashboards",
                      description:
                        "Customized interfaces for farmers, banks, warehouses, and government officials with role-based access control.",
                    },
                    {
                      icon: <Database className="w-5 h-5" />,
                      title: "Real-time Data Management",
                      description:
                        "Live tracking of loan applications, collateral status, and transaction history with instant updates.",
                    },
                    {
                      icon: <Shield className="w-5 h-5" />,
                      title: "Secure Document Handling",
                      description:
                        "Encrypted storage and verification of warehouse receipts, contracts, and identification documents.",
                    },
                    {
                      icon: <Globe className="w-5 h-5" />,
                      title: "System Integrations",
                      description:
                        "Seamless connection with National ID verification, SMS notifications, and banking systems.",
                    },
                  ].map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-4 py-4 md:px-4 px-2 bg-gray-900/30 rounded-lg border border-gray-800"
                    >
                      <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center text-blue-400 flex-shrink-0">
                        {feature.icon}
                      </div>
                      <div>
                        <h4 className="md:text-lg text-[15px] font-semibold text-white mb-2">{feature.title}</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-gray-900/50 rounded-lg p-2 border border-gray-900">
                <img
                  src="/eth-r.png"
                  alt="ETH-Farm Dashboard Interface"
                  className="w-full h-full object-cover rounded-lg mb-6 bg-gray-900"
                />
                <h4 className="text-xl font-bold text-white  md:mb-4 mb-2 px-4">System Dashboard</h4>
                <p className="text-gray-400 md:text-[16px] text-sm leading-relaxed px-4">
                  The intuitive dashboard provides comprehensive insights into loan applications, collateral management,
                  and system performance metrics. Each stakeholder has access to their specific dashboard with real-time
                  updates and notifications.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Impact & Results */}
          <div className="mb-10">
            <ScaleOnScroll>
              <div className="text-center mb-12">
                <h3 className="md:text-3xl text-xl font-bold mb-6 text-white">Project Impact & Results</h3>
                <p className="md:text-lg text-sm text-gray-400 max-w-3xl mx-auto">
                  The ETH-Farm system has delivered measurable results, transforming agricultural financing across
                  Ethiopia and creating new opportunities for farmers and financial institutions.
                </p>
              </div>
            </ScaleOnScroll>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  title: "100% Digital",
                  description:
                    "Complete automation of previously manual processes, eliminating paperwork and reducing processing time from weeks to days.",
                  icon: "📱",
                },
                {
                  title: "Multi-Bank Ready",
                  description:
                    "Scalable architecture supporting unlimited bank integrations with standardized APIs and protocols.",
                  icon: "🏦",
                },
                {
                  title: "Real-time Tracking",
                  description:
                    "Live monitoring capabilities for all stakeholders with instant notifications and status updates.",
                  icon: "⚡",
                },
                {
                  title: "Enhanced Security",
                  description:
                    "Advanced encryption and secure authentication ensuring data protection and regulatory compliance.",
                  icon: "🔒",
                },
              ].map((result, index) => (
                <ScrollReveal key={index} delay={index * 0.1}>
                  <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105 h-full">
                    <CardContent className="md:p-6 p-3 text-center">
                      <div className="text-3xl mb-4">{result.icon}</div>
                      <h4 className="text-xl font-bold text-white mb-3">{result.title}</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{result.description}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Other Projects */}
      <section className="md:py-20 py-10 px-4 relative z-10 bg-black">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-purple-500/30 mb-6">
                <span className="md:text-lg text-sm text-blue-400 font-semibold">Diverse Solutions</span>
              </div>
              <h2 className="md:text-4xl text-2xl font-bold mb-6 text-white">Other Projects</h2>
              <p className="md:text-lg text-sm text-gray-400 max-w-3xl mx-auto">
                A diverse portfolio of Web3, DeFi, and blockchain solutions showcasing expertise in smart contract
                development, decentralized systems, and innovative technologies.
              </p>
            </div>
          </ScaleOnScroll>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {otherProjects.map((project, index) => (
              <ScrollReveal key={project.id} delay={index * 0.1}>
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 h-full group hover:scale-105 overflow-hidden">
                  <div className={`h-1 bg-gradient-to-r ${project.gradient}`} />

<div className="h-80 bg-gray-800 overflow-hidden">
  <img
    src={project.image || "/placeholder.svg"}
    alt={project.title}
    className="w-full h-full object-fit scale-100 group-hover:scale-110 transition-transform duration-500"
  />
</div>
                  <CardContent className="md:p-8 p-6">
                    {/* Header with Icon and Category */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="text-4xl">{project.icon}</div>
                      <span className={`text-xs font-semibold px-3 py-1 rounded-full bg-gray-800 text-gray-300`}>
                        {project.category}
                      </span>
                    </div>

                    {/* Title and Description */}
                    <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>
                    <p className="text-gray-500 text-xs leading-relaxed mb-6 italic">{project.longDescription}</p>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {project.features.slice(0, 4).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-gray-400">
                            <span className="text-purple-400 font-bold mt-0.5">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies displayed as simple tags instead */}
                    <div className="pt-4 border-t border-gray-800">
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-gradient-to-r from-gray-800 to-gray-700 text-gray-300 px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      {/* <section className="md:py-14 py-10 md:px-4 px-2 relative z-10 bg-black">
        <div className="container mx-auto md:max-w-5xl w-full">
          <ScrollReveal>
            <Card className="bg-gradient-to-r from-gray-900 to-gray-500 backdrop-blur-sm border-gray-500">
              <CardContent className="md:p-10 p-3 text-center">
                <div className="md:w-16 md:h-16 w-14 h-14 bg-gradient-to-r from-gray-500 to-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="w-8 h-8 text-blue-700" />
                </div>
                <blockquote className="md:text-[17px] text-[14px] text-white mb-8 leading-relaxed italic">
                  "ETH-Farm has transformed Ethiopia's agricultural ecosystem. For farmers, access to financing and
                  resources that once took weeks — burdened by paperwork, travel, and delays — now happens in just days,
                  with complete transparency. This innovation has opened doors for thousands of farmers to receive
                  timely support, fair pricing, and direct connections to markets. Beyond speeding up processes,
                  ETH-Farm empowers rural communities, increases productivity, and ensures that the benefits of
                  agriculture are felt across the nation."
                </blockquote>
                <div className="text-center">
                  <div className="md:text-lg text-[16px] font-bold text-white">
                    Ministry of Trade and Regional Integration - MOTRI
                  </div>
                  <div className="md:text-[16px] text-sm text-blue-300 font-semibold">
                    Federal Democratic Republic of Ethiopia
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        </div>
      </section> */}

      {/* Our Approach */}
      <section className="md:py-20 py-10 px-4 relative z-10 bg-black">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-16">
              <h2 className="md:text-4xl text-xl font-bold mb-6 text-white">Our Development Approach</h2>
              <p className="md:text-lg text-sm text-gray-400 max-w-3xl mx-auto">
                How we deliver successful projects through careful planning, agile development, and continuous
                collaboration with our clients.
              </p>
            </div>
          </ScaleOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                description:
                  "We conduct thorough stakeholder interviews, analyze existing processes, and identify key requirements to create a comprehensive project roadmap.",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                step: "02",
                title: "Design & Architecture",
                description:
                  "Our team designs user-friendly interfaces and scalable system architecture that meets both current needs and future growth requirements.",
                gradient: "from-purple-500 to-pink-500",
              },
              {
                step: "03",
                title: "Development & Testing",
                description:
                  "Using agile methodologies, we develop features iteratively with continuous testing, security audits, and client feedback integration.",
                gradient: "from-green-500 to-emerald-500",
              },
              {
                step: "04",
                title: "Deployment & Support",
                description:
                  "We ensure smooth deployment with comprehensive training, documentation, and ongoing technical support to guarantee project success.",
                gradient: "from-orange-500 to-red-500",
              },
            ].map((process, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center group">
                  <div
                    className={`md:w-20 md:h-20 w-10 h-10 mx-auto mb-6 bg-gradient-to-r ${process.gradient} rounded-full flex items-center justify-center md:text-2xl text-lg font-bold text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {process.step}
                  </div>
                  <h3 className="md:text-xl text-lg font-bold mb-4 text-white group-hover:text-gray-100 transition-colors">
                    {process.title}
                  </h3>
                  <p className="md:text-[16px] text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                    {process.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="md:py-20 py-10 md:px-4 px-2 relative z-10 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <ScaleOnScroll>
            <div className="bg-gray-900 rounded-lg py-12 md:px-12 px-4 border border-gray-800">
              <h2 className="md:text-4xl text-lg font-semibold mb-6 text-white">Ready to Transform Your Business?</h2>
              <p className="md:text-lg text-sm text-gray-400 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can help you build innovative solutions that drive real impact and create lasting
                value for your organization and stakeholders.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <LiquidButton>Start Your Project</LiquidButton>
                </Link>
                <Link href="/about">
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 md:text-lg text-[15px] rounded-lg transition-colors duration-300 bg-transparent"
                  >
                    Learn More About Us
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
