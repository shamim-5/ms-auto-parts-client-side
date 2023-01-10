import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

const AddProduct = () => {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    // console.log(data);
    const url = `https://ms-auto-parts-server-side.vercel.app/product`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Product Added Success`);
        } else {
          toast.error(`Product Added Failed`);
        }
      });
  };
  return (
    <div className="w-1/2 mx-auto">
      <h2 className="uppercase text-center font-bold text-2xl mb-2 mt-4 text-primary">Add New Products</h2>
      <form className="flex flex-col text-secondary" onSubmit={handleSubmit(onSubmit)}>
        <input className="mb-2 rounded-md border-2" placeholder="Product Name" type="text" {...register("name")} />
        <textarea className="mb-2 rounded-md border-2" placeholder="Details" {...register("details")} />
        <input className="mb-2 rounded-md border-2" placeholder="Price" type="number" {...register("price")} />
        <input
          className="mb-2 rounded-md border-2"
          placeholder="Available Quantity"
          type="number"
          {...register("available")}
        />
        <input className="mb-2 rounded-md border-2" placeholder="Photo URL" type="text" {...register("img")} />
        <input
          className="my-6 text-white bg-primary hover:bg-transparent hover:text-primary border py-2 rounded text-xl"
          type="submit"
          value="Add Product"
        />
      </form>
    </div>
  );
};

export default AddProduct;
