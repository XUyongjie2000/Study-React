import React from "react";
import { CSSTransition } from "react-transition-group";
import "./App.css";
class App extends React.Component {
  state = {
    isShow: false,
  };
  btnClick = () => {
    this.setState({
      isShow: true,
    });
  };
  render() {
    return (
      <div>
        {/* in 触发动画进入或退出的状态 */}
        <CSSTransition in={this.state.isShow} classNames="box" timeout={3000}>
          <div></div>
        </CSSTransition>
        <button onClick={this.btnClick}>按钮</button>
      </div>
    );
  }
}
export default App;
