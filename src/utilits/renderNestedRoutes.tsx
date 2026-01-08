import { Route } from "react-router-dom";
import type { RouteConfig } from "../services/routes/types";

const renderNestedRoutes = (
  routes: RouteConfig[],
  keyPrefix = ""
): React.ReactNode => {
  return routes.map((route, index) => {
    const key = `${keyPrefix}-${index}`;
    if (route.index === true) {
      return <Route key={key} index element={route.element} />;
    }
    return (
      <Route key={key} path={route.path} element={route.element}>
        {route.children && renderNestedRoutes(route.children, key)}
      </Route>
    );
  });
};

export default renderNestedRoutes;
