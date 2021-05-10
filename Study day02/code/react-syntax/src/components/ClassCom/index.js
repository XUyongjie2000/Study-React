//类组件  也被称为有状态组件
//定义一个类 在这个类中实现render方法 在render方法中返回组件的结构即可

import React from "react";

class Home extends React.Component {
  render() {
    return <div>我是类组件</div>;
  }
}

export default Home;
