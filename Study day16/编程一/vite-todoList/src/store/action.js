import {ADD_DATA,STATUS_DATA} from './constants'

// 添加
export const addData = (task) => {
    return {
        type: ADD_DATA,
        task: task
    }
}

// 修改状态
export const statusData=(id)=>{
  return {
   type:STATUS_DATA,
   id:id
  }
}