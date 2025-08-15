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
      <section className="pt-32 md:pb-14 pb-6 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl text-center">
          <ScrollReveal>
            <h1 className="text-2xl md:text-5xl font-bold mb-6 text-white">Pioneering Web3 Innovation</h1>
            <p className="md:text-lg text-sm text-gray-400 max-w-4xl mx-auto mb-2 leading-relaxed">
              We are a Web3 agency that also works with Web2, dedicated to bridging the gap between traditional business and the decentralized future through innovative blockchain solutions.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Our Story */}
      <section className="md:py-6 md:px-4 px-2 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScaleOnScroll>
              <div>
                <h2 className="md:text-4xl text-xl font-bold mb-6 text-white">Our Story</h2>
                <p className="md:text-lg text-sm text-gray-400 mb-6 leading-relaxed">
                  Founded with a vision to transform Ethiopia's digital landscape, Rira Technologies emerged as a
                  pioneer in the Web3 space. We recognized the immense potential of blockchain technology to solve
                  real-world problems and create meaningful impact in our communities.
                </p>
                <p className="md:text-lg text-sm text-gray-400 mb-6 leading-relaxed">
                  Starting with a small team of passionate developers and blockchain enthusiasts, we've grown into
                  Ethiopia's leading Web3 agency, serving clients across agriculture, finance, and government sectors.
                </p>
                <p className="md:text-lg text-sm text-gray-400 mb-8 leading-relaxed">
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
      <section className="md:py-20 py-10 md:px-4 px-2 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <Card className="bg-gray-800 border-gray-700 backdrop-blur-sm h-full">
                <CardContent className="md:p-8 p-4">
                  <div className="md:w-16 md:h-16 w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Target className="md:w-8 md:h-8 w-5 h-5 text-white" />
                  </div>
                  <h3 className="md:text-2xl text-lg font-bold text-white mb-4">Our Mission</h3>
                  <p className="text-sm md:text-[16px] text-gray-300 leading-relaxed">
                    To democratize access to Web3 technologies and empower Ethiopian businesses and communities with
                    innovative blockchain solutions that create real value and drive sustainable growth.
                  </p>
                </CardContent>
              </Card>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <Card className="bg-gray-800 border-gray-700 backdrop-blur-sm h-full">
                <CardContent className="md:p-8 p-4">
                  <div className="md:w-16 md:h-16 w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                    <Lightbulb className="md:w-8 md:h-8 w-5 h-5 text-white" />
                  </div>
                  <h3 className="md:text-2xl text-lg font-bold text-white mb-4">Our Vision</h3>
                  <p className="text-sm md:text-[16px] text-gray-300 leading-relaxed">
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
      <section className="md:py-20 py-10 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-16">
              <h2 className="md:text-4xl text-xl font-bold mb-6 text-white">Our Core Values</h2>
              <p className="md:text-lg text-sm text-gray-400 max-w-2xl mx-auto">
                The principles that guide everything we do and shape our approach to innovation
              </p>
            </div>
          </ScaleOnScroll>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: <Shield className="md:w-8 md:h-8 w-5 h-5" />,
                title: "Integrity",
                description: "We build trust through transparency and honest communication",
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                icon: <Lightbulb className="md:w-8 md:h-8 w-5 h-5" />,
                title: "Innovation",
                description: "We constantly push boundaries to create cutting-edge solutions",
                gradient: "from-yellow-500 to-orange-500",
              },
              {
                icon: <Heart className="md:w-8 md:h-8 w-5 h-5" />,
                title: "Impact",
                description: "We focus on creating meaningful change in communities",
                gradient: "from-red-500 to-pink-500",
              },
              {
                icon: <Users className="md:w-8 md:h-8 w-5 h-5" />,
                title: "Collaboration",
                description: "We believe in the power of working together towards common goals",
                gradient: "from-purple-500 to-indigo-500",
              },
            ].map((value, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-105 group h-full">
                  <CardContent className="md:p-8 p-4 text-center">
                    <div
                      className={`md:w-16 md:h-16 w-10 h-10 rounded-xl bg-gradient-to-r ${value.gradient} flex items-center justify-center text-white mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                    >
                      {value.icon}
                    </div>
                    <h3 className="md:text-xl text-[17px] font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
                      {value.title}
                    </h3>
                    <p className="md:text-[16px] text-sm text-gray-400 group-hover:text-gray-300 transition-colors">{value.description}</p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="md:py-20 py-10 px-4 relative z-10 bg-black">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center mb-16">
              <h2 className="md:text-4xl text-xl font-bold mb-6 text-white">Why Choose Rira Technologies?</h2>
              <p className="md:text-lg text-sm text-gray-400 max-w-2xl mx-auto">
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
                  <CardContent className="md:p-8 p-4">
                    <div className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300 mb-4">
                      {reason.icon}
                    </div>
                    <h3 className="md:text-xl text-[17px] font-bold text-white mb-4 group-hover:text-gray-100 transition-colors">
                      {reason.title}
                    </h3>
                    <p className="md:text-[16px] text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
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
      <section className="md:py-20 py-10 px-4 relative z-10 bg-black">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center md:mb-16 mb-10">
              <h2 className="md:text-4xl text-xl font-bold mb-6 text-white">Our Journey</h2>
              <p className="md:text-lg text-sm text-gray-400 max-w-2xl mx-auto">
                Key milestones in our mission to transform Ethiopia's digital landscape
              </p>
            </div>
          </ScaleOnScroll>

          <div className="space-y-8">
            {[
              {
                year: "2024",
                title: "Foundation",
                description: "Rira Technologies was founded with a vision to bring Web3 innovation to Ethiopia",
                icon: <Rocket className="w-6 h-6" />,
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                year: "2024",
                title: "First Major Project",
                description: "Launched the Farmer Collateral System, revolutionizing agricultural financing",
                icon: <TrendingUp className="w-6 h-6" />,
                gradient: "from-green-500 to-emerald-500",
              },
              {
                year: "2025",
                title: "Market Leadership",
                description: "Became Ethiopia's leading Web3 agency with 10+ successful projects",
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
                    className={`md:flex hidden w-16 h-16 rounded-full bg-gradient-to-r ${milestone.gradient} items-center justify-center text-white font-bold text-xl group-hover:scale-110 transition-transform duration-300`}
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
                      <h3 className="md:text-xl text-[17px] font-bold text-white group-hover:text-gray-100 transition-colors">
                        {milestone.title}
                      </h3>
                      <span className="text-gray-500 font-medium">{milestone.year}</span>
                    </div>
                    <p className="md:text-[16px] text-sm text-gray-400 group-hover:text-gray-300 transition-colors leading-relaxed">
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
      <section className="md:py-14 py-8 px-4 relative z-10 bg-black">
        <div className="container mx-auto max-w-6xl">
          <ScaleOnScroll>
            <div className="text-center md:mb-16 mb-10">
              <h2 className="md:text-4xl text-xl font-bold mb-6 text-white">Our Impact</h2>
              <p className="md:text-lg text-sm text-gray-400 max-w-2xl mx-auto">
                Measuring the difference we've made in communities and businesses across Ethiopia
              </p>
            </div>
          </ScaleOnScroll>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { number: "10+", label: "Projects Delivered", icon: "🚀" },
              { number: "100+", label: "Farmers Empowered", icon: "🌾" },
              { number: "6B+ ETB", label: "Financing Unlocked", icon: "💰" },
              { number: "85%", label: "Dispute Reduction", icon: "📊" },
            ].map((stat, index) => (
              <ScrollReveal key={index} delay={index * 0.1}>
                <Card className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:scale-105">
                  <CardContent className="md:p-6 p-4 text-center">
                    <div className="md:text-4xl text-xl mb-4">{stat.icon}</div>
                    <div className="md:text-3xl text-xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </CardContent>
                </Card>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

{/* Team Section */}
<section className="md:py-20 py-10 px-4 relative z-10 bg-black">
  <div className="container mx-auto max-w-6xl">
    <ScaleOnScroll>
      <div className="text-center mb-16">
        <h2 className="md:text-4xl text-xl font-bold mb-6 text-white">Meet Our Team</h2>
        <p className="md:text-lg text-sm text-gray-400 max-w-2xl mx-auto">
          The passionate individuals driving Web3 innovation in Ethiopia
        </p>
      </div>
    </ScaleOnScroll>

    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-10">
      {[
        {
          name: "Addis Belete",
          role: "Co-founder & CEO",
          description:
            "Web3 Software Engineer with extensive expertise in decentralized finance.",
          image: "/add.png",
          socials: {
            linkedin: "https://linkedin.com/in/addis-belete",
            twitter: "https://twitter.com/addisbelete",
          },
        },
        {
          name: "Bruk Teshome",
          role: "Co-founder & CTO",
          description:
            "Web3 Software Engineer with extensive expertise in decentralized finance and SEO.",
          image: "/bruk.png",
          socials: {
            linkedin: "https://linkedin.com/in/bruk-teshome",
            twitter: "https://twitter.com/brukteshome",
          },
        },
        {
          name: "Dr. Mesay Bejiga",
          role: "Senior AI Scientist",
          description:
            "Senior Machine Learning and Artificial Intelligence Scientist with over 15 years of experience.",
          image: "/mesay.png",
          socials: {
            linkedin: "https://linkedin.com/in/mesaybejiga",
          },
        },
        {
          name: "Bereket Bejiga",
          role: "Lead Software Engineer",
          description:
            "Lead Software Engineer with over a decade of professional experience.",
          image: "/bereket.png",
          socials: {
            linkedin: "https://linkedin.com/in/bereket-belete",
          },
        },
      ].map((member, index) => (
        <ScrollReveal key={index} delay={index * 0.1}>
          <Card className="bg-gray-900/70 border border-gray-800 hover:border-gray-700 transition-all duration-500 hover:scale-[1.02] group shadow-lg rounded-xl overflow-hidden">
            
            {/* Bigger, full-width image */}
            <div className="overflow-hidden w-full flex justify-center">
              <img
                src={member.image}
                alt={member.name}
                className="md:h-60 h-40 object-fit group-hover:scale-105 transition-transform duration-500"
              />
            </div>

            <CardContent className="md:p-6 p-4 text-center">
              <h3 className="md:text-2xl text-xl font-bold text-white mb-2">
                {member.name}
              </h3>
              <p className="text-blue-400 font-semibold mb-4">{member.role}</p>
              <p className="text-gray-400 leading-relaxed md:text-[16px] text-sm">
                {member.description}
              </p>

              {/* Social Links */}
              <div className="flex justify-center space-x-4 mt-5">
                {member.socials?.linkedin && (
                  <a
                    href={member.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.3h.1c.53-1 1.84-2.3 3.8-2.3 4.06 0 4.8 2.67 4.8 6.1V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V24h-4V8z" />
                    </svg>
                  </a>
                )}
                {member.socials?.twitter && (
                  <a
                    href={member.socials.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.56c-.89.39-1.83.65-2.83.77a4.92 4.92 0 0 0 2.15-2.7 9.85 9.85 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.4 4.48A13.94 13.94 0 0 1 1.64 3.15a4.92 4.92 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.62v.06a4.92 4.92 0 0 0 3.94 4.82 4.93 4.93 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42A9.86 9.86 0 0 1 0 21.54a13.9 13.9 0 0 0 7.55 2.21c9.06 0 14.01-7.5 14.01-14.01 0-.21 0-.42-.02-.63a10.02 10.02 0 0 0 2.46-2.56z" />
                    </svg>
                  </a>
                )}
              </div>
            </CardContent>
          </Card>
        </ScrollReveal>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="md:py-20 py-10 md:px-4 px-2 relative z-10 bg-black">
        <div className="container mx-auto max-w-4xl text-center">
          <ScaleOnScroll>
            <div className="bg-gray-900 rounded-lg p-12 border border-gray-800">
              <h2 className="md:text-4xl text-xl font-semibold mb-6 text-white">Ready to Join Our Mission?</h2>
              <p className="md:text-lg text-sm text-gray-400 mb-8 max-w-2xl mx-auto">
                Whether you're looking to transform your business with Web3 or join our team of innovators, we'd love to
                hear from you.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-600 hover:to-cyan-700 text-white px-8 py-3 md:text-lg text-[15px] rounded-lg transition-all duration-300 hover:scale-105">
                    Start Your Project
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link href="/portfolio">
                  <Button
                    variant="outline"
                    className="border-gray-700 text-gray-300 hover:bg-gray-800 hover:text-white px-8 py-3 md:text-lg text-[15px] rounded-lg transition-colors duration-300 bg-transparent"
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
