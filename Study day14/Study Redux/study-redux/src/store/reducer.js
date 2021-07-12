import { ADD_COUNT, SUB_COUNT } from "./constants";
//2.创建初始化数据
const initialState = {
  count: 0,
};
//3.创建action

//4.创建reducer函数
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_COUNT:
      return { count: state.count + 1 };
    case SUB_COUNT:
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default reducer;
