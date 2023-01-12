import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import auth from "../../firebase.init";
import useOrders from "../../hooks/useOrders";
import useUserReview from "../../hooks/useUserReview";
import Order from "./Order";

const MyReview = () => {
  const [user] = useAuthState(auth);
  const [myReview] = useUserReview();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => {
    const review = {
      user: user.displayName,
      email: user.email,
      details: data.comments,
      react: data.ratings,
    };

    fetch("https://ms-auto-parts-server.onrender.com/review", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          toast(`Order Placed Success`);
        } else {
          toast.error(`Order Already Placed`);
        }
      });
    console.log(review);
  };

  return (
    <div className="container py-3 grid md:grid-cols-2 grid-cols-1">
      <div className="text-left">
        <h2 className="text-2xl m-2 text-[#0e7490] text-center">My Review</h2>
        {myReview.map((review) => (
          <Order key={review._id} review={review}></Order>
        ))}
      </div>
      <div>
        <div className="modal-box relative bg-transparent border border-secondary bg-gradient-to-tr from-[#3D161A] to-black">
          <h3 className="font-bold text-xl text-center">Add Review </h3>
          <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 gap-3 justify-items-center mt-3">
            <input
              type="text"
              name="name"
              readOnly
              value={user?.displayName || ""}
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
              name="comments"
              placeholder="Comments"
              className="input input-bordered w-full max-w-xs bg-transparent border-white"
              {...register("comments", {
                required: {
                  value: true,
                  message: "Please add a comments",
                },
              })}
            />
            <label className="label">
              {errors.comments?.type === "required" && (
                <span className="label-text-alt text-primary">{errors.comments.message}</span>
              )}
            </label>
            <div class="form-control w-full max-w-xs text-primary ">
              <label class="label">
                <span class="label-text text-primary">Ratings</span>
              </label>
              <select {...register("ratings")} class="select  select-bordered bg-transparent">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
              </select>
            </div>

            <input type="submit" value="Add Ratings" className="btn btn-primary hover:bg-transparent w-full max-w-xs" />
          </form>
        </div>
      </div>
    </div>
  );
};

export default MyReview;
