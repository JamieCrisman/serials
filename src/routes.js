import React from "react";

import {
  IndexRoute,
  Route
} from "react-router";

import {
  Dashboard,
  NoMatch,
  Login,
  App
} from "./containers";

export default (
    <Route name="app" path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="/" component={Dashboard} />
      <Route path="/login" component={Login} />
      <Route path="*" component={NoMatch}/>
    </Route>
);
