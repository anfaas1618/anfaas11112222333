import React from "react";
import { useRoutes } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
import Typography from "pages/Typography";
import ColorStyles from "pages/ColorStyles";
import Components from "pages/Components";
import Cover from "pages/Cover";

const ProjectRoutes = () => {
  let element = useRoutes([
    { path: "/", element: <Home /> },
    { path: "*", element: <NotFound /> },
    {
      path: "typography",
      element: <Typography />,
    },
    {
      path: "colorstyles",
      element: <ColorStyles />,
    },
    {
      path: "components",
      element: <Components />,
    },
    {
      path: "cover",
      element: <Cover />,
    },
  ]);

  return element;
};

export default ProjectRoutes;
