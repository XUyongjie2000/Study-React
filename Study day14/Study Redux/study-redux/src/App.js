import React from "react";
import "./App.css";
import store from "./store/store";
import { addAction, subAction } from "./store/action";
//1.进入页面的时候 显示数字
//2.点击加号按钮 让数字增加
//2.1给加号按钮添加点击事件,声明处理函数
//2.2在处理函数中，调用store.dispatch(Action)
//2.3在store.js中创建action函数，实现数字+1
// const addAction = () => {
//   return {
//     type: "ADD_COUNT",
//   };
// };
//2.4在store.js中，reducer中进行递增 返回
//3.点击减号按钮 让数字减少
// function App() {
//   return (
//     <div className="App">
//       <p>数字：132</p>
//       <button>+</button>
//       <button>-</button>
//     </div>
//   );
// }

class App extends React.Component {
  state = store.getState();

  componentDidMount() {
    store.subscribe(() => {
      this.setState({
        count: store.getState().count,
      });
    });
  }
  render() {
    return (
      <div className="App">
        <p>数字:{this.state.count}</p>
        <button onClick={this.hanlderAdd}>+</button>
        <button onClick={this.hanlderSub}>-</button>
      </div>
    );
  }
  //数字递增
  hanlderAdd = () => {
    store.dispatch(addAction());
    // store.dispatch({
    //   type: "ADD_COUNT",
    // });
  };
  //数字减少
  hanlderSub = () => {
    store.dispatch(subAction());
    // store.dispatch({
    //   type: "SUB_COUNT",
    // });
  };
}

export default App;
