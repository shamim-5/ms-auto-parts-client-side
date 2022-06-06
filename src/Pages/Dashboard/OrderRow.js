import React from "react";
import { Link } from "react-router-dom";

const OrderRow = ({ order, refetch, index }) => {
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
            <p className="text-primary text-sm">
              TrxId: <span className="text-success text-xs">{order.transactionId}</span>
            </p>
          </Link>
        )}
      </td>
      <td>
        {order.paid && (
          <label htmlFor="my-modal" className=" text-success bg-transparent  hover:text-white">
            Paid
          </label>
        )}
      </td>
    </tr>
  );
};

export default OrderRow;
