import { Shield, Users, Clock, DollarSign, Globe, Zap } from "lucide-react";
import type { Benefit } from "../types/benefit";

export const blockchainBenefits: Benefit[] = [
  {
    title: "Zero Custodians",
    description:
      "No third party holds your funds. Smart contracts manage everything automatically.",
    icon: Shield,
    iconColor: "text-blue-600",
    iconBgColor: "bg-blue-100",
  },
  {
    title: "Trust Both Parties",
    description:
      "Buyers and sellers are protected equally with transparent milestone tracking.",
    icon: Users,
    iconColor: "text-green-600",
    iconBgColor: "bg-green-100",
  },
  {
    title: "Flexible Timelines",
    description:
      "Set custom milestones and deadlines that work for your specific transaction.",
    icon: Clock,
    iconColor: "text-purple-600",
    iconBgColor: "bg-purple-100",
  },
  {
    title: "Lower Fees",
    description:
      "Reduced transaction costs compared to traditional escrow services.",
    icon: DollarSign,
    iconColor: "text-yellow-600",
    iconBgColor: "bg-yellow-100",
  },
  {
    title: "Global Access",
    description:
      "Works worldwide with stablecoin payments and multi-currency support.",
    icon: Globe,
    iconColor: "text-blue-600",
    iconBgColor: "bg-blue-100",
  },
  {
    title: "Instant Settlement",
    description:
      "Automatic payment release when conditions are met - no waiting for manual approval.",
    icon: Zap,
    iconColor: "text-red-600",
    iconBgColor: "bg-red-100",
  },
];
