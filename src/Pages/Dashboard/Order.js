import React from "react";

const Order = ({ review }) => {
  const { user, details, react } = review;

  return (
    <div className="text-lg border p-3 m-2 rounded-sm border-primary ">
      <h3>User Name: {user}</h3>
      <h3>Comments: {details}</h3>

      <h3>
        Ratings: <span className="text-primary">{react}</span>{" "}
      </h3>
    </div>
  );
};

export default Order;
