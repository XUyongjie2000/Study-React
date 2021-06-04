import React from "react";
import "./App.css";
import { HashRouter, NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import route from "./route";
class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <div className="deal">
          <div className="left">
            <h2>一级导航</h2>
            <NavLink to="/animation" activeStyle={{ color: "green" }}>
              动画
            </NavLink>
            <br />
            <NavLink to="/video" activeStyle={{ color: "green" }}>
              视频教程
            </NavLink>
            <br />
            <NavLink to="/user" activeStyle={{ color: "green" }}>
              用户管理
            </NavLink>
            <br />
          </div>
          <div className="right">{renderRoutes(route)}</div>
        </div>
      </HashRouter>
    );
  }
}
export default App;
