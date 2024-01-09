import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home/Home";
import Couture from "../pages/Couture/Couture";
import Customize from "../pages/Customize/Customize";
import Bag from "../pages/Bag/Bag";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/couture",
        element: <Couture />,
      },
      {
        path: "/customize/:imageId",
        element: <Customize />,
      },
      {
        path: "/bag",
        element: <Bag />,
      },
    ],
  },
]);
export default router;
