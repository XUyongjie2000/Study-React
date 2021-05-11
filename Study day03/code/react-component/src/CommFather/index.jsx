import React from "react";

import CommDaughter from "../CommDaughter"

import CommSon from "../CommSon"

class CommFather extends React.Component {
    //1.1在父组件中声明数据
    state={
        daughter:"哇哈哈",
        son:"小曹",
        fatherName:"曹曹"
    }
    //1.2在父组件中使用子组件，把值通过属性赋值给子组件
    //1.3子组件通过props（只读的  把props作为函数组件的参数）

    //2.1在父组件上声明一个方法
      render() {
          return(
              <div className="Father">
                  <h3>我是父组件曹操</h3>
                  <CommDaughter></CommDaughter>
                  <CommSon></CommSon>
              </div>
          )
      }
}
export default CommFather;