import { GET_CATEGORY_LIST, SET_CATEGORY_LIST } from "./actionTypes";

export const getCategoryList = (payload) => ({
  type: GET_CATEGORY_LIST,
  payload,
});

export const setCategoryList = (payload) => ({
  type: SET_CATEGORY_LIST,
  payload,
});
