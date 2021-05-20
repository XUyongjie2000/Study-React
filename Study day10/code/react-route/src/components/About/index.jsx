import React from "react";

class About extends React.Component {
  btnClick = () => {
    //hash模式
    // window.location.hash = "/login";
    // history模式
    // console.log(this.props)
    this.props.history.push("/login");
  };
  render() {
    return (
      <div className="About">
        <h1>About页面</h1>
        <button onClick={this.btnClick}>跳转到Login</button>
      </div>
    );
  }
}
export default About;
