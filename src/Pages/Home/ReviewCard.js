import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ReviewCard = ({ review }) => {
  // console.log(review);
  return (
    <div className="card bg-base-100 shadow-xl">
      <div className="card-body">
        <div className="avatar">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 mr-5">
            {review.img ? (
              <img src={review.img} alt="" />
            ) : (
              <div className="h-full text-6xl flex justify-center items-center">
                <FaUserCircle />
              </div>
            )}
          </div>
        </div>
        <h2 className="card-title">{review.name}</h2>
        <p>{review.review}</p>
        <p>Rating: {review.rating}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
