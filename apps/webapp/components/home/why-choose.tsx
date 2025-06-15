import {
  Clock,
  DollarSign,
  Globe,
  Shield,
  UsersRound,
  Zap,
} from "lucide-react";
import React from "react";
import WhyChoseCard from "../Common/WhyChoseCard";
import SectionHeading from "../Common/SectionHeading";

const WhyChose = () => {
  return (
    <div className="p-10 sm:p-20">
      <SectionHeading
        heading="Why Choose TrustCommerce?"
        subHeading=" Built with Trustless Work integration, our template provides
          everything you need for secure, escrow-protected e-commerce."
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-10 ">
        <WhyChoseCard
          icon={<Shield size={40} className="text-primary" />}
          text="Blockchain-powered escrow ensures secure
transactions with zero custodians and maximum
trust."
          title="Secure Escrow Protection"
        />

        <WhyChoseCard
          icon={<Zap size={40} className="text-primary" />}
          text="Get your escrow-enabled e-commerce platform
up and running in minutes, not months."
          title="Launch in Minutes"
        />

        <WhyChoseCard
          icon={<DollarSign size={40} className="text-primary" />}
          text="Save on development costs and transaction fees
with our optimized infrastructure."
          title="Cost Effective"
        />

        <WhyChoseCard
          icon={<Globe size={40} className="text-primary" />}
          text="Enable worldwide transactions with stablecoin-
based payments and multi-currency support."
          title="Global Payments"
        />

        <WhyChoseCard
          icon={<Clock size={40} className="text-primary" />}
          text="Flexible milestone-based payment system that
adapts to your business needs."
          title="Milestone-Based"
        />

        <WhyChoseCard
          icon={<UsersRound size={40} className="text-primary" />}
          text="Intuitive interface designed for both buyers and
sellers with minimal learning curve."
          title="User-Friendly"
        />
      </div>
    </div>
  );
};

export default WhyChose;
