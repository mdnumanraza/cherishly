"use client"

import { useState } from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import type React from "react"

interface GradientButtonProps {
  href?: string
  onClick?: () => void
  children: React.ReactNode
  className?: string
  icon?: React.ReactNode
  variant?: "default" | "outline"
}

function GradientButton({ href, onClick, children, className, icon, variant = "default" }: GradientButtonProps) {
  const [isPressed, setIsPressed] = useState(false)

  const baseStyles = cn(
    "relative inline-flex items-center justify-center px-8 py-3 text-sm font-medium transition-all duration-300 transform",
    "rounded-full shadow-lg", // Fully rounded shape with shadow
    variant === "default"
      ? "text-white bg-gradient-to-r from-blue-600 to-teal-400 hover:from-blue-700 hover:to-teal-500"
      : "border-2 border-transparent bg-gradient-to-r from-blue-600 to-teal-400 hover:from-blue-700 hover:to-teal-500",
    isPressed ? "scale-95" : "scale-100",
    "hover:shadow-[0_0_15px_rgba(45,212,191,0.8)]", // Glow effect on hover
    className,
  )

  const contentStyles = cn(
    "flex items-center gap-2 rounded-lg",
    variant === "outline" && "bg-white dark:bg-gray-900 p-[2px] rounded-lg",
  )

  const handlePress = () => {
    setIsPressed(true)
    setTimeout(() => setIsPressed(false), 150)
    onClick?.()
  }

  const content = (
    <span className={contentStyles}>
      {icon}
      {children}
    </span>
  )

  if (href) {
    return (
      <Link href={href} className={baseStyles} onClick={handlePress}>
        {content}
      </Link>
    )
  }

  return (
    <button onClick={handlePress} className={baseStyles}>
      {content}
    </button>
  )
}

export default GradientButton;
