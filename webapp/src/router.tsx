import { BrowserRouter as Router, Switch } from "react-router-dom";
import "twin.macro";
import { ErrorBoundaryRoute } from "./error/error-boundary-route.tsx/error-boundary-route";
import { HomePage } from "./features/home/HomePage";
import { CreateCardPage } from "./features/create/CreateCardPage";
import { ReviewCardPage } from "./features/review/ReviewCardPage";

const Routes = () => {
  return (
    <Router>
      <Switch>
        <ErrorBoundaryRoute path="/review" component={ReviewCardPage} />
        <ErrorBoundaryRoute path="/create" component={CreateCardPage} />
        <ErrorBoundaryRoute exact path="/" component={HomePage} />
      </Switch>
    </Router>
  );
};

export default Routes;
