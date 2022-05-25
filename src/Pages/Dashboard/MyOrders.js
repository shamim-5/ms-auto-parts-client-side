import React from "react";
import useOrders from "../../hooks/useOrders";

const MyOrders = () => {
  const [orders] = useOrders();
  
 

  return (
    <div className="py-4">
      <h2 className="text-2xl pb-2">My Orders: {orders.length}</h2>
      <div className="overflow-x-auto ">
        <table className="table w-full text-primary">
          <thead className="">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Parts Name</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{order.name}</td>
                <td>{order.email}</td>
                <td>{order.partsName}</td>
                <td>{order.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrders;
