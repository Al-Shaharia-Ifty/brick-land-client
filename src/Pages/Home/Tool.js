import React from "react";
import { Link } from "react-router-dom";

const Tool = ({ tool }) => {
  const { _id, name, img, description, minimum, available, price } = tool;

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Name: {name}</h2>
        <p>Description: {description}</p>
        <p>
          Minimum Order: <span className="text-orange-500">{minimum}</span>
        </p>
        <p>
          Available: <span className="text-green-500">{available}</span>
        </p>
        <p>
          Price <span className="text-red-500">(per unit)</span>: ${price}
        </p>
        <div className="card-actions justify-end">
          <Link to={`product/${_id}`}>
            <button className="btn btn-primary text-white">BOok now</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Tool;
