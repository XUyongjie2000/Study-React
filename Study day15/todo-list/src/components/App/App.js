import React, { createRef } from "react";
import "./App.css";
//5.导入store获取list数据
import store from "../../store/store";
import { addData, delData, fixData, fixKey } from "../../store/action";
class App extends React.Component {
  constructor() {
    super();
    //6.把数据映射到state中
    this.state = store.getState();
    //10.使用创建ref的方法创建ref
    this.inputRef = createRef();
  }
  //订阅（DOM和组件渲染完成）
  componentDidMount() {
    store.subscribe(() => {
      console.log(this.state.list);
      this.setState(
        {
          list: store.getState().list,
          viewKey: store.getState().viewKey,
        },
        () => {
          console.log(this.state.list);
        }
      );
    });
  }
  //9.添加任务
  addTask = () => {
    //12.在addTask函数中通过this.ref.current.value
    // console.log(this.inputRef.current.value);
    //13.把数据组织成对象的样子
    let task = {
      id: new Date().valueOf(),
      info: this.inputRef.current.value,
      status: false,
    };
    // console.log(task);
    //14.调用store.dispatch 把对象当作参数 发送给action
    store.dispatch(addData(task));
  };
  //删除任务
  //16.再点击事件的处理函数中 调用store.dispatch的方法 并把id传递给action
  delTask = (id) => {
    store.dispatch(delData(id));
  };
  //更新复选框状态
  fixStatus = (id) => {
    store.dispatch(fixData(id));
  };
  //更新分类
  fixCate = (viewkey) => {
    // console.log(viewkey);
    store.dispatch(fixKey(viewkey));
  };

  // 筛选任务
  filterTask = () => {
    if (this.state.viewKey === "done") {
      return this.state.list.filter((item) => item.status);
    } else if (this.state.viewKey === "undone") {
      // return this.state.list.filter((item) => item.status === false);
      return this.state.list.filter((item) => !item.status);
    } else {
      return this.state.list;
    }
  };

  render() {
    return (
      <div className="App todo">
        {/* 输入框及搜索按钮 */}
        <div className="todo-header">
          {/* 11.在输入任务的input中绑定ref */}
          <input type="text" placeholder="请输入任务" ref={this.inputRef} />
          {/* 8.给事件按钮绑定点击事件 */}
          <button onClick={() => this.addTask()}>添加事项</button>
        </div>
        {/* 列表 */}
        {/* <p>{this.state.viewKey}</p> */}
        <ul className="todo-main">
          {/* 7.在模板中展示 */}
          {this.filterTask().map((item) => {
            return (
              <li key={item.id}>
                {/* //17 渲染 复选框的状态 */}
                <input
                  type="checkbox"
                  checked={item.status}
                  onChange={() => this.fixStatus(item.id)}
                />{" "}
                <span>{item.info}</span>
                {/* eslint-disable-next-line */}
                <a href="#" onClick={() => this.delTask(item.id)}>
                  删除
                </a>
              </li>
            );
          })}
        </ul>
        {/* 底部菜单 */}
        <div className="todo-footer">
          <p>{this.state.list.length}条剩余</p>
          <div className="todo-footer-button">
            {/* all 全部  undone 未完成  done 已完成  */}
            <button
              onClick={() => this.fixCate("all")}
              className={this.state.viewKey === "all" ? "primary" : ""}
            >
              全&nbsp;&nbsp;部
            </button>
            <button
              onClick={() => this.fixCate("undone")}
              className={this.state.viewKey === "undone" ? "primary" : ""}
            >
              未完成
            </button>
            <button
              onClick={() => this.fixCate("done")}
              className={this.state.viewKey === "done" ? "primary" : ""}
            >
              已完成
            </button>
          </div>
          {/* eslint-disable-next-line */}
          <a href="#">清除已完成</a>
        </div>
      </div>
    );
  }
}

export default App;
