import { Counter } from "./components/Counter";
import { Home } from "./components/Home";
import {Urls} from "./components/Urls";

const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-urls',
    element: <Urls />
  }
];

export default AppRoutes;
