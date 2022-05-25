import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const HandleQuantity = ({
  order,
  setOrder,
  restQuantity,
  setRestQuantity,
  orderPrice,
  setOrderPrice,
  price,
  manageState,
  setManageState,
}) => {
  const { register, handleSubmit } = useForm();

  let newQuantity;
  const onSubmit = (data) => {
    if (restQuantity > 0) {
      newQuantity = parseInt(data.order) + order;
      setOrder(newQuantity);
      setRestQuantity(restQuantity - parseInt(data.order));
    }
  };

  const handleQuantity = () => {
    if (restQuantity > 0) {
      setOrder(order + 1);
      setRestQuantity(restQuantity - 1);
    }
  };

  useEffect(() => {
    setOrderPrice(order * price);
    if (order < 10) {
      setManageState(true);
    } else {
      setManageState(false);
    }
  }, [order]);
  return (
    <div>
      <h3 className="pb-3 text-lg font-sm ">
        Available Quantity:<span className="ml-1">{restQuantity}</span> Piece/Pieces
      </h3>
      <div className="flex justify-between">
        <h3 className="pb-3 text-lg font-sm">
          Quantity: <span>{order}</span>
        </h3>
        {isNaN(orderPrice) ? (
          <h3 className="pb-3 text-lg font-sm">
            Total Price: $ <span>00</span>
          </h3>
        ) : (
          <h3 className="pb-3 text-lg font-sm">
            Total Price: $ <span>{orderPrice}</span>
          </h3>
        )}
      </div>
      <div>
        {manageState && (
          <p className="text-primary">
            <small>Please order minimum 10 quantity</small>
          </p>
        )}
      </div>
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
              {...register("order")}
            />
            <input className="hover:text-primary  py-2 border px-2" type="submit" value="Add Quantity" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HandleQuantity;
