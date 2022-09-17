import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GeneralContext } from "../context/GeneralContext";

export const ProtectedRoute = ({ children }) => {
  const { token } = useContext(GeneralContext);

  if (localStorage.getItem('token') === null && token === null) {
    return <Navigate to="/" replace />;
  } else {
    return children;
  }
};
