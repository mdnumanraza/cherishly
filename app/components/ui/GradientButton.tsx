"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

interface GradientButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
}

export function GradientButton({ href, onClick, children, className }: GradientButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const baseStyles = `
    relative inline-flex items-center justify-center px-8 py-3
    bg-gradient-to-r from-purple-600 via-pink-500 to-red-500
    text-white 
    clip-path-polygon
    shadow-[0_10px_20px_rgba(240,_46,_170,_0.3)]
    transition-all duration-300 transform
    hover:-translate-y-1 hover:shadow-[0_15px_25px_rgba(240,_46,_170,_0.4)]
    active:translate-y-0 active:shadow-[0_5px_10px_rgba(240,_46,_170,_0.2)]
    ${isPressed ? "scale-95" : "scale-100"}
  `

  const handlePress = () => {
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 150)
    onClick?.()
  }

  if (href) {
    return (
      <Link href={href} className={cn(baseStyles, className)} onClick={handlePress}>
        {children}
      </Link>
    )
  }

  return (
    <button onClick={handlePress} className={cn(baseStyles, className)}>
      {children}
    </button>
  )
}

