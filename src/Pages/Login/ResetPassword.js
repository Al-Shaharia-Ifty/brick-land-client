import React from "react";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import auth from "../../firebase.ini";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  const reset = async (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    await sendPasswordResetEmail(email);
    toast.success("Send Email");
    navigate("/login");
  };
  return (
    <div className="m-auto w-1/2">
      <h2 className="text-4xl text-bold text-center">Reset Your Password</h2>
      <form onSubmit={reset}>
        <input
          className="block m-auto w-3/5 h-[50px] bg-[#f3f3f3] rounded-md pl-2.5 text-lg mb-5 mt-5"
          name="email"
          type="email"
          placeholder="Enter Your Email"
          required
        />
        <button className="btn block m-auto my-4">Reset Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;
