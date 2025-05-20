import React from "react";

const PrimaryButton = ({ buttonText }) => {
  return (
    <div>
      <button className="relative overflow-hidden btn btn-neutral bg-[#07a698] hover:bg-[#01998c] border-none rounded-3xl px-7 md:px-9 py-3 md:py-4 text-[16px] md:text-lg text-white transition-all duration-300 group">
        {/* Visible text */}
        <span className="relative z-10">{buttonText}</span>
        
        {/* Sliding background layer */}
        <span className="absolute inset-0 bg-[#009488] transition-all duration-300 transform -translate-x-full group-hover:translate-x-0"></span>
      </button>
    </div>
  );
};

export default PrimaryButton;