"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import {
	Mail,
	Phone,
	MapPin,
	Send,
	Clock,
	Globe,
	Twitter,
	Linkedin,
	Github,
	ChevronDown,
	ChevronUp,
} from "lucide-react"
import Navigation from "@/components/navigation"
import CleanBackground from "@/components/clean-background"
import ScrollReveal from "@/components/scroll-reveal"
import ScaleOnScroll from "@/components/scale-on-scroll"
import EnhancedFooter from "@/components/enhanced-footer"

export default function ContactPage() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		phone: "",
		company: "",
		message: "",
	})

	const [openFaq, setOpenFaq] = useState<number | null>(null)
	const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
	const [responseMessage, setResponseMessage] = useState("")

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setStatus("loading");
		setResponseMessage("");

		try {
			const res = await fetch("/api/send-email", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(formData),
			});

			let data;
			try {
				data = await res.json();
			} catch {
				throw new Error("Server did not return JSON");
			}

			if (res.ok && data.success) {
				setStatus("success");
				setResponseMessage(
					"✅ Thank you for reaching out! Our team is reviewing your request and will respond soon."
				);
				setFormData({ name: "", email: "", phone: "", company: "", message: "" });

				// ⏳ hide success message after 20s
				setTimeout(() => {
					setResponseMessage("");
					setStatus("idle");
				}, 20000);
			} else {
				setStatus("error");
				setResponseMessage("❌ Failed: " + (data?.message || "Unknown error"));
			}
		} catch (err: any) {
			console.error("Fetch error:", err);
			setStatus("error");
			setResponseMessage("⚠️ " + err.message);
		}
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		})
	}

	const toggleFaq = (index: number) => {
		setOpenFaq(openFaq === index ? null : index)
	}

	const contactInfo = [
		{
			icon: <Mail className="w-6 h-6" />,
			title: "Email Us",
			details: "hello@riratechnologies.com",
			description: "Send us an email anytime",
		},
		{
			icon: <Phone className="w-6 h-6" />,
			title: "Call Us",
			details: "+251 913 020 845",
			description: "Mon-Fri from 8am to 5pm",
		},
		{
			icon: <MapPin className="w-6 h-6" />,
			title: "Visit Us",
			details: "Addis Ababa, Ethiopia",
			description: "Come say hello at our office",
		},
		{
			icon: <Clock className="w-6 h-6" />,
			title: "Working Hours",
			details: "Mon - Fri: 8AM - 5PM",
			description: "Saturday: 9AM - 2PM",
		},
	]

	const socialLinks = [
		{ icon: <Twitter className="w-5 h-5" />, name: "Twitter", href: "#" },
		{ icon: <Linkedin className="w-5 h-5" />, name: "LinkedIn", href: "#" },
		{ icon: <Github className="w-5 h-5" />, name: "GitHub", href: "#" },
		{ icon: <Globe className="w-5 h-5" />, name: "Website", href: "#" },
	]

	const faqs = [
		{
			question: "How long does a typical Web3 project take?",
			answer:
				"Project timelines vary based on complexity, but most projects range from 8-16 weeks for full development and deployment. Simple smart contracts may take 2-4 weeks, while complex DeFi platforms or NFT marketplaces can take 12-20 weeks.",
		},
		{
			question: "Do you provide ongoing support after launch?",
			answer:
				"Yes, we offer comprehensive post-launch support including maintenance, updates, security monitoring, and technical assistance. We provide different support packages ranging from basic maintenance to full ongoing development support.",
		},
		{
			question: "What blockchain networks do you work with?",
			answer:
				"We work with Ethereum, Polygon, Binance Smart Chain, Solana, and other major blockchain networks. We help you choose the best network based on your project requirements, budget, and target audience.",
		},
		{
			question: "Can you help migrate existing applications to Web3?",
			answer:
				"We specialize in helping businesses transition from Web2 to Web3 with minimal disruption to existing operations. We assess your current system and create a migration strategy that preserves your data and user experience.",
		},
		{
			question: "What Web2 services do you offer?",
			answer:
				"We provide comprehensive Web2 development including responsive web applications, mobile apps (iOS/Android), management systems, e-commerce platforms, payment integrations, and cloud infrastructure setup.",
		},
		{
			question: "Do you work with startups or only established companies?",
			answer:
				"We work with businesses of all sizes, from early-stage startups to established enterprises. We offer flexible engagement models and can adapt our services to match your budget and timeline requirements.",
		},
	]

	return (
		<div className="min-h-screen bg-gray-950 text-white relative overflow-hidden">
			<CleanBackground />
			<Navigation />

			{/* Hero Section */}
			<section className="pt-32 md:pb-16 pb-0 px-4 relative z-10">
				<div className="container mx-auto max-w-6xl text-center">
					<ScrollReveal>
						<h1 className="text-2xl md:text-5xl font-bold mb-6 text-white">Let's Build the Future Together</h1>
						<p className="md:text-xl text-[15px] text-gray-300 max-w-3xl mx-auto mb-6">
							Ready to start your Web3 journey? We're here to help you transform your ideas into revolutionary
							blockchain solutions.
						</p>
					</ScrollReveal>
				</div>
			</section>

			{/* Contact Form & Info */}
			<section className="py-10 px-4 relative z-10">
				<div className="container mx-auto max-w-6xl">
					<div className="grid lg:grid-cols-2 gap-12">
						{/* Contact Form */}
						<Card className="bg-gray-900/50 border-gray-700">
							<CardContent className="py-8 md:px-8 px-4">
								<h2 className="md:text-3xl text-lg font-bold mb-6 text-white">Start Your Project</h2>
								<p className="text-gray-300 mb-8 md:text-[16px] text-sm">
									Tell us about your project and we'll get back to you within 24 hours.
								</p>

								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid md:grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
											<Input
												name="name"
												value={formData.name}
												onChange={handleChange}
												className="bg-gray-800 border-gray-600 text-white focus:border-cyan-500"
												placeholder="John Doe"
												required
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
											<Input
												name="email"
												type="email"
												value={formData.email}
												onChange={handleChange}
												className="bg-gray-800 border-gray-600 text-white focus:border-cyan-500"
												placeholder="john@example.com"
												required
											/>
										</div>
									</div>

									<div className="grid md:grid-cols-2 gap-4">
										<div>
											<label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
											<Input
												name="phone"
												type="tel"
												value={formData.phone}
												onChange={handleChange}
												className="bg-gray-800 border-gray-600 text-white focus:border-cyan-500"
												placeholder="+251 912 020 845"
											/>
										</div>
										<div>
											<label className="block text-sm font-medium text-gray-300 mb-2">Company</label>
											<Input
												name="company"
												value={formData.company}
												onChange={handleChange}
												className="bg-gray-800 border-gray-600 text-white focus:border-cyan-500"
												placeholder="Your Company"
											/>
										</div>
									</div>

									<div>
										<label className="block text-sm font-medium text-gray-300 mb-2">Project Details *</label>
										<Textarea
											name="message"
											value={formData.message}
											onChange={handleChange}
											className="bg-gray-800 border-gray-600 text-white focus:border-cyan-500 min-h-[120px]"
											placeholder="Tell us about your project, goals, and any specific requirements..."
											required
										/>
									</div>

									<Button
										type="submit"
										disabled={status === "loading"}
										className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 md:text-lg text-[16px] font-semibold rounded-full transition-all duration-300 hover:scale-105"
									>
										{status === "loading" ? "Sending..." : "Send Message"}
										<Send className="ml-2 w-5 h-5" />
									</Button>

									{responseMessage && (
										<p
											className={`mt-4 text-center font-medium ${status === "success" ? "text-green-400" : "text-red-400"
												}`}
										>
											{responseMessage}
										</p>
									)}
								</form>
							</CardContent>
						</Card>

						{/* Contact Information */}
						<div className="space-y-8">
							<div>
								<h2 className="md:text-3xl text-lg font-bold md:mb-6 mb-2 text-white">Get In Touch</h2>
								<p className="text-gray-300 mb-8 md:text-[16px] text-sm">
									We're here to help you navigate the Web3 landscape and bring your blockchain vision to life.
								</p>
							</div>

							<div className="grid gap-6">
								{contactInfo.map((info, index) => (
									<Card
										key={index}
										className="bg-gray-900/50 border-gray-700 hover:border-cyan-500 transition-all duration-300 group"
									>
										<CardContent className="md:p-6 p-3">
											<div className="flex items-start space-x-4">
												<div className="md:w-12 md:h-12 w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
													{info.icon}
												</div>
												<div>
													<h3 className="font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
														{info.title}
													</h3>
													<p className="text-cyan-400 font-semibold mb-1 md:text-16 text-sm">{info.details}</p>
													<p className="text-gray-400 text-sm">{info.description}</p>
												</div>
											</div>
										</CardContent>
									</Card>
								))}
							</div>

							{/* Social Links */}
							<div>
								<h3 className="md:text-xl text-lg font-bold mb-4 text-white">Follow Us</h3>
								<div className="flex space-x-4">
									{socialLinks.map((social, index) => (
										<a
											key={index}
											href={social.href}
											className="w-12 h-12 bg-gray-800 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-purple-600 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 hover:scale-110"
										>
											{social.icon}
										</a>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* FAQ Section */}
			<section className="md:py-20 py-10 px-4 relative z-10">
				<div className="container mx-auto max-w-5xl">
					<ScaleOnScroll>
						<div className="text-center md:mb-16 mb-6">
							<h2 className="md:text-4xl text-2xl font-bold mb-6 text-white">Frequently Asked Questions</h2>
							<p className="md:text-lg text-[15px] text-gray-400 max-w-2xl mx-auto">
								Find answers to common questions about our services and development process
							</p>
						</div>
					</ScaleOnScroll>

					<div className="space-y-4">
						{faqs.map((faq, index) => (
							<ScrollReveal key={index} delay={index * 0.1}>
								<Card className="bg-gray-900/50 border-gray-700 hover:border-cyan-500 transition-all duration-300">
									<CardContent className="p-0">
										<button
											onClick={() => toggleFaq(index)}
											className="w-full px-6 md:py-6 py-2 text-left flex items-center justify-between hover:bg-gray-800/30 transition-colors duration-300"
										>
											<h3 className="font-bold text-gray-200 md:text-lg text-sm pr-4">{faq.question}</h3>
											<div className="flex-shrink-0">
												{openFaq === index ? (
													<ChevronUp className="w-5 h-5 text-cyan-400" />
												) : (
													<ChevronDown className="w-5 h-5 text-gray-400" />
												)}
											</div>
										</button>

										<div
											className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
												}`}
										>
											<div className="md:px-6 px-3 md:pb-6 pb-3">
												<div className="border-t border-gray-700 pt-4">
													<p className="text-gray-300 leading-relaxed text-sm">{faq.answer}</p>
												</div>
											</div>
										</div>
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
