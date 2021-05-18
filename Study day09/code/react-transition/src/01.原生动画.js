import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: green;
  opacity: ${(props) => props.opacity};
  transition: all 3s;
`;

class App extends React.Component {
  //div的初始状态
  state = {
    width: "0px",
    height: "0px",
    opacity: 0,
  };
  btnClick = () => {
    this.setState({
      width: "60px",
      height: "60px",
      opacity: 1,
    });
  };
  render() {
    return (
      <div>
        <Div {...this.state}></Div>
        <button onClick={this.btnClick}>按钮</button>
      </div>
    );
  }
}
export default App;
