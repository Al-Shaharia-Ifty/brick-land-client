import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import DeleteProduct from "./DeleteProduct";

const ManageProduct = () => {
  const [deleteProduct, setDeleteProduct] = useState(null);
  const { data: products, isLoading } = useQuery("products", () =>
    fetch("https://mighty-temple-71110.herokuapp.com/tools", {
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-3xl">Manage All Product</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Image</th>
              <th>Minimum</th>
              <th>Available</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{p.name}...</td>
                <td>
                  <div className="avatar">
                    <div className="w-20 rounded">
                      <img src={p.img} alt="Tailwind-CSS-Avatar-component" />
                    </div>
                  </div>
                </td>
                <td>{p.minimum}</td>
                <td>{p.available}</td>
                <td>${p.price}</td>
                <td>
                  {p && (
                    <>
                      <label
                        onClick={() => setDeleteProduct(p)}
                        htmlFor="delete-confirm-modal"
                        className="btn btn-xs btn-error"
                      >
                        Delete
                      </label>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteProduct && (
        <DeleteProduct
          deleteProduct={deleteProduct}
          setDeleteProduct={setDeleteProduct}
        />
      )}
    </div>
  );
};

export default ManageProduct;
