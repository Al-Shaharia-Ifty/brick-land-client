import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.ini";
import Loading from "../Shared/Loading";

const MyProfile = () => {
  const [user, loading] = useAuthState(auth);
  const [profile, setProfile] = useState([]);

  //
  useEffect(() => {
    fetch(
      `https://mighty-temple-71110.herokuapp.com/updateProfile/${user.email}`,
      {
        headers: {
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setProfile(data[0]));
  }, [user]);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="flex justify-center mt-5">
      <div className="card w-96 bg-base-100 shadow-xl my-5 mx-12">
        <div className="card-body">
          <h2 className="card-title text-4xl">My Profile</h2>
          <p className="text-2xl">
            Name: <span className=" text-primary">{profile?.name}</span>
          </p>
          <p>
            Email: <span className="text-secondary">{profile?.email}</span>
          </p>
          <p>
            Education: <span className="">{profile?.education}</span>
          </p>
          <p>
            Location: <span className="">{profile?.location}</span>
          </p>
          <p>
            Phone Number: <span className="">{profile?.phone}</span>
          </p>
          <p>
            LinkIn Profile Link: <span className="">{profile?.linkIn}</span>
          </p>
          <Link to={`/dashboard/updateProfile`}>
            <button className="btn w-1/2 flex justify-center">Update</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
