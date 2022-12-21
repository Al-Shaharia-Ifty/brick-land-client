import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import auth from "../../firebase.ini";
import useMember from "../../Hooks/useMember";
import Loading from "../Shared/Loading";

const RequireMember = ({ children }) => {
  const [user, loading, error] = useAuthState(auth);
  const [member, memberLoading] = useMember(user);
  const location = useLocation();

  if (loading || memberLoading) {
    return <Loading />;
  }

  if (error) {
    console.log(error.message);
  }

  if (!user || !member) {
    signOut(auth);
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireMember;
