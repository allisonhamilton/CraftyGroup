import ReactDOM from "react-dom";

import App from "./App.jsx";
import React from "react";
import { Provider } from "react-redux";
import store from "./store.js";

import reloadMagic from "./reload-magic-client.js"; // automatic reload
reloadMagic(); // automatic reload

//This is a comment

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
