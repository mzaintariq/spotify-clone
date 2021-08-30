import { GET_CATEGORY_LIST, SET_CATEGORY_LIST } from "./actionTypes";

export const getCategoryList = (accessToken) => {
  return {
    type: GET_CATEGORY_LIST,
    payload: accessToken,
  };
};

export const setCategoryList = (data) => {
  return {
    type: SET_CATEGORY_LIST,
    payload: data,
  };
};
