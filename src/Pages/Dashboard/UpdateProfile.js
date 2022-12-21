import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../firebase.ini";
import Loading from "../Shared/Loading";

const UpdateProfile = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) {
    return <Loading />;
  }
  const handleUpdate = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const education = e.target.education.value;
    const address = e.target.address.value;
    const phone = e.target.phone.value;
    const linkIn = e.target.linkIn.value;
    const updateProfile = {
      name: name,
      email: email,
      education: education,
      location: address,
      phone: phone,
      linkIn: linkIn,
    };
    fetch(
      `https://mighty-temple-71110.herokuapp.com/updateProfile/${user.email}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(updateProfile),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        toast.success("Profile update done");
        e.target.reset();
      });
  };
  return (
    <div className="flex justify-center mt-5">
      <div className="card w-96 bg-base-100 shadow-xl my-5 mx-5">
        <div className="card-body ">
          <h2 className="text-3xl text-secondary">Update Profile!</h2>
          <form onSubmit={handleUpdate}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs my-2"
              value={user?.displayName}
              readOnly
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs my-2"
              value={user?.email}
              readOnly
            />
            <input
              type="text"
              name="education"
              placeholder="Education"
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="text"
              name="address"
              placeholder="Location"
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs my-2"
            />
            <input
              type="text"
              name="linkIn"
              placeholder="LinkIn Profile Link"
              className="input input-bordered w-full max-w-xs my-2"
            />
            <button className="btn w-1/2 flex justify-center">Update</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;
