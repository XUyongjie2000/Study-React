import React from "react";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "react-router-config";
class User extends React.Component {
  render() {
    return (
      <div>
        <h1>用户管理</h1>
        <NavLink
          to="/user/userlist?age=18&user=张三"
          activeStyle={{ color: "red" }}
        >
          张三
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink
          to="/user/userlist1?age=18&user=李四"
          activeStyle={{ color: "red" }}
        >
          李四
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink
          to="/user/userlist2?age=18&user=王五"
          activeStyle={{ color: "red" }}
        >
          王五
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        <NavLink
          to="/user/userlist3?age=18&user=赵六"
          activeStyle={{ color: "red" }}
        >
          赵六
        </NavLink>
        &nbsp;&nbsp;&nbsp;&nbsp;
        {renderRoutes(this.props.route.routes)}
      </div>
    );
  }
}

export default User;
