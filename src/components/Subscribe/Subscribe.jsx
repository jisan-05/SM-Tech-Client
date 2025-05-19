import React from "react";
import PrimaryButton from "./../Button/PrimaryButton";

const Subscribe = () => {
    return (
        <div className=" text-white  md:flex flex-row items-center ">
            <div className="md:flex-1/2 mb-3">
                <p className="text-3xl font-semibold">Subscribe Our Newsletter For Latest Updates</p>
            </div>
            <div className="lg:flex md:flex-1/2 gap-3 ">
                <div className="mb-3 lg:mb-0 flex-1 ">
                  <input type="tel" placeholder="Enter Your Number" className="rounded-3xl px-5 border border-[#0b6862] w-full appearance-none h-10 lg:h-full items-center" />
                </div>
               <div>
                 <PrimaryButton buttonText={"Subscribe Now"}></PrimaryButton>
               </div>
            </div>
        </div>
    );
};

export default Subscribe;
