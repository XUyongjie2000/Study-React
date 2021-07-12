##### 前提准备

安装包: redux  antDesign

辅助: antDesign

状态管理: redux
1.创建store文件夹

2. store文件(总文件) action(指令) reducer(执行操作) constants(常量存储)
3.创建store --> 初始化状态 --> 创建action --> 创建reducer --> createStore

#### 1.任务展示

1.在reducer中初始化数据

```js
//初始化数据
const initialState = {
  list: [
    {
      id: 1,
      info: "123456",
      status: false,
    },
    {
      id: 2,
      info: "78910JQ",
      status: false,
    },
  ],
};
```

2.在reducer中创建函数并且导出（导出到store中）

```js
//创建reducer函数
const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
//导出reducer函数
export default reducer;

```

3.在store.js中创建store并且导出

```js
import { createStore } from "redux";

//引入reducer
import reducer from "./reducer";
//创建store并导出
const store = createStore(reducer);
//导出
export default store;

```

4.在App.js中导入store，获取list数据

```js
//导入store获取list数据
import store from "../../store/store";
```

5.把数据映射到state中

```js
  constructor() {
    //把数据映射到state中
    super();
    this.state = store.getState();
  }
```

6.在模板中展示

```js
{this.state.list.map((item) => (
  <li key={item.id}>
    <input type="checkbox" /> <span>{item.info}</span>
    {/* eslint-disable-next-line */}
    <a href="#">删除</a>
  </li>
))}
```

####2.任务添加

