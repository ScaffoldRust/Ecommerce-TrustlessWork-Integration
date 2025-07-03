"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, GithubIcon } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="relative flex items-center justify-center bg-[#2563EB] px-8 py-16">
      {/* Background overlay for better text contrast */}
      <div className="absolute inset-0 bg-blue-900/20"></div>

      <div className="relative w-full z-10 mx-auto text-center space-y-2">
        {/* Main Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-[36px] font-bold mt-2 text-white leading-tight">
          Ready to Launch Your Secure E-commerce Platform?
        </h1>

        {/* Subtitle */}
        <p className="text-lg sm:text-xl text-[#DBEAFE] max-w-3xl mx-auto leading-relaxed px-4">
          Get started with our template today and have your escrow-enabled store
          running in minutes.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8 pb-10">
          <Button
            size="lg"
            className="bg-[#F1F5F9] text-black hover:bg-blue-50 px-8 py-4 text-lg rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 w-full sm:w-auto"
          >
            Start Shopping
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-blue-700 font-medium px-8 py-4 text-lg rounded-lg backdrop-blur-sm transition-all duration-200 w-full sm:w-auto bg-[#FFFFFF1A]"
          >
            <GithubIcon className="mr-2 h-5 w-5" />
            View Template
          </Button>
        </div>

        {/* Footer Text */}
        <div className="pt-10 w-full border-t border-[#3B82F6]">
          <p className="text-[#DBEAFE] text-sm md:text-base">
            Powered by{" "}
            <span className="font-semibold text-white">ScaffoldRust</span>
            {" • "}
            Integrated with{" "}
            <span className="font-semibold text-white">Trustless Work</span>
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-white/5 rounded-full blur-xl"></div>
    </section>
  );
}
