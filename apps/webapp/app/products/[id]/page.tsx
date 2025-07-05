"use client";

import { use } from "react";
import { ProductDetails } from "@/components/product-detail/product-details";
import { mockProducts } from "@/lib/data/mock-products";
import { transformProductForDetails } from "@/lib/utils/product-utils";
import { notFound } from "next/navigation";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  const { id } = use(params);
  
  const product = mockProducts.find((p) => p.id === id);
  
  if (!product) {
    notFound();
  }

  const productDetails = transformProductForDetails(product);

  const handlePurchase = (productId: string) => {
    console.log("Starting purchase:", productId);
    // TODO: Implement actual purchase flow
    // router.push(`/purchase/${productId}`);
  };

  return (
    <ProductDetails 
      product={productDetails}
      onPurchase={handlePurchase}
    />
  );
}