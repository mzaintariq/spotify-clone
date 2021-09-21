import {
  GET_CATEGORY_DATA,
  GET_CATEGORY_LIST,
  GET_CATEGORY_PLAYLISTS,
  SET_CATEGORY_DATA,
  SET_CATEGORY_LIST,
  SET_CATEGORY_PLAYLISTS,
} from "./actionTypes";

export const getCategoryList = (payload) => ({
  type: GET_CATEGORY_LIST,
  payload,
});

export const setCategoryList = (payload) => ({
  type: SET_CATEGORY_LIST,
  payload,
});

export const getCategoryData = (payload) => ({
  type: GET_CATEGORY_DATA,
  payload,
});

export const setCategoryData = (payload) => ({
  type: SET_CATEGORY_DATA,
  payload,
});

export const getCategoryPlaylists = (payload) => ({
  type: GET_CATEGORY_PLAYLISTS,
  payload,
});

export const setCategoryPlaylists = (payload) => ({
  type: SET_CATEGORY_PLAYLISTS,
  payload,
});
