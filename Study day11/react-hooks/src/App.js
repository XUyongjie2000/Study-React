import React, { useState, useReducer } from "react";
import ReactDOM from "react-dom";

const App = (params) => {
  const [count, setCount] = useState(0);

  const onClick = (params) => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => onClick()}>button</button>
    </div>
  );
};

export default App;
