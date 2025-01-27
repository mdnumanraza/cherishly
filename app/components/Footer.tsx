import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <h3 className="text-xl font-bold text-gray-800 dark:text-white">Cherishly.in</h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Celebrate Your Special Moments with Us</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end space-x-4">
            <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
              Home
            </Link>
            <Link
              href="/services"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white"
            >
              Services
            </Link>
            <Link href="/book" className="text-gray-600 dark:text-gray-400 hover:text-gray-800 dark:hover:text-white">
              Book Your Service
            </Link>
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          © {new Date().getFullYear()} Cherishly.in. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

