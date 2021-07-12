import { ADD_COUNT, SUB_COUNT } from "./constants";

export const addAction = () => {
  return {
    type: ADD_COUNT,
  };
};

export const subAction = () => {
  return {
    type: SUB_COUNT,
  };
};
