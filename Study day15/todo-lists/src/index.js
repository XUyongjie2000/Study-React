import React from "react";
import ReactDOM from "react-dom";
// 为了让页面变得美观，引入antd.css
import "antd/dist/antd.css";
import App from "./components/App/App";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
