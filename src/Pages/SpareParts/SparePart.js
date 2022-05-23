import React from "react";

const SparePart = ({ service }) => {
  const { name, img, details, quantity, available, price } = service;

  return (
    <div>
      <div className="card card-compact shadow-xl rounded-none">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body text-[#cbd5e1]">
          <h2 className="card-title text-sm text-[#cbd5e1] leading-none">{name}</h2>
          <h3 className="text-sm font-normal mb-2 leading-none">
            Price:<span className="font-thin"> ${price}</span>
          </h3>
          <div className="card-actions justify-start">
            <button className="btn btn-primary w-full rounded-full bg-transparent border-white capitalize">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SparePart;
