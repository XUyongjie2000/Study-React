## React

#### React基础

###### 什么是虚拟DOM

虚拟DOM是相对于浏览器所渲染出来的真实DOM的
虚拟DOM就是使用JS对象来表示页面上的真实DOM

```react
//虚拟DOM
let vm = {
    tafeName: 'div',
    props: {
        id: 'app'
    },
    children: [{
        tagName: 'span',
        props: {
            class: 'span1'
        },
        content: '你好'
    }]
}
```

###### 为什么在React中需要虚拟DOM

1.因为JS中用对象来表示页面 页面结构有变化 可以很轻松的对比出来（Diff算法）
2.跨平台

#### 如何创建虚拟DOM

createElement通过React.createElement()方法
该方法接收三个参数：
第一个参数：需要创建的元素类型或组件
第二个参数：被创建出来的元素拥有的属性
第三个参数：被创建出来的元素拥有的内容（可以是多个）
https://zh-hans.reactjs.org/docs/react-api.html#

#### 如何通过DOM渲染真实DOM到浏览器

通过ReactDOM.render()方法
该方法接收三个参数
第一个参数：被渲染的虚拟DOM
第二个参数：要渲染到哪个元素中
第三个参数：渲染或更新完成后的回调函数
https://zh-hans.reactjs.org/docs/react-dom.html#render
![组件化](..\Study-React\picture\组件化.png)

#### 脚手架的基本使用

###### 脚手架概念

脚手架是一种能快速帮助我们生成项目结构和依赖的工具
每个项目完成的效果不用，但是他们的基本工程化结构是相似的
既然相似，就没有必要每次都从零开始搭建，完全可以使用一些工具，帮助我们生成基本的项目模板
那么这个帮助我们生成项目模板的工具我们就称之为‘脚手架’

###### CRA(create-react-app、vite)的基本使用注意点：

1.前提是要安装Node
2.在命令行中执行：npx create-react-app 项目名称
3.注意：项目的名称只能是英文，并且只能是小写字母
		如果出现了多个单词,那么我们需要通过_-来连接。
		myName->my_name->my-name

######项目下的reportWebVitals.js

https://www.jianshu.com/p/9d75592edb9e

#### 组件

##### 把组件抽离倒单独的文件中

###### 函数组件（无状态组件 展示型组件）

```react
// 函数式组件
// 函数式组件也被称为无状态组件(注意: 所谓的状态就是state)
// 语法: 在构造函数中返回组件的结构即可
```

###### 类组件（有状态组件 容器型组件（逻辑组件））

```react
// 类组件 也被成为有状态组件
// 定义一个类, 在这个类中实现render方法, 在render方法中返回组件的结构即可
```

##### 给函数式组件添加事件

```react
// 需求: 给函数式组件添加一个事件

const Fn=()=>{
    const divClick = function(){
        console.log("鼠标点击了div")
    }
    const divMouseOver = function(){
        console.log("鼠标移入了div")
    }
    return (
   	<div onClick={divClick} onMouseOver={divMouseOver}>
   	我是函数式组件
   	</div>
    )
}
```

##### 受控组件

受控组件：其值受到React控制的表单元素叫做受控组件

#### 组件通讯

###### 父女（函数）组件通信

1.在父组件中声明数据
2.在父组件中使用子组件 把值通过属性赋值给子组件
3.子组件通过props（只读的 把props座位函数组件的参数）

######父子（类）组件通信

###### 子父组件的通信

1.在父组件上声明一个方法
2.在父组件声明的方法传递一个组组件
3.在组件中声明数据
4.出发子组件的一个方法 在方法中 调用父组件传递给子组件的方法 把数据当作参数返回给父组件

#### 组件的生命周期

###### 什么是声明周期

- 组件的生命周期：组件从被创建到挂载到页面中运行 再到组件不用时卸载的过程
- 意义：组件的生命周期有助于理解组件的运行方式、完成更复杂的组件功能、分系组件错误原因等
- 声明周期的每个阶段总是伴随着一些方法调用，这些方法就是生命周期的钩子函数。
- 钩子函数的作用：为开发人员在不同阶段操作组件提供了时机
- 只有类组件才有生命周期

### 路由介绍

#### 什么是路由

路由维护了URL地址和组件的映射关系，通过这个映射关系，我们就可以根据不同的URL地址，去渲染不同的组件

#### 如何在React中安装路由

```bash
npm install react-router-dom

yarn add react-router-dom
```

### 基本使用

#### 使用步骤

#### 常用组件的说明

