import React from "react";

const OrderRow = ({ order, refetch, index }) => {
  return (
    <tr key={index}>
      <th>{index + 1}</th>
      <td>{order.name}</td>
      <td>{order.email}</td>
      <td>{order.partsName}</td>
      <td>{order.quantity}</td>
      <td>
        <label htmlFor="my-modal" className=" btn btn-primary btn-sm bg-transparent text-primary hover:text-white">
          Paid/Shipped
        </label>
      </td>
    </tr>
  );
};

export default OrderRow;
