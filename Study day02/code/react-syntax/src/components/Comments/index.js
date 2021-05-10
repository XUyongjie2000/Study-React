import React from "react";

//组件的数据
const list = [
  { id: 1, name: "jack", content: "rose,you j, i j" },
  { id: 2, name: "jac", content: "rose,you j, i j" },
  { id: 3, name: "ja", content: "rose,you j, i j" },
];
//创建一个组件
function Comment() {
  return (
    <ul>
      {list.map((item) => (
        <li key={item.id}>
          <h3>{item.name}</h3>
          <p>{item.content}</p>
        </li>
      ))}
    </ul>
  );
}

export default Comment;
