// render props模式

import React from "react";
import ReactDOM from "react-dom";

// render-props 作用:为了复用
// 高阶组件
// 1.是一个函数
// 2.参数是组件
// 3.返回值是一个增强型的组件
// 作用: 也是为了复用
// 注意: 高阶组件 惯例:width开头

const widthMouse = (WrappedComponent) => {
  // 1.创建Mouse组件，在组件中提供复用的状态逻辑代码(1. 状态 2. 操作状态的方法)
  class Mouse extends React.Component {
    state = {
      x: 0,
      y: 0,
    };

    // 使用componentDidMount生命周期函数 --> 发请求，操作DOM
    Fn = (e) => {
      this.setState({
        x: e.clientX,
        y: e.clientY,
      });
    };
    componentDidMount() {
      //
      window.addEventListener("mousemove", this.Fn);
    }

    render() {
      // 2.将要复用的状态作为 props.render(state) 方法的参数，暴露到组件外部
      return <WrappedComponent {...this.state}></WrappedComponent>;
      // return <WrappedComponent ></WrappedComponent>
    }
  }

  return Mouse;
};

// 创建一个组件(函数组件)
const Position = (props) => {
  return (
    <div>
      <p>
        {props.x}--{props.y}
      </p>
    </div>
  );
};

const MousePosition = widthMouse(Position);

// 3.使用 props.render() 的返回值作为要渲染的内容
class App extends React.Component {
  render() {
    return (
      <div>
        <MousePosition></MousePosition>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
