import React from "react";

import PrimaryButton from "../Shared/PrimaryButton";

const MyProfile = () => {
    
   
   
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-12 py-12 text-lg text-left">
      <div>
        <h3 className="text-3xl pb-9">Your Profile Information</h3>
        <p>Your Name*</p>
        <hr className="text-[#bab1b1] pt-6" />
        <p>Address*</p>
        <hr className="text-[#bab1b1] pt-6" />
        <p>quantity*</p>
        <hr className="text-[#bab1b1] pt-6" />
        <p>Phone*</p>
        <hr className="text-[#bab1b1] pt-6 pb-6" />
        <PrimaryButton>Update</PrimaryButton>
      </div>
      <div>
        <h3 className="text-3xl pb-9">Update Your Profile</h3>
        <p>Your Name*</p>
        <hr className="text-[#bab1b1] pt-6" />
        <p>Address*</p>
        <hr className="text-[#bab1b1] pt-6" />
        <p>quantity*</p>
        <hr className="text-[#bab1b1] pt-6" />
        <p>Phone*</p>
        <hr className="text-[#bab1b1] pt-6 pb-6" />
        <PrimaryButton>Update</PrimaryButton>
      </div>
    </div>
  );
};

export default MyProfile;
