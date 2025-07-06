"use client"

import { motion } from "framer-motion"
import { BenefitCard } from "./benefit-card"
import { blockchainBenefits } from "@/lib/data/blockchain-benefits"

export function BlockchainEscrowBenefits() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Benefits of Blockchain Escrow</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the advantages of decentralized escrow powered by Trustless Work
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blockchainBenefits.map((benefit, index) => (
            <BenefitCard key={benefit.title} benefit={benefit} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
