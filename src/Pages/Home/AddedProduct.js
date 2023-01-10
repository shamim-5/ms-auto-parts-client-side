import React from "react";

const AddedProduct = ({ products, setProducts, product, children }) => {
  const { _id, name, img, details, quantity, available, price } = product;

  const deleteProduct = (id) => {
    const url = `https://ms-auto-parts-server-side.vercel.app/product/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        const remainging = product.filter((product) => product._id !== id);
        setProducts(remainging);
      });
  };

  return (
    <div>
      <div className="card card-compact shadow-xl rounded-none">
        <figure>
          <img src={img} alt="parts" />
        </figure>
        <div className="card-body text-[#cbd5e1]">
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
