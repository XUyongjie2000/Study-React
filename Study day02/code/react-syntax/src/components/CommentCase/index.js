import React, { Fragment } from "react";

class CommentCase extends React.Component {
  state = {
    //评论列表
    list: [
      { id: 1, name: "jack", content: "rose,you j, i j" },
      { id: 2, name: "jac", content: "rose,you j, i j" },
      { id: 3, name: "ja", content: "rose,you j, i j" },
    ],
    //评论人
    name: "",
    //评论内容
    content: "",
  };
  //1.写结构
  render() {
    return (
      <Fragment>
        {/* 添加部分 */}
        <input placeholder="评论人" />
        <textarea placeholder="评论内容"></textarea>
        <button>按钮</button>
        {/* 展示部分 */}
        <ul>
          {/* 渲染初始化数据 */}
          {this.state.list.map((item) => (
            <li>
              <h3>{item.name}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
  //2.初始化状态
  //3.渲染初始化好的数据
}

export default CommentCase;
