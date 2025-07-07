import { Button } from "@/components/ui/button";
import { CheckCircleIcon, Github, Mail } from "lucide-react";

export const AboutHero = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center py-24 px-4 bg-gradient-to-b from-[#EFF6FF] to-[#E0E7FF]">
      <div className="flex items-center mb-6">
        <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-[#2563EB] text-xs font-medium">
          <CheckCircleIcon className="w-4 h-4 mr-1.5" aria-hidden="true" />
          Trusted by 10,000+ Developers
        </span>
      </div>

      <h1 className="text-5xl md:text-6xl font-extrabold text-center text-gray-900 mb-6 leading-tight">
        Building the Future of{" "}
        <span className="text-[#2563EB]">
          Secure <br /> Commerce
        </span>
      </h1>

      <p className="max-w-2xl text-center text-gray-500 mb-10 text-lg">
        We&apos;re ScaffoldRust, a team of passionate developers creating
        production-ready templates that make blockchain technology accessible to
        everyone.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto justify-center">
        <Button
          className="bg-[#2563EB] hover:bg-[#1d4ed8] text-white px-8 py-4 text-sm font-semibold flex items-center justify-center rounded-xl"
          aria-label="View Our Work"
        >
          <Github className="w-4 h-4 mr-2" aria-hidden="true" />
          View Our Work
        </Button>
        <Button
          variant="outline"
          className="bg-white border border-gray-200 text-gray-900 px-8 py-4 text-sm font-semibold flex items-center justify-center rounded-xl"
          aria-label="Get In Touch"
        >
          <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
          Get In Touch
        </Button>
      </div>
    </section>
  );
};
