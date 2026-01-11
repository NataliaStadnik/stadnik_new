import { lazy } from "react";
import { PATHS } from "./path";

const NotFound = lazy(() => import("../../pages/NotFoundPage"));

export const errorRoutes = [
  {
    path: PATHS.NOT_FOUND,
    element: <NotFound />,
  },
];
