import React from "react";

const SectionHeader = ({ children }) => {
  return (
    <h1 className="font-freeman font-bold text-[36px] lg:text-[48px] mb-4">
      {children}
    </h1>
  );
};

export default SectionHeader;
