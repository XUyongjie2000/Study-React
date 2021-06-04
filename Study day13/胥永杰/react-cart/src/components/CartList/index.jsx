import React from "react";

class CartList extends React.Component {
  //复选框
  handlerCheck = (index, e) => {
    this.props.handlerCheck(index, e.target.checked);
  };
  //全选按钮
  handlerAll = () => {
    this.props.handlerAll(this.props.check);
  };
  //点击加号数量+1
  handlerAdd = (index) => {
    this.props.handlerAdd(index);
  };
  //点击减号数量-1
  handlerSub = (index) => {
    this.props.handlerSub(index);
  };
  //输入商品数量
  handlerChange = (index, e) => {
    this.props.handlerChange(index, e.target.value);
  };
  //点击删除按钮删除商品
  handlerDel = (index) => {
    this.props.handlerDel(index);
  };
  render() {
    return (
      <div className="car">
        <table>
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  id="all"
                  onChange={() => {}}
                  checked={this.props.check}
                  onClick={() => this.handlerAll()}
                />
                全选
              </th>
              <th>商品</th>
              <th>单价</th>
              <th>商品数量</th>
              <th>小计</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            {this.props.list.map((item, index) => (
              <tr key={index}>
                <td>
                  <input
                    type="checkbox"
                    onChange={() => {}}
                    checked={item.flag}
                    onClick={(e) => this.handlerCheck(index, e)}
                  />
                </td>
                <td>
                  <img src={item.src} alt="" />
                  <p>{item.pName}</p>
                </td>
                <td>{item.price}￥</td>
                <td>
                  <div className="count-c clearfix">
                    {/* eslint-disable-next-line */}
                    <a
                      href="#"
                      className="reduce"
                      onClick={() => this.handlerSub(index)}
                    >
                      -
                    </a>
                    <input
                      type="text"
                      value={item.count}
                      onChange={(e) => {
                        this.handlerChange(index, e);
                      }}
                    />
                    {/* eslint-disable-next-line */}
                    <a
                      href="#"
                      className="add"
                      onClick={() => this.handlerAdd(index)}
                    >
                      +
                    </a>
                  </div>
                </td>
                <td>{item.price * item.count}￥</td>
                <td>
                  {/* eslint-disable-next-line */}
                  <a
                    href="#"
                    alt=""
                    className="del"
                    onClick={() => this.handlerDel(index)}
                  >
                    删除
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default CartList;
