import { WhyChoose } from "@/components/home/why-choose";
import CtaSection from "@/components/home/cta-section";
//importing the wallet Button
import { WalletButton } from '@/components/wallet/wallet-button';

export default function Home() {
  return (
    <>
      <WhyChoose />
      <CtaSection />
      <WalletButton />
    </>
  );
}
