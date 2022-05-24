import React from "react";
import { useNavigate } from "react-router-dom";

const Service = ({ service }) => {
  const { _id, name, img, details, quantity, available, price } = service;
  const navigate = useNavigate();

  const purchase = (id) => {
    navigate(`/purchase/${id}`);
  };

  return (
    <div>
      <div className="card card-compact w-50  shadow-xl rounded-none">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body text-[#cbd5e1]">
          <h2 className="card-title text-2xl text-[#cbd5e1]">{name}</h2>
          <p className="text-[#cbd5e1] text-xs">{details}</p>
          <div className="text-normal pb-2 font-thin">
            <h3>Available Quantity: {available} Piece/Pieces</h3>
            <h3>Min. Order: {quantity} Pieces</h3>
          </div>

          <div className="card-actions justify-between items-end">
            <h3 className="text-xl text-primary font-bold">
              {" "}
              Price:<span className="font-normal"> ${price}</span>
              <span className="text-sm font-thin text-[#cbd5e1]"> / Piece</span>
            </h3>
            <button onClick={() => purchase(_id)} className="btn btn-primary bg-transparent border-white">
              Purchase
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
