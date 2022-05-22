import React from "react";

const TransprentButton = ({ children }) => {
  return (
    <div>
      <button className="btn btn-black bg-transparent px-9 border-white rounded-full capitalize font-normal  text-lg hover:bg-primary hover:text-rose-900">
        {children}
      </button>
    </div>
  );
};

export default TransprentButton;
