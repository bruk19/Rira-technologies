import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: "Rira Technologies",
  description:
    "Rira Technologies is a premier Web3 agency specializing in blockchain, decentralized applications, and digital solutions.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Rira Technologies",
              url: "https://rira-technologies.com",
              logo: "https://rira-technologies.com/logo.png",
              sameAs: [
                "https://www.linkedin.com/company/rira-technologies",
                "https://x.com/rira_tech"
              ]
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
