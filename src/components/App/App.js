import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Reader from "../Reader/Reader";
// import NotFound from "../NotFound/NotFound";

const App = ({ items }) => (
  <Switch>
    <Route
      path="/reader"
      render={props => <Reader {...props} items={items} />}
    />
    <Route render={() => <Redirect to="/reader?item=1" />} />
  </Switch>
);

export default App;
