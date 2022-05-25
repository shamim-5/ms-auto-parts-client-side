import React, { useEffect } from "react";

const User = ({ order, setUser }) => {
  useEffect(() => {
    setUser(order);
  }, []);
  return (
    <div>
      <h3 className="text-3xl pb-9 text-[#4ade80]">Your Profile Information</h3>
      <div className="flex justify-start items-center mb-1 ">
        <p className="mr-3  text-xl ">Your Name*</p>
        <p className="mr-3 text-[#99f6e4]">{order.name}</p>
      </div>
      <hr className="text-[#bab1b1] pt-6" />
      <div className="flex justify-start items-center mb-1 ">
        <p className="mr-3 text-xl ">Email*</p>
        <p className="mr-3 text-[#99f6e4]">{order.email}</p>
      </div>
      <hr className="text-[#bab1b1] pt-6" />
      <div className="flex justify-start items-center mb-1 ">
        <p className="mr-3 text-xl ">Address*</p>
        <p className="mr-3 text-[#99f6e4]">{order.address}</p>
      </div>
      <hr className="text-[#bab1b1] pt-6" />
      <div className="flex justify-start items-center mb-1 ">
        <p className="mr-3 text-xl ">Phone*</p>
        <p className="mr-3 text-[#99f6e4]">{order.phone}</p>
      </div>
      <hr className="text-[#bab1b1] pt-6 " />
    </div>
  );
};

export default User;
