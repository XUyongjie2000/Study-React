import { ADD_DATA, STATUS_DATA } from './constants'

// 初始化数据
const listData = {
    list: [
        {
            id: 0,
            date: '2021/6/11下午14:30:00',
            info: '默认信息111',
            status: false
        },
        {
            id: 1,
            date: '2021/6/11下午14:30:00',
            info: '默认信息222',
            status: true
        },
        {
            id: 2,
            date: '2021/6/11下午14:30:00',
            info: '默认信息333',
            status: false
        },
    ]
}

const reducer = (state = listData, action) => {
    switch (action.type) {
        case ADD_DATA:
            return {
                ...state,
                list: [...state.list, action.task]
            }
        case STATUS_DATA:
            return {
                ...state,
                list: state.list.map(item => {
                    if (item.id === action.id) {
                        return {
                            ...item,
                            status: !item.status,
                            date: new Date().toLocaleString()
                        }
                    } else {
                        return item
                    }
                })
            }
        default:
        // 默认值
            return state
    }
}

// 导出
export default reducer