//初始化数据
const initialState = {
  list: [
    {
      id: 1,
      info: "123456",
      status: false,
    },
    {
      id: 2,
      info: "78910JQ",
      status: false,
    },
  ],
};

//创建reducer函数
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//导出reducer函数
export default reducer;
