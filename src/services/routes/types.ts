import type { ReactNode } from "react";

export type RouteConfig = {
    path?: string;
    element?: ReactNode;
    exact?: boolean;
    children?: RouteConfig[];
    index?: boolean;
  };