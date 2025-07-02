import { Button } from "@/components/ui/button";
import React from "react";

export const AboutCTASection = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-20 px-4 bg-[#F9FAFB]">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-4">
        Ready to Build Something Amazing?
      </h2>
      <p className="text-gray-500 text-center mb-8 max-w-xl">
        Join thousands of developers who trust ScaffoldRust for their blockchain
        projects.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
        <Button
          className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-6 py-2 text-base font-semibold flex items-center justify-center"
          aria-label="Explore Templates"
        >
          Explore Templates
        </Button>
        <Button
          variant="outline"
          className="bg-white border border-gray-200 text-gray-900 px-6 py-2 text-base font-semibold flex items-center justify-center"
          aria-label="Contact Us"
        >
          Contact Us
        </Button>
      </div>
    </section>
  );
};
