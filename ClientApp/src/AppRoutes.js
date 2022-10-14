import Home from "./components/Home";
import Go from "./components/Go";
import {Urls} from "./components/Urls";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/fetch-urls',
    element: <Urls />
  },
  {
    path: '/:url',
    element: <Go />
  }
];

export default AppRoutes;
