import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import dashboardRoutes from "routes/dashboard.jsx";

import Pages from "layouts/Pages.jsx";
import Dashboard from "layouts/Dashboard.jsx";

import "assets/scss/material-dashboard-pro-react.css?v=1.4.0";

import API from "./utils/API";

const hist = createBrowserHistory();

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false
    };
  }
  setAuth = () => {
    this.setState({ isAuthenticated: true });
  };
  render() {
    return (
      <Router history={hist}>
        <Switch>
          <Route
            exact
            path="/"
            component={() => (
              <Pages
                setAuth={this.setAuth}
                isAuth={this.state.isAuthenticated}
              />
            )}
          />
          <Route
            path="/dashboard"
            component={
              this.state.isAuthenticated
                ? Dashboard
                : () => (
                    <Pages
                      setAuth={this.setAuth}
                      isAuth={this.state.isAuthenticated}
                    />
                  )
            }
          />
          {dashboardRoutes.map((prop, key) => {
            if (prop.views) {
              return prop.views.map((prop, key) => {
                return (
                  <Route
                    exact
                    path={prop.path}
                    component={Dashboard}
                    key={key}
                  />
                );
              });
            }
            return (
              <Route exact path={prop.path} component={Dashboard} key={key} />
            );
          })}
        </Switch>
      </Router>
    );
  }
}

export default App;
