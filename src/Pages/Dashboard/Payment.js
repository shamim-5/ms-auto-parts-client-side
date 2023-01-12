import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L5RBWCRDfI3ayTuZ67okij2OwNgJM5msCte7IHYk2SDzW9i0HjCPYnLPrJvIPI5SkVGxmhCdOEG7TBHeV6YIfVm00zUe0h2Y5"
);

const Payment = () => {
  const { id } = useParams();

  const url = ` https://ms-auto-parts-server.onrender.com/order/${id}`;

  const { data: order, isLoading } = useQuery(["order", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  // console.log(order);
  return (
    <div className="text-primary container text-center grid md:grid-cols-2 grid-cols-1 gap-6 py-12">
      <div className="card bg-base-100 h-48 shadow-xl">
        <div className="card-body">
          <p className="font-bold">Hello, {order.name}</p>
          <h2 className="card-title mx-auto">Please Pay for {order.partsName}</h2>
          <p>Please pay: ${order.orderPrice}</p>
        </div>
      </div>
      <div className="card h-48 shadow-xl bg-base-100">
        <div className="card-body">
          <Elements stripe={stripePromise}>
            <CheckoutForm order={order} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;
