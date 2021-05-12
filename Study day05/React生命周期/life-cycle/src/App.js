import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // 1.首先执行 初始化数据
    console.log("cons");
  }

  onclick = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidMount() {
    // 意味着事件完成初次渲染
    //3. 通知 完成加载以后 你要做什么
    console.log("did mount");
  }

  componentDidUpdate() {
    // 意味着事件完成更新
    // 5. 通知 更新完成后 你要做什么
    console.log("did update");
  }
  //为什么不是Didnumount
  //完成卸载东西就没了 没有通知了 will 将要
  componentWillUnmount() {
    //6.卸载完成前触发
    console.log("will unmount");
  }
  render() {
    //2.页面完成初次渲染
    console.log("render");
    return (
      <div>
        <p>{this.state.count}</p>
        {/* 4.点击后 第一个要执行render 更新 */}
        <button onClick={this.onclick}>add</button>
      </div>
    );
  }
}
export default App;
