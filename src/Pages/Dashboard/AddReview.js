import React, { useState } from "react";
import { toast } from "react-toastify";

const AddReview = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const handleReview = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const review = e.target.review.value;
    const rating = e.target.rating.value;
    const ratingNumber = parseInt(rating);
    if (ratingNumber < 1 || ratingNumber > 5) {
      setErrorMessage(
        <p className="text-red-500">Please Rating (1-5) numbers.</p>
      );
    } else {
      const reviews = {
        name: name,
        review: review,
        rating: rating,
      };
      fetch("https://mighty-temple-71110.herokuapp.com/reviews", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(reviews),
      })
        .then((res) => res.json())
        .then((data) => {
          setErrorMessage("");
          e.target.reset();
          toast.success("Add review successfully");
        });
    }
    console.log(name, review, ratingNumber);
  };
  return (
    <div className="w-1/2 mx-auto mt-5">
      <div className="card bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">Add Review</h2>
          <div className="mx-auto">
            <form onSubmit={handleReview}>
              <h2>Name</h2>
              <input
                className="block input input-bordered w-full max-w-xs"
                type="text"
                name="name"
                placeholder="Your name"
                required
              />
              <h2>Review</h2>
              <textarea
                type="text"
                name="review"
                placeholder="Your review"
                className="textarea textarea-bordered mt-3"
                required
              />
              <h2>Rating (1-5)</h2>
              <input
                type="number"
                name="rating"
                placeholder="rating"
                className="block input input-bordered w-full max-w-xs"
                required
              />
              {errorMessage}
              <button className="btn block mx-auto mt-3">submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddReview;
