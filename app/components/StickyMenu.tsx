"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle, ArrowUp, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

export function StickyMenu() {
  const [isOpen, setIsOpen] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCall = () => {
    window.location.href = "tel:+919964974885"
  }

  const handleWhatsApp = () => {
    window.open("https://wa.me/919964974885", "_blank")
  }

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          exit={{ x: -100 }}
          className="fixed bottom-4 left-4 z-50 flex flex-col gap-2"
        >
          <button
            onClick={handleWhatsApp}
            className="p-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition-colors"
          >
            <MessageCircle className="w-6 h-6" />
          </button>
          <button
            onClick={handleCall}
            className="p-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition-colors"
          >
            <Phone className="w-6 h-6" />
          </button>
          {showScrollTop && (
            <button
              onClick={handleScrollTop}
              className="p-3 bg-gray-500 text-white rounded-full shadow-lg hover:bg-gray-600 transition-colors"
            >
              <ArrowUp className="w-6 h-6" />
            </button>
          )}
          <button
            onClick={() => setIsOpen(false)}
            className="p-3 bg-red-500 text-white rounded-full shadow-lg hover:bg-red-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

