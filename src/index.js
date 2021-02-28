import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import myStore from "./reducers/RootReducer";

const store = createStore(myStore);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
