import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
	metadataBase: new URL('https://www.rira-technologies.com'),

	title: {
		default: 'Rira Technologies',
		template: '%s | Rira Technologies',
	},

	description:
		'Rira Technologies is a premier Web3 agency specializing in blockchain, decentralized applications, and digital solutions.',

	icons: {
		icon: '/favicon.ico',
		shortcut: '/favicon-16x16.png',
	},

	alternates: {
		canonical: 'https://www.rira-technologies.com',
	},

	openGraph: {
		type: 'website',
		url: 'https://www.rira-technologies.com',
		siteName: 'Rira Technologies',
		title: 'Rira Technologies',
		description:
			'Rira Technologies is a premier Web3 agency specializing in blockchain, decentralized applications, and digital solutions.',
	},
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang="en">
			<head>
				<style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{
						__html: JSON.stringify([
							{
								"@context": "https://schema.org",
								"@type": "Organization",
								"name": "Rira Technologies",
								"url": "https://www.rira-technologies.com",
								"logo": "https://www.rira-technologies.com/logo-square.png",
								"sameAs": [
									"https://www.linkedin.com/company/rira-technologies"
								]
							},
							{
								"@context": "https://schema.org",
								"@type": "WebSite",
								"name": "Rira Technologies",
								"url": "https://www.rira-technologies.com"
							}
						]),
					}}
				/>
			</head>
			<body>{children}</body>
		</html>
	)
}
