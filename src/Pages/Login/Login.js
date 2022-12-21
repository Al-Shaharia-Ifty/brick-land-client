import React, { useEffect } from "react";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.ini";
import logo from "../../Images/Logo/logo1.png";
import Loading from "../Shared/Loading";
import "../../css/Login.css";
import useToken from "../../Hooks/useToken";

const Login = () => {
  // const [signInWithGoogle, googleUser, googleLoading, googleError] =
  //   useSignInWithGoogle(auth);
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  let signInErrorMessage;
  const navigate = useNavigate();
  let location = useLocation();
  const [token] = useToken(user);

  let from = location.state?.from?.pathname || "/";

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  useEffect(() => {
    if (token) {
      // console.log(token);
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

  if (loading) {
    return <Loading />;
  }
  if (error) {
    signInErrorMessage = <p className="text-red-500 mb-2">{error?.message}</p>;
  }
  const onSubmit = (data) => {
    // console.log(data);
    signInWithEmailAndPassword(data.email, data.password);
  };
  return (
    <div className="flex justify-center items-center h-screen ">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 box-shadow">
        <div className="hidden lg:col-span-1 px-10 py-12 lg:flex items-center bg-[#E2E8F0]">
          <div>
            <img className="" src={logo} alt="" />
          </div>
        </div>
        <div className="col-span-2 px-5 py-5 lg:px-10 lg:py-12 flex justify-center">
          <div>
            <h2 className="text-center text-3xl font-bold ">Login</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full max-w-xs"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "Email is Required",
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: "Provide a valid Email",
                    },
                  })}
                />
                <label className="label">
                  {errors.email?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                  {errors.email?.type === "pattern" && (
                    <span className="label-text-alt text-red-500">
                      {errors.email.message}
                    </span>
                  )}
                </label>
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  className="input input-bordered w-full max-w-xs"
                  {...register("password", {
                    required: {
                      value: true,
                      message: "Password is Required",
                    },
                    minLength: {
                      value: 6,
                      message: "Must be 6 characters or longer",
                    },
                  })}
                />
                <label className="label">
                  {errors.password?.type === "required" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                  {errors.password?.type === "minLength" && (
                    <span className="label-text-alt text-red-500">
                      {errors.password.message}
                    </span>
                  )}
                </label>
              </div>
              {signInErrorMessage}
              <input
                className="btn w-full max-w-xs"
                value="login"
                type="submit"
              />
            </form>
            <p>
              <small>
                Don't have any account?{" "}
                <Link to="/sign_up" className="text-secondary">
                  Create New Account
                </Link>{" "}
              </small>
            </p>
            <p>
              <small>
                Are you forget your password?{" "}
                <Link to="/reset_pass" className="text-secondary">
                  Reset Password.
                </Link>{" "}
              </small>
            </p>
            {/* <div className="divider">OR</div>
            <button
              onClick={() => signInWithGoogle()}
              className="btn btn-outline w-full"
            >
              Sign in with Google
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
