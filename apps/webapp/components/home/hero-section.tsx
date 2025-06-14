import { ArrowRight, DollarSign, Globe, Shield, Zap } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";
import Stats from "../Common/Stats";

const HeroSection = () => {
  return (
    <div className="bg-[#EFF6FF]">
      <div className="container max-w-4xl mx-auto py-20 text-center">
        <div className="flex justify-center mx-auto p-2 mb-10 items-center rounded-full gap-2 line-clamp-2 bg-[#DBEAFE] w-fit">
          <Shield className="text-[#1E40AF]" size={18} />
          <h4 className="text-[#1E40AF]">
            Blockchain-Powered Escrow Protection
          </h4>
        </div>

        <h1 className="mb-5">
          Launch Secure E-commerce{" "}
          <span className="text-primary">in Minutes</span>
        </h1>
        <p className="line-clamp-2 text-gray-600 font-light ">
          The complete e-commerce template with built-in escrow protection.
          Secure milestone-based payments, zero custodians, maximum flexibility.
        </p>
        <div className="flex gap-4 my-10 items-center justify-center">
          <Button
            className="gap-4 items-center justify-center flex px-8"
            variant={"default"}
          >
            Start Shopping <ArrowRight size={14} />
          </Button>

          <Button
            className="gap-4 items-center justify-center flex px-8 bg-white"
            variant={"secondary"}
          >
            How It Works{" "}
          </Button>
        </div>

        <div className="flex justify-between gap-10">
          <Stats
            title="Launch in Minutes"
            icon={<Zap className="text-primary" size={36} />}
          />
          <Stats
            title="Secure Infrastructure"
            icon={<Shield className="text-primary" size={36} />}
          />
          <Stats
            title="Save on Costs"
            icon={<DollarSign className="text-primary" size={36} />}
          />
          <Stats
            title="Global Payments"
            icon={<Globe className="text-primary" size={36} />}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
