import { lazy } from "react";
import { PATHS } from "./path";

const NotFound = lazy(() => import("../../components/NotFound"));

export const errorRoutes = [
  {
    path: PATHS.NOT_FOUND,
    element: <NotFound />,
  },
];
