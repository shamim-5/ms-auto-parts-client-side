import React from "react";

const TransparentButton = ({ children }) => {
  return (
    <div>
      <button className="btn text-white bg-transparent px-9 border-white rounded-full capitalize font-normal  text-lg hover:bg-primary">
        {children}
      </button>
    </div>
  );
};

export default TransparentButton;
