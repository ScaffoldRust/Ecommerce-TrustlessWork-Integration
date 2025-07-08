import type { Product } from "../types/product"

export const mockProducts: Product[] = [
  {
    id: "1",
    name: "Premium Wireless Headphones",
    category: "Electronics",
    description: "Experience superior sound quality with our premium wireless headphones featuring advanced noise cancellation technology.",
    price: 299.99,
    isEscrowProtected: true,
    features: [
      "Active Noise Cancellation",
      "30-hour battery life", 
      "Premium leather comfort",
      "Hi-Res Audio certified",
      "Quick charge technology"
    ],
    rating: 4.8,
    reviewsCount: 124
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    category: "Wearables",
    description: "Advanced fitness tracking with heart rate monitoring and GPS capabilities for all your workout needs.",
    price: 199.99,
    isEscrowProtected: true,
    features: [
      "Heart rate monitoring",
      "GPS tracking",
      "Waterproof design",
      "7-day battery life",
      "Sleep tracking"
    ],
    rating: 4.5,
    reviewsCount: 89
  },
  {
    id: "3", 
    name: "Ergonomic Office Chair",
    category: "Furniture",
    description: "Comfortable office chair with lumbar support designed for long work sessions and optimal posture.",
    price: 449.99,
    isEscrowProtected: true,
    features: [
      "Adjustable lumbar support",
      "Memory foam cushioning",
      "360-degree swivel",
      "Height adjustable",
      "Breathable mesh back"
    ],
    rating: 4.6,
    reviewsCount: 156
  },
  {
    id: "4",
    name: "Professional Camera Lens", 
    category: "Photography",
    description: "High-performance lens for professional photography with exceptional clarity and versatile focal range.",
    price: 899.99,
    isEscrowProtected: true,
    features: [
      "Professional grade optics",
      "Image stabilization",
      "Weather sealed",
      "Ultra-wide aperture",
      "Precision autofocus"
    ],
    rating: 4.9,
    reviewsCount: 67
  },
  {
    id: "5",
    name: "Mechanical Keyboard",
    category: "Electronics", 
    description: "Premium mechanical keyboard for gaming and typing with customizable RGB backlighting.",
    price: 159.99,
    isEscrowProtected: true,
    features: [
      "Mechanical switches",
      "RGB backlighting", 
      "Programmable keys",
      "USB-C connectivity",
      "Aluminum construction"
    ],
    rating: 4.7,
    reviewsCount: 203
  },
  {
    id: "6",
    name: "Portable Power Bank",
    category: "Electronics",
    description: "High-capacity power bank for mobile devices with fast charging and multiple ports.",
    price: 79.99,
    isEscrowProtected: true,
    features: [
      "20,000mAh capacity",
      "Fast charging support",
      "Multiple device charging",
      "LED power indicator", 
      "Compact design"
    ],
    rating: 4.4,
    reviewsCount: 145
  },
  {
    id: "7",
    name: "Wireless Earbuds",
    category: "Electronics",
    description: "True wireless earbuds with premium sound quality and active noise cancellation.",
    price: 129.99,
    isEscrowProtected: true,
    features: [
      "True wireless design",
      "Active noise cancellation",
      "Touch controls",
      "Wireless charging case",
      "IPX4 water resistance"
    ],
    rating: 4.3,
    reviewsCount: 178
  },
  {
    id: "8",
    name: "Smart Home Hub",
    category: "Home Goods", 
    description: "Central control for all your smart home devices with voice control and app integration.",
    price: 249.99,
    isEscrowProtected: true,
    features: [
      "Voice control support",
      "Multi-device compatibility",
      "Mobile app control",
      "Security monitoring",
      "Energy management"
    ],
    rating: 4.5,
    reviewsCount: 92
  },
  {
    id: "9",
    name: "Designer Watch",
    category: "Accessories",
    description: "Luxury timepiece with premium materials and sophisticated design for the modern professional.",
    price: 599.99,
    isEscrowProtected: true,
    features: [
      "Swiss movement",
      "Sapphire crystal",
      "Stainless steel case",
      "Leather strap",
      "Water resistant"
    ],
    rating: 4.8,
    reviewsCount: 134
  },
]