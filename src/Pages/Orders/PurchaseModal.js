import React from "react";
import { useForm } from "react-hook-form";

const PurchaseModal = ({ user, name }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (event) => {
    event.preventDefault();
    const quantity = event.target.quantity.value;
    console.log(name, quantity);
  };
  return (
    <div>
      <input type="checkbox" id="purchase-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-transparent border border-secondary bg-gradient-to-tr from-[#3D161A] to-black">
          <label htmlFor="purchase-modal" className="btn btn-sm btn-circle bg-transparent absolute right-2 top-2">
            ✕
          </label>
          <h3 className="font-bold text-lg ">Spare Parts: {name} </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-3 justify-items-center mt-2">
            <input
              type="text"
              name="name"
              readOnly
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs bg-transparent border-white"
            />
            <input
              type="email"
              name="email"
              readOnly
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs bg-transparent border-white"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs bg-transparent border-white"
            />
            <input
              type="number"
              name="quantity"
              placeholder="Quantity Ex* 1, 2, 3*"
              className="input input-bordered w-full max-w-xs bg-transparent border-white"
              {...register("quantity", {
                required: {
                  value: true,
                  message: "Please provide valid quantity",
                },
                min: 10,
              })}
            />
            <label className="label">
              {errors.quantity?.type === "required" && (
                <span className="label-text-alt text-primary">{errors.quantity.message}</span>
              )}
            </label>
            <input type="submit" value="Submit" className="btn btn-primary hover:bg-transparent w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default PurchaseModal;
