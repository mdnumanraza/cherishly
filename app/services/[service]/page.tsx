"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { GradientHeading } from "@/app/components/ui/GradientHeading"
import { GradientButton } from "@/app/components/ui/GradientButton"
import { Gallery } from "@/app/components/Gallery"
import { ServiceCard } from "@/app/components/ServiceCard"

const serviceDetails = {
  birthday: {
    title: "Birthday Celebrations",
    description: "Make your birthday unforgettable with our custom party planning services.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0018.jpg-f920hhjyXsQIfdSDGxF1nfHCgSZLXq.jpeg",
    packages: [
      {
        title: "Basic Birthday Package",
        description: "Perfect for intimate celebrations",
        originalPrice: 15000,
        salePrice: 12000,
      },
      {
        title: "Premium Birthday Package",
        description: "For grand celebrations with all the extras",
        originalPrice: 25000,
        salePrice: 20000,
      },
    ],
    gallery: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0018.jpg-f920hhjyXsQIfdSDGxF1nfHCgSZLXq.jpeg",
        alt: "Birthday decoration with unicorn theme",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0017.jpg-iNaIxofNVZoHPPkqWewpIDerkD7RmN.jpeg",
        alt: "Elegant event setup",
      },
    ],
  },
  "naming-ceremony": {
    title: "Naming Ceremony",
    description: "Celebrate the newest addition to your family with a beautiful naming ceremony.",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0016.jpg-kxrRs1ThIt6rzKnXF68iNzIvZ1PNSa.jpeg",
    packages: [
      {
        title: "Classic Naming Ceremony Package",
        description: "Traditional ceremony setup with modern touches",
        originalPrice: 20000,
        salePrice: 16000,
      },
      {
        title: "Luxury Naming Ceremony Package",
        description: "Premium decorations and complete event management",
        originalPrice: 35000,
        salePrice: 28000,
      },
    ],
    gallery: [
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0016.jpg-kxrRs1ThIt6rzKnXF68iNzIvZ1PNSa.jpeg",
        alt: "Naming ceremony setup",
      },
      {
        src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0019.jpg-Rb7FOjzRQcw3O8LS2ntggnXraoUSTU.jpeg",
        alt: "Floral decoration",
      },
    ],
  },
  "baby-shower": {
    title: "Baby Shower",
    description: "Welcome your little one with a joyous and memorable baby shower.",
    image: "/placeholder.svg?height=400&width=600",
  },
  engagements: {
    title: "Engagement Parties",
    description: "Start your journey to forever with a magical engagement celebration.",
    image: "/placeholder.svg?height=400&width=600",
  },
  decoration: {
    title: "Balloons and Flower Decoration",
    description: "Transform any space into a festive wonderland with our decoration services.",
    image: "/placeholder.svg?height=400&width=600",
  },
}

export default function ServicePage({ params }: { params: { service: string } }) {
  const [mounted, setMounted] = useState(false)
  const service = serviceDetails[params.service as keyof typeof serviceDetails]

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  if (!service) {
    return <div>Service not found</div>
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <GradientHeading className="text-center mb-8">{service.title}</GradientHeading>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-1/2"
          >
            <img src={service.image || "/placeholder.svg"} alt={service.title} className="rounded-lg shadow-lg" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:w-1/2"
          >
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">{service.description}</p>
            <GradientButton href="/book">Book This Service</GradientButton>
          </motion.div>
        </div>

        <section className="mb-16">
          <GradientHeading className="text-center mb-8">Our Packages</GradientHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.packages?.map((pkg) => (
              <ServiceCard
                key={pkg.title}
                title={pkg.title}
                description={pkg.description}
                image={service.image}
                originalPrice={pkg.originalPrice}
                salePrice={pkg.salePrice}
              />
            ))}
          </div>
        </section>

        <section>
          <GradientHeading className="text-center mb-8">Gallery</GradientHeading>
          <Gallery images={service.gallery} />
        </section>
      </div>
    </div>
  )
}

