"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"

const [mounted, setMounted] = useState(false)
const { theme, setTheme } = useTheme()
  useEffect(() => {
    setMounted(true)
  }, [])

  const logoSrc = mounted && theme === "dark" ? "/logo1.png" : "/logo2.png"


export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
          <Link href="/" className="flex items-center">
            <div className="relative w-40 h-12">
              <Image src={logoSrc} alt="Cherishly.in" fill className="object-contain" priority />
            </div>
          </Link>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Celebrate Your Special Moments with Us</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            >
              Services
            </Link>
            <Link href="/book" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
              Book Your Service
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Cherishly.in. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

