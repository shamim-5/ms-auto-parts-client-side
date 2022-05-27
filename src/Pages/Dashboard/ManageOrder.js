import React from "react";
import MyOrders from "./MyOrders";
import Loading from "../Shared/Loading";
import { useQuery } from "react-query";
import OrderRow from "./OrderRow";

const ManageOrder = () => {
  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`https://afternoon-woodland-49409.herokuapp.com/order/all`).then((res) => res.json())
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
