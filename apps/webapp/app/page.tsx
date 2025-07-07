import HeroSection from "@/components/home/hero-section";
import { WhyChoose } from "@/components/home/why-choose";
import CtaSection from "@/components/home/cta-section";
import HowItWorks from '@/components/home/how-it-works';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <WhyChoose />
      <HowItWorks />
      <CtaSection />
    </div>
  );
}
