"use client";
import React from "react";

const HowItWorks = ({
  icon,
  title,
  text,
  number,
  last,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  number: number;
  last?: boolean;
}) => {
  console.log("last: ", last);
  return (
    <div className="shadow-lg bg-white rounded-xl relative gap-4 p-6 flex justify-center items-center flex-col">
      {icon && (
        <div className="bg-[#DBEAFE] rounded-full w-fit p-4 "> {icon}</div>
      )}
      <div className="bg-primary  rounded-full h-6 w-6 items-center justify-center flex text-white font-semibold">
        {number}
      </div>

      <h3 className="text-xl text-gray-800 font-medium">{title}</h3>
      <p className="text-gray-600 font-light text-center">{text}</p>
      {!last && (
        <div className="absolute hidden lg:block opacity-70 bg-[#BFDBFE] w-10 h-1 top-auto -right-5"></div>
      )}
    </div>
  );
};

export default HowItWorks;
