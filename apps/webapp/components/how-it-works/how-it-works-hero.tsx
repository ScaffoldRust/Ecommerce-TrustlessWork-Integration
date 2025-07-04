import { Button } from "@/components/ui/button";
import { Shield, ArrowRight } from "lucide-react";

export function HowItWorksHero() {
  return (
    <section className="w-full bg-gradient-to-b from-[#EFF6FF] to-[#E0E7FF] px-8 py-20 flex items-center justify-center">
      <div className="relative w-full z-10 mx-auto text-center max-w-7xl">
        <div className="flex items-center gap-2 justify-center mb-6">
          <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#E0E7FF] text-[#1E40AF] text-xs font-semibold leading-[16px]">
            <Shield className="w-4 h-4 mr-1 text-[#1E40AF]" />
            Blockchain-Powered Security
          </span>
        </div>

        <h1 className="text-[36px] leading-[40px] lg:text-[60px] lg:leading-[60px] font-bold mt-2 text-gray-900 mb-8 tracking-normal">
          How Escrow Protection <span className="text-blue-600">Works</span>
        </h1>

        <p className="text-[20px] leading-[28px] font-normal text-gray-600 max-w-3xl mx-auto text-center px-4 mb-0">
          Our blockchain-powered escrow system ensures secure, milestone-based
          payments with zero custodians and maximum flexibility. Here’s how we
          protect both buyers and sellers.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 pb-10">
          <Button
            size="lg"
            className="bg-[#2563EB] text-white hover:bg-blue-700 px-8 py-4 text-lg rounded-lg transition-all duration-200 w-full sm:w-auto"
          >
            Try It Now
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-600 text-blue-600 bg-white hover:bg-white font-medium px-8 py-4 text-lg rounded-lg transition-all duration-200 w-full sm:w-auto"
          >
            Learn More
          </Button>
        </div>
      </div>
    </section>
  );
}
