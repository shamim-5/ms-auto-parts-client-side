import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Premium = () => {
  return (
    <div className="container grid md:grid-cols-2 grid-cols-1 gap-9 py-12 text-lg">
      <div className="py-3">
        <h2 className="text-5xl">Join Our</h2>
        <h3 className="text-5xl pt-2 pb-6">Premium Club</h3>
        <hr className="text-[#bab1b1]" />
        <p className="pt-6">
          Our premium membership will give you exclusive access to our early-bird sales, new arrivals and other special
          offers.
        </p>
      </div>
      <div>
        <h3 className="text-3xl pb-9">Sign up today and get exclusive club member benefits</h3>
        <p>First Name*</p>
        <hr className="text-[#bab1b1] pt-6" />
        <p>Last Name*</p>
        <hr className="text-[#bab1b1] pt-6" />
        <p>Email*</p>
        <hr className="text-[#bab1b1] pt-6" />
        <p>Phone*</p>
        <hr className="text-[#bab1b1] pt-6 pb-6" />
        <PrimaryButton>Subscribe</PrimaryButton>
      </div>
    </div>
  );
};

export default Premium;
