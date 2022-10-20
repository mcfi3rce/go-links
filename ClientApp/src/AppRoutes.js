import Go from "./components/Go";
import ExternalApi from "./views/ExternalApi";
import { Urls } from "./views/Urls";
import Home from "./views/Home";
import Profile from "./views/Profile";

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
  {
    path: "/apis",
    element: <ExternalApi />,
  },
];

export default AppRoutes;