- BrowserRouter组件：用来包裹整个React应用，整个应用中只需要使用一次即可。
- Link组件：最终会生成一个a标签，通过to属性指定
  pathname(history/) 或hash(哈希模式#)
- Router组件：用来配置路由规则和要展示的组件
  * path属性：配置路由规则
  * component属性：指定当前路由规则匹配时要展示的组件
  * Route组件放在哪，组件内容就展示在哪。并且每一个路由都是一个单独的Route组件。
- react-router4之前，所有路由代码都是统一放到react-routr中管理的
  - react-router4开始，拆分为了两个包react-router-dom和
    react-router-native
    - react-router-dom 在浏览器中使用路由
    - react-router-native在原生应用中使用路由
- BrowserRouter history模式使用的是H5的特性，所以兼容性会比
  HashRouter hash模式差一些
  - 在企业开发中如果不需要兼容低级
    版本浏览器，建议使用BrowserRouter如果需要兼容低级版本浏览器，那么只能使用HashRouter
- 无论是Link还是Router都只能放到BrowserRouter和HashRouter中才有效

#### 路由的执行过程

- 1.当点击Link（a标签）的时候，就会修改浏览器中的pathname
- 2.只要 浏览器地址栏中的pathname发生改变，React路由就会监听到这个改变
- 3.React路由监听到pathname改变后，就会遍历所有Route组件，分别使用Route组件中的path路由规则，与当前的浏览器地址栏中的pathname进行匹配
- 4.只要匹配成功，就会把当前Route对应的组件，展示在页面中
- 注意：匹配时，不是找到第一个匹配的路由就停下来了，而是：所有的Route都会进行匹配，只要匹配就会展示该组件
  - 也就是说：在一个页面中，可以有多个Route同时被匹配

#### Switch

默认情况下路由会从上至下匹配所有的Route，只要匹配都会显示

但是在企业开发中大部分情况下，我们希望的是一旦有一个匹配到了后续就不要再匹配了

此时我们就可以通过Switch来实现

#### Redirect

资源重定向，也就是可以在访问某个资源地址的重定向到另外一个资源地址

例如：访问/user重定向到/login

步骤：

1.先定义两个组件User Login
2.给User和Login添加路由
3.点击User 显示User组件,点击Login 显示Login组件
4.改变User组件,在User中定义一个state: isLogin false
5.导入Redirct组件
6.使用Redirect组件 重定向到Login组件

#### 嵌套路由

注意点: 由于当前组件是在BrowserRouter or HashRouter中显示的 所以在当前组件中不用使用BrowserRouter or HashRouter来包裹NavLink/Switch/Route
        如果使用嵌套路由 不能在一级路由的地方写精确匹配, 二级路由要进行路径的拼接

步骤:
 需求:在Home里面有6个链接,写三个,推荐 排行榜 歌单 点击这三个任何一个都要显示对应的组件
 1.在Home创建三个组件
 2.在Home中创建NavLink  Route

#### 手动路由跳转

 不通过Link/NavLink来设置资源地址, 而是通过JS来设置资源地址


 如果是Hash模式, 那么只需要通过JS设置Hash值即可
 window.location.hash = 'hash值';
 如果一个组件是通过路由创建出来的, 那么系统就会自动传递一个history给我们
 我们只需要拿到这个history对象, 调用这个对象的push方法, 通过push方法修改资源地址即可
 this.props.history.push('地址值');

总结:
1.列表切换动画
1.1 引入 react-transition-group里面的cssTransitoin transitionGroup
1.2 使用transitionGroup包cssTransitoin 再用CSSTransition包动画元素
1.3 设置属性 key classNames timeout
1.4 写样式enter exit
2.路由
2.1 基本使用(Link的使用)
2.2 路由的执行过程-->NavLink  exact精确匹配 activeStyle object activeClassName string
2.3 Switch的使用 改变了路由的执行机制-->之前的路由匹配,只要匹配都显示 而使用了Switch之后,只显示第一次匹配到的组件 如果还可以匹配 不匹配了,如果没有匹配到组件,显示一个默认的
2.4 重定向
2.5 嵌套路由(1.父路由不能使用精确匹配,否则子路由匹配不到 2.子路由路径要进行拼接 3.子路由不要使用HashRouter或BrowserRouter)
2.6 手动跳转(1.Hash模式 window.location.hash  2.history: props.history.push() go back forward)



### React的路由传参

####通过URL传参



#### 通过动态路由传参



#### 通过NavLink或Link组件的to属性传参



#### 路由的统一管理



#### 一级路由



#### 嵌套路由



