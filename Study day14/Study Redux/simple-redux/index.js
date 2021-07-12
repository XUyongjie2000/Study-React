//演示 redux最简单的用法 和react没关系
const redux = require("redux");

// import Redux from "redux";  未来这么用
//1.创建初始状态（显示数据） 相当于state={}
const initialState = {
  count: 0,
  // list: [1, 5, 6, 6, 8, 9],
};
//2.创建action（修改数据） 如果你没有修改数据的需求 那么就不需要创建action
//把count的值从0变成1
const addCount = (id) => {
  return { type: "ADD_COUNT", count: id };
};

// const addCount = { type: "ADD_COUNT", count: 1 };

//state的默认值就是initialState为了首屏渲染
//3.创建reducer 方法（串联 数据 和action）
function reducer(state = initialState, action) {
  // console.log(action);
  // return state;
  switch (action.type) {
    case "ADD_COUNT":
      return { count: action.count };
    default:
      return state;
  }
}
//4.创建store 参数是固定的 ：reducer
const store = redux.createStore(reducer);

//获取数据 store.getState()
// console.log(store.getState());
//返回值 {count:0}

//修改数据store.dispatch(Action的名字)
store.dispatch(addCount(5));
console.log(store.getState());
//监听数据
