//1.函数组件（就是为了表示html）
//函数式组件也被称为无状态组件（注意：所谓的状态就是state）
//语法：在构造函数中返回组件的结构即可

function Fn() {
  const list = [
    { id: 1, name: "jack", content: "rose,you j, i j" },
    { id: 2, name: "jac", content: "rose,you j, i j" },
    { id: 3, name: "ja", content: "rose,you j, i j" },
  ];
  // const handlerClick=()=>{
  //     console.log();
  // }

  const handleClick = function () {
    console.log("我是点击事件");
  };
  return <div onClick={handleClick}>我是函数组件</div>;
}

export default Fn;
