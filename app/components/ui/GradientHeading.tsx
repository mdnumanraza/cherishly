"use client"

import { useState } from "react"

interface GradientHeadingProps {
  children: React.ReactNode
  className?: string
}

export function GradientHeading({ children, className = "" }: GradientHeadingProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2
        className={`text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 bg-clip-text text-transparent ${className}`}
      >
        {children}
      </h2>
      <div
        className={`absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 transform origin-left transition-transform duration-300 ${
          isHovered ? "scale-x-100" : "scale-x-0"
        }`}
      />
    </div>
  )
}

