import React from "react";
class UserList4 extends React.Component {
  state = {
    user: "",
    age: "",
  };
  componentDidMount() {
    console.log(this.props);
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
          {this.state.user}---{this.state.age}
        </span>
      </div>
    );
  }
}
export default UserList4;
