import React from "react";
import img_1 from "../../assets/summery_icon/summary_1.png";
import img_2 from "../../assets/summery_icon/summary_2.png";
import img_3 from "../../assets/summery_icon/summary_3.jpg";
import img_4 from "../../assets/summery_icon/summary_4.png";
import TransparentButton from "../Shared/TransparentButton";
import PrimaryButton from "../Shared/PrimaryButton";

const Summery = () => {
  const summeryCard = {
    borderRadius: "10px",
    background: "#2F0000",
    boxShadow: "20px 20px 45px #bebebe -20px -20px 45px #ffffff",
  };

  return (
    <div className="container py-12">
      <h2 className="md:text-5xl text-3xl text-center">We Believe In Trust</h2>
      <h3 className="text-center mb-6 mt-4">We are always remember user expectation</h3>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-6">
        <div className="relative mx-auto">
          <img className="w-56 h-56" src={img_3} alt="" />
          <h3 className="absolute top-10 text-[#102302] text-5xl font-extrabold text-center">
            <p>71k+</p>
            <p className="text-xl font-serif mt-4">Countries We Served</p>
          </h3>
        </div>
        <div className="relative mx-auto">
          <img className="w-56 h-56" src={img_2} alt="" />
          <h3 className="absolute top-10 text-[#0d4c69] text-5xl font-extrabold text-center">
            <p>110k+</p>
            <p className="text-xl font-serif mt-4">Happpy Client</p>
          </h3>
        </div>
        <div className="relative mx-auto">
          <img className="w-56 h-56" src={img_1} alt="" />
          <h3 className="absolute top-10 text-[#5C82BC] text-5xl font-extrabold text-center">
            <p>21k+</p>
            <p className="text-xl font-serif mt-4"></p>
          </h3>
        </div>
        <div className="relative mx-auto">
          <img className="w-56 h-56 image-full" src={img_4} alt="" />
          <h3 className="absolute top-10 text-[#021517] text-5xl font-extrabold text-center">
            <p>125+</p>
            <p className="text-xl font-serif mt-4">Spare Parts</p>
          </h3>
        </div>
      </div>
      <div>
        <div style={summeryCard} className="text-white p-4 mt-6 flex md:flex-row flex-col justify-between">
          <div>
            <h2 className="text-center text-primary">Have Any question about us or get a product requests ?</h2>
            <h2 className="text-center text-[#0d4c69]">Don't hasitate to contact us</h2>
          </div>
          <div className="flex md:flex-row flex-col">
            <div className="mr-6 py-3">
              {" "}
              <TransparentButton>{"Request For Quote"}</TransparentButton>
            </div>
            <div className="py-3">
              <PrimaryButton>Contact Us</PrimaryButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summery;
