import React from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
class Video extends React.Component {
  render() {
    return (
      <div>
        <h1>Video页面</h1>
        <NavLink to="/video/webvideo" activeStyle={{ color: "red" }}>
          Web视频
        </NavLink>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <NavLink to="/video/vuevideo" activeStyle={{ color: "red" }}>
          Vue视频
        </NavLink>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <NavLink to="/video/reactvideo" activeStyle={{ color: "red" }}>
          React视频
        </NavLink>
        &nbsp; &nbsp; &nbsp; &nbsp;
        <NavLink to="/video/phpvideo" activeStyle={{ color: "red" }}>
          Php视频
        </NavLink>
        &nbsp; &nbsp; &nbsp; &nbsp;
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}
export default Video;
