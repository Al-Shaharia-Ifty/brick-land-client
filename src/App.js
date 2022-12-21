import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import UpdateProfile from "./Pages/Dashboard/UpdateProfile";
import ManageProduct from "./Pages/Dashboard/ManageProduct";
import ProductDetails from "./Pages/Home/ProductDetails";
import ManageOrder from "./Pages/Dashboard/ManageOrder";
import ResetPassword from "./Pages/Login/ResetPassword";
import RequireMember from "./Pages/Login/RequireMember";
import RequireAdmin from "./Pages/Login/RequireAdmin";
import AddProduct from "./Pages/Dashboard/AddProduct";
import RequireAuth from "./Pages/Login/RequireAuth";
import Dashboard from "./Pages/Dashboard/Dashboard";
import MyProfile from "./Pages/Dashboard/MyProfile";
import AddReview from "./Pages/Dashboard/AddReview";
import MyPortfolio from "./Pages/Home/MyPortfolio";
import MakeAdmin from "./Pages/Dashboard/AllUser";
import MyOrder from "./Pages/Dashboard/MyOrder";
import Payment from "./Pages/Dashboard/Payment";
import NotFound from "./Pages/Home/NotFound";
import Navbar from "./Pages/Shared/Navbar";
import SignUp from "./Pages/Login/SignUp";
import Login from "./Pages/Login/Login";
import Blogs from "./Pages/Home/Blogs";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/portfolio" element={<MyPortfolio />} />
        <Route
          path="/product/:id"
          element={
            <RequireAuth>
              <ProductDetails />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />}></Route>
          <Route
            path="payment/:id"
            element={
              <RequireMember>
                <Payment />
              </RequireMember>
            }
          ></Route>
          <Route path="updateProfile" element={<UpdateProfile />}></Route>
          <Route
            path="orders"
            element={
              <RequireMember>
                <MyOrder />
              </RequireMember>
            }
          ></Route>
          <Route
            path="review"
            element={
              <RequireMember>
                <AddReview />
              </RequireMember>
            }
          ></Route>
          <Route
            path="manageOrder"
            element={
              <RequireAdmin>
                <ManageOrder />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="add_product"
            element={
              <RequireAdmin>
                <AddProduct />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="admin"
            element={
              <RequireAdmin>
                <MakeAdmin />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="manage_product"
            element={
              <RequireAdmin>
                <ManageProduct />
              </RequireAdmin>
            }
          ></Route>
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/reset_pass" element={<ResetPassword />} />
        <Route path="/sign_up" element={<SignUp />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
