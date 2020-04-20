import React from "react";
import { hydrate, render } from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./components/App";
import * as serviceWorker from "./serviceWorker";

import "./styles/App.scss";

if (document.getElementById("root").hasChildNodes()) {
  hydrate(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
} else {
  render(
    <React.StrictMode>
      <Router>
        <App />
      </Router>
    </React.StrictMode>,
    document.getElementById("root")
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
