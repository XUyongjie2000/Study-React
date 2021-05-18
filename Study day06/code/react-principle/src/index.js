//render props模式

import React from "react";
import ReactDOM from "react-dom";
import CatImg from "./cat.png";

const widthMoush = (WrappedCompent) => {
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0,
    };

    Fn = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY,
      });
    };
    componentDidMount() {
      window.addEventListener("mousemove", this.Fn);
    }
    render() {
      return <WrappedCompent {...this.state}></WrappedCompent>;
    }
  }
  return Mouse;
};

//创建一个组件（函数组件）
const Position = (props) => {
  return (
    <div>
      <p>
        {props.x}--{props.y}
      </p>
    </div>
  );
};

const Img = (props) => {
  return (
    <div>
      <img
        alt=""
        src={CatImg}
        style={{ position: "absolute", top: props.y, left: props.x }}
      ></img>
    </div>
  );
};
const MouseImg = widthMoush(Img);
const MousePosition = widthMoush(Position);

//使用props.render()的返回值作为要渲染的内容
class App extends React.Component {
  render() {
    return (
      <div>
        <MousePosition></MousePosition>
        <MouseImg></MouseImg>
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
