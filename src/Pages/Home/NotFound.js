import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex justify-center items-center">
      <div>
        <h2 className="text-6xl text-red-500 my-8">404 Page Not Found</h2>
        <Link className="flex justify-center" to="/">
          <button className="btn btn-outline btn-error">Go to Home Page</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
