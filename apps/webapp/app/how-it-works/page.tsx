import { BlockchainEscrowBenefits } from "@/components/how-it-works/blockchain-escrow-benefits";
import { HowItWorksHero } from "@/components/how-it-works/how-it-works-hero";

export default function HowItWorksPage() {
  return (
    <main className="min-h-screen">
      <div className="">
        <HowItWorksHero />
        <BlockchainEscrowBenefits />
      </div>
    </main>
  );
}
