import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ErrorBoundaryRoute } from "./error/error-boundary-route.tsx/error-boundary-route";
import { HomePage } from "./features/home/HomePage";
import "twin.macro";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <ErrorBoundaryRoute exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
