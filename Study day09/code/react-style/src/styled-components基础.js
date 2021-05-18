import React from "react";
import styled from "styled-components";

// const Ospan = styled.span`
//   display: block;
//   width: 100px;
//   height: 100px;
//   background-color: blue;
// `;

const DivStyle = styled.div`
  width: 200px;
  height: 200px;
  background-color: pink;
  span {
    display: block;
    width: 100px;
    height: 100px;
    background-color: blue;
  }
`;
class App extends React.Component {
  render() {
    return (
      <div>
        App组件
        <DivStyle>
          <span></span>
        </DivStyle>
      </div>
    );
  }
}

export default App;
