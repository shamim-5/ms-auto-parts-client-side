import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order, refetch, index }) => {
  const [price, setPrice] = useState(100);
  useEffect(() => {
    const totalPrice = order.quantity * price;
    setPrice(totalPrice);
  }, []);
  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{order.name}</td>
      <td>{order.email}</td>
      <td>{order.partsName}</td>
      <td>{order.quantity}</td>
      <td>{order.orderPrice}</td>
      <td>
        {order.orderPrice && !order.paid && (
          <Link to={`/dashboard/payment/${order._id}`}>
            {" "}
            <button className="btn btn-success btn-xs">pay</button>
          </Link>
        )}
        {order.orderPrice && order.paid && (
          <Link to={`/dashboard/payment/${order._id}`}>
            {" "}
            <p className="text-success">paid</p>
            <p className="text-primary text-sm">
              Transaction Id: <span className="text-success text-xs">{order.transactionId}</span>
            </p>
          </Link>
        )}
      </td>
      <td>
        <label htmlFor="my-modal" className=" btn btn-primary btn-sm bg-transparent text-primary hover:text-white">
          Paid/Shipped
        </label>
      </td>
    </tr>
  );
};

export default OrderRow;
