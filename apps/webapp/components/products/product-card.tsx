"use client";

import { motion } from "framer-motion";
import { Eye, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Product } from "@/lib/types/product";

interface ProductCardProps {
  product: Product;
  onViewDetails?: (productId: string) => void;
}

export function ProductCard({ product, onViewDetails }: ProductCardProps) {
  const handleViewDetails = () => {
    onViewDetails?.(product.id);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.1 }}
      whileHover={{ y: -4 }}
      className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
    >
      {/* Product Image */}
      <div className="relative h-48 bg-gray-100 flex-shrink-0">
        {product.image ? (
          <img
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#EAEAEA] flex items-center justify-center"></div>
        )}

        {/* Escrow Protected Badge */}
        {product.isEscrowProtected && (
          <div className="absolute top-3 left-3">
            <div className="flex items-center gap-1 bg-blue-600 text-white px-2 py-1 rounded-full text-xs font-medium">
              <Shield className="w-3 h-3" />
              Escrow Protected
            </div>
          </div>
        )}

        {/* Discount Badge */}
        {product.isDiscounted && product.originalPrice && (
          <div className="absolute top-3 right-3">
            <div className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-medium">
              {Math.round(
                ((product.originalPrice - product.price) /
                  product.originalPrice) *
                  100
              )}
              % OFF
            </div>
          </div>
        )}
      </div>

      {/* Product Details - This will grow to fill available space */}
      <div className="p-4 flex flex-col flex-grow">
        {/* Category */}
        <p className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">
          {product.category}
        </p>

        {/* Product Name */}
        <h3 className="font-semibold text-gray-900 mb-2 line-clamp-1">
          {product.name}
        </h3>

        {/* Description - This will take up available space */}
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 leading-relaxed flex-grow">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xl font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </span>
          {product.isDiscounted && product.originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${product.originalPrice.toFixed(2)}
            </span>
          )}
        </div>

        {/* View Details Button - This will always be at the bottom */}
        <Button
          onClick={handleViewDetails}
          className="w-fit bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-[10px] transition-colors duration-200 flex items-center justify-center gap-2 mt-auto"
        >
          <Eye className="w-4 h-4" />
          View Details
        </Button>
      </div>
    </motion.div>
  );
}
