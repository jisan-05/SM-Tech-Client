import React, { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import PrimaryButton from "./../Button/PrimaryButton";

const Subscribe = () => {
  const [phone, setPhone] = useState("");

  const handleSubscribe = async () => {
    if (!phone) {
      toast.error("Please enter your phone number.");
      return;
    }

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/subscribe`,
        { phone }
      );

      if (response.data.success) {
        toast.success("Subscribed successfully!");
        setPhone("");
      }
    } catch (err) {
      toast.error(err.response?.data?.error || "Subscription failed");
    }
  };

  return (
    <div className="text-white md:flex flex-row items-center">
      
      <div className="md:flex-1/2 mb-3">
        <p className="text-3xl font-semibold">
          Subscribe Our Newsletter For Latest Updates
        </p>
      </div>
      <div className="lg:flex md:flex-1/2 gap-3">
        <div className="mb-3 lg:mb-0 flex-1">
          <input
            type="tel"
            placeholder="Enter Your Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="rounded-3xl px-5 border border-[#0b6862] w-full appearance-none h-10 lg:h-full items-center text-white
              focus:outline-none focus:border-[#0b6862] focus:ring-2 focus:ring-[#0b6862]"
          />
        </div>
        <div>
          <button
            onClick={handleSubscribe}
            className="bg-[#0b6862] px-5 py-2 rounded-3xl text-white hover:opacity-90"
          >
            Subscribe Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
