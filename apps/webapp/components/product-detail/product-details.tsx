import React from 'react';
import Image from 'next/image';
import { Star, Shield, Truck, RotateCcw } from 'lucide-react';

export type ProductDetailsProps = {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  features: string[];
  rating: number;
  reviewsCount: number;
  isEscrowProtected: boolean;
  imageUrl?: string;
};

interface ProductDetailsComponentProps {
  product: ProductDetailsProps;
  onPurchase?: (productId: string) => void;
}

function StarRating({ rating, reviewsCount }: { rating: number; reviewsCount: number }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(
      <Star 
        key={i}
        className={i <= rating ? "w-4 h-4 fill-yellow-400 text-yellow-400" : "w-4 h-4 text-gray-300"}
      />
    );
  }
  
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">{stars}</div>
      <span className="font-medium">{rating}</span>
      <span className="text-gray-500">({reviewsCount} reviews)</span>
    </div>
  );
}

export function ProductDetails({ product }: ProductDetailsComponentProps) {

  return (
    <div className="max-w-2xl mx-auto p-4 bg-white min-h-screen">
      <div className="flex flex-col h-full">
        <div className="relative mb-6">
          <div className="bg-gray-200 rounded-lg w-full h-96">
            {product.imageUrl ? (
              <Image
                src={product.imageUrl}
                alt={product.name}
                width={800}
                height={600}
                className="w-full h-full object-cover rounded-lg"
                priority
              />
            ) : (
              <div className="w-full h-full bg-gray-200 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-lg">No image</span>
              </div>
            )}
          </div>

          {product.isEscrowProtected && (
            <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1.5 rounded-full text-sm font-medium flex items-center gap-1">
              <Shield className="w-4 h-4" />
              Escrow Protected
            </div>
          )}
        </div>

        <div className="flex-1 flex flex-col">
          <div className="space-y-4 flex-1">
            <span className="inline-block text-gray-600 text-xs font-medium uppercase bg-gray-200 px-2 py-1 rounded">
              {product.category}
            </span>

            <h1 className="text-3xl font-bold text-gray-900">
              {product.name}
            </h1>

            <StarRating rating={product.rating} reviewsCount={product.reviewsCount} />

            <div className="py-1">
              <span className="text-3xl font-bold">${product.price}</span>
            </div>

            <p className="text-gray-600">{product.description}</p>

            <div className="space-y-3">
              <h3 className="font-semibold">Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2"></span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex items-center gap-8 pt-6 mt-6">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Truck className="w-4 h-4" />
              Free shipping
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <RotateCcw className="w-4 h-4" />
              30-day returns
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}