import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "../SignIn";
import SignUp from "../SignUp";
import routes from "./routes";
import Layout from "./Layout";

const App = () => {
  return (
    <Router>
      <Switch>
        {routes.map(({ component: Component, path }) => (
          <Layout key={path} path={path} component={Component} />
        ))}
        <Route path="/" component={SignIn} exact />
        <Route path="/signup" component={SignUp} exact />
      </Switch>
    </Router>
  );
};

export default App;
