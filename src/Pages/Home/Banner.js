import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";

const Banner = () => {
  return (
    <div className="text-white py-6">
      <div>
        <h3 className="text-3xl py-3">Shop Our Premium Auto Parts</h3>
        <div className="py-12">
          <h2 className="text-7xl pb-3">Build Your Dream Car Today.</h2>
          <h2 className="text-7xl"> Now 15% Off On All Items.</h2>
        </div>
        <PrimaryButton>Shop Now</PrimaryButton>
        <div className="flex flex-row justify-center md:text-2xl text-sm py-12">
          <div className="px-6">
            <p>Free Shipping</p>
            <p>On all orders over 75$</p>
          </div>
          <div className="border-r-2 h-16 text-primary"></div>
          <div className="px-6">
            <p>Tested & Proven </p>
            <p>Highest quality testing standards</p>
          </div>
          <div className="border-r-2 h-16 text-primary"></div>
          <div className="px-6">
            <p>Customer Service</p>
            <p>Available 24/7</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
