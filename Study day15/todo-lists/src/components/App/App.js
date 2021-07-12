import React from "react";
import "./App.css";
//导入store获取list数据
import store from "../../store/store";
class App extends React.Component {
  constructor() {
    //把数据映射到state中
    super();
    this.state = store.getState();
    //使用创建ref的方法创建ref
    // this.inputRef = createRef();
  }

  //添加任务
  addTask = () => {
    console.log(111);
  };
  render() {
    return (
      <div className="App todo">
        {/* 输入框及搜索按钮 */}
        <div className="todo-header">
          <input type="text" placeholder="请输入任务" />
          <button onClick={() => this.addTask()}>添加事项</button>
        </div>
        {/* 列表 */}
        <ul className="todo-main">
          {this.state.list.map((item) => (
            <li key={item.id}>
              <input type="checkbox" /> <span>{item.info}</span>
              {/* eslint-disable-next-line */}
              <a href="#">删除</a>
            </li>
          ))}
        </ul>
        {/* 底部菜单 */}
        <div className="todo-footer">
          <p>{this.state.list.length}条剩余</p>
          <div className="todo-footer-button">
            {/* all 全部  undone 未完成  done 已完成  */}
            <button>全&nbsp;&nbsp;部</button>
            <button>未完成</button>
            <button>已完成</button>
          </div>
          {/* eslint-disable-next-line */}
          <a href="#">清除已完成</a>
        </div>
      </div>
    );
  }
}

export default App;
