"use client"

import { motion } from "framer-motion"
import type { Benefit } from "@/lib/types/benefit"

interface BenefitCardProps {
  benefit: Benefit
  index: number
}

export function BenefitCard({ benefit, index }: BenefitCardProps) {
  const Icon = benefit.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
    >
      <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${benefit.iconBgColor} mb-4`}>
        <Icon className={`w-6 h-6 ${benefit.iconColor}`} />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>

      <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
    </motion.div>
  )
}
