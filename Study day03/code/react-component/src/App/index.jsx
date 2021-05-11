import React from "react";

// 引入 CommFather组件
// import CommFather组件 from "../CommFather/index"
class App extends React.Component {
  constructor() {
    super();
 //1.通过React.createRef（）创建ref对象
    this.txt = React.createRef();   
  }
  //1.调用React.createRef()
  //3.通过ref对象获取文本框的值
  getTxt = () => {
    console.dir(this.txt.current.value);
  };
  render() {
    return (
      <div>
        {/* 使用ref绑定表单元素 */}
        <input type="text" ref={this.txt}  />
        <button onClick={this.getTxt}>点我获取input的值</button>
        <div></div>
      </div>
    );
  }
}
export default App;
