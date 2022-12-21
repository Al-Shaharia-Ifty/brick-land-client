import React, { useState } from "react";
import { useParams } from "react-router-dom";
import useProductDetails from "../../Hooks/useProductDetails";
import OrderModal from "./OrderModal";

const ProductDetails = () => {
  const [order, setOrder] = useState(null);
  const { id } = useParams();
  const [product] = useProductDetails(id);
  const { name, img, description, minimum, available, price } = product;

  return (
    <div>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} className="max-w-sm rounded-lg shadow-2xl" alt="" />
          <div>
            <h1 className="text-5xl font-bold">{name}</h1>
            <p className="pt-6">Description: {description}</p>
            <p>
              Minimum Order: <span className="text-orange-500">{minimum}</span>
            </p>
            <p>
              Available: <span className="text-green-500">{available}</span>
            </p>
            <p>
              Price <span className="text-red-500">(per unit)</span>: ৳{price}
            </p>
            <label
              onClick={() => setOrder({ hello: "hello" })}
              htmlFor="orderModal"
              className="btn btn-primary text-white mt-5"
            >
              Order now
            </label>
            {order && <OrderModal setOrder={setOrder}></OrderModal>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
