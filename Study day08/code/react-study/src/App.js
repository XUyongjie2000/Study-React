import React from "react";

import Home from "./components/Home/Home";
class App extends React.Component {
  state = {
    count: 0,
  };

  btnClick = () => {
    this.setState({
      count: 1,
    });
  };
  render() {
    return (
      <div>
        <p>count:{this.state.count}</p>
        <button onClick={this.btnClick}>点击我改变状态</button>
        <Home></Home>
      </div>
    );
  }
}

export default App;
