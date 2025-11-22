"use client"

import { useEffect } from "react"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Navigation from "@/components/navigation"
import CleanBackground from "@/components/clean-background"

export default function CookiePolicyPage() {
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

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">Cookie Policy</h1>
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
              Rira Technologies ("we," "us," "our," or "Company") uses cookies and similar tracking technologies on our
              website to enhance your browsing experience, understand how you use our services, and personalize content
              and advertisements.
            </p>
            <p className="text-gray-300 leading-relaxed">
              This Cookie Policy explains what cookies are, the types of cookies we use, how we use them, and your
              options for managing your cookie preferences. By using our website, you consent to our use of cookies in
              accordance with this policy.
            </p>
          </div>

          {/* 2. What Are Cookies */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">2. What Are Cookies?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cookies are small text files that are stored on your device (computer, tablet, or mobile phone) when you
              visit a website. They contain information about your browsing activity and preferences. Each cookie is
              unique to your web browser and contains a string of characters.
            </p>
            <p className="text-gray-300 leading-relaxed">
              When you return to a website, cookies allow the site to recognize your device and recall information about
              your previous visits. Cookies do not contain executable code and cannot directly harm your computer or
              device.
            </p>
          </div>

          {/* 3. Types of Cookies We Use */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">3. Types of Cookies We Use</h2>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">3.1 Essential Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                These cookies are necessary for the proper functioning of our website. They enable basic functions such
                as:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Maintaining your session and authentication</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Remembering your login information</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Processing transactions and payments securely</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Ensuring website security and preventing fraud</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-3 text-sm">
                <strong>Cannot be disabled:</strong> These cookies cannot be disabled without affecting website
                functionality.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">3.2 Performance Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                These cookies help us understand how visitors interact with our website and collect information about
                site performance and usage. They allow us to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Analyze website traffic and user behavior patterns</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Identify technical issues and improve website performance</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Monitor server response times and error rates</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Test new features and optimize user experience</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-3 text-sm">
                <strong>Tools used:</strong> Google Analytics, Hotjar, and similar analytics platforms.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">3.3 Functional Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                These cookies enhance the functionality of our website by remembering your preferences and settings.
                They enable:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Storing your language and regional preferences</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Remembering your browsing history and favorites</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Personalizing content based on your interests</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Preserving form data and user-specific settings</span>
                </li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">3.4 Marketing and Advertising Cookies</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                These cookies are used to display relevant advertisements and track marketing campaign effectiveness.
                They allow us to:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Deliver targeted advertisements based on your interests</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Track the effectiveness of advertising campaigns</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Measure conversion rates and return on investment</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Retarget users who have shown interest in our services</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-3 text-sm">
                <strong>Tools used:</strong> Google Ads, Facebook Pixel, LinkedIn Ads, and other advertising networks.
              </p>
            </div>
          </div>

          {/* 4. Third-Party Cookies */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">4. Third-Party Cookies</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We work with trusted third-party service providers who may set their own cookies on our website. These
              third-party cookies may be used for:
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong>Analytics:</strong> Google Analytics collects data about how users interact with our website
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong>Social Media:</strong> Facebook, Twitter, and LinkedIn may place cookies to track social
                  sharing
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong>Advertising:</strong> Ad networks place cookies to display relevant advertisements
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong>Customer Support:</strong> Chat tools and support platforms may use cookies for communication
                </span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed mt-4">
              We are not responsible for the privacy practices of third-party service providers. We encourage you to
              review their privacy policies and cookie policies.
            </p>
          </div>

          {/* 5. How Long Are Cookies Stored */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">5. How Long Are Cookies Stored?</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Cookies have different expiration periods depending on their purpose:
            </p>
            <div className="space-y-4">
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                <p className="text-gray-300 mb-2">
                  <strong>Session Cookies:</strong> Deleted when you close your browser. Used for temporary information
                  storage.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                <p className="text-gray-300 mb-2">
                  <strong>Persistent Cookies:</strong> Remain on your device until they expire or are manually deleted.
                  Typically expire between 1 month to 2 years depending on the cookie type.
                </p>
              </div>
              <div className="bg-gray-900 border border-gray-800 rounded-lg p-4">
                <p className="text-gray-300">
                  <strong>Analytics Cookies:</strong> Generally stored for 13-26 months to track long-term website
                  performance and user trends.
                </p>
              </div>
            </div>
          </div>

          {/* 6. Your Cookie Choices */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">6. Your Cookie Choices and Control</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              You have several options to control and manage cookies on our website and across the internet:
            </p>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">6.1 Browser Settings</h3>
              <p className="text-gray-300 leading-relaxed mb-3">
                Most web browsers allow you to control cookies through your browser settings. You can typically:
              </p>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>View what cookies have been set on your device</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Delete existing cookies</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Block cookies from specific websites</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>Disable cookies entirely</span>
                </li>
              </ul>
              <p className="text-gray-300 leading-relaxed mt-3 text-sm">
                <strong>Note:</strong> Disabling essential cookies may affect website functionality and your user
                experience.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">6.2 Cookie Consent Banner</h3>
              <p className="text-gray-300 leading-relaxed">
                When you visit our website, we display a cookie consent banner. You can accept all cookies or customize
                your preferences to accept only certain types of cookies. You can update your cookie preferences at any
                time.
              </p>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-400">6.3 Opt-Out Options</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    <strong>Google Analytics:</strong> Download and install the Google Analytics Opt-out Browser Add-on
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    <strong>Advertising:</strong> Visit the Network Advertising Initiative (NAI) or Digital Advertising
                    Alliance (DAA) for opt-out options
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="text-blue-400 mt-1">•</span>
                  <span>
                    <strong>Do Not Track:</strong> Enable the "Do Not Track" feature in your browser
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* 7. Cookie Updates and Changes */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">7. Updates to Cookie Usage</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              We may update our cookie practices and this Cookie Policy to reflect changes in technology, legal
              requirements, or operational needs. We will notify you of any material changes by updating the "Last
              Updated" date and posting the revised policy on our website.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Your continued use of our website following any changes constitutes your acceptance of the updated Cookie
              Policy and any new cookie practices described therein.
            </p>
          </div>

          {/* 8. Privacy and Security */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">8. Privacy and Security</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Information collected through cookies is subject to our Privacy Policy. We implement appropriate security
              measures to protect cookie data from unauthorized access, alteration, or disclosure.
            </p>
            <p className="text-gray-300 leading-relaxed">
              For more information about how we collect, use, and protect your personal information, please refer to our
              Privacy Policy. Cookies do not contain sensitive financial information or passwords, and we never store
              such data in cookies.
            </p>
          </div>

          {/* 9. International Users */}
          <div className="mb-12 pb-12 border-b border-gray-800">
            <h2 className="text-2xl font-bold mb-4 text-white">9. International Compliance</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Our cookie practices comply with international privacy regulations, including:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong>GDPR (EU):</strong> We obtain consent before placing non-essential cookies
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong>CCPA (California):</strong> We respect users' rights to know, delete, and opt-out
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-blue-400 mt-1">•</span>
                <span>
                  <strong>ePrivacy Regulations:</strong> We comply with electronic privacy directives in various
                  countries
                </span>
              </li>
            </ul>
          </div>

          {/* 10. Contact Us */}
          <div className="mb-12 pb-12">
            <h2 className="text-2xl font-bold mb-4 text-white">10. Contact Us</h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              If you have questions, concerns, or requests regarding this Cookie Policy or our cookie practices, please
              contact us at:
            </p>
            <div className="bg-gray-900 border border-gray-800 rounded-lg p-6">
              <p className="text-gray-300 mb-2">
                <strong>Email:</strong> privacy@rira-technologies.com
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
              <Link href="/cookie-policy" className="text-gray-400 hover:text-blue-400 transition-colors text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
