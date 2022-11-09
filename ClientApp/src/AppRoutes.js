import Go from "./components/Go";
import { Urls } from "./views/Urls";
import Home from "./views/Home";
import Profile from "./views/Profile";
import CreateUrl from "./views/CreateUrl";

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
    path: "/:url/*",
    element: <Go />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/create/:url",
    element: <CreateUrl/>
  }
];

export default AppRoutes;
