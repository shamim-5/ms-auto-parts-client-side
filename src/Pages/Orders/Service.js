import React from "react";
import PurchaseModal from "./PurchaseModal";

const Service = ({ service, setProduct }) => {
  const { name, quantity } = service;
  return (
    <div className="card lg:max-w-lg bg-base-100 shadow-xl">
      <div className="card-body text-center">
        <h2className="text-xl font-bold text-secondary">{name}</h2>

        <p></p>
        <div className="card-actions justify-center">
          <label
            htmlFor="purchse-modal"
            disabled={quantity === 0}
            onClick={() => setProduct(service)}
           className="btn btn-sm btn-secondary text-white uppercase bg-gradient-to-r from-secondary to-primary"
          >
            Confirm Purchase
          </label>
        </div>
      </div>
      <PurchaseModal></PurchaseModal>
    </div>
  );
};

export default Service;
