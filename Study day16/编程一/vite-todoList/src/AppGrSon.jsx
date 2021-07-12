import React, { Component } from 'react';

import store from './store/store';

import { statusData } from "./store/action"

class AppGrSon extends Component {
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

    // 修改状态
    handleStatus = (id) => {
        console.log(id);
        store.dispatch(statusData(id))
        console.log(this.state.list);
    }

    render() {
        return (
            <div className="App-gr-son">
                <h3>AppGrSon--待读信息</h3>
                <ul>
                    {
                        this.state.list.map(item => {
                            if (item.status == false) {
                                return (
                                    <li key={item.id}>
                                        {item.info }
                                         ——
                                        <button onClick={() => this.handleStatus(item.id)}>
                                            点击已读
                                    </button>
                                    </li>
                                )
                            }
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default AppGrSon;