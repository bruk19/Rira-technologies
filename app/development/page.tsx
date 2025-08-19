import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Code,
  Smartphone,
  Globe,
  Shield,
  Zap,
  Cpu,
  Database,
  Cloud,
  CheckCircle,
  Lock,
  Users,
  Settings,
  Monitor,
  CreditCard,
  BarChart3,
  FileText,
  Layers,
} from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import CleanBackground from "@/components/clean-background"
import ScrollReveal from "@/components/scroll-reveal"
import ScaleOnScroll from "@/components/scale-on-scroll"
import DualScrollVelocity from "@/components/dual-scroll-velocity"
import EnhancedFooter from "@/components/enhanced-footer"
import LiquidButton from "@/components/liquid-button"

export default function DevelopmentPage() {
  const blockchainServices = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Public Blockchain",
      description:
        "Decentralized, transparent networks where anyone can participate in the consensus process. Ideal for applications requiring maximum transparency and security.",
      features: ["Global accessibility", "Complete transparency", "Censorship resistance", "High security"],
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: "Private Blockchain",
      description:
        "Permissioned networks with restricted access, offering enhanced privacy and control. Perfect for enterprise applications and sensitive data management.",
      features: ["Controlled access", "Enhanced privacy", "Faster transactions", "Lower costs"],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: "Hybrid Blockchain",
      description:
        "Combines elements of both public and private blockchains, creating flexible solutions that balance transparency with privacy according to business needs.",
      features: ["Customizable access", "Selective transparency", "Scalable architecture", "Flexible configuration"],
      gradient: "from-green-500 to-emerald-500",
    },
  ]

  const web2Services = [
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "Web Applications",
      description:
        "Modern, responsive web applications built with cutting-edge technologies for optimal performance and user experience.",
      features: ["Responsive Design", "Progressive Web Apps", "Real-time Features", "SEO Optimization"],
      gradient: "from-orange-500 to-red-500",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Applications",
      description:
        "Native and cross-platform mobile applications that deliver exceptional user experiences across all devices.",
      features: ["iOS & Android", "Cross-platform", "Native Performance", "App Store Optimization"],
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      icon: <Settings className="w-8 h-8" />,
      title: "Management Systems",
      description:
        "Custom management systems that streamline business operations and improve organizational efficiency.",
      features: ["Custom Workflows", "User Management", "Reporting & Analytics", "Integration Ready"],
      gradient: "from-teal-500 to-cyan-500",
    },
    {
      icon: <CreditCard className="w-8 h-8" />,
      title: "Payment Solutions",
      description: "Secure payment processing systems with multiple gateway integrations and fraud protection.",
      features: ["Multiple Gateways", "Fraud Protection", "PCI Compliance", "Real-time Processing"],
      gradient: "from-yellow-500 to-orange-500",
    },
  ]

  const blockchainFeatures = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Custom Blockchain Architecture",
      description:
        "Tailored blockchain frameworks designed to meet your specific business requirements and objectives.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Consensus Mechanism Implementation",
      description: "Specialized development of proof-of-work, proof-of-stake, or custom consensus algorithms.",
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Network Infrastructure Setup",
      description: "Complete deployment and configuration of node networks with robust security measures.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Optimization",
      description: "Advanced techniques to ensure high throughput, low latency, and efficient resource utilization.",
    },
  ]

  const developmentProcess = [
    {
      step: "01",
      title: "Discovery & Analysis",
      description:
        "We thoroughly analyze your business requirements and identify how technology can add the most value to your operations.",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      step: "02",
      title: "Architecture Design",
      description:
        "Our architects design a comprehensive infrastructure tailored to your specific needs and scalability requirements.",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      step: "03",
      title: "Development & Testing",
      description:
        "We develop your solution using agile methodologies with continuous testing to ensure security and performance.",
      gradient: "from-green-500 to-emerald-500",
    },
    {
      step: "04",
      title: "Deployment & Support",
      description: "We ensure smooth implementation with comprehensive training and ongoing technical support.",
      gradient: "from-orange-500 to-red-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-x-hidden">
      <CleanBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <ScrollReveal>
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-8">
              <Cpu className="w-4 h-4 mr-2 text-cyan-400" />
              <span className="text-cyan-400 font-semibold">Development Services</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">Development Excellence</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Building robust, scalable solutions tailored to your specific business requirements
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-12 leading-relaxed">
              From cutting-edge blockchain solutions to Web2 and mobile applications, we deliver
              comprehensive technology solutions that drive innovation and create value for your business.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <LiquidButton>Start Your Project</LiquidButton>
              </Link>
              <Link href="/portfolio">
                <Button
                  variant="outline"
                  className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-black px-8 py-3 text-lg font-semibold rounded-full transition-all duration-300 hover:scale-105 bg-transparent"
                >
                  View Our Work
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Blockchain Development Section */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Blockchain Development
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Custom Blockchain Solutions for Modern Enterprises
              </p>
              <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                Our expert team specializes in building robust, scalable blockchain solutions tailored to your specific
                business requirements. We develop custom blockchain architectures, implement consensus mechanisms, and
                create distributed networks that ensure maximum security and performance.
              </p>
            </div>
          </ScaleOnScroll>

          <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {blockchainServices.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="bg-gray-900/50 border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 group h-full">
                  <CardContent className="p-8">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{service.icon}</div>
                    </div>

                    <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-6 leading-relaxed">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-gray-300 mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Web2 Development Section */}
      <section className="py-20 px-4 relative z-10 bg-black">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Web2 Development Services
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                Comprehensive Web2 Solutions for Every Business Need
              </p>
              <p className="text-lg text-gray-400 max-w-4xl mx-auto">
                Beyond blockchain, we provide full-stack development services including web applications, mobile apps,
                management systems, and payment solutions that form the backbone of modern businesses.
              </p>
            </div>
          </ScaleOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {web2Services.map((service, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="bg-gray-900/50 border-gray-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20 group h-full">
                  <CardContent className="p-6">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{service.icon}</div>
                    </div>

                    <h3 className="text-lg font-bold mb-3 group-hover:text-purple-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-400 mb-4 text-sm leading-relaxed">{service.description}</p>

                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs text-gray-300">
                          <CheckCircle className="w-3 h-3 mr-2 text-green-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Development Process */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We follow a comprehensive approach that ensures your solution is secure, scalable, and aligned with your
                business objectives
              </p>
            </div>
          </ScaleOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {developmentProcess.map((item, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="text-center group">
                  <div
                    className={`w-20 h-20 mx-auto mb-6 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center text-2xl font-bold text-white group-hover:scale-110 transition-transform duration-300`}
                  >
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold mb-4 group-hover:text-cyan-400 transition-colors">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Dual Scroll Velocity Text */}
      <DualScrollVelocity
        topTexts={[
          "Blockchain • Smart Contracts • Web Applications • Mobile Apps • ",
          "Management Systems • Payment Solutions • Cloud Infrastructure • ",
        ]}
        bottomTexts={[
          "Custom Development • Security • Scalability • Performance • ",
          "Innovation • Quality • Support • Excellence • ",
        ]}
        className="text-2xl md:text-4xl font-medium"
      />

      {/* Blockchain Development Features */}
      <section className="py-20 px-4 relative z-10 bg-black">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Our Blockchain Development Features</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                We deliver comprehensive blockchain solutions with cutting-edge features that ensure security,
                scalability, and performance
              </p>
            </div>
          </ScaleOnScroll>

          <div className="grid md:grid-cols-2 gap-8">
            {blockchainFeatures.map((feature, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex items-start gap-4 p-6 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-cyan-500 transition-all duration-300 group">
                  <div className="w-12 h-12 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 relative z-10 bg-black">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Why Choose Our Development Services?</h2>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                What sets us apart and makes us the right partner for your development needs
              </p>
            </div>
          </ScaleOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Users className="w-8 h-8" />,
                title: "Expert Team",
                description: "Experienced developers with deep expertise in both Web3 and Web2 technologies.",
              },
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Security First",
                description: "We prioritize security in every aspect of development, from code to deployment.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Performance Optimized",
                description: "Our solutions are built for speed, scalability, and optimal resource utilization.",
              },
              {
                icon: <FileText className="w-8 h-8" />,
                title: "Comprehensive Documentation",
                description: "Detailed documentation and training to ensure smooth project handover.",
              },
              {
                icon: <BarChart3 className="w-8 h-8" />,
                title: "Agile Methodology",
                description: "Iterative development approach with regular updates and client feedback integration.",
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Full-Stack Solutions",
                description: "End-to-end development services from concept to deployment and maintenance.",
              },
            ].map((reason, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-105 group h-full">
                  <CardContent className="p-8">
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">
                      {reason.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                      {reason.description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <EnhancedFooter />
    </div>
  )
}
