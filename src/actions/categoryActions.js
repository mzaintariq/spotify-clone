import { GET_CATEGORY_DATA, SET_CATEGORY_DATA, SET_CATEGORY_PLAYLISTS } from "./actionTypes";

export const getCategoryData = (data) => {
  return {
    type: GET_CATEGORY_DATA,
    payload: data,
  };
};

export const setCategoryData = (data) => {
  return {
    type: SET_CATEGORY_DATA,
    payload: data,
  };
};

export const setCategoryPlaylists = (data) => {
  return {
    type: SET_CATEGORY_PLAYLISTS,
    payload: data,
  };
};
