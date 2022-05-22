import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button className="btn btn-primary font-normal px-9 rounded-full capitalize  text-lg hover:bg-transparent hover:border-white hover:text-rose-900">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
