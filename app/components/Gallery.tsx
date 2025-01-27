"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { ImageGalleryModal } from "./ImageGalleryModal"

interface GalleryProps {
  images: {
    src: string
    alt: string
  }[]
}

export function Gallery({ images }: GalleryProps) {
  const [isLoading, setIsLoading] = useState(true)
  const [selectedImage, setSelectedImage] = useState<(typeof images)[0] | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {images.map((image, index) => (
          <motion.div
            key={image.src}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative aspect-square overflow-hidden rounded-lg cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            {isLoading && <div className="absolute inset-0 bg-gray-200 dark:bg-gray-800 animate-pulse" />}
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover transition-transform duration-300 hover:scale-110"
              onLoadingComplete={() => setIsLoading(false)}
            />
          </motion.div>
        ))}
      </div>
      {selectedImage && <ImageGalleryModal image={selectedImage} onClose={() => setSelectedImage(null)} />}
    </>
  )
}

