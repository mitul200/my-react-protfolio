import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProjectsDetails from "./component/projectsDetails/ProjectsDetails.jsx";
import ToursimDetails from "./component/ProjectsDetailsToursim.jsx/ToursimDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/details", element: <ProjectsDetails /> },
  { path: "/detailsToursim", element: <ToursimDetails /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
