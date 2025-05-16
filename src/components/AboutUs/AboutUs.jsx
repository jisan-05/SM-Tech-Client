import React from "react";
import aboutAnimation from "../../assets/about-us.json";
import Lottie from "lottie-react";
import PrimaryButton from "../Button/PrimaryButton";

const AboutUs = () => {
  return (
    <div className="pt-24 pb-14">
      <div>
        <button className="btn btn-outline border-gray-600 px-10 rounded-4xl flex mx-auto ">
          Get More About Us
        </button>
      </div>
      <div className="md:flex md:mt-20">
        <div className="flex-1 ">
          <Lottie
            animationData={aboutAnimation}
            className="w-80 h-80 md:w-96 md:h-96 md:pb-24 mx-auto"
          ></Lottie>
        </div>
        <div className="flex-1 justify-between ">
          <h3 className="text-xl md:text-4xl mt-5">
            Excellence in Industrial Training and Skill Development
          </h3>
          <p className="mt-5">
            At <strong> SM High-Tech Industrial Engineering Care</strong>, we
            are committed to building a skilled workforce for the future. With
            over a decade of experience, we provide high-quality training in
            industrial engineering, technology, and vocational skills. Our
            expert instructors, hands-on learning approach, and modern
            facilities ensure that learners are job-ready and confident in their
            abilities. Whether you're looking to upskill, start a new career, or
            gain practical knowledge, we are here to support your journey.
          </p>
          <div className="mt-4">
            <PrimaryButton buttonText="Learn More"></PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
