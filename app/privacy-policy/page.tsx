"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Navigation from "@/components/navigation"
import CleanBackground from "@/components/clean-background"

export default function PrivacyPolicyPage() {
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

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Privacy Policy</h1>
          <p className="text-gray-400 text-lg">Last updated: November 22, 2024</p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 px-4 relative z-10">
        <div className="container mx-auto max-w-4xl">
          {/* 1. Introduction */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">1. Introduction</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We are committed to protecting your privacy and ensuring you have a positive experience on our website and
              services. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when
              you visit our website and use our services.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Please read this Privacy Policy carefully. If you do not agree with our policies and practices, please do
              not use our services. Your continued use of our services following the posting of revised Privacy Policy
              means that you accept and agree to the changes.
            </p>
          </div>

          {/* 2. Information We Collect */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">2. Information We Collect</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">2.1 Information You Provide Directly</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    <strong>Contact Information:</strong> Name, email address, phone number, and company details when
                    you reach out to us through forms or inquiries.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    <strong>Communication Data:</strong> Messages, inquiries, feedback, and any other content you
                    provide when communicating with us.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    <strong>Account Information:</strong> Username, password, and profile information if you create an
                    account on our services.
                  </span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">2.2 Information Collected Automatically</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    <strong>Usage Data:</strong> Pages visited, time spent on pages, links clicked, and other
                    interactions with our website.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    <strong>Device Information:</strong> Browser type, IP address, operating system, device type, and
                    device identifiers.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    <strong>Cookies and Tracking:</strong> We use cookies and similar tracking technologies to enhance
                    your experience and analyze website performance.
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* 3. How We Use Your Information */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">3. How We Use Your Information</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>To provide, maintain, and improve our services and website.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>To respond to your inquiries and provide customer support.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  To send you promotional emails, newsletters, and updates about our services (with your consent).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>To analyze usage patterns and improve our website functionality and user experience.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>To detect, prevent, and address fraud, security, and technical issues.</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>To comply with legal obligations and protect the rights of our users.</span>
              </li>
            </ul>
          </div>

          {/* 4. Sharing of Information */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">4. Sharing of Information</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We do not sell, trade, or rent your personal information to third parties. However, we may share your
              information in the following circumstances:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong>Service Providers:</strong> With third-party vendors who provide services on our behalf
                  (hosting, email delivery, analytics).
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong>Legal Requirements:</strong> When required by law or in response to legal requests from
                  authorities.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong>Business Transfer:</strong> In the event of a merger, acquisition, or sale of assets, your
                  information may be transferred as part of that transaction.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong>Consent:</strong> With your explicit consent for purposes you have approved.
                </span>
              </li>
            </ul>
          </div>

          {/* 5. Data Security */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">5. Data Security</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We implement appropriate technical and organizational security measures to protect your personal
              information against unauthorized access, alteration, disclosure, or destruction. This includes:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>SSL encryption for data transmission</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Secure authentication mechanisms</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Regular security audits and updates</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">���</span>
                <span>Access controls and monitoring</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              However, no method of transmission over the Internet is 100% secure. While we strive to protect your
              information, we cannot guarantee absolute security.
            </p>
          </div>

          {/* 6. Your Rights */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">6. Your Rights</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Depending on your location, you may have certain rights regarding your personal information:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong>Right to Access:</strong> You have the right to access the personal information we hold about
                  you.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong>Right to Correction:</strong> You can request that we correct inaccurate or incomplete
                  information.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong>Right to Deletion:</strong> You may request deletion of your personal information, subject to
                  certain exceptions.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong>Right to Opt-Out:</strong> You can opt out of receiving promotional communications from us at
                  any time.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong>Right to Data Portability:</strong> You may request a copy of your personal information in a
                  portable format.
                </span>
              </li>
            </ul>
          </div>

          {/* 7. Cookies and Tracking Technologies */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">7. Cookies and Tracking Technologies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">We use cookies and similar tracking technologies to:</p>
            <ul className="space-y-2 text-gray-300 mb-4">
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Remember your preferences and login information</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Understand how you use our website</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Personalize your experience</span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>Deliver targeted advertisements</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              You can control cookie settings through your browser preferences. Please note that disabling cookies may
              affect some website functionality.
            </p>
          </div>

          {/* 8. Third-Party Links */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">8. Third-Party Links</h2>
            <p className="text-gray-300 leading-relaxed">
              Our website may contain links to third-party websites and services. We are not responsible for the privacy
              practices or content of these external sites. We encourage you to review the privacy policies of any
              third-party sites before providing personal information or engaging with their services.
            </p>
          </div>

          {/* 9. Children's Privacy */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">9. Children's Privacy</h2>
            <p className="text-gray-300 leading-relaxed">
              Our services are not intended for children under the age of 13, and we do not knowingly collect personal
              information from children. If we become aware that we have inadvertently collected information from a
              child under 13, we will take steps to delete such information and terminate the child's account.
            </p>
          </div>

          {/* 10. Changes to This Privacy Policy */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-300 leading-relaxed">
              We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal
              requirements, and other factors. We will notify you of material changes by updating the "Last Updated"
              date and posting the revised policy on our website. Your continued use of our services following the
              posting of changes constitutes your acceptance of those changes.
            </p>
          </div>

          {/* 11. Contact Us */}
          <div className="mb-12 pb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">11. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices,
              please contact us at:
            </p>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-2">
                <strong>Email:</strong> privacy@rira-technologies.com
              </p>
              <p className="text-gray-300 mb-2">
                <strong>Mailing Address:</strong> info@rira-technologies.com
              </p>
              <p className="text-gray-300">
                <strong>Response Time:</strong> We aim to respond to all inquiries within 3 business days.
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
              <p>© 2025 Our Company. All rights reserved.</p>
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
