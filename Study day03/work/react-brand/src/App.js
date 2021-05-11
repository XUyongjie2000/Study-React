import React from "react";
import "./App.css";

class App extends React.Component {
  //定义初始化数据
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
  //渲染
  searchItem = () => {
    return this.state.brandList.filter((item) =>
      item.name.includes(this.state.keywords)
    );
  };
  render() {
    return (
      <div id="app">
        <div class="panel panel-primary">
          <div class="panel-heading">
            <h3 class="panel-title">添加品牌</h3>
          </div>
          <div class="panel-body">
            <div class="form-group form-inline">
              <div class="input-group">
                <div class="input-group-addon">编号</div>
                <input type="text" class="form-control" v-model="id" />
              </div>

              <div class="input-group">
                <div class="input-group-addon">品牌名称</div>
                <input type="text" class="form-control" v-model="name" />
              </div>

              <div class="input-group">
                <button class="btn btn-primary" onclick="addBrand">
                  添加
                </button>
              </div>

              <div class="input-group pull-right">
                <div class="input-group-addon">按名称搜索</div>
                <input type="text" class="form-control" v-model="keywords" />
              </div>
            </div>
            {/* <!-- 表格区域 --> */}
            <table class="table table-bordered table-hover table-striped">
              <thead>
                <tr>
                  <th>编号</th>
                  <th>品牌名称</th>
                  <th>添加时间</th>
                  <th>操作</th>
                </tr>
              </thead>
              <tbody>
                {this.searchItem().map((item) => (
                  <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.ctime}</td>
                    <td>
                      <a href="#" onclick="removeBrand(item.id)">
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
