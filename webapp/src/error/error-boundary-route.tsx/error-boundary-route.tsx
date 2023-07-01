import { Route, RouteProps } from "react-router-dom";
import ErrorBoundary from "../error-boundary/error-boundary";

export const ErrorBoundaryRoute = ({ component: Component, ...rest }: RouteProps) => {
  if (!Component) return null;
  const encloseInErrorBoundary = (props: any) => (
    <ErrorBoundary>
      <Component {...props} />
    </ErrorBoundary>
  );

  if (!Component) throw new Error(`A component needs to be specified for path ${(rest as any).path}`);

  return <Route {...rest} render={encloseInErrorBoundary} />;
};
