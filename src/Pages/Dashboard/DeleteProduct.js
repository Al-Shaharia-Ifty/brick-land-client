import React from "react";
import { toast } from "react-toastify";

const DeleteProduct = ({ deleteProduct, setDeleteProduct }) => {
  const { name, _id } = deleteProduct;
  const handleDelete = () => {
    fetch(`https://mighty-temple-71110.herokuapp.com/tool/${_id}`, {
      method: "DELETE",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setDeleteProduct(null);
        toast.success("Delete Product Successfully");
      });
  };
  return (
    <div>
      <input
        type="checkbox"
        id="delete-confirm-modal"
        className="modal-toggle"
      />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-red-500 text-lg">
            Are you sure you want to delete product!
          </h3>
          <p className="py-4">{name}</p>
          <div className="modal-action">
            <button
              onClick={() => handleDelete()}
              className="btn  btn-xs btn-error"
            >
              delete
            </button>
            <label htmlFor="delete-confirm-modal" className="btn btn-xs">
              Cancel
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteProduct;
