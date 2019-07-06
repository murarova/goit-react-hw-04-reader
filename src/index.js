import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App/App";
import items from "./components/publication.json";

ReactDOM.render(
  <BrowserRouter>
    <App items={items} />
  </BrowserRouter>,
  document.getElementById("root")
);
