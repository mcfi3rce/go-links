import { Counter } from "./components/Counter";
import { Home } from "./components/Home";
import {Urls} from "./components/Urls";
import {Go} from "./components/Go";

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
  },
  {
    path: '/go/:url',
    element: <Go />
  }
];

export default AppRoutes;
