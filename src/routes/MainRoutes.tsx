import { useRoutes } from "react-router-dom";
import { Home } from "../components/Home";

export const MainRoutes = () => {
  return useRoutes([{ path: "/", element: <Home /> }]);
};
