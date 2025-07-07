"use client";

import { useState, useMemo } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ProductCard } from "./product-card";
import type { Product } from "@/lib/types/product";
import { mockProducts } from "@/lib/data/mock-products";

interface ProductsGridProps {
  products?: Product[];
  onProductSelect?: (productId: string) => void;
}

export function ProductsGrid({
  products = mockProducts,
  onProductSelect,
}: ProductsGridProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Filter products based on search query
  const filteredProducts = useMemo(() => {
    if (!searchQuery.trim()) return products;

    const query = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query)
    );
  }, [products, searchQuery]);

  const handleProductSelect = (productId: string) => {
    onProductSelect?.(productId);
    console.log("Selected product:", productId);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8 bg-[#F9FAFB]">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">Products</h1>

        {/* Search and Filter Bar */}
        <div className="flex flex-row gap-4 items-stretch sm:items-center">
          {/* Search Input */}
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Filter Button */}
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors duration-200"
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filter
          </Button>
        </div>

        {/* Search Results Info */}
        {searchQuery && (
          <div className="mt-4 text-sm text-gray-600">
            {filteredProducts.length > 0 ? (
              <>
                Showing {filteredProducts.length} result
                {filteredProducts.length !== 1 ? "s" : ""} for "{searchQuery}"
              </>
            ) : (
              <>No products found for "{searchQuery}"</>
            )}
          </div>
        )}
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onViewDetails={handleProductSelect}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Search className="w-12 h-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            No products found
          </h3>
          <p className="text-gray-600">
            {searchQuery
              ? "Try adjusting your search terms or browse all products."
              : "No products are currently available."}
          </p>
          {searchQuery && (
            <Button
              variant="outline"
              onClick={() => setSearchQuery("")}
              className="mt-4"
            >
              Clear search
            </Button>
          )}
        </div>
      )}
    </div>
  );
}
