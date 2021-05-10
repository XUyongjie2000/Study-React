import React, { Fragment } from "react";

class StickCom extends React.Component {
  //初始化state
  state = {
    val: "",
  };

  handleChange = (e) => {
    this.setState({
      val: e.target.value,
    });
    // console.log(this.state.val);
  };
  handlerClick = () => {
    console.log(this.state.val);
  };
  render() {
    return (
      //碎片 占位父元素
      <Fragment>
        <div>受控组件</div>
        {/* 渲染初始化好的state */}
        <input value={this.state.val} onChange={this.handleChange} />
        <button onClick={this.handlerClick}>按钮</button>
      </Fragment>
    );
  }
}

export default StickCom;
