import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";

import { AppComponent } from "./App";
import ErrorBoundary from "./error/error-boundary/error-boundary";
import rootReducer from "./reducers";

import "./style.css";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== "prod",
});
const rootEl = document.getElementById("root");

ReactDOM.render(
  <ErrorBoundary>
    <Provider store={store}>
      <AppComponent />
    </Provider>
  </ErrorBoundary>,
  rootEl
);
