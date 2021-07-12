//1.引入redux
import { createStore } from "redux";
import reducer from "./reducer";
//5.创建store
const store = createStore(reducer);
//6.导出store
export default store;
