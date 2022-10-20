import Home from "./components/Home";
import Go from "./components/Go";
import { Urls } from "./components/Urls";
import Profile from "./components/Profile";

const AppRoutes = [
  {
    index: true,
    element: <Home />,
  },
  {
    path: "/fetch-urls",
    element: <Urls />,
  },
  {
    path: "/:url",
    element: <Go />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
];

export default AppRoutes;
