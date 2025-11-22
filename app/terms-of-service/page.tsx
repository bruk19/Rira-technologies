"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Navigation from "@/components/navigation"
import CleanBackground from "@/components/clean-background"

export default function TermsOfServicePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="min-h-screen bg-gray-950 text-white relative overflow-x-hidden">
      <CleanBackground />
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 mb-8 transition-colors"
          >
            <ChevronLeft size={20} />
            Back to Home
          </Link>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Terms of Service</h1>
          <p className="text-gray-400 text-lg">Last updated: November 22, 2024</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          {/* 1. Agreement to Terms */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">1. Agreement to Terms</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              By accessing and using this website and our services, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Rira Technologies ("Company," "we," "us," "our") provides Web3 solutions, blockchain development services,
              decentralized applications, and Web2 solutions to our clients. These Terms of Service ("Terms") govern
              your use of our website, services, and all related content.
            </p>
          </div>

          {/* 2. Use License */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">2. Use License</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on Rira
              Technologies' website for personal, non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Modifying or copying the materials</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Using the materials for any commercial purpose or for any public display</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Attempting to decompile or reverse engineer any software contained on the website</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Removing any copyright or other proprietary notations from the materials</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  Transferring the materials to another person or "mirroring" the materials on any other server
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Performing any unauthorized access to our systems or networks</span>
              </li>
            </ul>
          </div>

          {/* 3. Disclaimer */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">3. Disclaimer</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The materials on Rira Technologies' website are provided on an 'as is' basis. Rira Technologies makes no
              warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without
              limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or
              non-infringement of intellectual property or other violation of rights.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              This disclaimer does not apply to any damages that cannot be excluded or limited under applicable law,
              including but not limited to damages for personal injury or death.
            </p>
            <p className="text-gray-300 leading-relaxed">
              <strong>Blockchain and Smart Contract Risk:</strong> Blockchain transactions and smart contracts involve
              inherent risks. Users acknowledge and accept the risks associated with blockchain technology, including
              potential loss of funds, smart contract vulnerabilities, and network failures.
            </p>
          </div>

          {/* 4. Limitations */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">4. Limitations</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              In no event shall Rira Technologies or its suppliers be liable for any damages (including, without
              limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or
              inability to use the materials on Rira Technologies' website, even if Rira Technologies or an authorized
              representative has been notified orally or in writing of the possibility of such damage.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Because some jurisdictions do not allow limitations on implied warranties, or limitations of liability for
              consequential or incidental damages, these limitations may not apply to you.
            </p>
          </div>

          {/* 5. Accuracy of Materials */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">5. Accuracy of Materials</h2>
            <p className="text-gray-300 leading-relaxed">
              The materials appearing on Rira Technologies' website could include technical, typographical, or
              photographic errors. Rira Technologies does not warrant that any of the materials on our website are
              accurate, complete, or current. Rira Technologies may make changes to the materials contained on our
              website at any time without notice. However, Rira Technologies does not make any commitment to update the
              materials.
            </p>
          </div>

          {/* 6. Materials Link */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">6. Links to Third-Party Websites</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Rira Technologies has not reviewed all of the sites linked to our website and is not responsible for the
              contents of any such linked site. The inclusion of any link does not imply endorsement by Rira
              Technologies of the site. Use of any such linked website is at the user's own risk.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If you decide to leave our website and access third-party content, you do so at your own risk. Rira
              Technologies is not responsible for the accuracy, legality, or content of external sites, including but
              not limited to blockchain explorers, DeFi platforms, or cryptocurrency exchanges.
            </p>
          </div>

          {/* 7. Modifications */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">7. Modifications</h2>
            <p className="text-gray-300 leading-relaxed">
              Rira Technologies may revise these terms of service for our website at any time without notice. By using
              this website, you are agreeing to be bound by the then current version of these terms of service.
            </p>
          </div>

          {/* 8. Governing Law */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">8. Governing Law</h2>
            <p className="text-gray-300 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of Ethiopia, and you
              irrevocably submit to the exclusive jurisdiction of the courts located in Addis Ababa, Ethiopia. If any
              provision of these terms is found to be invalid or unenforceable, the remaining provisions shall continue
              in full force and effect.
            </p>
          </div>

          {/* 9. Intellectual Property Rights */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">9. Intellectual Property Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              All content on our website, including text, graphics, logos, images, audio, video, and software, is the
              property of Rira Technologies or our content suppliers and is protected by international copyright laws.
            </p>
            <p className="text-gray-300 leading-relaxed">
              You may not reproduce, republish, distribute, transmit, modify, or create derivative works from any
              content on our website without express written permission from Rira Technologies. This includes, but is
              not limited to, our smart contract code, blockchain solutions, and technical documentation.
            </p>
          </div>

          {/* 10. User Responsibilities */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">10. User Responsibilities</h2>
            <p className="text-gray-300 leading-relaxed mb-4">When using our services, you agree to:</p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Comply with all applicable laws and regulations</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Not engage in illegal activities or money laundering</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Protect your account credentials and be responsible for all activities under your account</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  Not attempt to gain unauthorized access to our systems or interfere with service functionality
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Not engage in phishing, harassment, or malicious behavior</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Conduct your own due diligence before engaging with blockchain networks or smart contracts</span>
              </li>
            </ul>
          </div>

          {/* 11. Service Availability */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">11. Service Availability</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              While we strive to maintain 99% service availability, we do not guarantee that our services will always be
              available without interruption. Rira Technologies may temporarily suspend or disable access to services
              for maintenance, updates, security reasons, or due to circumstances beyond our control.
            </p>
            <p className="text-gray-300 leading-relaxed">
              We are not liable for any losses or damages resulting from service interruptions, blockchain network
              delays, or technical failures.
            </p>
          </div>

          {/* 12. Limitation of Liability */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">12. Limitation of Liability</h2>
            <p className="text-gray-300 leading-relaxed">
              To the fullest extent permitted by law, in no event shall Rira Technologies be liable for any indirect,
              incidental, special, consequential, or punitive damages resulting from your use of or inability to use our
              services or website, even if advised of the possibility of such damages. Our total liability to you shall
              not exceed the amount paid to us, if any, in the 12 months preceding the incident.
            </p>
          </div>

          {/* 13. Indemnification */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">13. Indemnification</h2>
            <p className="text-gray-300 leading-relaxed">
              You agree to indemnify, defend, and hold harmless Rira Technologies and our officers, directors,
              employees, and agents from any claims, damages, losses, liabilities, and expenses arising from your use of
              our services, your violation of these terms, or your violation of any rights of another party.
            </p>
          </div>

          {/* 14. Termination */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">14. Termination</h2>
            <p className="text-gray-300 leading-relaxed">
              Rira Technologies reserves the right to terminate or suspend your access to our services immediately,
              without notice or liability, for any reason whatsoever, including if you breach these terms of service or
              engage in any conduct that violates applicable laws or infringes on the rights of others.
            </p>
          </div>

          {/* 15. Entire Agreement */}
          <div className="mb-12 pb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">15. Entire Agreement</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              These Terms of Service, together with our Privacy Policy and any other policies or agreements we may have
              with you, constitute the entire agreement between you and Rira Technologies regarding your use of our
              website and services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              If any provision of these terms is found to be void or unenforceable, the remaining provisions shall
              continue in effect, and the void provision shall be modified to the minimum extent necessary to make it
              valid and enforceable.
            </p>
          </div>

          {/* 16. Contact Information */}
          <div className="mb-12 pb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">16. Contact Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us at:
            </p>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-2">
                <strong>Email:</strong> hello@rira-technologies.com
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Phone:</strong> +251 913 020 845 | +251 943 413 849
              </p>
              <p className="text-gray-300">
                <strong>Address:</strong> Addis Ababa, Ethiopia
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <section className="py-12 px-4 border-t border-gray-800 relative z-10">
        <div className="container mx-auto max-w-4xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="text-gray-400 text-sm">
              <p>© 2025 Rira Technologies. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
