import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  ArrowRight,
  Users,
  Target,
  Award,
  Globe,
  Shield,
  Zap,
  Heart,
  Lightbulb,
  TrendingUp,
  Code,
  Rocket,
  Star,
} from "lucide-react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import CleanBackground from "@/components/clean-background"
import ScrollReveal from "@/components/scroll-reveal"
import ScaleOnScroll from "@/components/scale-on-scroll"
import EnhancedFooter from "@/components/enhanced-footer"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-x-hidden">
      <CleanBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <ScrollReveal>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Pioneering Web3 Innovation in Ethiopia</h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              We are Ethiopia's first Web3 agency, dedicated to bridging the gap between traditional business and the
              decentralized future through innovative blockchain solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScaleOnScroll>
              <div>
                <h2 className="text-4xl font-bold mb-6 text-white">Our Story</h2>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  Founded with a vision to transform Ethiopia's digital landscape, Rira Technologies emerged as a
                  pioneer in the Web3 space. We recognized the immense potential of blockchain technology to solve
                  real-world problems and create meaningful impact in our communities.
                </p>
                <p className="text-lg text-gray-400 mb-6 leading-relaxed">
                  Starting with a small team of passionate developers and blockchain enthusiasts, we've grown into
                  Ethiopia's leading Web3 agency, serving clients across agriculture, finance, and government sectors.
                </p>
                <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                  Our journey is driven by the belief that technology should serve humanity, and blockchain represents
                  the next evolution in creating transparent, secure, and accessible digital solutions.
                </p>
                <Link href="/contact">
                  <Button className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-3 rounded-lg transition-colors duration-300">
                    Join Our Journey
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </ScaleOnScroll>
            <ScrollReveal delay={0.2}>
              <div className="bg-gray-900 rounded-lg p-8 border border-gray-800">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Our Team"
                  className="w-full h-80 object-cover rounded-lg"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Mission & Vision */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <Card className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-blue-500/30 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Target className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To democratize access to Web3 technologies and empower Ethiopian businesses and communities with
                    innovative blockchain solutions that create real value and drive sustainable growth.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Card className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-purple-500/30 backdrop-blur-sm h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <Lightbulb className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To be the leading catalyst for Web3 adoption across Africa, creating a decentralized ecosystem that
                    fosters innovation, transparency, and economic empowerment for all.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Our Core Values</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                The principles that guide everything we do and shape our approach to innovation
              </p>
            </div>
          </ScaleOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="w-8 h-8" />,
                title: "Integrity",
                description: "We build trust through transparency and honest communication",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Lightbulb className="w-8 h-8" />,
                title: "Innovation",
                description: "We constantly push boundaries to create cutting-edge solutions",
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Impact",
                description: "We focus on creating meaningful change in communities",
                gradient: "from-red-500 to-pink-500",
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Collaboration",
                description: "We believe in the power of working together towards common goals",
                gradient: "from-purple-500 to-indigo-500",
              },
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-105 group h-full">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-16 h-16 rounded-xl bg-gradient-to-r ${value.gradient} flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
                      {value.title}
                    </h3>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{value.description}</p>
                  </CardContent>
                </Card>
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
              <h2 className="text-4xl font-bold mb-6 text-white">Why Choose Rira Technologies?</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                What sets us apart in the Web3 landscape and makes us the right partner for your blockchain journey
              </p>
            </div>
          </ScaleOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Star className="w-8 h-8" />,
                title: "First-Mover Advantage",
                description:
                  "As Ethiopia's first Web3 agency, we bring unique insights and pioneering experience to every project.",
              },
              {
                icon: <Globe className="w-8 h-8" />,
                title: "Local Expertise",
                description:
                  "Deep understanding of Ethiopian market needs combined with global blockchain best practices.",
              },
              {
                icon: <Code className="w-8 h-8" />,
                title: "Technical Excellence",
                description:
                  "Our team of expert developers delivers high-quality, secure, and scalable blockchain solutions.",
              },
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Proven Track Record",
                description: "Successfully delivered 50+ projects with measurable impact across various industries.",
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Rapid Innovation",
                description: "We stay ahead of the curve, implementing the latest Web3 technologies and methodologies.",
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "End-to-End Solutions",
                description: "From concept to deployment, we provide comprehensive blockchain development services.",
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

      {/* Our Journey */}
      <section className="py-20 px-4 relative z-10 bg-black">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Our Journey</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Key milestones in our mission to transform Ethiopia's digital landscape
              </p>
            </div>
          </ScaleOnScroll>

          <div className="space-y-8">
            {[
              {
                year: "2022",
                title: "Foundation",
                description: "Rira Technologies was founded with a vision to bring Web3 innovation to Ethiopia",
                icon: <Rocket className="w-6 h-6" />,
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                year: "2023",
                title: "First Major Project",
                description: "Launched the Farmer Collateral System, revolutionizing agricultural financing",
                icon: <TrendingUp className="w-6 h-6" />,
                gradient: "from-green-500 to-emerald-500",
              },
              {
                year: "2024",
                title: "Market Leadership",
                description: "Became Ethiopia's leading Web3 agency with 50+ successful projects",
                icon: <Award className="w-6 h-6" />,
                gradient: "from-purple-500 to-pink-500",
              },
              {
                year: "2025",
                title: "Regional Expansion",
                description: "Expanding our impact across East Africa with innovative blockchain solutions",
                icon: <Globe className="w-6 h-6" />,
                gradient: "from-orange-500 to-red-500",
              },
            ].map((milestone, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <div className="flex items-start gap-6 p-6 bg-gray-900/30 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 group">
                  <div
                    className={`w-16 h-16 rounded-full bg-gradient-to-r ${milestone.gradient} flex items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    {milestone.year.slice(-2)}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className={`w-8 h-8 rounded-lg bg-gradient-to-r ${milestone.gradient} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`}
                      >
                        {milestone.icon}
                      </div>
                      <h3 className="text-xl font-bold text-white group-hover:text-gray-100 transition-colors">
                        {milestone.title}
                      </h3>
                      <span className="text-gray-500 font-medium">{milestone.year}</span>
                    </div>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Our Impact */}
      <section className="py-20 px-4 relative z-10 bg-black">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Our Impact</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                Measuring the difference we've made in communities and businesses across Ethiopia
              </p>
            </div>
          </ScaleOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "50+", label: "Projects Delivered", icon: "🚀" },
              { number: "500+", label: "Farmers Empowered", icon: "🌾" },
              { number: "$2M+", label: "Financing Unlocked", icon: "💰" },
              { number: "85%", label: "Dispute Reduction", icon: "📊" },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6 text-center">
                    <div className="text-4xl mb-4">{stat.icon}</div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 relative z-10 bg-black">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-6 text-white">Meet Our Team</h2>
              <p className="text-lg text-gray-400 max-w-2xl mx-auto">
                The passionate individuals driving Web3 innovation in Ethiopia
              </p>
            </div>
          </ScaleOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Tadesse",
                role: "Founder & CEO",
                description: "Blockchain visionary with 8+ years in Web3 development",
                gradient: "from-blue-500 to-purple-600",
              },
              {
                name: "Sarah Bekele",
                role: "CTO",
                description: "Smart contract expert and security specialist",
                gradient: "from-purple-500 to-pink-600",
              },
              {
                name: "Michael Haile",
                role: "Lead Developer",
                description: "Full-stack developer specializing in DeFi solutions",
                gradient: "from-green-500 to-emerald-600",
              },
            ].map((member, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-105 group">
                  <CardContent className="p-8 text-center">
                    <div
                      className={`w-24 h-24 rounded-full bg-gradient-to-r ${member.gradient} mx-auto mb-6 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300`}
                    >
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-gray-100 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{member.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative z-10 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <ScaleOnScroll>
            <div className="bg-gray-900 rounded-lg p-12 border border-gray-800">
              <h2 className="text-4xl font-semibold mb-6 text-white">Ready to Join Our Mission?</h2>
              <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
                Whether you're looking to transform your business with Web3 or join our team of innovators, we'd love to
                hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white px-8 py-3 text-lg rounded-lg transition-all duration-300 hover:scale-105">
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
            </div>
          </ScaleOnScroll>
        </div>
      </section>

      {/* Footer */}
      <EnhancedFooter />
    </div>
  )
}
