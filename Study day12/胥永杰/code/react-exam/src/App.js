import React from "react";
import { HashRouter, NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import "./App.css";

// import Animation from "./components/Animation";
// import User from "./components/User";
// import Video from "./components/Video";
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
              视屏教程
            </NavLink>
            <br />
            <NavLink to="/user" activeStyle={{ color: "green" }}>
              用户管理
            </NavLink>
            <br />
          </div>
          {/* <Route path="/animation" component={Animation}></Route>
          <Route path="/video" component={Video}></Route>
          <Route path="/user" component={User}></Route> */}
          <div className="right">{renderRoutes(route)}</div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
