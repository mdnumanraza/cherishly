"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { GradientHeading } from "./components/ui/GradientHeading"
import { GradientButton } from "./components/ui/GradientButton"
import { Gallery } from "./components/Gallery"
import { ImageCarousel } from "./components/ImageCarousel"

const services = [
  { name: "Birthday", image: "/placeholder.svg?height=200&width=300" },
  { name: "Naming Ceremony", image: "/placeholder.svg?height=200&width=300" },
  { name: "Baby Shower", image: "/placeholder.svg?height=200&width=300" },
  { name: "Engagements", image: "/placeholder.svg?height=200&width=300" },
  { name: "Balloons and Flower Decoration", image: "/placeholder.svg?height=200&width=300" },
]

const carouselImages = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0017.jpg-iNaIxofNVZoHPPkqWewpIDerkD7RmN.jpeg",
    alt: "Elegant event setup with golden sofa",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0018.jpg-f920hhjyXsQIfdSDGxF1nfHCgSZLXq.jpeg",
    alt: "Birthday decoration with unicorn theme",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0016.jpg-kxrRs1ThIt6rzKnXF68iNzIvZ1PNSa.jpeg",
    alt: "Naming ceremony setup",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0019.jpg-Rb7FOjzRQcw3O8LS2ntggnXraoUSTU.jpeg",
    alt: "Floral arch decoration",
  },
]

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
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
      </section>

      {/* Image Carousel */}
      <section className="py-12 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <GradientHeading className="text-center mb-8">Our Recent Events</GradientHeading>
          <ImageCarousel images={carouselImages} />
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="md:w-1/2"
            >
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0017.jpg-iNaIxofNVZoHPPkqWewpIDerkD7RmN.jpeg"
                alt="About Cherishly"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:w-1/2"
            >
              <GradientHeading className="mb-6">About Us</GradientHeading>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                At Cherishly, we believe that every moment deserves to be celebrated in the most special way. Whether
                it's a joyful birthday party, a heartfelt naming ceremony, a memorable baby shower, or a grand
                engagement celebration, we are here to make your events truly unforgettable.
              </p>
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Why Choose Us?</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Personalized Services:</span>
                    We tailor every event to match your unique style and preferences.
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Creative Decor:</span>
                    From stunning balloon arrangements to elegant flower decorations, we bring your vision to life.
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Hassle-Free Experience:</span>
                    With our seamless process, you can focus on enjoying your day while we handle the rest.
                  </li>
                  <li className="flex items-start">
                    <span className="font-semibold mr-2">Dedicated Support:</span>
                    We are just a message away! Your event details are sent directly to us via WhatsApp for prompt
                    assistance.
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-6">
          <GradientHeading className="text-center mb-12">Our Popular Services</GradientHeading>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 * index }}
                className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              >
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{service.name}</h3>
                  <GradientButton href={`/services/${service.name.toLowerCase().replace(/ /g, "-")}`}>
                    Learn More
                  </GradientButton>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <GradientHeading className="text-center mb-12">Event Gallery</GradientHeading>
          <Gallery
            images={[
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0017.jpg-iNaIxofNVZoHPPkqWewpIDerkD7RmN.jpeg",
                alt: "Elegant event setup with golden sofa",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0018.jpg-f920hhjyXsQIfdSDGxF1nfHCgSZLXq.jpeg",
                alt: "Birthday decoration with unicorn theme",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0016.jpg-kxrRs1ThIt6rzKnXF68iNzIvZ1PNSa.jpeg",
                alt: "Naming ceremony setup",
              },
              {
                src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/IMG-20250125-WA0019.jpg-Rb7FOjzRQcw3O8LS2ntggnXraoUSTU.jpeg",
                alt: "Floral arch decoration",
              },
            ]}
          />
        </div>
      </section>
    </div>
  )
}

