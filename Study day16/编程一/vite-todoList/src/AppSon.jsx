import React, { Component } from 'react';
// 导入AppGrSon
import AppGrSon from "./AppGrSon";

import store from './store/store';

class AppSon extends Component {
    constructor() {
        super()
        this.state = store.getState()
    }

    componentDidMount() {
        // 监听数据变化
        store.subscribe(() => {
            this.setState({
                list: store.getState().list
            })
        })
    }

    render() {
        return (
            <div className="App-son">
                <div className="container">
                    <h2>AppSon--记录信息</h2>
                    <ul>
                        {/* 提示：{时间}使用toLocaleString() */}
                        {/* 提示：{时间}使用toLocaleString() */}
                        {
                            this.state.list.map(item => (
                                <li key={item.id}>
                                    {item.date}——{item.info}——{item.status == true ? '已读' : '未读'}
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* AppGrSon */}
                <AppGrSon />
            </div>
        );
    }
}

export default AppSon;