import { whyChooseData } from "@/lib/constantes/whychoose";
import { Clock, DollarSign, Globe, Shield, Users, Zap } from "lucide-react";

const iconMap = {
  Shield,
  Zap,
  DollarSign,
  Globe,
  Clock,
  Users,
};

export function WhyChoose() {
  return (
    <section className="w-full mx-auto px-12 py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          {whyChooseData.title}
        </h2>
        <p className="flex flex-col text-muted-foreground text-lg">
          {whyChooseData.description.map((description, index) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
            <span key={index}>
              {description}
              {index < whyChooseData.description.length - 1 && " "}
            </span>
          ))}
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {whyChooseData.features.map(({ id, title, description, icon }) => {
          const LucideIcon = iconMap[icon as keyof typeof iconMap];
          return (
            <div
              key={id}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-start gap-4 transition hover:shadow-lg min-h-[200px] cursor-pointer"
            >
              {LucideIcon && (
                <span className="text-[#2563EB] mb-2">
                  <LucideIcon size={48} />
                </span>
              )}
              <h3 className="font-semibold text-xl mb-1">{title}</h3>
              <p className="text-muted-foreground text-base">{description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyChoose;
