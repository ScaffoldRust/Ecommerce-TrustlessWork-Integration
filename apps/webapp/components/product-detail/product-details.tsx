"use client";

import Link from "next/link";
import { useState } from "react";
import { ArrowLeft, Star, Shield, Truck, RotateCcw, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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

function PaymentMilestone({ step, title, percentage, amount }: {
  step: number;
  title: string;
  percentage: string;
  amount: string;
}) {
  return (
    <div className="flex items-center justify-between p-4 border rounded-lg">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-semibold">
          {step}
        </div>
        <div>
          <p className="text-sm font-medium">{title}</p>
          <p className="text-xs text-gray-500">{percentage}</p>
        </div>
      </div>
      <span className="text-lg font-semibold">${amount}</span>
    </div>
  );
}

function PurchaseForm({ onPurchase, productId, total }: {
  onPurchase?: (productId: string) => void;
  productId: string;
  total: number;
}) {
  const [walletAddress, setWalletAddress] = useState("");
  const [instructions, setInstructions] = useState("");
  
  const handlePurchase = () => {
    onPurchase?.(productId);
  };

  const escrowFee = 2.99;

  return (
    <div className="bg-white border rounded-lg p-6">
      <h3 className="text-lg font-semibold mb-4">Purchase Details</h3>
      
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Wallet Address
        </label>
        <input
          type="text"
          value={walletAddress}
          onChange={(e) => setWalletAddress(e.target.value)}
          placeholder="0x..."
          className="w-full px-3 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
        />
      </div>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Special Instructions
        </label>
        <textarea
          value={instructions}
          onChange={(e) => setInstructions(e.target.value)}
          placeholder="Delivery notes, special requirements..."
          rows={3}
          className="w-full px-3 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
        />
      </div>

      <div className="space-y-3 mb-6 bg-gray-50 p-3 rounded-lg">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Product</span>
          <span className="font-medium">${total - escrowFee}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Escrow Fee</span>
          <span className="font-medium">${escrowFee}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold pt-2 border-t">
          <span>Total</span>
          <span>${total}</span>
        </div>
      </div>

      <Button
        onClick={handlePurchase}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 rounded-lg mb-4"
      >
        <Shield className="w-4 h-4 mr-2" />
        Create Escrow
      </Button>

      <p className="text-xs text-gray-500 text-center">
        By proceeding, you agree to our terms
      </p>
    </div>
  );
}

export function ProductDetails({ 
  product, 
  onPurchase 
}: ProductDetailsComponentProps) {
  const escrowFee = 2.99;
  const total = product.price + escrowFee;
  const milestones = [
    { step: 1, title: "Order confirmed", percentage: "20%", amount: (product.price * 0.2).toFixed(2) },
    { step: 2, title: "Shipped", percentage: "30%", amount: (product.price * 0.3).toFixed(2) },
    { step: 3, title: "Delivered", percentage: "50%", amount: (product.price * 0.5).toFixed(2) },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-6">
        <nav className="flex items-center text-sm text-gray-500 mb-6">
          <Link 
            href="/products" 
            className="flex items-center gap-1 hover:text-blue-600"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
          <span className="mx-2">/</span>
          <span>Product Details</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="flex flex-col h-full">
            <div className="relative mb-6">
              <div className="bg-gray-200 rounded-lg aspect-[4/3] w-full">
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
                    <span className="text-gray-400">No image</span>
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
          <div className="flex flex-col space-y-6 h-full">
            <div className="bg-white border rounded-lg p-6 flex-1">
              <div className="mb-6">
                <div className="flex items-center justify-center gap-2 mb-4">
                  <Shield className="w-5 h-5 text-blue-600" />
                  <h2 className="text-lg font-semibold">Escrow Protection</h2>
                </div>

                <div className="bg-blue-50 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-semibold text-blue-900 mb-1">Secure Payment</h3>
                      <p className="text-sm text-blue-800">
                        Payment held until delivery confirmed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h3 className="font-semibold mb-4">Payment Schedule</h3>
                
                <div className="space-y-4">
                  {milestones.map((milestone) => (
                    <PaymentMilestone key={milestone.step} {...milestone} />
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 mt-6 border-t">
                  <span className="text-lg font-semibold">Total</span>
                  <span className="text-2xl font-bold">${product.price}</span>
                </div>
              </div>
            </div>

            <PurchaseForm onPurchase={onPurchase} productId={product.id} total={total} />

            <div className="bg-white border rounded-lg p-6">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="text-sm font-semibold">Powered by Trustless Work</p>
                  <p className="text-xs text-gray-600">
                    Blockchain escrow, no middlemen
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}