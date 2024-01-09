import { Navigate } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Favorites from "../pages/Favorites";

export const mainRoute = {
  path: "/",
  element: <App />,
  errorElement: <Navigate to={"/"} />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "Favorites",
      element: <Favorites />,
    },
  ],
};
