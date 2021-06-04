import React from "react";

class CartBotton extends React.Component {
  //计算商品总件数 总价格
  handlerTotal = () => {
    let sum = 0;
    let count = 0;
    let { list } = this.props;
    list.forEach((item) => {
      if (item.flag) {
        sum += item.price * item.count;
        count += item.count;
      }
    });
    return {
      count,
      sum,
    };
  };
  //删除选中商品
  ClickDel = () => {
    this.props.ClickDel();
  };
  //清空购物车
  AllDel = () => {
    this.props.AllDel();
  };
  render() {
    return (
      <div>
        <div className="controls clearfix">
          {/* eslint-disable-next-line */}
          <a
            href="#"
            alt=""
            className="del-all"
            onClick={() => this.ClickDel()}
          >
            删除所选商品
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" alt="" className="clear" onClick={() => this.AllDel()}>
            清理购物车
          </a>
          {/* eslint-disable-next-line */}
          <a href="#" alt="" className="pay">
            去结算
          </a>
          <p>
            已经选中<span id="totalCount">{this.handlerTotal().count}</span>
            件商品;总价：
            <span id="totalPrice" className="total-price">
              {this.handlerTotal().sum}￥
            </span>
          </p>
        </div>
      </div>
    );
  }
}
export default CartBotton;
