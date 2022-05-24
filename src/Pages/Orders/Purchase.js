import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PrimaryButton from "../Shared/PrimaryButton";

const Purchase = () => {
  const { id } = useParams();
  const [service, setService] = useState({});
  const { name, img, details, quantity, available, price } = service;

  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, []);

  console.log(service);
  return (
    <div className="container py-6">
      <h2 className="text-4xl text-center">Confirm Purchase</h2>
      <div class="hero bg-transparent my-4">
        <div class="hero-content flex-col lg:flex-row">
          <img className="md:w-2/6" src={img} alt="" />
          <div className="md:w-1/2">
            <h2 className="card-title text-2xl text-[#cbd5e1]">{name}</h2>
            <p className="text-[#cbd5e1] text-normal">{details}</p>
            <div className="text-sm py-2 font-thin">
              <h3>Available Quantity: {available} Piece/Pieces</h3>
              <h3>Min. Order: {quantity} Pieces</h3>
            </div>
            <h3 className="text-xl text-primary font-bold pb-6">
              {" "}
              Price:<span className="font-normal"> ${price}</span>
              <span className="text-sm font-thin text-[#cbd5e1]"> / Piece</span>
            </h3>
                
            <PrimaryButton>Confirm Order</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
