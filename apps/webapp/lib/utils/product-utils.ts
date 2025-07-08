import { ProductDetailsProps } from "@/components/product-detail/product-details";

interface MockProduct {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  features?: string[];
  rating?: number;
  reviewsCount?: number;
  isEscrowProtected: boolean;
  image?: string;
}

export function transformProductForDetails(product: MockProduct): ProductDetailsProps {
  return {
    id: product.id,
    name: product.name,
    category: product.category,
    price: product.price,
    description: product.description,
    features: product.features || [
      "Premium materials",
      "Professional grade", 
      "Warranty included",
      "Customer support",
    ],
    rating: product.rating || 4.5,
    reviewsCount: product.reviewsCount || 100,
    isEscrowProtected: product.isEscrowProtected,
    imageUrl: product.image,
  };
}