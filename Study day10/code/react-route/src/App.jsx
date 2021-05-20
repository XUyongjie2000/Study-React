import React from "react";
import "./App.css";
import {
  BrowserRouter,
  HashRouter,
  Link,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";

import Home from "./components/Home";
import About from "./components/About";
import Other from "./components/Other";
import Login from "./components/Login";
import User from "./components/User";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <NavLink activeClassName="active" to="/home">
          Home
        </NavLink>
        <br />
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
        <br />
        <NavLink activeClassName="active" to="/login">
          Login
        </NavLink>
        <br />
        <NavLink activeClassName="active" to="/user">
          User
        </NavLink>
        <br />
        <Switch>
          <Route path="/home" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path="/user" component={User}></Route>
          <Route component={Other}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
