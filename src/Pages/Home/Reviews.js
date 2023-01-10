import React, { useEffect, useState } from "react";
import Review from "./Review";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("https://ms-auto-parts-server-side.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);

  return (
    <div className="container md:text-2xl text-xl pt-12 pb-6">
      <h2 className="md:text-5xl text-3xl pb-3">Recommended Products </h2>
      <h3 className="pt-3 pb-6">Let the community help you shop</h3>
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4">
        {reviews.map((review) => (
          <Review key={review._id} review={review}></Review>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
