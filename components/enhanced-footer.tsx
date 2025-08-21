import Link from "next/link"
import { Mail, Phone, MapPin, Twitter, Linkedin, Github, Globe, ArrowRight } from "lucide-react"
import ScrollReveal from "./scroll-reveal"

export default function EnhancedFooter() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/development", label: "Services" },
    { href: "/contact", label: "Contact" },
  ]

  const socialLinks = [
    { icon: <Twitter className="w-5 h-5" />, name: "Twitter", href: "#" },
    { icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", href: "https://www.linkedin.com/company/rira-technologies" },
    { icon: <Github className="w-5 h-5" />, name: "GitHub", href: "#" },
  ]

  return (
    <footer className="bg-black border-t border-gray-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Main Footer Content */}
      <section className="py-16 md:px-4 px-2 relative z-10">
        <div className="container mx-auto md:max-w-6xl w-full">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 md:gap-8 gap-6">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <div className="flex items-center space-x-1 mb-6">
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center">
                    <img
									src="/eth-logo-b1.png"
									alt="logo"
									className="w-full object-cover rounded-lg"
								/>
                  </div>
                  <span className="text-2xl font-bold text-white">Rira Technologies</span>
                </div>
                <p className="text-gray-400 mb-6 max-w-md leading-relaxed md:text-[16px] text-sm">
                  Pioneering the future of Web3 — building blockchain solutions, decentralized applications, and next-gen web experiences.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 group"
                    >
                      <div className="group-hover:animate-bounce">{social.icon}</div>
                    </a>
                  ))}
                </div>
              </ScrollReveal>
            </div>

            {/* Quick Links */}
            <div>
              <ScrollReveal delay={0.1}>
                <h3 className="text-white font-bold mb-6 text-lg">Quick Links</h3>
                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <Link
                        href={link.href}
                        className="text-gray-400 hover:text-blue-400 transition-colors duration-300 flex items-center group"
                      >
                        <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </ScrollReveal>
            </div>

            {/* Contact Info */}
            <div>
              <ScrollReveal delay={0.2}>
                <h3 className="text-white font-bold mb-6 text-lg">Contact Info</h3>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3 group">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                      <Mail className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    </div>
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      hello@riratechnologies.com
                    </span>
                  </li>
                  <li className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                      <Phone className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    </div>
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">+251 913 020 845</span>
                  </li>
                  <li className="flex items-center space-x-2 group">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                      <Phone className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    </div>
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">+251 943 413 849</span>
                  </li>
                  <li className="flex items-center space-x-3 group">
                    <div className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                      <MapPin className="w-4 h-4 text-gray-400 group-hover:text-white" />
                    </div>
                    <span className="text-gray-400 group-hover:text-gray-300 transition-colors">
                      Addis Ababa, Ethiopia
                    </span>
                  </li>
                </ul>
              </ScrollReveal>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="md:mt-16 mt-10 pt-8 border-t border-gray-700">
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm mb-4 md:mb-0">
                  © 2025 Rira Technologies. All rights reserved. 
                </p>
                <div className="flex md:space-x-10 space-x-[18px]">
                  <Link href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                    Privacy Policy
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                    Terms of Service
                  </Link>
                  <Link href="#" className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-300">
                    Cookie Policy
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </footer>
  )
}
