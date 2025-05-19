import React from "react";

const PrimaryButton = ({ buttonText }) => {
  return (
    <div>
      <button className="btn btn-neutral bg-[#07a698] hover:bg-[#01998c] border-none rounded-3xl px-7 md:px-9 py-3 md:py-4 text-[16px] md:text-lg text-white">
        {buttonText}
      </button>
    </div>
  );
};

export default PrimaryButton;
