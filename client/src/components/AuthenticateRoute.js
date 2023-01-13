import React from "react";
import { Outlet, Navigate } from "react-router";
const useAuth = () => {
  const user = localStorage.getItem("user");
  return user;
};

function AuthenticateRoute(props) {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Navigate to="/login" />;
}

export default AuthenticateRoute;
