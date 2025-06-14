"use client";
import React from "react";

const WhyChoseCard = ({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) => {
  return (
    <div className="shadow-lg rounded-xl gap-4 p-6 flex flex-col">
      {icon && icon}
      <h3 className="text-xl text-gray-800 font-semibold">{title}</h3>
      <p className="text-gray-600 font-light">{text}</p>
    </div>
  );
};

export default WhyChoseCard;
