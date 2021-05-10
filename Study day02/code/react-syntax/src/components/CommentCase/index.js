import React, { Fragment } from "react";

class CommentCase extends React.Component {

state={
list = [
  { id: 1, name: "jack", content: "rose,you j, i j" },
  { id: 2, name: "jac", content: "rose,you j, i j" },
  { id: 3, name: "ja", content: "rose,you j, i j" },
],
name:"",
content:""

    }
  //1.写结构
  render() {
    return (
      <Fragment>
        {/* 添加部分 */}
        <input placeholder="评论人"/>
        <textarea placeholder="评论内容"></textarea>
        <button>按钮</button>
        {/* 展示部分 */}
        <ul>
            {
                this.state.list.map(item=>{
                    
                })
            }
          <li>
            <h3></h3>
            <p></p>
          </li>
        </ul>
      </Fragment>
    );
  }
  //2.初始化状态
  //3.渲染初始化好的数据
}

export default CommentCase;
