import {
  GET_CATEGORY_DATA,
  SET_CATEGORY_DATA,
  SET_CATEGORY_PLAYLISTS,
} from "./actionTypes";

export const getCategoryData = (payload) => ({
  type: GET_CATEGORY_DATA,
  payload,
});

export const setCategoryData = (payload) => ({
  type: SET_CATEGORY_DATA,
  payload,
});

export const setCategoryPlaylists = (payload) => ({
  type: SET_CATEGORY_PLAYLISTS,
  payload,
});
