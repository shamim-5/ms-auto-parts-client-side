import React from "react";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";
import OrderRow from "./OrderRow";

const ManageOrder = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(` https://ms-auto-parts-server.onrender.com/orders`, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading></Loading>;
  }

  return (
    <div>
      <h2 className="text-3xl py-6 text-primary">Manage All Orders: {orders.length}</h2>
      <div className="py-4">
        <div className="overflow-x-auto ">
          <table className="table w-full text-primary">
            <thead className="">
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Parts Name</th>
                <th>Quantity</th>
                <th>Total Price</th>
                <th>Payment</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <OrderRow key={order._id} index={index} order={order} refetch={refetch}></OrderRow>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageOrder;
