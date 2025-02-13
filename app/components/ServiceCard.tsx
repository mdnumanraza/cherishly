import  GradientButton  from "./ui/GradientButton"

interface ServiceCardProps {
  title: string
  description: string
  image: string
  originalPrice: number
  salePrice: number
}

export function ServiceCard({ title, description, image, originalPrice, salePrice }: ServiceCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
      <div className="relative h-48">
        <img src={image || "/placeholder.svg"} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{description}</p>
        <div className="flex items-center gap-2 mb-4">
          <span className="text-lg font-bold text-gray-900 dark:text-white">₹{salePrice}</span>
          <span className="text-sm text-gray-500 line-through">₹{originalPrice}</span>
          <span className="text-sm text-green-500">
            {Math.round(((originalPrice - salePrice) / originalPrice) * 100)}% OFF
          </span>
        </div>
        <GradientButton href="/book">Book Now</GradientButton>
      </div>
    </div>
  )
}

