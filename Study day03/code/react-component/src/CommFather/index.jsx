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
    son2Father=(name,msg)=>{
        console.log(name);
        this.setState({
            fatherName:name,
            brotherMsg:msg
        })
    }
      render() {
          return(
              <div className="Father">
                  <h3>我是父组件({this.state.fatherName})</h3>
                  {/* 2.在父组件中使用子组件，把值通过属性赋值给子组件 */}
                  <CommDaughter daughter={this.state.daughter} brotherMsg={this.state.brotherMsg}></CommDaughter>
                  {/* 把父组件声明的方法传递给子组件 */}
                  <CommSon son={this.state.son} son2Father={this.son2Father}></CommSon>
              </div>
          )
      }
}
export default CommFather;

//state和props
//state是类组件私有的数据 相当于vue中data
//props是父组件传递给子组件的数据 相当于公共数据