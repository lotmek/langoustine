import { BrowserRouter as Router, Switch } from "react-router-dom";
import { ErrorBoundaryRoute } from "./error/error-boundary-route.tsx/error-boundary-route";
import { HomePage } from "./features/home/Home";
import { Navbar } from "./layout/navbar/Navbar";
import "twin.macro";

const Routes = () => {
  return (
    <Router>
      <div tw="w-full min-h-screen">
        <Navbar />
        <div tw="h-full">
          <Switch>
            <ErrorBoundaryRoute exact path="/" component={HomePage} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Routes;
