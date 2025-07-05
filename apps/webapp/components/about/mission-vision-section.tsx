"use client"
import { CircleCheckBig, Globe, TrendingUp } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";




type CardContent = {
    icon: React.ReactNode;
    iconColor: string,
    bgColor: string,
    title: string;
    body: string;
    bullets: string[];
};


export const MissionVision = () => {

    useEffect(() => {
        AOS.init({
            duration: 800,      // Animation duration (ms)
            once: true,         // Only animate once
            offset: 100         // Offset (px) from the top before triggering
        });
    }, []);

    const MissionVision: CardContent[] = [
        {
            icon: <TrendingUp size={30} />,
            iconColor: "text-blue-600",
            bgColor: "bg-blue-50",
            title: "Our Mission",
            body: "To bridge the gap between complex blockchain technology and practical business applications by providing ready-to-use, secure, and scalable templates that developers can deploy in minutes.",
            bullets: ["Reduce development time from months to minutes", "Ensure security best practices are built-in", "Make blockchain accessible to all developers"]
        },
        {
            icon: <Globe size={30} />,
            iconColor: "text-purple-600",
            bgColor: "bg-purple-50",
            title: "Our Vision",
            body: "A world where every developer can easily build secure, decentralized applications without needing to be a blockchain expert. We envision a future where trust is built into every digital transaction.",
            bullets: ["Global adoption of trustless commerce", "Seamless blockchain integration in everyday apps", "Empowered developer community worldwide"]
        }
    ]

    return (
        <section className="w-full flex flex-col items-center py-20 px-4 bg-white">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
                Our Mission & Vision
            </h2>
            <p className="text-gray-500 text-center mb-8 max-w-xl">
                Democratizing blockchain technology through developer-friendly tools and templates.
            </p>
            <div className="flex">
                <div className="flex flex-col lg:flex-row items-center gap-5">
                    {MissionVision.map((item, index) => (
                        <Card key={index} className="w-full lg:w-[50%] inline-block max-w-lg shadow-lg border border-gray-100">
                            <CardContent className="p-6">
                                <span className={`flex items-center justify-center px-3 py-1 w-[4rem] h-[4rem] rounded-full ${item.bgColor} ${item.iconColor} text-3xl font-extrabold mb-3`}>
                                    {item.icon}
                                </span>
                                <h3 className="font-semibold text-lg text-gray-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {item.body}
                                </p>
                                <ul className="mt-5 flex flex-col gap-2">
                                    {item.bullets.map((bullet, index) => (
                                        <li key={index} data-aos="fade-up" className="flex items-center gap-2 text-gray-600 text-sm leading-relaxed"> <CircleCheckBig size={17} className="text-green-500" /> {bullet}</li>
                                    ))}

                                </ul>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

