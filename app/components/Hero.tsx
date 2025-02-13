"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"
import GradientButton from "./ui/GradientButton"

export function Hero() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const handleLoadedData = () => setIsVideoLoaded(true)

    if (videoRef.current) {
      videoRef.current.addEventListener("loadeddata", handleLoadedData)
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("loadeddata", handleLoadedData)
      }
    }
  }, [])

  return (
    <div className="relative h-screen">
      {/* Show placeholder image while video is loading */}
      {!isVideoLoaded && (
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url(/hero-img.png)",
          }}
        />
      )}

      {/* Video Background */}
      <video
        ref={videoRef}
        id="hero-video"
        autoPlay
        loop
        muted
        playsInline
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
          isVideoLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src="/hero-vid.mp4" type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50" />

      {/* Hero Content */}
      <div className="relative h-full flex items-end justify-center text-center py-24 text-white">
        <div className="max-w-4xl mx-auto  px-6">

            <GradientButton href="/book">Book Your Service</GradientButton>
          
        </div>
      </div>
    </div>
  )
}
