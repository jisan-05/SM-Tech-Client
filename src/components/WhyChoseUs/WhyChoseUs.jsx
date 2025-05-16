import React from "react";
import image1 from "../../assets/promo-img-1.png";
import image2 from "../../assets/promo-img-2.png";
import image3 from "../../assets/promo-img-3.png";

const WhyChoseUs = () => {
    return (
        <div className="max-w-7xl mx-auto">
            <div className="mb-20">
                <button className="btn btn-outline border-gray-600 bg-white hover:bg-gray-200 text-black px-10 rounded-4xl flex mx-auto mb-5 ">
                    Why Chose Us
                </button>
                <h3 className="md:text-4xl text-3xl text-white text-center">
                    Explore Yourself All Over The World
                </h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                <div className="max-w-[340px] mx-auto text-center mb-6 space-y-6">
                    <img src={image1} alt="" className="mx-auto " />
                    <h3 className="text-2xl font-semibold text-white ">
                        Book Free Consultation
                    </h3>
                    <p className="text-white">
                        Standards in leadership skills synergize optimal
                        expertise rather than innovative leadership skills.
                    </p>
                    
                </div>
                
                <div className="max-w-[340px] mx-auto text-center mb-6 space-y-6">
                    <img src={image2} alt="" className="mx-auto " />
                    <h3 className="text-2xl font-semibold text-white ">
                        Book Free Consultation
                    </h3>
                    <p className="text-white">
                        Standards in leadership skills synergize optimal
                        expertise rather than innovative leadership skills.
                    </p>
                </div>
                <div className="max-w-[340px] mx-auto text-center mb-6 space-y-6">
                    <img src={image3} alt="" className="mx-auto " />
                    <h3 className="text-2xl font-semibold text-white ">
                        Book Free Consultation
                    </h3>
                    <p className="text-white">
                        Standards in leadership skills synergize optimal
                        expertise rather than innovative leadership skills.
                    </p>
                </div>
                
            </div>
        </div>
    );
};

export default WhyChoseUs;
