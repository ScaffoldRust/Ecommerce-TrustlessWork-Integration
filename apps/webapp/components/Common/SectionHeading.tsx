import React from "react";

const SectionHeading = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading?: string;
}) => {
  return (
    <div className="text-center gap-4 flex flex-col mb-20 max-w-4xl mx-auto">
      <h2 className="text-4xl">{heading}</h2>
      {subHeading && <p className="text-gray-600 font-light">{subHeading}</p>}
    </div>
  );
};

export default SectionHeading;
