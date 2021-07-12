import { ADD_DATA, DEL_DATA, FIX_DATA, FIX_KEY } from "./constants";

//添加任务
export const addData = (task) => {
  return {
    type: ADD_DATA,
    task: task,
  };
};

//删除任务
export const delData = (id) => {
  return {
    type: DEL_DATA,
    id: id,
  };
};
//更新复选框
export const fixData = (id) => {
  return {
    type: FIX_DATA,
    id: id,
  };
};
//更新任务分类
export const fixKey = (viewkey) => {
  return {
    type: FIX_KEY,
    viewkey: viewkey,
  };
};
