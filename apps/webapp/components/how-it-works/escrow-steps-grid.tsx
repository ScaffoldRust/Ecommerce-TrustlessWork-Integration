import type React from "react";

import {
  ShoppingCart,
  FileText,
  CreditCard,
  Shield,
  Truck,
  CheckCircle,
  RotateCcw,
  AlertTriangle,
} from "lucide-react";

type EscrowStep = {
  title: string;
  description: string;
  icon: React.ReactNode;
  colorScheme: string;
};

const escrowSteps: EscrowStep[] = [
  {
    title: "Select Product",
    description:
      "Browse and select the product you want to purchase with escrow protection.",
    icon: <ShoppingCart className="w-8 h-8 text-blue-600" />,
    colorScheme: "bg-blue-50 border-blue-100",
  },
  {
    title: "Define Milestones",
    description:
      "Set clear milestones and payment terms that both parties agree to.",
    icon: <FileText className="w-8 h-8 text-purple-600" />,
    colorScheme: "bg-purple-50 border-purple-100",
  },
  {
    title: "Fund Escrow",
    description: "Deposit funds into the secure blockchain escrow contract.",
    icon: <CreditCard className="w-8 h-8 text-blue-600" />,
    colorScheme: "bg-blue-50 border-blue-100",
  },
  {
    title: "Funds Secured",
    description: "Your payment is held securely until all conditions are met.",
    icon: <Shield className="w-8 h-8 text-gray-600" />,
    colorScheme: "bg-gray-50 border-gray-100",
  },
  {
    title: "Seller Delivers",
    description:
      "Seller fulfills their obligations according to the milestones.",
    icon: <Truck className="w-8 h-8 text-gray-600" />,
    colorScheme: "bg-gray-50 border-gray-100",
  },
  {
    title: "Milestone Verification",
    description:
      "Each milestone is verified before releasing the corresponding payment.",
    icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
    colorScheme: "bg-blue-50 border-blue-100",
  },
  {
    title: "Automatic Release",
    description:
      "Payments are automatically released when milestones are completed.",
    icon: <RotateCcw className="w-8 h-8 text-gray-600" />,
    colorScheme: "bg-gray-50 border-gray-100",
  },
  {
    title: "Dispute Resolution",
    description:
      "Built-in dispute resolution system for any issues that arise.",
    icon: <AlertTriangle className="w-8 h-8 text-orange-600" />,
    colorScheme: "bg-orange-50 border-orange-100",
  },
];

interface EscrowStepsGridProps {
  steps?: EscrowStep[];
  className?: string;
}

export default function EscrowStepsGrid({
  steps = escrowSteps,
  className = "",
}: EscrowStepsGridProps) {
  // Steps that should have gray circular backgrounds for contrast
  const grayBackgroundSteps = [
    "Funds Secured",
    "Seller Delivers",
    "Automatic Release",
  ];

  return (
    <div className={`w-full ${className}`}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
        {steps.map((step, index) => {
          const shouldHaveGrayBackground = grayBackgroundSteps.includes(
            step.title
          );

          return (
            <div
              key={index}
              className={`
                ${step.colorScheme}
                border-2 rounded-xl p-6 
                shadow-md
                transition-all duration-300 ease-in-out
                hover:shadow-xl hover:scale-105 hover:-translate-y-1
                cursor-default
                group
              `}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                {/* Icon */}
                <div
                  className={`
                  flex items-center justify-center w-16 h-16 rounded-full 
                  transition-colors duration-300
                  ${
                    shouldHaveGrayBackground
                      ? "bg-gray-200/70 group-hover:bg-gray-200"
                      : "bg-white/50 group-hover:bg-white/80"
                  }
                `}
                >
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
