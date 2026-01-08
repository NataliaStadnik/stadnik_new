import { Suspense } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
// import { ThemeProvider } from "./contexts/ThemeContext";
import ErrorBoundary from "./components/ErrorBoundary";
import { ERROR_ROUTE_CONFIG, getRouteConfig } from "./services/routes/routes";
import Loader from "./components/Loader";
import renderNestedRoutes from "./utilits/renderNestedRoutes";
import Layout from "./layout/Layout";
import { I18nextProvider } from "react-i18next";
import i18n from "./services/i18n/i18n";

// TODO: fix theme 
// TODO: fix fonts

export function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter basename="/stadnik_new">
        <Suspense fallback={<Loader />}>
          <I18nextProvider i18n={i18n}>
            {/* <ThemeProvider> */}
              <Routes>
                <Route element={<Layout />}>
                  {getRouteConfig().map((route, i) => (
                    <Route key={i} path={route.path} element={route.element}>
                      {route.children &&
                        renderNestedRoutes(route.children, `route-${i}`)}
                    </Route>
                  ))}
                </Route>

                {ERROR_ROUTE_CONFIG.map((route, i) => (
                  <Route key={i} path={route.path} element={route.element} />
                ))}
              </Routes>
            {/* </ThemeProvider> */}
          </I18nextProvider>
        </Suspense>
      </BrowserRouter>
    </ErrorBoundary>
  );
}
