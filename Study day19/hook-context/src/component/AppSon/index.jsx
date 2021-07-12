import AppGrandSon from "../AppGrandSon";
function AppSon() {
  return (
    <div className="AppSon">
      <h2>我是父组件</h2>
      <AppGrandSon></AppGrandSon>
    </div>
  );
}

export default AppSon;
