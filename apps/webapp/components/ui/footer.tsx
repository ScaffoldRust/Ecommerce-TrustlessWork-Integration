import Image from "next/image";
import FooterLogo from "@/app/images/footer_logo.png";
import React from "react";
import {
  Github,
  Twitter,
  Linkedin,
  Dot,
  CopyrightIcon,
  Copyright,
} from "lucide-react";
import Link from "next/link";

interface IFooterColumns {
  title: string;
  list: {
    link: string;
    title: string;
  }[];
}

const FooterColumn = ({ title, list }: IFooterColumns) => {
  return (
    <div>
      <h4 className="font-medium mb-6">{title}</h4>
      <ul className="text-gray-400 flex flex-col gap-3">
        {list?.map((item, index) => (
          <li key={index}>
            <Link href={item?.link}>{item?.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Footer = () => {
  return (
    <div className="bg-[#111827] gap-10 flex flex-col px-5 py-10">
      <div className="text-white grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10  justify-between items-center">
        <div className="gap-5 flex flex-col">
          <Image
            src={FooterLogo.src}
            height={FooterLogo.height}
            width={FooterLogo.width}
            alt="Footer Logo"
          />
          <p className="text-[#9CA3AF]">
            Secure escrow-enabled e-commerce platform powered by blockchain
            technology.
          </p>
          <div className="flex gap-5">
            <Link href={"#"}>
              <Github size={26} className="text-[#9CA3AF]" />
            </Link>
            <Link href={"#"}>
              <Twitter size={26} className="text-[#9CA3AF]" />
            </Link>
            <Link href={"#"}>
              <Linkedin size={26} className="text-[#9CA3AF]" />
            </Link>
          </div>
        </div>
        <div className="">
          <FooterColumn
            title={"Product"}
            list={[
              {
                link: "/",
                title: "Browse Products",
              },
              {
                link: "/",
                title: "How It Works",
              },
              {
                link: "/",
                title: "Pricing",
              },
            ]}
          />
        </div>
        <div className="">
          <FooterColumn
            title={"Company"}
            list={[
              {
                link: "/",
                title: "About",
              },
              {
                link: "/",
                title: "Contact",
              },
              {
                link: "/",
                title: "Careers",
              },
            ]}
          />
        </div>
        <div className="">
          <FooterColumn
            title={"Support"}
            list={[
              {
                link: "/",
                title: "Help Center",
              },
              {
                link: "/",
                title: "Documentation",
              },
              {
                link: "/",
                title: "API",
              },
            ]}
          />
        </div>
      </div>
      <div className="border-t flex flex-col  md:flex-row gap-5 justify-between pt-10 text-white border-[#1F2937]">
        <div className="">
          <p className="text-gray-400 flex justify-center gap-2 items-center">
            <Copyright size={18} />
            {new Date().getFullYear()} TrustCommerce. All rights reserved.
          </p>
        </div>
        <div className="flex gap-4 items-center justify-center">
          <p className="text-gray-400">Powered by</p>
          <Link className="text-[#60A5FA]" href={"#"}>
            ScaffoldRust
          </Link>
          <Dot className="text-gray-400" />
          <Link className="text-[#60A5FA]" href={"#"}>
            Trustless Work
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
