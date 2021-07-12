import { ADD_DATA, DEL_DATA, FIX_DATA, FIX_KEY } from "./constants";

// 1.初始化数据
const initialState = {
  list: [
    {
      id: 1,
      info: "123456",
      status: false,
    },
    {
      id: 2,
      info: "123456",
      status: false,
    },
    {
      id: 3,
      info: "123456",
      status: false,
    },
    {
      id: 4,
      info: "123456",
      status: true,
    },
  ],
  viewKey: "all",
};
// 2.创建reducer函数
const reducer = (state = initialState, action) => {
  switch (action.type) {
    // 15.reducer接收到添加数据的action 把数据添加到store中去
    case ADD_DATA:
      return {
        ...state,
        list: [...state.list, action.task],
      };

    case DEL_DATA:
      //如果传来的id和state中的id不一样就返回 一样就删除
      return {
        ...state,
        list: state.list.filter((item) => item.id !== action.id),
      };

    case FIX_DATA:
      return {
        ...state,
        list: state.list.map((item) => {
          if (item.id === action.id) {
            return { ...item, status: !item.status };
          } else {
            return item;
          }
        }),
      };
    case FIX_KEY:
      return {
        ...state,
        viewKey: action.viewkey,
      };
    default:
      //返回默认的state
      return state;
  }
};
// 3.导出reducer函数
export default reducer;
