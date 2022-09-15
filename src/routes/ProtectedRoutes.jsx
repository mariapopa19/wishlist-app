import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { GeneralContext } from "../context/GeneralContext";

export const ProtectedRoute = ({ children }) => {
  const { token } = useContext(GeneralContext);

  if (token === null) {
    console.log("from protected", token);
    return <Navigate to="/" replace />;
  } else {
    console.log("from protected", token);
    return children;
  }
};
