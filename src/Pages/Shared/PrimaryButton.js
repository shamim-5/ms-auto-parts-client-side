import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button className="btn text-white font-normal px-9 rounded-full capitalize  text-lg bg-primary hover:bg-transparent  hover:border-white">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
