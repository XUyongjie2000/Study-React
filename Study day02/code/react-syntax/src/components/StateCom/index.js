//定义state
//修改state

import React from "react";

class ZhuangTai extends React.Component {
  constructor() {
    super();

    //声明状态state
    this.state = {
      count: 0,
    };
  }

  updateCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  render() {
    return (
      <div>
        <p>{this.state.count}</p>
        <button onClick={this.updateCount}>按钮</button>
      </div>
    );
  }
}

export default ZhuangTai;
