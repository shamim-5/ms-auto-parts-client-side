import React from "react";
import useOrders from "../../hooks/useOrders";
import MyOrderRow from "./MyOrderRow";

const MyOrders = () => {
  const [orders, setOrders] = useOrders();

  const cancelOrder = (id) => {
    console.log(id);

    const url = `https://afternoon-woodland-49409.herokuapp.com/order/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const remainging = orders.filter((order) => order._id !== id);
        setOrders(remainging);
      });
  };

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
              <th>Payment</th>
              <th>Cancel</th>
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
                <td>
                  <label
                    htmlFor="my-modal"
                    className=" btn btn-primary btn-sm bg-transparent text-primary hover:text-white"
                  >
                    Pay
                  </label>
                </td>
                <td>
                  <label
                    htmlFor="my-modal"
                    onClick={() => cancelOrder(order._id)}
                    className=" btn btn-primary btn-sm hover:text-primary hover:bg-transparent"
                  >
                    Cancel
                  </label>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <MyOrderRow orders={orders} setOrders={setOrders}></MyOrderRow>
    </div>
  );
};

export default MyOrders;
