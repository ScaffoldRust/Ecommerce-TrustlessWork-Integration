import Link from "next/link";
import { Github, Twitter, Linkedin } from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

// TrustCommerce Shield Icon Component - Outline only
const TrustCommerceIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={cn("w-6 h-6", className)}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 2L3 7V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V7L12 2Z"
      fill="none"
      stroke="#60A5FA"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-slate-900 text-white w-full", className)}>
      <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo and Description */}
            <div className="md:col-span-1">
              <div className="flex items-center mb-4">
                <TrustCommerceIcon className="mr-2" />
                <span className="text-lg font-semibold text-white">
                  TrustCommerce
                </span>
              </div>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Secure escrow-enabled e-commerce platform powered by blockchain
                technology.
              </p>
              {/* Social Icons */}
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-slate-500 hover:text-slate-300 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-slate-300 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  className="text-slate-500 hover:text-slate-300 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Product Links */}
            <div>
              <h3 className="text-white font-medium mb-4 text-sm">Product</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/products"
                    className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                  >
                    Browse Products
                  </Link>
                </li>
                <li>
                  <Link
                    href="/how-it-works"
                    className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="/pricing"
                    className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                  >
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company Links */}
            <div>
              <h3 className="text-white font-medium mb-4 text-sm">Company</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                  >
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-white font-medium mb-4 text-sm">Support</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/help"
                    className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/docs"
                    className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                  >
                    Documentation
                  </Link>
                </li>
                <li>
                  <Link
                    href="/api"
                    className="text-slate-400 hover:text-slate-200 transition-colors text-sm"
                  >
                    API
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center pt-6 border-t border-slate-800">
            <div className="text-slate-500 text-xs mb-4 md:mb-0">
              © 2024 TrustCommerce. All rights reserved.
            </div>
            <div className="flex items-center space-x-1 text-slate-500 text-xs">
              <span>Powered by</span>
              <Link
                href="https://scaffoldrust.com"
                className="text-blue-400 hover:text-blue-300 transition-colors ml-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                ScaffoldRust
              </Link>
              <span className="mx-1">•</span>
              <Link
                href="https://trustlesswork.com"
                className="text-blue-400 hover:text-blue-300 transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                Trustless Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
