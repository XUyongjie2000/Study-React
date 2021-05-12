import React from "react";
import "./App.css";
//1.添加品牌
//1.1定义初始化数据
//1.2把初始数据渲染出来
//1.3书写受控组件
//1.4获取数据
//1.5组织添加数据到数组
//2.删除品牌（事件传参）
//2.1事件传参方法 <div>{this.handleClick.bind(this,参数1,参数2,参数3)}</div>  <div>{onClick={(e)=>this.deleteRow(id,e)}</div>
//2.2给删除按钮添加点击事件
//2.3声明点击事件的处理函数
//2.4遍历 替换数组
//3.搜索品牌
//3.1书写受控组件
//3.2获取搜搜结果的方法
//3.3返回数组对象中的name包含关键字的数组
class App extends React.Component {
  //1.1定义初始化数据
  state = {
    id: "",
    name: "",
    keywords: "",
    brandList: [
      { id: 1, name: "奔驰", ctime: "2020/9/23" },
      { id: 2, name: "宝马", ctime: "2020/9/21" },
      { id: 3, name: "长安奔奔", ctime: "2014/6/23" },
      { id: 4, name: "千里马", ctime: "2020/5/3" },
    ],
  };

  //监听数据变化  给state赋值
  handlerChange = (e) => {
    console.log(e.target.value);
    console.log(e.target.name);
    //id:
    //name:

    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //1.4获取数据
  addBrand = () => {
    //1.5组织添加数据到数组
    console.log(this.state);
    //解构id和name赋值
    const { id, name } = this.state;
    //判断 如果id和name任意一个为空 不能添加
    if (id.trim().length === 0 || name.trim().length === 0)
      return alert("不能为空");
    //把id和name组成数据列表对象所需要的结构 添加进去 并清空id和name
    this.setState({
      brandList: [
        ...this.state.brandList,
        { id: id, name: name, ctime: new Date().toLocaleDateString() },
      ],
      id: "",
      name: "",
    });
  };

  //2.3声明点击事件的处理函数
  deleteBrand = (id) => {
    console.log(id);
    //2.4遍历 替换数组
    const list = this.state.brandList.filter((item) => item.id !== id);
    // console.log(list);
    //替换数组
    this.setState({
      brandList: list,
    });
  };
  searchResult = () => {
    return this.state.brandList.filter((item) =>
      item.name.includes(this.state.keywords)
    );
  };
  render() {
    return (
      <div id="app">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">添加品牌</h3>
          </div>
          <div className="panel-body">
            <div className="form-group form-inline">
              <div className="input-group">
                <div className="input-group-addon">编号</div>
                {/* //1.3书写受控组件 */}
                <input
                  type="text"
                  value={this.state.id}
                  onChange={this.handlerChange}
                  name="id"
                  className="form-control"
                  v-model="id"
                />
              </div>

              <div className="input-group">
                <div className="input-group-addon">品牌名称</div>
                {/* //1.3书写受控组件 */}
                <input
                  type="text"
                  value={this.state.name}
                  onChange={this.handlerChange}
                  name="name"
                  className="form-control"
                  v-model="name"
                />
              </div>

              <div className="input-group">
                <button className="btn btn-primary" onClick={this.addBrand}>
                  添加
                </button>
              </div>

              <div className="input-group pull-right">
                <div className="input-group-addon">按名称搜索</div>
                {/* //3.1书写受控组件 */}
                <input
                  type="text"
                  name="keywords"
                  value={this.state.keywords}
                  onChange={this.handlerChange}
                  className="form-control"
                  v-model="keywords"
                />
              </div>
            </div>
            {/* <!-- 表格区域 --> */}
            <table className="table table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th>编号</th>
                  <th>品牌名称</th>
                  <th>添加时间</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {/* //1.2把初始数据渲染出来 */}
                {/* {this.state.brandList.map((item) => ( */}
                {this.searchResult().map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.ctime}</td>
                    <td>
                      {/* //2.2给删除按钮添加点击事件 */}
                      <a
                        href="#"
                        onClick={this.deleteBrand.bind(this, item.id)}
                      >
                        删除
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
