import React from "react";
import { Redirect } from "react-router";

//当User没有登陆的的时候 要重定向到login
class User extends React.Component {
  state = {
    isLogin: true,
  };
  render() {
    let user = (
      <div className="User">
        <h1>User页面</h1>
      </div>
    );
    return this.state.isLogin ? user : <Redirect to="/login" />;
  }
}
export default User;
