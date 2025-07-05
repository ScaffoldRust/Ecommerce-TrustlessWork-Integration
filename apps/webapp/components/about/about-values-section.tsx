import type React from "react";
import { Shield, Code, Users, Zap } from "lucide-react";

type ValueCard = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const values: ValueCard[] = [
  {
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    title: "Security First",
    description:
      "Every template is built with security as the top priority, using industry best practices.",
  },
  {
    icon: <Code className="w-6 h-6 text-blue-600" />,
    title: "Developer Experience",
    description:
      "We focus on creating tools that developers love to use, with clear documentation and examples.",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    title: "Community Driven",
    description:
      "Our development is guided by community feedback and real-world use cases.",
  },
  {
    icon: <Zap className="w-6 h-6 text-blue-600" />,
    title: "Innovation",
    description:
      "We stay at the forefront of technology, integrating the latest blockchain innovations.",
  },
];

export default function AboutValuesSection() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            The principles that guide everything we do.
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2"
              tabIndex={0}
              role="article"
              aria-labelledby={`value-title-${index}`}
            >
              {/* Icon Badge */}
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                  {value.icon}
                </div>
              </div>

              {/* Content */}
              <div className="text-center">
                <h3
                  id={`value-title-${index}`}
                  className="text-xl font-bold text-gray-900 mb-4"
                >
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
