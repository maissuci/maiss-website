import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "MAISS at UCI",
  description: "Management and Information Student Society at the University of California Irvine",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
} 