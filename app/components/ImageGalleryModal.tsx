"use client"

import { useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X } from "lucide-react"

interface ImageGalleryModalProps {
  image: {
    src: string
    alt: string
  }
  onClose: () => void
}

export function ImageGalleryModal({ image, onClose }: ImageGalleryModalProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [onClose])

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/80"
        onClick={onClose}
      >
        <div className="relative max-w-7xl mx-auto px-4">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/10 rounded-full text-white hover:bg-white/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <motion.img
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            src={image.src}
            alt={image.alt}
            className="max-h-[90vh] w-auto object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      </motion.div>
    </AnimatePresence>
  )
}

