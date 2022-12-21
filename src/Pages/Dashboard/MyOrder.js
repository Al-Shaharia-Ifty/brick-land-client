import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.ini";
import Loading from "../Shared/Loading";
import DeleteOrder from "./DeleteOrder";

const MyOrder = () => {
  const [deleteOrder, setDeleteOrder] = useState(null);
  const [order, setOrder] = useState([]);
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      const url = `https://mighty-temple-71110.herokuapp.com/order?buyer=${user.email}`;
      fetch(url, {
        method: "GET",
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
        .then((res) => {
          // console.log("res", res);
          if (res.status === 401 || res.status === 403) {
            signOut(auth);
            localStorage.removeItem("accessToken");
            navigate("/");
          }
          return res.json();
        })
        .then((data) => setOrder(data));
    }
  }, [user, navigate]);
  // console.log(order);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <h2 className="text-3xl my-5">My Orders: {order.length}</h2>
      <h2 className="text-3xl my-5">My Email: {user?.email}</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Address</th>
              <th>Phone</th>
              <th>Order</th>
              <th>Total Price</th>
              <th>Payment</th>
            </tr>
          </thead>
          <tbody>
            {order.map((a, index) => (
              <tr key={index}>
                <th>{index + 1}</th>
                <td>{a.productName}...</td>
                <td>{a.address}</td>
                <td>{a.phone}</td>
                <td>{a.order}</td>
                <td>${a.price}</td>
                <td>
                  {a.price && !a.paid && (
                    <>
                      <Link to={`/dashboard/payment/${a._id}`}>
                        <button className="btn btn-xs btn-success">Pay</button>
                      </Link>
                      <br />
                      <label
                        onClick={() => setDeleteOrder(a)}
                        htmlFor="delete-confirm-modal"
                        className="btn btn-xs btn-error"
                      >
                        delete
                      </label>
                    </>
                  )}
                  {a.price && a.paid === "pending" && (
                    <div>
                      <p className="text-yellow-500">Pending Order</p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{a.transactionId}</span>
                      </p>
                    </div>
                  )}
                  {a.paid === "success" && (
                    <div>
                      <p className="text-green-500">Order is done</p>
                      <p>
                        Transaction id:{" "}
                        <span className="text-success">{a.transactionId}</span>
                      </p>
                    </div>
                  )}
                </td>
                <td></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {deleteOrder && (
        <DeleteOrder
          deleteOrder={deleteOrder}
          setDeleteOrder={setDeleteOrder}
          order={order}
        />
      )}
    </div>
  );
};

export default MyOrder;
