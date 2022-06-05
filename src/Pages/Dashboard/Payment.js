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
  const [price, setPrice] = useState(100);

<<<<<<< HEAD
  const url = `http://localhost:5000/order/${id}`;
=======
  const url = ` https://afternoon-woodland-49409.herokuapp.com/order/${id}`;
>>>>>>> 2ddb1dc (some bug fixed)

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
    <div className="text-primary container">
      <div className="card bg-base-100 max-w-md shadow-xl my-12">
        <div className="card-body">
          <p className="font-bold">Hello, {order.name}</p>
          <h2 className="card-title">Please Pay for {order.partsName}</h2>
          <p>Please pay: ${order.orderPrice}</p>
        </div>
      </div>
      <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
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
