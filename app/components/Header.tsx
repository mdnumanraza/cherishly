"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"

const services = [
  { name: "Birthday", href: "/services/birthday" },
  { name: "Naming Ceremony", href: "/services/naming-ceremony" },
  { name: "Baby Shower", href: "/services/baby-shower" },
  { name: "Engagements", href: "/services/engagements" },
  { name: "Balloons and Flower Decoration", href: "/services/decoration" },
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <header className="bg-white dark:bg-gray-800 shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="relative w-40 h-12">
              <Image src="/logo.png" alt="Cherishly.in" fill className="object-contain" priority />
            </div>
          </Link>
          <div className="hidden md:flex space-x-4">
            <Link href="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
                Services
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Contact
            </Link>
            <Link href="/book" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Book Your Service
            </Link>
          </div>
          <div className="flex items-center">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 dark:focus:ring-gray-400"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-4 md:hidden focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 dark:focus:ring-gray-400"
            >
              <svg className="h-6 w-6 fill-current text-gray-700 dark:text-gray-300" viewBox="0 0 24 24">
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
        {isOpen && (
          <div className="mt-4 md:hidden">
            <Link
              href="/"
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Home
            </Link>
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              >
                {service.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Contact
            </Link>
            <Link
              href="/book"
              className="block py-2 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
            >
              Book Your Service
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}

