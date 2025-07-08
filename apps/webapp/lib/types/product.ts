export type Product = {
  id: string
  name: string
  category: string
  description: string
  price: number
  isEscrowProtected: boolean
  image?: string
  isDiscounted?: boolean
  originalPrice?: number
  features?: string[]
  rating?: number
  reviewsCount?: number
}

export type ProductDetailsProps = {
  id: string
  name: string
  category: string
  price: number
  description: string
  features: string[]
  rating: number
  reviewsCount: number
  isEscrowProtected: boolean
  imageUrl?: string
}