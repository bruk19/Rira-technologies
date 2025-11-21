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
import type { Metadata } from "next"
import LiquidButton from "@/components/liquid-button"

export const metadata: Metadata = {
  title: "About Us - Rira Technologies",
  description: "Learn more about Rira Technologies, Ethiopia's pioneering Web3 agency.",
}

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
							We are a Web3 agency that also works with Web2, dedicated to bridging the gap between Web2 business and the decentralized future through innovative blockchain solutions.
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
								<p className="md:text-[16px] text-sm text-gray-400 mb-6 leading-relaxed">
									Founded with a vision to transform Ethiopia's digital landscape, Rira Technologies emerged as a
									pioneer in the Web3 space. We recognized the immense potential of blockchain technology to solve
									real-world problems and create meaningful impact in our communities.
								</p>
								<p className="md:text-[16px] text-sm text-gray-400 mb-6 leading-relaxed">
									Starting with a small team of passionate developers and blockchain enthusiasts, we've grown into
									Ethiopia's leading Web3 agency, serving clients across agriculture, finance, and government sectors.
								</p>
								<p className="md:text-[16px] text-sm text-gray-400 mb-8 leading-relaxed">
									Our journey is driven by the belief that technology should serve humanity, and blockchain represents
									the next evolution in creating transparent, secure, and accessible digital solutions.
								</p>
								<Link href="/contact">
									<LiquidButton>Join Our Journey</LiquidButton>
								</Link>
							</div>
						</ScaleOnScroll>
						<ScrollReveal delay={0.2}>
							<div className="">
								<img
									src="/entt.png"
									alt="Our Team"
									className="w-full h-full object-cover"
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
								description: "Successfully delivered 15+ projects with measurable impact across various industries.",
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
								description: "Became Ethiopia's leading Web3 agency with 15+ successful projects",
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
  { number: "15+", label: "Projects Delivered", icon: "🚀" },

  // Changed from farmers → tech empowerment
  { number: "1000+", label: "Users Empowered", icon: "🛰️" }, // or "💻", "🤖", "🛰️"

  // Changed financing → crypto amount
  { number: "12M+ USDT", label: "Crypto Value Secured", icon: "🪙" }, // or "💎", "🔗", "📡"

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
									discord: "https://discord.com/invite/VrfJrT7vuF",
									whatsapp: "https://wa.me/+251943413849",
									telegram: "https://t.me/Addis07",
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
									discord: "https://discord.com/invite/VrfJrT7vuF",
									whatsapp: "https://wa.me/+251913020845",
									telegram: "https://t.me/brukTesh",
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
											className="md:h-80 h-60 object-fit group-hover:scale-105 transition-transform duration-500"
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
													{/* LinkedIn */}
													<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
														<path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V24h-4V8zM8.5 8h3.8v2.3h.1c.53-1 1.84-2.3 3.8-2.3 4.06 0 4.8 2.67 4.8 6.1V24h-4v-7.7c0-1.84-.03-4.2-2.56-4.2-2.56 0-2.95 2-2.95 4.07V24h-4V8z" />
													</svg>
												</a>
											)}

											{member.socials?.discord && (
												<a
													href={member.socials.discord}
													target="_blank"
													rel="noopener noreferrer"
													className="text-gray-400 hover:text-indigo-400 transition-colors"
												>
													{/* Discord */}
													<svg
														xmlns="http://www.w3.org/2000/svg"
														className="w-6 h-6"
														fill="currentColor"
														viewBox="0 0 24 24"
													>
														<path d="M20.317 4.369A19.791 19.791 0 0 0 16.885 3c-.396.719-.833 1.69-1.146 2.465-1.063-.159-2.142-.236-3.222-.236-1.08 0-2.159.08-3.222.236-.313-.775-.75-1.746-1.146-2.465a19.79 19.79 0 0 0-3.432 1.369C3.804 9.049 3.065 13.58 3.293 18.063a19.9 19.9 0 0 0 5.89 2.893c.477-.647.901-1.335 1.262-2.058a12.74 12.74 0 0 1-1.978-.949c.166-.121.328-.246.484-.374 3.806 1.791 8.38 1.791 12.186 0 .158.129.32.253.484.374-.629.388-1.293.703-1.978.949.361.723.785 1.411 1.262 2.058a19.9 19.9 0 0 0 5.89-2.893c.273-4.773-.465-9.304-2.146-13.694zM9.5 14.5c-.828 0-1.5-.9-1.5-2s.672-2 1.5-2 1.5.9 1.5 2-.672 2-1.5 2zm5 0c-.828 0-1.5-.9-1.5-2s.672-2 1.5-2 1.5.9 1.5 2-.672 2-1.5 2z" />
													</svg>
												</a>
											)}

											{member.socials?.whatsapp && (
												<a
													href={member.socials.whatsapp}
													target="_blank"
													rel="noopener noreferrer"
													className="text-gray-400 hover:text-green-500 transition-colors"
												>
													{/* WhatsApp */}
													<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
														<path d="M.057 24l1.687-6.163a11.933 11.933 0 0 1-1.62-6.01C.122 5.373 5.495 0 12.057 0c3.2 0 6.209 1.248 8.477 3.514A11.94 11.94 0 0 1 24 12.01c0 6.627-5.373 12-11.943 12-2.09 0-4.134-.522-5.967-1.507L.057 24zM6.49 20.42c1.676.995 3.276 1.57 5.57 1.57 5.448 0 9.887-4.435 9.887-9.987 0-2.671-1.04-5.182-2.928-7.07A9.88 9.88 0 0 0 12.057 2.12c-5.448 0-9.887 4.435-9.887 9.987 0 2.281.72 3.844 1.916 5.48l-.996 3.64 3.4-.807zM17.285 14.7c-.297-.149-1.757-.867-2.03-.967-.273-.1-.472-.149-.67.15-.197.297-.767.966-.94 1.164-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.447-.52.15-.174.2-.298.298-.497.099-.198.05-.373-.025-.522-.075-.149-.67-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.571-.01-.198 0-.52.074-.793.372-.273.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.757-.718 2.006-1.41.248-.694.248-1.289.173-1.411-.074-.123-.272-.198-.57-.347z" />
													</svg>
												</a>
											)}

											{member.socials?.telegram && (
												<a
													href={member.socials.telegram}
													target="_blank"
													rel="noopener noreferrer"
													className="text-gray-400 hover:text-sky-400 transition-colors"
												>
													{/* Telegram */}
													<svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
														<path d="M9.999 15.2l-.399 5.6c.571 0 .817-.239 1.116-.524l2.68-2.478 5.555 4.103c1.018.562 1.74.267 1.998-.94l3.621-16.943h.001c.321-1.496-.541-2.081-1.524-1.721L1.207 9.508c-1.452.567-1.431 1.384-.247 1.749l5.574 1.74L18.822 6.03c.531-.326 1.014-.146.617.208" />
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
									<LiquidButton>Start Your Project</LiquidButton>
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
