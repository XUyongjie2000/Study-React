import React from "react";

// import Img from "./image/arrow.png";
//分析：
//1.创建两个状态 x坐标 y坐标
//2.给window绑定事件 获取鼠标坐标
//3.把获取到的鼠标坐标 设置给两个状态 x坐标 y坐标
//4.渲染
class App extends React.Component {
  //完成图片跟着鼠标走
  //完成坐标显示
  state = {
    x: 0,
    y: 0,
  };

  componentDidMount() {
    window.addEventListener("mousemove", this.fn);
  }
  fn = (e) => {
    this.setState({
      x: e.clientX,
      y: e.clientY,
    });
  };
  // render() {
  //   return (
  //     //完成坐标显示
  //     // <div>根组件{this.state.x}--{this.state.y}</div>
  //     <img
  //       src={Img}
  //       alt=""
  //       style={{
  //         position: "absolute",
  //         top: this.state.y,
  //         left: this.state.x,
  //       }}
  //     />
  //   );
  // }
  render() {
    return this.props.wayone(this.state);
  }
}

export default App;
