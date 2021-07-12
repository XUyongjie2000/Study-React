import React, { Component, createRef } from 'react';
import "./App.css";
// 导入AppSon
import AppSon from "./AppSon";

// 引入store
import store from './store/store'

import { addData } from "./store/action"

class App extends Component {
   constructor() {
      super()
      this.state = store.getState()
      this.inputRef = createRef()
   }

   componentDidMount() {
      // 监听数据变化
      store.subscribe(() => {
         this.setState({
            list: store.getState().list
         })
      })
   }

   // 点击发送信息
   addTask = () => {
      if(this.inputRef.current.value.trim()=='') return alert('数据不能是空')
      //   组织数据
      let task = {
         id: new Date().valueOf(),
         date: new Date().toLocaleString(),
         info: this.inputRef.current.value,
         status: false
      }
      store.dispatch(addData(task))
      // 清空输入框
      this.inputRef.current.value = ''
   }

   render() {
      return (
         <div className="App">
            <div className="container">
               <h1>App--发送信息</h1>
               <div>
                  <input type="text" ref={this.inputRef} placeholder="输入要发送的信息" />
                  <button onClick={() => { this.addTask() }}>Send</button>
               </div>
            </div>
            {/* AppSon */}
            <AppSon />
         </div>
      );
   }
}

export default App;