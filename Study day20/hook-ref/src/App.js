import { useEffect, useRef, useState } from "react";
import Home from "./components/Home";
function App() {
  const h2Ref = useRef();
  const homeRef = useRef();
  console.log(h2Ref);

  const handleRef = () => {
    console.log(h2Ref);
  };
  useEffect(() => {
    console.log(h2Ref);
    console.log(homeRef);
  });

  const [state, setState] = useState(0);
  const ageRef = useRef(state);
  console.log(ageRef);
  return (
    <div className="App">
      <h2 ref={h2Ref}>App组件</h2>
      <p></p>
      <p></p>
      <Home ref={homeRef}></Home>
      <button
        onClick={() => {
          handleRef();
        }}
      >
        点击获取h2
      </button>
    </div>
  );
}

export default App;
