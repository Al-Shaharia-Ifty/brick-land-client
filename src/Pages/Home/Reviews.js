import React, { useEffect, useState } from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://mighty-temple-71110.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div className="my-5">
      <h2 className="text-center text-4xl text-primary font-bold my-5">
        Reviews
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mx-5">
        {reviews.slice(0, 9).map((r) => (
          <ReviewCard key={r._id} review={r} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
