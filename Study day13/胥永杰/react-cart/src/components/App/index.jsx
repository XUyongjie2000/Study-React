import React from "react";

//引入子组件
import CartBotton from "../CartBotton";
import CartList from "../CartList";
class App extends React.Component {
  state = {
    check: false,
    list: [
      {
        id: 1,
        pName: "牛奶",
        src: "./uploads/01.jpg",
        price: 10,
        count: 3,
        flag: false,
      },
      {
        id: 1,
        pName: "三只松鼠",
        src: "./uploads/02.jpg",
        price: 30,
        count: 1,
        flag: false,
      },
      {
        id: 1,
        pName: "蓝牙播放器",
        src: "./uploads/03.jpg",
        price: 100,
        count: 1,
        flag: false,
      },
      {
        id: 1,
        pName: "大米",
        src: "./uploads/04.jpg",
        price: 50,
        count: 1,
        flag: false,
      },
      {
        id: 1,
        pName: "路由器",
        src: "./uploads/05.jpg",
        price: 110,
        count: 1,
        flag: false,
      },
      {
        id: 1,
        pName: "罐头",
        src: "./uploads/06.jpg",
        price: 20,
        count: 1,
        flag: false,
      },
    ],
  };
  //复选框
  handlerCheck = (index, e) => {
    let { list } = this.state;
    list[index].flag = e;
    let num = 0;
    let flag = false;
    for (var i = 0; i < list.length; i++) {
      if (list[i].flag === true) {
        num++;
        if (num === list.length) {
          flag = true;
        } else {
          flag = false;
        }
      }
    }
    this.setState({
      list: list,
      check: flag,
    });
  };
  //全选按钮
  handlerAll = (check) => {
    check = !check;
    let { list } = this.state;
    for (var i = 0; i < list.length; i++) {
      list[i].flag = check;
    }
    this.setState({
      list: list,
      check: check,
    });
  };
  //点击加号数量+1
  handlerAdd = (index) => {
    let { list } = this.state;
    list[index].count = list[index].count + 1;
    this.setState({
      list: list,
    });
  };
  //点击减号数量-1
  handlerSub = (index) => {
    let { list } = this.state;
    if (list[index].count > 0) list[index].count = list[index].count - 1;
    this.setState({
      list: list,
    });
  };
  //输入商品数量
  handlerChange = (index, e) => {
    let { list } = this.state;
    if (!isNaN(e) && e >= 0) {
      list[index].count = Number(e);
    }
    this.setState({
      list: list,
    });
  };
  //点击删除按钮删除商品
  handlerDel = (index) => {
    let { list } = this.state;
    list.splice(index, 1);
    let num = 0;
    let flag = false;
    for (var i = 0; i < list.length; i++) {
      if (list[i].flag === true) {
        num++;
        if (num === list.length) {
          flag = true;
        } else {
          flag = false;
        }
      }
    }
    this.setState({
      list: list,
      check: flag,
    });
  };
  //删除选中商品
  ClickDel = () => {
    let { list } = this.state;
    let newlist = list.filter((item) => {
      return item.flag === false;
    });
    this.setState({
      list: newlist,
      check: false,
    });
  };
  //清空购物车
  AllDel = () => {
    this.setState({
      list: [],
      check: false,
    });
  };
  render() {
    return (
      <div>
        <CartList
          list={this.state.list}
          check={this.state.check}
          handlerCheck={this.handlerCheck}
          handlerAll={this.handlerAll}
          handlerAdd={this.handlerAdd}
          handlerSub={this.handlerSub}
          handlerChange={this.handlerChange}
          handlerDel={this.handlerDel}
        ></CartList>
        <CartBotton
          list={this.state.list}
          ClickDel={this.ClickDel}
          AllDel={this.AllDel}
        ></CartBotton>
      </div>
    );
  }
}
export default App;
