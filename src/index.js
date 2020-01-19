import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import store from "./Store";

import App from "./App";
import Post from "./Post";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store={store}>
    <Post />
  </Provider>,
  rootElement
);
