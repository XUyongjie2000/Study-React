import { createStore } from "redux";

//引入reducer
import reducer from "./reducer";
//创建store并导出
const store = createStore(reducer);
//导出
export default store;
