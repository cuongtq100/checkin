import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "../home";
import Checkin from "../checkin";
import { path } from "./path";

const router = createBrowserRouter([
  {
    path: path.Home,
    element: <Home />,
  },
  {
    path: path.Checkin,
    element: <Checkin />,
  },
]);
export default router;
