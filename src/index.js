import React from "react";
import ReactDOM from "react-dom";
import { HashRouter } from "react-router-dom";
import App from "./components/App/App";
import items from "./components/publication.json";

ReactDOM.render(
  <HashRouter basename="/">
    <App items={items} />
  </HashRouter>,
  document.getElementById("root")
);
