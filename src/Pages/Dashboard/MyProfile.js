import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import useOrders from "../../hooks/useOrders";

import PrimaryButton from "../Shared/PrimaryButton";
import User from "./User";

const MyProfile = () => {
  const [orders] = useOrders();
  const [user, setUser] = useState({});

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const order = {
      orderId: user._id,
      partsName: user.name,
      quantity: user.quantity,
      name: user.displayName,
      email: user.email,
      address: data.address,
      phone: data.phone,
    };

    fetch("http://localhost:5000/order", {
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
  };
  return (
    <div className="grid md:grid-cols-2 grid-cols-1 gap-12 py-12 text-lg text-left">
      <div>
        {orders.map((order) => (
          <User key={order._id} order={order} setUser={setUser}></User>
        ))}
      </div>

      <div>
        <div>
          <div>
            <div className="modal-box relative bg-transparent border border-secondary bg-gradient-to-tr from-[#3D161A] to-black">
              <h3 className="font-bold text-xl text-center">Update Your Profile </h3>
              <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-3 justify-items-center mt-3">
                <input
                  type="text"
                  name="name"
                  readOnly
                  value={user?.name || ""}
                  className="input input-bordered w-full max-w-xs bg-transparent border-white"
                />
                <input
                  type="email"
                  name="email"
                  readOnly
                  value={user?.email || ""}
                  className="input input-bordered w-full max-w-xs bg-transparent border-white"
                />

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

                <input type="submit" value="Submit" className="btn btn-primary hover:bg-transparent w-full max-w-xs" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
