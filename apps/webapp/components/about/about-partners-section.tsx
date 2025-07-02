import type React from "react";
import { Code, Shield, Github, Twitter, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";

type Partner = {
  icon: React.ReactNode;
  name: string;
  description: string;
  socials?: {
    github?: string;
    twitter?: string;
    linkedin?: string;
  };
  ctaLabel?: string;
  ctaLink?: string;
};

const partners: Partner[] = [
  {
    icon: <Code className="w-6 h-6 text-blue-600" />,
    name: "ScaffoldRust",
    description:
      "Our development team specializes in creating production-ready templates and tools for modern web applications with blockchain integration.",
    socials: {
      github: "#",
      twitter: "#",
      linkedin: "#",
    },
  },
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    name: "Trustless Work",
    description:
      "The blockchain-powered Escrow-as-a-Service platform that makes secure, milestone-based payments possible with zero custodians.",
    ctaLabel: "Learn More",
    ctaLink: "#",
  },
];

export default function AboutPartnersSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Powered by Industry Leaders
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl mx-auto">
            We partner with the best to deliver exceptional results.
          </p>
        </div>

        {/* Partners Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {partners.map((partner, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105"
              role="article"
              aria-labelledby={`partner-name-${index}`}
            >
              {/* Icon Badge */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                  {partner.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3
                  id={`partner-name-${index}`}
                  className="text-2xl font-bold text-white mb-4"
                >
                  {partner.name}
                </h3>
                <p className="text-blue-100 leading-relaxed mb-6">
                  {partner.description}
                </p>

                {/* Social Links or CTA */}
                {partner.socials ? (
                  <div className="flex justify-center space-x-4">
                    {partner.socials.github && (
                      <a
                        href={partner.socials.github}
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors duration-200"
                        aria-label={`${partner.name} GitHub`}
                      >
                        <Github className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {partner.socials.twitter && (
                      <a
                        href={partner.socials.twitter}
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors duration-200"
                        aria-label={`${partner.name} Twitter`}
                      >
                        <Twitter className="w-5 h-5 text-white" />
                      </a>
                    )}
                    {partner.socials.linkedin && (
                      <a
                        href={partner.socials.linkedin}
                        className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors duration-200"
                        aria-label={`${partner.name} LinkedIn`}
                      >
                        <Linkedin className="w-5 h-5 text-white" />
                      </a>
                    )}
                  </div>
                ) : (
                  partner.ctaLabel && (
                    <Button
                      variant="outline"
                      className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50 transition-all duration-200"
                      asChild
                    >
                      <a href={partner.ctaLink}>{partner.ctaLabel}</a>
                    </Button>
                  )
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
