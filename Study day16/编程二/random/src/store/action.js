//把数据返回reducer
export const numAction = (num) => {
  return {
    type: "NUM_ACTION",
    num: num,
  };
};
//获取数据
export const addAction = (dispatch) => {
  fetch(`http://localhost:8080/getNum`)
    .then((response) => response.json())
    .then((json) => dispatch(numAction(json.num)));
};
