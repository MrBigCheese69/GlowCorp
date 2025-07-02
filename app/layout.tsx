import './globals.css'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next'

// ✅ Metadata for SEO
export const metadata: Metadata = {
  title: 'Glow Corp',
  description: 'We create digital experiences that shine...',
}

// ✅ Google font
const inter = Inter({ subsets: ['latin'] })

// ✅ Root layout — dark mode by default
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-background text-foreground`}>
        {children}
      </body>
    </html>
  )
}
