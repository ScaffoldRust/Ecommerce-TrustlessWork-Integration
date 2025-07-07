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
  }
  