import ErrorBoundary from "./error/error-boundary/error-boundary";
import AppRoutes from "./router";

export const AppComponent = () => {
  return (
    <ErrorBoundary>
      <AppRoutes />
    </ErrorBoundary>
  );
};
