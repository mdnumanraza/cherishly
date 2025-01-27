import { Inter } from "next/font/google"
import "./globals.css"
import Header from "./components/Header"
import Footer from "./components/Footer"
import { ThemeProvider } from "./components/ThemeProvider"
import { StickyMenu } from "./components/StickyMenu"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Cherishly.in - Celebrate Your Special Moments",
  description:
    "Event management services for birthdays, naming ceremonies, baby showers, engagements, and decorations in Bangalore.",
  keywords: "event management, birthday party, naming ceremony, baby shower, engagement, decoration, Bangalore",
  openGraph: {
    title: "Cherishly.in - Celebrate Your Special Moments",
    description:
      "Event management services for birthdays, naming ceremonies, baby showers, engagements, and decorations in Bangalore.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0018.jpg-f920hhjyXsQIfdSDGxF1nfHCgSZLXq.jpeg",
        width: 1200,
        height: 630,
        alt: "Cherishly Events",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cherishly.in - Celebrate Your Special Moments",
    description:
      "Event management services for birthdays, naming ceremonies, baby showers, engagements, and decorations in Bangalore.",
    images: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0018.jpg-f920hhjyXsQIfdSDGxF1nfHCgSZLXq.jpeg",
    ],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
          <StickyMenu />
        </ThemeProvider>
      </body>
    </html>
  )
}

