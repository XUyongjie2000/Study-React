import React from "react";

//1.2.1引入子组件CartTitle
import CartTitle from "../CartTitle";
////2.2.1引入子组件
import CartTotal from "../CartTotal";
//3.2.1引入子组件
import CartList from "../CartList";
class App extends React.Component {
  //1.1给根组件初始化状态
  //2.1定义根组件的state->list
  state = {
    name: "法外狂徒",
    list: [
      {
        id: 1,
        name: "TCL彩电",
        price: 1000,
        num: 1,
        img: "img/a.jpg",
      },
      {
        id: 2,
        name: "机顶盒",
        price: 1000,
        num: 1,
        img: "img/b.jpg",
      },
      {
        id: 3,
        name: "海尔冰箱",
        price: 1000,
        num: 1,
        img: "img/c.jpg",
      },
      {
        id: 4,
        name: "小米手机",
        price: 1000,
        num: 1,
        img: "img/d.jpg",
      },
      {
        id: 5,
        name: "PPTV电视",
        price: 1000,
        num: 2,
        img: "img/e.jpg",
      },
    ],
  };
  //4.3在App组件中 定义一个删除商品的方法 把这个方法传递给子组件
  deleteItem = (id) => {
    //4.4在删除商品的方法中 接收CartList传递过来的ID 通过id筛选出没有被删除的商品 把list数据替换掉
    let list = this.state.list.filter((item) => item.id !== id);
    this.setState({
      list: list,
    });
  };

  //5.5在App组件中 定义一个商品change的方法 把这个方法传递给子组件
  changeItem = (option) => {
    let { list } = this.state;
    //5.6接收CartList传递过来的1.type 2.id 3.num 遍历找出那个要修改的item把num改掉
    if (option.type === "change") {
      //如果判断成功 说明正在修改数值
      this.setState({
        //遍历原来的list找一找改的是哪个
        list: list.map((item) => {
          //找到list（数组）的某一个对象
          if (item.id === option.id) {
            //说明已经找到这个对象了
            return { ...item, num: option.num < 0 ? 0 : option.num };
          } else {
            return item;
          }
        }),
      });
    } else if (option.type === "add") {
      //6.3
      this.setState({
        //遍历旧list
        list: list.map((item) => {
          if (item.id === option.id) {
            return { ...item, num: item.num + 1 < 0 ? 0 : item.num + 1 };
          } else {
            return item;
          }
        }),
      });
    } else if (option.type === "sml") {
      this.setState({
        list: list.map((item) => {
          if (item.id === option.id) {
            return { ...item, num: item.num - 1 < 0 ? 0 : item.num - 1 };
          } else {
            return item;
          }
        }),
      });
    }
  };
  render() {
    return (
      <div id="app">
        <div className="container">
          <div className="cart">
            {/* //1.2把跟组件的state中的name传参给子组件CartTitle */}
            <CartTitle name={this.state.name}></CartTitle>
            {/* //3.2 把list数组传给CartList*/}
            <CartList
              list={this.state.list}
              deleteItem={this.deleteItem}
              changeItem={this.changeItem}
            ></CartList>
            {/* //2.2把list数据传递给CartTotal */}
            <CartTotal list={this.state.list}></CartTotal>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
