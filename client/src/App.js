import React, { Component } from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

// Get the routes for the application
import dashboardRoutes from "routes/dashboard.jsx";

// The two views for the app
import Pages from "layouts/Pages.jsx";
import Dashboard from "layouts/Dashboard.jsx";

// Application styling
import "assets/scss/material-dashboard-pro-react.css?v=1.4.0";

const hist = createBrowserHistory();

class App extends Component {
  state = {
    isAuthenticated: false
  };
  setAuth = username => {
    this.setState({ isAuthenticated: true, username: username });
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
                    key={key}
                  />
                );
              });
            }
            return (
              <Route
                exact
                path={prop.path}
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
                key={key}
              />
            );
          })}
        </Switch>
      </Router>
    );
  }
}

export default App;
