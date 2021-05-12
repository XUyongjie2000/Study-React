import React from "react";

class CartList extends React.Component {
  //4.2在事件的处理函数中 调用父组件传给CartList的方法，并把参数传给这个方法
  handlerDelete = (id) => {
    this.props.deleteItem(id);
  };

  //5.3声明onChange事件的事件处理方法
  handlerChange = (id, e) => {
    //5.4 给父组件传 1.type 2.id 3.num
    this.props.changeItem({
      type: "change",
      id: id,
      num: e.target.value,
    });
  };
  //6.2 声明handlerAdd事件的处理方法
  handlerAdd = (id) => {
    this.props.changeItem({
      type: "add",
      id: id,
    });
  };
  //7.2 声明handlerSml事件的处理方法
  handlerSml = (id) => {
    this.props.changeItem({
      type: "sml",
      id: id,
    });
  };
  render() {
    return (
      <div>
        {this.props.list.map((item) => (
          <div className="item" key={item.id}>
            <img src={item.img} alt="" />
            <div className="name">{item.name}</div>
            <div className="change">
              {/* 7.1 在给减号绑定点击事件（事件传参） */}
              {/* eslint-disable-next-line */}
              <a href="#" onClick={() => this.handlerSml(item.id)}>
                －
              </a>
              {/* 5.1渲染list中的商品数量 */}
              {/* 5.2在input中声明OnChange事件 */}
              <input
                type="text"
                className="num"
                value={item.num}
                onChange={(e) => this.handlerChange(item.id, e)}
              />
              {/* 6.1 在给加号绑定点击事件（事件传参） */}
              {/* eslint-disable-next-line */}
              <a href="#" onClick={() => this.handlerAdd(item.id)}>
                ＋
              </a>
            </div>
            {/* //4.1在CartList组件中 给删除按钮绑定事件（事件传参） */}
            <div className="del" onClick={() => this.handlerDelete(item.id)}>
              ×
            </div>
          </div>
        ))}
      </div>
    );
  }
}
export default CartList;
