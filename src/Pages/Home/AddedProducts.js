import React, { useEffect, useState } from "react";
import AddedProduct from "./AddedProduct";

const AddedProducts = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://ms-auto-parts-server-side.vercel.app/product")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className="container text-white pt-6">
      <div className="grid md:grid-cols-5 grid-cols-1 gap-6 pt-6">
        {products.map((product) => (
          <AddedProduct
            products={products}
            setProducts={setProducts}
            children={children}
            key={product._id}
            product={product}
          ></AddedProduct>
        ))}
      </div>
    </div>
  );
};

export default AddedProducts;
