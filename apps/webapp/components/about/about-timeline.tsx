import { Card, CardContent } from "@/components/ui/card";

export type TimelineItem = {
  year: string;
  title: string;
  description: string;
};

const TIMELINE: TimelineItem[] = [
  {
    year: "2023",
    title: "Foundation",
    description:
      "ScaffoldRust was founded with a mission to simplify blockchain development.",
  },
  {
    year: "2024",
    title: "Trustless Work Partnership",
    description:
      "Partnered with Trustless Work to integrate escrow services into our templates.",
  },
  {
    year: "2024",
    title: "TrustCommerce Launch",
    description:
      "Launched our flagship e-commerce template with built-in escrow protection.",
  },
  {
    year: "2024",
    title: "Community Growth",
    description: "Reached 10,000+ developers using our templates worldwide.",
  },
];

export const AboutTimeline = () => {
  return (
    <section className="w-full flex flex-col items-center py-20 px-4 bg-white">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
        Our Journey
      </h2>
      <p className="text-gray-500 text-center mb-16 max-w-2xl">
        From a simple idea to a thriving developer community.
      </p>

      <div className="relative w-full max-w-4xl mx-auto">
        {/* Vertical line - desktop only */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#BFDBFE] transform -translate-x-1/2" />

        <div className="space-y-12 md:space-y-16">
          {TIMELINE.map((item, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div key={idx} className="relative">
                {/* Desktop Layout */}
                <div className="hidden md:flex items-center">
                  {/* Left side content */}
                  <div className="w-1/2 pr-8">
                    {isLeft && (
                      <div className="text-right">
                        <Card className="inline-block max-w-sm shadow-lg border border-gray-100">
                          <CardContent className="p-6">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-extrabold mb-3">
                              {item.year}
                            </span>
                            <h3 className="font-semibold text-lg text-gray-900 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="relative z-10 flex items-center justify-center">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-sm" />
                  </div>

                  {/* Right side content */}
                  <div className="w-1/2 pl-8">
                    {!isLeft && (
                      <div className="text-left">
                        <Card className="inline-block max-w-sm shadow-lg border border-gray-100">
                          <CardContent className="p-6">
                            <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-extrabold mb-3">
                              {item.year}
                            </span>
                            <h3 className="font-semibold text-lg text-gray-900 mb-2">
                              {item.title}
                            </h3>
                            <p className="text-gray-600 text-sm leading-relaxed">
                              {item.description}
                            </p>
                          </CardContent>
                        </Card>
                      </div>
                    )}
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="flex items-start space-x-4">
                    <div className="flex flex-col items-center">
                      <div className="w-3 h-3 bg-blue-600 rounded-full border-4 border-white shadow-sm" />
                      {idx !== TIMELINE.length - 1 && (
                        <div className="w-0.5 h-12 bg-gray-200 mt-4" />
                      )}
                    </div>
                    <div className="flex-1 pb-8">
                      <Card className="shadow-sm border border-gray-100">
                        <CardContent className="p-6">
                          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 text-blue-600 text-xs font-medium mb-3">
                            {item.year}
                          </span>
                          <h3 className="font-semibold text-lg text-gray-900 mb-2">
                            {item.title}
                          </h3>
                          <p className="text-gray-600 text-sm leading-relaxed">
                            {item.description}
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
