import React, { Component } from 'react';
import "./App.css";
// 导入AppSon
import AppSon from "./AppSon";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <h1>App--发送信息</h1>
          <div>
            <input type="text" placeholder="输入要发送的信息" />
            <button>Send</button>
          </div>
        </div>
        {/* AppSon */}
        <AppSon />
      </div>
    );
  }
}

export default App;