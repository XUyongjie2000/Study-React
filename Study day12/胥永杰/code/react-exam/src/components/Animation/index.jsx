import React from "react";
import "./index.css";
import { CSSTransition } from "react-transition-group";
class Animation extends React.Component {
  state = {
    isShow: false,
  };
  btnClickShow = () => {
    this.setState({
      isShow: !this.state.isShow,
    });
  };
  render() {
    return (
      <div>
        <h1>动画页面</h1>
        <button onClick={this.btnClickShow}>执行动画</button>
        <CSSTransition in={this.state.isShow} classNames="box" timeout={3000}>
          <p></p>
        </CSSTransition>
      </div>
    );
  }
}

export default Animation;
