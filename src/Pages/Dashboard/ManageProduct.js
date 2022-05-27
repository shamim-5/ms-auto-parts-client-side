import React from "react";
import AddedProducts from "../Home/AddedProducts";
import SpareParts from "../SpareParts/SpareParts";

const ManageProduct = () => {
  return (
    <div>
      <h2 className="text-3xl py-6 text-primary">Manage All Product</h2>
      <AddedProducts>{`Delete`}</AddedProducts>
    </div>
  );
};

export default ManageProduct;
