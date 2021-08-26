import { SET_CURRENT } from "./actionTypes";

export const setCurrent = (data) => {
  return {
    type: SET_CURRENT,
    payload: data,
  };
};
