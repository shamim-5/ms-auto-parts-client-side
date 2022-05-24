import React from "react";

const PrimaryButton = ({ children }) => {
  return (
    <div>
      <button className="btn  font-normal px-9 rounded-full capitalize  text-lg bg-gradient-to-tr from-primary to secondary hover:bg-transparent  hover:text-rose-900">
        {children}
      </button>
    </div>
  );
};

export default PrimaryButton;
