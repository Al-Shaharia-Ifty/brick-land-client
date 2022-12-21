import React, { useEffect, useState } from "react";
import MakeAdmin from "./MakeAdmin";

const AllUser = () => {
  const [makeAdmin, setMakeAdmin] = useState(null);
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    fetch("https://mighty-temple-71110.herokuapp.com/all_user", {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => setUserInfo(data));
  }, []);

  return (
    <div>
      <h2 className="text-3xl">All User</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>User Name</th>
              <th>User Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {userInfo.map((u, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>
                  {u.role === "member" && (
                    <>
                      <label
                        onClick={() => setMakeAdmin(u)}
                        htmlFor="delete-confirm-modal"
                        className="btn btn-xs btn-success"
                      >
                        Admin
                      </label>
                    </>
                  )}
                  {u.role === "admin" && (
                    <p className="text-green-500">Already Admin</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {makeAdmin && (
        <MakeAdmin makeAdmin={makeAdmin} setMakeAdmin={setMakeAdmin} />
      )}
    </div>
  );
};

export default AllUser;
