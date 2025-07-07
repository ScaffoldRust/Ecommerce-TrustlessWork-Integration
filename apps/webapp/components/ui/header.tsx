"use client"

import Link from "next/link"
import { Shield, Home, ShoppingBag, HelpCircle, Info } from "lucide-react"
import { WalletConnect } from "@/components/wallet/wallet-connect"

function Header() {
  return (
    <header className="w-full border-b bg-white">
      <nav className="container mx-auto flex h-20 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Shield className="text-blue-600 w-7 h-7" />
          <span className="text-xl font-bold text-gray-900">TrustCommerce</span>
        </Link>
        {/* Nav links */}
        <ul className="hidden md:flex items-center gap-8 text-base font-medium">
          <li>
            <Link href="/" className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Home className="w-5 h-5 text-blue-600" /> Home
            </Link>
          </li>
          <li>
            <Link href="/products" className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors">
              <ShoppingBag className="w-5 h-5 text-blue-600" /> Products
            </Link>
          </li>
          <li>
            <Link href="/how-it-works" className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors">
              <HelpCircle className="w-5 h-5 text-blue-600" /> How It Works
            </Link>
          </li>
          <li>
            <Link href="/about" className="flex items-center gap-1 text-gray-700 hover:text-blue-600 transition-colors">
              <Info className="w-5 h-5 text-blue-600" /> About
            </Link>
          </li>
        </ul>
        {/* Actions */}
        <div className="flex items-center gap-3">
          <WalletConnect variant="outline" size="default" />
          <Link href="/get-started" className="px-4 py-2 rounded-md bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">
            Get Started
          </Link>
        </div>
      </nav>
    </header>
  )
}

export { Header } 