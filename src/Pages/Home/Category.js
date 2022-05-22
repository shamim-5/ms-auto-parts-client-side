import React from "react";
import TransprentButton from "../Shared/TransparentButton";

const Category = () => {
  return (
    <div className="text-white py-6">
      <div className="flex flex-row">
        <div className="flex-1">
          <h2 className="text-4xl">Shop by Category</h2>
        </div>
        <div className="flex-none">
          <TransprentButton>{"Shop"}</TransprentButton>
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-8 py-6">
        <div className="card card-compact w-50  shadow-xl rounded-none">
          <figure>
            <img
              src="https://res.cloudinary.com/dskmjlma4/image/upload/v1653235499/manufacturer-website-assignment/assets/shop-category/wheels-rims_gfhbnj.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Wheels {"&"} Rims</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Purchase</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-50  shadow-xl rounded-none">
          <figure>
            <img
              src="https://res.cloudinary.com/dskmjlma4/image/upload/v1653235499/manufacturer-website-assignment/assets/shop-category/engine_iskveb.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Engine</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Purchase</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-50  shadow-xl rounded-none">
          <figure>
            {" "}
            <img
              src="https://res.cloudinary.com/dskmjlma4/image/upload/v1653235499/manufacturer-website-assignment/assets/shop-category/vehicle-body-part_ramjpt.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Vehicle Body Parts</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Purchase</button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-50  shadow-xl rounded-none">
          <figure>
            {" "}
            <img
              src="https://res.cloudinary.com/dskmjlma4/image/upload/v1653235499/manufacturer-website-assignment/assets/shop-category/acessories_l4b53r.jpg"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">Accessories</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary">Purchase</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Category;
