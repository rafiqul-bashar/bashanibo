import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "./useAuth";
const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useAuth();
  let location = useLocation();
  if (user.uid) {
    return children;
  }
  return <Navigate to="/login" state={{ from: location }} />;
};

export default PrivateRoute;
