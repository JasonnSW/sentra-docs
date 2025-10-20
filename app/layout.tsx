import type React from "react"
import type { Metadata } from "next"
import { Atkinson_Hyperlegible } from "next/font/google"
import "./globals.css"

const atkinson = Atkinson_Hyperlegible({
  subsets: ["latin"],
  weight: ["400", "700"],
})

export const metadata: Metadata = {
  title: "Sentra - Gateway API Inklusif untuk Perbankan & Dompet Digital",
  description:
    "Platform gateway API B2B yang berfokus pada aksesibilitas finansial bagi pengguna dengan gangguan penglihatan.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="id">
      <body className={`${atkinson.className} bg-white text-foreground`}>{children}</body>
    </html>
  )
}
