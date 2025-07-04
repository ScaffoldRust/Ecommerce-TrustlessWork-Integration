import type React from "react";
import { Code, Users, Globe, Star } from "lucide-react";

type Stat = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

const stats: Stat[] = [
  {
    icon: <Code className="w-6 h-6 text-blue-600" />,
    value: "50+",
    label: "Templates Created",
  },
  {
    icon: <Users className="w-6 h-6 text-blue-600" />,
    value: "10K+",
    label: "Developers Served",
  },
  {
    icon: <Globe className="w-6 h-6 text-blue-600" />,
    value: "25+",
    label: "Countries Reached",
  },
  {
    icon: <Star className="w-6 h-6 text-blue-600" />,
    value: "2.5K+",
    label: "GitHub Stars",
  },
];

export default function AboutStats() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center"
              role="group"
              aria-labelledby={`stat-value-${index}`}
              aria-describedby={`stat-label-${index}`}
            >
              {/* Icon Badge */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center">
                  {stat.icon}
                </div>
              </div>

              {/* Stat Value */}
              <div
                id={`stat-value-${index}`}
                className="text-4xl sm:text-5xl font-bold text-gray-900 mb-2"
              >
                {stat.value}
              </div>

              {/* Stat Label */}
              <div
                id={`stat-label-${index}`}
                className="text-gray-600 text-sm sm:text-base font-medium"
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
