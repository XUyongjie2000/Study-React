import { createStore, applyMiddleware } from "redux";
import reducer from "./reducer";
import thunkMiddleware from "redux-thunk";
const storeEnhancer = applyMiddleware(thunkMiddleware);

const store = createStore(reducer, storeEnhancer);

export default store;
