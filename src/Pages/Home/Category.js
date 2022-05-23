import React from "react";
import TransparentButton from "../Shared/TransparentButton";

const Category = () => {
  return (
    <div className="container">
      <div className="text-white py-12">
        <div className="flex flex-row">
          <div className="flex-1">
            <h2 className="text-4xl">Shop by Category</h2>
          </div>
          <div className="flex-none">
            <TransparentButton>{"Shop"}</TransparentButton>
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
            </div>
          </div>
        </div>
      </div>
      <div className="pt-12">
        <h2 className="text-4xl text-start pb-6">Brands We Trust</h2>
        <div className="divide-x text-sm text-white md:text-2xl  border border-[#6d6d6d] flex flex-row justify-around items-center uppercase">
          <div className="md:px-16 md:py-12">drivilux</div>
          <div className="md:px-16 md:py-12">autopartse</div>
          <div className="md:px-16 md:py-12">wheelbu</div>
          <div className="md:px-16 md:py-12">motorks</div>
          <div className="md:px-16 md:py-12">drivery</div>
        </div>
      </div>
    </div>
  );
};

export default Category;
