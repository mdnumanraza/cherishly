"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { GradientButton } from "./ui/GradientButton"

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  useEffect(() => {
    const video = document.getElementById("hero-video") as HTMLVideoElement
    video.addEventListener("loadeddata", () => setIsVideoLoaded(true))
    return () => video.removeEventListener("loadeddata", () => setIsVideoLoaded(true))
  }, [])

  return (
    <div className="relative h-screen">
      {!isVideoLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0018.jpg-f920hhjyXsQIfdSDGxF1nfHCgSZLXq.jpeg)",
          }}
        />
      )}
      <video
        id="hero-video"
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/hero-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative h-full flex items-center justify-center text-center text-white">
        <div className="max-w-4xl mx-auto px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Celebrate Your Special Moments with Cherishly!
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            We make your events unforgettable
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <GradientButton href="/book">Book Your Service</GradientButton>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

