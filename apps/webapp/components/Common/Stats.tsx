"use client";
import React from "react";

const Stats = ({ icon, title }: { icon: React.ReactNode; title: string }) => {
  return (
    <div className="flex flex-col items-center gap-2">
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
};

export default Stats;
