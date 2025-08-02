export interface WhyChooseFeature {
  id: string;
  title: string;
  description: string;
  icon: string;
}

const whyChooseFeatures: WhyChooseFeature[] = [
  {
    id: "secure-escrow",
    title: "Secure Escrow Protection",
    description:
      "Blockchain-powered escrow ensures secure transactions with zero custodians and maximum trust.",
    icon: "Shield",
  },
  {
    id: "launch-minutes",
    title: "Launch in Minutes",
    description:
      "Get your escrow-enabled e-commerce platform up and running in minutes, not months.",
    icon: "Zap",
  },
  {
    id: "cost-effective",
    title: "Cost Effective",
    description:
      "Save on development costs and transaction fees with our optimized infrastructure.",
    icon: "DollarSign",
  },
  {
    id: "global-payments",
    title: "Global Payments",
    description:
      "Enable worldwide transactions with stablecoin-based payments and multi-currency support.",
    icon: "Globe",
  },
  {
    id: "milestone-based",
    title: "Milestone-Based",
    description:
      "Flexible milestone-based payment system that adapts to your business needs.",
    icon: "Clock",
  },
  {
    id: "user-friendly",
    title: "User-Friendly",
    description:
      "Intuitive interface designed for both buyers and sellers with minimal learning curve.",
    icon: "Users",
  },
];

interface WhyChooseData {
  title: string;
  description: string[];
  features: WhyChooseFeature[];
}

export const whyChooseData: WhyChooseData = {
  title: "Why Choose TrustCommerce?",
  description: [
    "Built with Trustless Work integration, our template provides everything you need",
    "for secure, escrow-protected e-commerce.",
  ],
  features: whyChooseFeatures,
};
