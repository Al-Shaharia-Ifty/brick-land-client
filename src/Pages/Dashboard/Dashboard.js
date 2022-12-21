import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, Outlet } from "react-router-dom";
import auth from "../../firebase.ini";
import useMember from "../../Hooks/useMember";
import useAdmin from "../../Hooks/useAdmin";
import Loading from "../Shared/Loading";

const Dashboard = () => {
  const [user, loading] = useAuthState(auth);
  const [member] = useMember(user);
  const [admin] = useAdmin(user);

  if (loading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="drawer drawer-mobile">
        <input
          id="dashboard-sidebar"
          type="checkbox"
          className="drawer-toggle"
        />
        <div className="drawer-content">
          {/* <h2 className="text-4xl text-secondary">My Profile</h2> */}
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-55 bg-base-100 text-base-content">
            {member && (
              <>
                <li>
                  <Link to="/dashboard/orders">My Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/review">Add a Review</Link>
                </li>
              </>
            )}
            {admin && (
              <>
                <li>
                  <Link to="/dashboard/manageOrder">Manage All Orders</Link>
                </li>
                <li>
                  <Link to="/dashboard/add_product">Add a Product</Link>
                </li>
                <li>
                  <Link to="/dashboard/admin">All User</Link>
                </li>
                <li>
                  <Link to="/dashboard/manage_product">Manage Product</Link>
                </li>
              </>
            )}
            <li>
              <Link to="/dashboard">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
