import { AnimatedBackground } from "./components/AnimatedBackground";
import ErrorBoundary from "./error/error-boundary/error-boundary";
import AppRoutes from "./router";

export const AppComponent = () => {
  return (
    <ErrorBoundary>
      <AnimatedBackground />
      <AppRoutes />
    </ErrorBoundary>
  );
};
