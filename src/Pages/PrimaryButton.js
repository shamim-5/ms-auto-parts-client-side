import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button className="btn btn-primary text-slate-900 rounded-full hover:bg-inherit hover:border-white hover:text-white">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
