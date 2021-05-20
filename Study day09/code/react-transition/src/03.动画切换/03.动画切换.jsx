import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";
import "./03.动画切换.css";
import styled from "styled-components";
//使用SwitchTransition的过程
//1.导入SwitchTransition
//2.使用SwitchTransition包裹CSSTransition
//3.注意：以前在CSSTransition中用的属性in 现在用key
//4.写变化的样式 出来 进去 类名的前缀classNames
//5.timeout时间

const Button = styled.button`
  width: 120px;
  height: 40px;
`;
class App extends React.Component {
  state = {
    flag: true,
  };
  btnClick = () => {
    this.setState({
      flag: !this.state.flag,
    });
  };
  render() {
    return (
      <SwitchTransition>
        <CSSTransition key={this.state.flag} classNames="box" timeout={1000}>
          <Button onClick={this.btnClick}>
            {this.state.flag ? "Hello,World" : "Fuck You!"}
          </Button>
        </CSSTransition>
      </SwitchTransition>
    );
  }
}
export default App;
