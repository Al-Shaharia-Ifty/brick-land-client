import React from "react";
import { toast } from "react-toastify";

const MakeAdmin = ({ makeAdmin, setMakeAdmin }) => {
  const { name, _id } = makeAdmin;
  const handleShipped = () => {
    fetch(`https://mighty-temple-71110.herokuapp.com/makeAdmin/${_id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setMakeAdmin(null);
        toast.success("Successful make a new admin");
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
          <h3 className="text-primary text-lg">
            Are you sure you make {name} is admin!
          </h3>
          <div className="modal-action">
            <button
              onClick={() => handleShipped()}
              className="btn  btn-xs btn-success"
            >
              Admin
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

export default MakeAdmin;
