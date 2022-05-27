import React from "react";
import { toast } from "react-toastify";

const AddedProduct = ({ products, setProducts, product, children }) => {
  const { _id, name, img, details, quantity, available, price } = product;
  console.log(product);

  const deleteProduct = (id) => {
    console.log(id);

    const url = `https://afternoon-woodland-49409.herokuapp.com/product/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remainging = product.filter((product) => product._id !== id);
        setProducts(remainging);
        toast(`Order Placed Success`);
      });
  };

  return (
    <div>
      <div className="card card-compact shadow-xl rounded-none">
        <figure>
          <img src={img} alt="parts" />
        </figure>
        <div className="card-body text-[#cbd5e1]">
          {/* <h2 className="card-title text-sm text-[#cbd5e1] leading-none">{name}</h2> */}
          <h3 className="text-sm font-normal mb-2 leading-none">
            Price:<span className="font-thin"> ${price}</span>
          </h3>
          <div className="card-actions justify-start">
            <button
              onClick={() => deleteProduct(_id)}
              className="btn btn-primary w-full rounded-full bg-transparent border-white capitalize"
            >
              {children}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddedProduct;
