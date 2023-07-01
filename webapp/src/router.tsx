import { BrowserRouter as Router, Switch } from "react-router-dom";
import "twin.macro";
import { ErrorBoundaryRoute } from "./error/error-boundary-route.tsx/error-boundary-route";
import { HomePage } from "./features/home/HomePage";
import { ReviewPage } from "./features/review/ReviewPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <ErrorBoundaryRoute path="/review" component={ReviewPage} />
        <ErrorBoundaryRoute exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
