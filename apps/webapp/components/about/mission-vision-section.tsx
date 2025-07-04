import { CircleCheckBig, TrendingUp, Globe } from "lucide-react";

type CardContent = {
  icon: React.ReactNode;
  title: string;
  description: string;
  bullets: string[];
  iconBgColor: string;
};

const cards: CardContent[] = [
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-500" />,
    title: "Our Mission",
    description:
      "To bridge the gap between complex blockchain technology and practical business applications by providing ready-to-use, secure, and scalable templates that developers can deploy in minutes.",
    bullets: [
      "Reduce development time from months to minutes",
      "Ensure security best practices are built-in",
      "Make blockchain accessible to all developers",
    ],
    iconBgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    icon: <Globe className="w-6 h-6 text-purple-500" />,
    title: "Our Vision",
    description:
      "A world where every developer can easily build secure, decentralized applications without needing to be a blockchain expert. We envision a future where trust is built into every digital transaction.",
    bullets: [
      "Global adoption of trustless commerce",
      "Seamless blockchain integration in everyday apps",
      "Empowered developer community worldwide",
    ],
    iconBgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
];

const MissionVisionSection = () => {
  return (
    <section className="mx-auto px-4 py-12 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Our Mission & Vision
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Democratizing blockchain technology through developer-friendly tools
          and templates.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-8 hover:shadow-lg transition-shadow duration-300"
          >
            <div
              className={`${card.iconBgColor} w-12 h-12 rounded-full flex items-center justify-center mb-6`}
            >
              <div className="">{card.icon}</div>
            </div>

            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-3">
                {card.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {card.description}
              </p>
            </div>

            <ul className="space-y-3">
              {card.bullets.map((bullet, bulletIndex) => (
                <li key={bulletIndex} className="flex items-start">
                  <CircleCheckBig className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MissionVisionSection;
