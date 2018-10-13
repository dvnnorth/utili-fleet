import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import Dashboard from "layouts/Dashboard.jsx";
import Pages from "layouts/Pages.jsx";

import indexRoutes from "routes/index.jsx";

import "assets/scss/material-dashboard-pro-react.css?v=1.4.0";

const hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route exact path="/" render={props => <Pages {...props} />} />
      <Route path="/dash" render={props => <Dashboard {...props} />} />
    </Switch>
  </Router>,
  document.getElementById("root")
);
