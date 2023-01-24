import { useRoutes } from "react-router-dom";
import { Home } from "../components/Home";
import { SinglePost } from "../components/SinglePost";

export const MainRoutes = () => {
  return useRoutes([
    { path: "/", element: <Home /> },
    { path: "photo/:id", element: <SinglePost /> },
  ]);
};
