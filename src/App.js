import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import NavBar from "./layout/navbar";
import Home from "./layout/home";
import Main from "./layout/main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import login from "./layout/login";
import signup from "./layout/signup";
import Order from "./layout/order";

function App() {
  return (
    <Router>
      <Fragment>
        <NavBar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={login} />
        <Route exact path="/signup" component={signup} />
        <Order />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
