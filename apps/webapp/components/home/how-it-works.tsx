import {
  CircleCheckBig,
  Clock,
  DollarSign,
  FileText,
  Globe,
  Shield,
  ShoppingCart,
  UsersRound,
  Zap,
} from "lucide-react";
import React from "react";
import HowItWorkCard from "../Common/HowItWorkCard";
import SectionHeading from "../Common/SectionHeading";

const HowItWorks = () => {
  const data = [
    {
      icon: <ShoppingCart size={32} className="text-primary" />,
      title: "Browse & Select",
      text: `Browse products and select
items you want to purchase with
escrow protection.`,
    },
    {
      icon: <FileText size={32} className="text-primary" />,
      title: "Set Milestones",
      text: `Define payment milestones and
terms that work for both buyer
and seller.`,
    },
    {
      icon: <Shield size={32} className="text-primary" />,
      title: "Secure Payment",
      text: `Funds are held securely in
blockchain escrow until
milestones are met.`,
    },
    {
      icon: <CircleCheckBig size={32} className="text-primary" />,
      title: "Complete Transaction",
      text: `Once conditions are met,
  payment is automatically
  released to the seller.`,
    },
  ];
  return (
    <div className="p-20 bg-[#F9FAFB]">
      <SectionHeading
        heading="How It Works"
        subHeading="Simple, secure, and transparent. Our escrow process protects both buyers and
sellers."
      />
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 grid-cols-1 gap-10 ">
        {data?.map((item, index) => (
          <HowItWorkCard
            key={index}
            number={index + 1}
            icon={item?.icon}
            text={item?.text}
            title={item?.title}
            last={index === data?.length - 1}
          />
        ))}
      </div>
    </div>
  );
};

export default HowItWorks;
