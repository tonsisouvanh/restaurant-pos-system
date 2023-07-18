import React, { useContext } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { UserContext } from "../../context/UserContext"; // Path to your ApiContext

const PrivateRoute = ({ path, element: Element }) => {
  const { user } = useContext(UserContext);

  // Define the protected route using useRoutes hook
  const routes = useRoutes([
    {
      path: path,
      element: user ? <Element /> : <Navigate to="/login" replace />,
    },
  ]);

  return routes;
};

export default PrivateRoute;
