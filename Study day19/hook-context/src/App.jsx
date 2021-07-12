import AppSon from "./component/AppSon";
import mainContext from "./utils/context";
function App() {
  console.log(mainContext);
  return (
    <mainContext.Provider value={{ name: "zs", age: 32 }}>
      <div className="App">
        <h2>我是爷爷组件</h2>
        <AppSon></AppSon>
      </div>
    </mainContext.Provider>
  );
}

export default App;
