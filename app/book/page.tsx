"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

const services = ["Birthday", "Naming Ceremony", "Baby Shower", "Engagements", "Balloons and Flower Decoration"]

export default function BookingPage() {
  const [mounted, setMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  })

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const whatsappMessage = encodeURIComponent(
      `New Booking Request:\nName: ${formData.name}\nPhone: ${formData.phone}\nService: ${formData.service}\nMessage: ${formData.message}`,
    )
    const whatsappUrl = `https://wa.me/919964974885?text=${whatsappMessage}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container mx-auto px-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-center text-gray-800 dark:text-white mb-8"
        >
          Book Your Service
        </motion.h1>
        <motion.form
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          onSubmit={handleSubmit}
          className="max-w-lg mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8"
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 border rounded-lg focus:outline-none focus:border-purple-500 dark:bg-gray-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 border rounded-lg focus:outline-none focus:border-purple-500 dark:bg-gray-700"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="service" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Type of Service
            </label>
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 border rounded-lg focus:outline-none focus:border-purple-500 dark:bg-gray-700"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service} value={service}>
                  {service}
                </option>
              ))}
            </select>
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 font-bold mb-2">
              Short Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={4}
              className="w-full px-3 py-2 text-gray-700 dark:text-gray-300 border rounded-lg focus:outline-none focus:border-purple-500 dark:bg-gray-700"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-purple-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-purple-700 transition duration-300"
          >
            Submit Booking Request
          </button>
        </motion.form>
      </div>
    </div>
  )
}

