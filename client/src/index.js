import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import DefaultLayoutStyle from "./components/DefaultLayoutStyle.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Store from "./Redux/Store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
