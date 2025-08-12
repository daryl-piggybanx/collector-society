import type React from "react"
import type { Metadata } from "next"
import { Cormorant_Garamond } from "next/font/google"
import "~/styles/globals.css"
import { cn } from "~/lib/utils"

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant-garamond",
})

export const metadata: Metadata = {
  title: "PiggyBanx",
  description: "Collector Society",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn("min-h-screen bg-[#111111] font-sans text-white antialiased", cormorantGaramond.variable)}>
        {children}

        <footer className="absolute bottom-0 left-0 p-8 text-sm text-white/50">
          <p>PIGGYBANK ©2025</p>
        </footer>
      </body>
    </html>
  )
}
