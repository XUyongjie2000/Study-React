import React from "react";
import styled from "styled-components";

const Button = styled.button`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  background-color: ${(props) => (props.primary ? "#40a9ff" : "#fff")};
`;

class App extends React.Component {
  state = {
    width: "70px",
    height: "30px",
  };
  render() {
    return (
      <div>
        <Button primary {...this.state}>
          主要按钮
        </Button>
        <br />
        <br />
        <Button {...this.state}>按钮</Button>
      </div>
    );
  }
}

export default App;
