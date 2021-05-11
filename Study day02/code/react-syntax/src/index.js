import React from "react";
import ReactDOM from "react-dom";

//组件的数据
// const list = [
//   { id: 1, name: "jack", content: "rose,you j, i j" },
//   { id: 2, name: "jac", content: "rose,you j, i j" },
//   { id: 3, name: "ja", content: "rose,you j, i j" },
// ];
// //创建一个组件
// function Comment() {
//   return (
//     <ul>
//       {list.map((item) => (
//         <li key={item.id}>
//           <h3>{item.name}</h3>
//           <p>{item.content}</p>
//         </li>
//       ))}
//     </ul>
//   );
// }

//抽离组件到单独的文件中
// import Comment from "./components/Comments";

//函数组件
// import Fn from "./components/FnCom";

//类组件
// import Home from "./components/ClassCom";
// import ZhuangTai from "./components/StateCom";

//受控组件（表单问题） 表单的双向绑定

// import StickCom from "./components/StickCom";

import CommentCase from "./components/CommentCase";
ReactDOM.render(<CommentCase />, document.getElementById("root"));
