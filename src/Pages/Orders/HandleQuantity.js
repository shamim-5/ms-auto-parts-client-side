import React, { useState } from "react";
import { useForm } from "react-hook-form";

const HandleQuantity = () => {
  const { register, handleSubmit } = useForm();

  const [quantity, setQuantity] = useState(0);
  const [restQuantity, setRestQuantity] = useState(100);

  let newQuantity;
  const onSubmit = (data) => {
    if (restQuantity > 0) {
      newQuantity = parseInt(data.quantity) + quantity;
      setQuantity(newQuantity);
      setRestQuantity(restQuantity - parseInt(data.quantity));
    }
  };

  const handleQuantity = () => {
    if (restQuantity > 0) {
      setQuantity(quantity + 1);
      setRestQuantity(restQuantity - 1);
    }
  };

  return (
    <div>
      <h3 className="pb-3 text-lg font-sm ">
        Available Quantity:<span className="ml-1">{restQuantity}</span> Piece/Pieces
      </h3>
      <h3 className="pb-3 text-lg font-sm">
        Quantity: <span>{quantity}</span>
      </h3>
      <div className="flex justify-start items-center text-slate-700 my-6  text-center text-2xl">
        <div className="mr-6  ">
          <button onClick={() => handleQuantity()} className="rounded-tl-lg btn btn-primary">
            ADD+
          </button>
        </div>
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              className=" bg-white text-primary md:w-3/5 w-16 rounded-tl-lg py-2  pl-6"
              type="number"
              placeholder="Please Add Quantity"
              {...register("quantity")}
            />
            <input className="hover:text-primary  py-2 border px-2" type="submit" value="Add Quantity" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HandleQuantity;
