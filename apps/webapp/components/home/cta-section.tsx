import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, Github } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <div className="bg-primary sm:p-14 p-8 text-center">
      <h3 className="text-white">
        Ready to Launch Your Secure E-commerce Platform?
      </h3>
      <p className="text-white pt-3 font-light">
        Get started with our template today and have your escrow-enabled store
        running in minutes.
      </p>
      <div className="flex gap-4 justify-center sm:flex-row flex-col py-10 border-b border-[#3B82F6]">
        <Button variant={"secondary"} size={"default"} className="gap-2 px-10">
          Start Shopping <ArrowRight size={14} color="black" />
        </Button>
        <Button
          variant={"outline"}
          size={"default"}
          className="gap-2 px-10 group"
        >
          <Github size={14} className="group-hover:text-black" />
          View Template{" "}
        </Button>
      </div>
      <p className="text-white text-sm mt-10 font-normal">
        Powered by{" "}
        <Link href="#" className="font-bold">
          ScaffoldRust
        </Link>{" "}
        • Integrated with
        <Link href={"#"} className="font-bold">
          {" "}
          Trustless Work
        </Link>
      </p>
    </div>
  );
};

export default CTASection;
