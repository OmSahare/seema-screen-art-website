import { createBrowserRouter } from "react-router";
import { Root } from "./layouts/Root.tsx";
import { Home } from "./pages/Home.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      {
        index: true,
        Component: Home,
      },
    ],
  },
]);
