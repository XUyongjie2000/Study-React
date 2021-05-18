import React from "react";
import styled from "styled-components";

// 使用styled-component写CSS
// 1.安装styled-component
// 2.在你要使用styled-component的组件中 引入这个包
// 3.使用 const 组件名称 = styled.标签名`和以前一样的写样式`
// 4.在render函数中的html结构中使用组件名称

// 在styled-component中使用React传递的属性
// 需求: 如果有primary这个属性，那么就把按钮的样式设置为背景色 字体颜色
//  如果没有primary这个属性，那么就把按钮的样式设置为
// {/* <button primary >按钮</button> */ }

// 样式的继承

// 1.创建基础样式的按钮
const Button = styled.button`
  width: 70px;
  height: 30px;
`;

// 2.创建一个扩展样式的按钮
const PrimaryButton = styled(Button)`
  background-color: #40a9ff;
  color: #fff;
  border: 1px solid #ff0000;
`;

class App extends React.Component {
  render() {
    return (
      <div>
        <Button>按钮</Button>
        <PrimaryButton>主要按钮</PrimaryButton>
      </div>
    );
  }
}

export default App;
