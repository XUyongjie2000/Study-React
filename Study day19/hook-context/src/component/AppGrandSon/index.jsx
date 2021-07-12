import { useContext } from "react";
//React.creayeContext 的返回值
import mainContext from "../../utils/context";

function AppGrandSon() {
  const main = useContext(mainContext);

  console.log(main);

  return (
    <div>
      <h2>我是孙子组件</h2>
      <p>
        我接收到了爷爷组件的数据:{main.name}--{main.age}
      </p>
    </div>
  );
}
export default AppGrandSon;
