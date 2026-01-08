import { errorRoutes } from "./errorRoutes";
import { publicRoutes } from "./publicRoutes";
import type { RouteConfig } from "./types";

export const ERROR_ROUTE_CONFIG: RouteConfig[] = [...errorRoutes];

export const getRouteConfig = (): RouteConfig[] => {
  return [...publicRoutes];
};
