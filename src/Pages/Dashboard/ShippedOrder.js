import { toast } from "react-toastify";

const ShippedOrder = ({ shippedOrder, setShippedOrder }) => {
  const { productName, _id } = shippedOrder;
  const handleShipped = () => {
    fetch(`https://mighty-temple-71110.herokuapp.com/order_success/${_id}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setShippedOrder(null);
        toast.success("Shipped Successful");
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
            Are you sure Shipping the order!
          </h3>
          <p className="py-4">{productName}</p>
          <div className="modal-action">
            <button
              onClick={() => handleShipped()}
              className="btn  btn-xs btn-success"
            >
              Shipped
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

export default ShippedOrder;
