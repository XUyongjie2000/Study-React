import React from "react";

class UserList1 extends React.Component {
  state = {
    user: "",
    age: "",
  };

  componentDidMount() {
    console.log(this.props);
    // let str = this.props.location.search.split("&");
    // let newStr = [];
    // for (var i = 0; i < str.length; i++) {
    //   console.log(str[i]);
    //   newStr.push(str[i].split("="));
    // }
    // this.setState({
    //   user: newStr[0][1],
    //   age: newStr[1][1],
    // });
    const params = new URLSearchParams(this.props.location.search);
    this.setState({
      user: params.get("user"),
      age: params.get("age"),
    });
  }

  render() {
    return (
      <div>
        <span>
          {this.state.age}---{this.state.user}
        </span>
      </div>
    );
  }
}

export default UserList1;
