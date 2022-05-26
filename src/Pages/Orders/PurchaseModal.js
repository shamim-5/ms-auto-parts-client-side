import React from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const PurchaseModal = ({ user, name, setManageState, orderQuantity }) => {
  const { _id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const order = {
      orderId: _id,
      partsName: name,
      quantity: orderQuantity,
      name: user.displayName,
      email: user.email,
      address: data.address,
      phone: data.phone,
    };

    fetch("https://afternoon-woodland-49409.herokuapp.com/order", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Order Placed Success`);
        } else {
          toast.error(`Order Already Placed`);
        }
      });

    setManageState(null);
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
              {...register("phone", {
                required: {
                  value: true,
                  message: "Please provide your phone number",
                },
              })}
            />
            <label className="label">
              {errors.phone?.type === "required" && (
                <span className="label-text-alt text-primary">{errors.phone.message}</span>
              )}
            </label>
            <input
              type="text"
              name="address"
              placeholder="Address"
              className="input input-bordered w-full max-w-xs bg-transparent border-white"
              {...register("address", {
                required: {
                  value: true,
                  message: "Please provide your address",
                },
              })}
            />
            <label className="label">
              {errors.address?.type === "required" && (
                <span className="label-text-alt text-primary">{errors.address.message}</span>
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
