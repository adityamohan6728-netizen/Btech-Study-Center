import type React from "react"
import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar" // Import Navbar
import Footer from "@/components/footer" // Import Footer
import { ThemeProvider } from "@/components/theme-provider" // Assuming you have this
import { Toaster } from "@/components/ui/toaster" // Assuming you have this for toasts

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Btech Study Center",
  description: "Your centralized hub for B.Tech academic resources.",
  generator: "Aditya Mohan",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/favicon.ico", sizes: "16x16", type: "image/x-icon" },
      { url: "/favicon.ico", sizes: "32x32", type: "image/x-icon" },
    ],
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
}

// Add viewport metadata for theme color
export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
        <style>{`
          html {
            font-family: ${inter.style.fontFamily};
            --font-sans: ${inter.variable};
          }
        `}</style>
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar /> {/* Add Navbar here */}
          <main className="flex-grow">
            {" "}
            {/* Use flex-grow to push footer to bottom */}
            {children}
          </main>
          <Footer /> {/* Add Footer here */}
          <Toaster /> {/* Assuming you have a Toaster component */}
        </ThemeProvider>
      </body>
    </html>
  )
}
