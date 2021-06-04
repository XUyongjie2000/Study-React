import React from "react";
import "./index.css";
import { CSSTransition } from "react-transition-group";
class Animation extends React.Component {
  state = {
    isShow: false,
  };
  ClickShow = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    return (
      <div>
        <h1>Animation页面</h1>
        <button onClick={this.ClickShow}>执行动画</button>
        <CSSTransition in={this.state.isShow} timeout={3000} classNames="box">
          <p></p>
        </CSSTransition>
      </div>
    );
  }
}
export default Animation;
