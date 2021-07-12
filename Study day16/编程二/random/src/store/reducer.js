//创建初始化状态
const initialState = {
  num: 123456,
};

//创建reducer函数
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "NUM_ACTION":
      return { ...state, num: action.num };

    default:
      return state;
  }
};

export default reducer;
