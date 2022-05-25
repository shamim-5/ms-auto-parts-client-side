import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const AllUsers = () => {
  const [orders, setOrders] = useState([]);
  const [user] = useAuthState(auth);

  useEffect(() => {
    if (user) {
      fetch(`http://localhost:5000/orders`)
        .then((res) => {
          console.log("res", res);
          return res.json();
        })
        .then((data) => {
          setOrders(data);
        });
    }
  }, [user]);
  return (
    <div className="py-4">
      <h2 className="text-2xl pb-2">All Users: {orders.length}</h2>
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

export default AllUsers;
