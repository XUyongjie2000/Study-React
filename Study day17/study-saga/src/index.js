import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

//引入store
import store from "./store/store";
//使用provider from 提供数据
import { Provider } from "react-redux";
ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>,
  document.getElementById("root")
);
