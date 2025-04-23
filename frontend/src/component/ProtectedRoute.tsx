import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { store } from "../store"; // adjust path as needed

interface ProtectedRouteProps {
  element: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ element }) => {
  const isLoggedIn = useSelector(
    (state: ReturnType<typeof store.getState>) => state.auth.isAuthenticated
  );

  return isLoggedIn ? element : <Navigate to="/login" />;
};

export default ProtectedRoute;
