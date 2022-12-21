import React, { useEffect, useState } from "react";
import DeleteOrder from "./DeleteOrder";
import ShippedOrder from "./ShippedOrder";

const ManageOrder = () => {
  const [shippedOrder, setShippedOrder] = useState(null);
  const [deleteOrder, setDeleteOrder] = useState(null);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    fetch("https://mighty-temple-71110.herokuapp.com/all_order", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setOrder(data));
  }, []);
  return (
    <div>
      <h2 className="text-3xl">Manage All Order</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>User Name</th>
              <th>Product Name</th>
              <th>Order</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {order.map((o, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{o.name}</td>
                <td>{o.productName}</td>
                <td>{o.order}</td>
                <td>${o.price}</td>
                <td>
                  {o.paid === "pending" && (
                    <>
                      <label
                        onClick={() => setShippedOrder(o)}
                        htmlFor="delete-confirm-modal"
                        className="btn btn-xs btn-success"
                      >
                        Shipped
                      </label>
                      <p className="text-green-500">User are Paid</p>
                    </>
                  )}
                  {!o.paid && (
                    <>
                      <label
                        onClick={() => setDeleteOrder(o)}
                        htmlFor="delete-confirm-modal"
                        className="btn btn-xs btn-error"
                      >
                        delete
                      </label>
                      <p className="text-yellow-400">Not payed yet.</p>
                    </>
                  )}
                  {o.paid === "success" && (
                    <p className="text-green-500">Order Successful</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {shippedOrder && (
        <ShippedOrder
          shippedOrder={shippedOrder}
          setShippedOrder={setShippedOrder}
        />
      )}
      {deleteOrder && (
        <DeleteOrder
          deleteOrder={deleteOrder}
          setDeleteOrder={setDeleteOrder}
        />
      )}
    </div>
  );
};

export default ManageOrder;
