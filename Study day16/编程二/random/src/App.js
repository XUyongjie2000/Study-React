import React, { Component } from "react";
import { connect } from "react-redux";
import { addAction } from "./store/action";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={this.props.handlerNum}>获取随机码</button>
        <h1 className="num">{this.props.num}</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    num: state.num,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    handlerNum() {
      dispatch(addAction);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
